# 自己刻 Agent 框架：最難的不是呼叫 LLM

## 主稿 v3.1：從 while loop，到可治理的 Agentic Runtime

一開始做 Agent 的時候，我沒有想要做一個很大的框架。

我的想法很簡單。

使用者輸入一句話。  
我把這句話加到 context。  
呼叫 LLM。  
LLM 要呼叫函式，我就執行函式。  
函式回傳後，把結果加回 context。  
再呼叫一次 LLM。  
重複這個流程，直到 LLM 回 final answer。

大概就是這樣：

```
while not done:
    call LLM
    if model wants function:
        call function
        append result to messages
    else:
        return final answer
```

我一開始真的覺得，Agent 應該就是這樣。

從一次性的 LLM API call，變成一個可以反覆呼叫工具的 loop。  
看起來不複雜。

我當時也不太想直接用現成框架。

開源框架或 OpenAI / Claude 的 SDK 當然都有價值。  
只是我有幾個顧慮。

第一，我希望掌握模型選擇（Model Choice）。

如果整個 runtime 都建立在某一家模型 SDK 的抽象上，後面要換模型、做多模型 routing、接內部模型或開源模型，就會變得很卡。

第二，我希望掌握執行可控性（Controllability）。

我希望能決定 Context 怎麼組、工具怎麼接，以及何時介入或停止。  
現成框架也能提供這些能力；自己刻，是希望掌握符合我實務需求的設計與整合方式。

第三，我希望掌握治理整合（Governance）。

外部 SDK 或平台也可能提供多模型與治理能力。  
我希望把公司既有的權限、審核與稽核接進自己的 runtime，並保留模型選擇與執行可控性，所以一開始才會選擇自己刻。

這裡先界定一下範圍。

模型中立是我自己刻框架的動機之一，但今天不展開 provider adapter、model abstraction、不同模型 API 格式怎麼統一。

今天我想講的是：

> 當你真的自己寫 tool loop 之後，loop 之外還會冒出哪些 runtime responsibility。

另外，這場分享只談單次 task run 裡的 runtime responsibility。  
跨 session 的記憶、長期使用者狀態、personal memory，都是另一個很大的題目，今天不展開。

我一開始以為自己只需要一個簡單、模型中立、可控的 tool loop。

真的做下去才發現，判斷只對了一半。

LLM API 很好呼叫。  
message append 很好寫。  
function call 也很好接。  
basic loop 很快就能跑起來。

但可以跑，不代表可以交付。

真正困難的地方，是當這個 loop 開始碰到真實企業流程時，你要怎麼讓它不要失控。

---

## 一、第一個錯覺：Context 不是 append 就好

我一開始以為 context 就是 messages。

使用者說了什麼，append。  
assistant 回了什麼，append。  
tool 回傳什麼，append。  
下一輪全部丟回 LLM。

這在 demo 裡很自然。

很快就遇到第一個問題：

> message append 不等於有效記憶。  
> tool result 回塞也不等於有效 context。

尤其當工具回傳的是一大包 API JSON 時，問題會非常明顯。

第一版做法很直覺：API 回什麼，就把結果塞回 context，讓 LLM 自己看。

實務測試顯示：

context token 快速膨脹。  
模型開始漏掉 Skill 裡的流程規則。  
資料一多，模型抓錯重點。  
最後下結論時，還可能出現幻覺。

這裡有一個很重要的教訓：

> Context 不是垃圾桶。

Context 空間非常有限。  
毫無節制地塞入 API 原始資料，絕對是一場災難。  
Context window 大，也不代表 context 可以亂塞。

每輪都把工具結果整包 append，舊結果與新結果就會持續累積。

這時應先問：下一步，模型真的需要讀完整包資料嗎？

有些步驟只需要知道工具成功了，再把資料交給另一個工具；完整資料是下一個工具要用的，不一定是模型要讀的。

所以要分開兩件事：完整工具結果如何保存，以及模型這一輪需要看到哪些內容。

完整結果留在 Runtime，仍可供後續工具取用；模型要分析時給相關內容，只需傳遞資料時則給狀態與 Ref。

---

### 血淚案例一：ELK log 太大，LLM 反而幻覺

有一個很典型的例子是 ELK log 分析。

實際任務是分析某個線上問題。LLM 判斷需要先取得 Log，就呼叫 Tool 去查 ELK system log。

Tool 查回來的是一大包原始資料。我一開始的做法很直覺：

> 既然要分析 log，那就把查詢回來的 log 都丟給模型。

但 ELK 一查，常常是一大包 raw logs。

我把這整包原始 Log 直接塞回 Context，結果 Context 就爆量了。

這裡第一個問題不是工具查到完整資料，而是原始資料沒有先依這次問題篩選，就全部交回模型。先挑出相關 Log 再放進 Context，完整資料保留，需要更多細節時再取。

此外，資料大量回塞後，模型也沒有變得更可靠，還可能出現以下問題：

它可能真的看到了 log。  
它可能真的讀到了一些錯誤訊息。  
但最後回答時，開始出現一堆錯誤推論。

有些是抓錯重點。  
有些是把雜訊當成重要線索。  
有些是把時間上接近的事件講成因果關係。  
有些是把某個 service 的 error 直接說成 root cause。

這讓我學到一件事：

> 資料越多，答案不一定越可靠。

但這裡不能走到另一個極端。

LLM 做問題分析時，當然需要看 log。  
完全不讓它看內容，它也只能瞎猜。

真正要處理的是：

> Log 要怎麼進 context。

我們必須在塞入 context 前，先做一層 context shaping。

實務上可以這樣處理：

只保留真正需要的欄位，例如 timestamp、service、level、message、trace_id、error_code。  
縮小時間窗，不要一次丟整段時間的 log。  
依 service、error type、trace id 分類。  
每一類挑幾筆代表性的 log。  
讓 subagent 先整理 error pattern、候選 evidence、missing signals。  
完整 raw logs 留在 runtime state，只把 summary、snippet、data_ref 或 evidence_ref 放進 context。

所以我後來的結論是：

> LLM 需要 evidence，但不需要整包未整理的 raw logs。

這個案例不只關係到 context。  
後面談 Evidence Boundary 時，還會再回到它。

---

### 血淚案例二：API response 其實不是給 LLM 看的

另一個常見情況是 API response。

一開始我會直覺地認為：

> tool 回傳什麼，就把什麼給 LLM 看。

後來發現，很多 API response 裡的資料，LLM 根本不需要。

有些 response 是給 runtime 或下一個 tool 用的。  
模型只需要知道下一步該怎麼走。

例如一大包 API response 裡面有很多欄位、metadata、內部 id、狀態、明細、巢狀結構。  
但對 LLM 來說，它真正需要的可能只是：

> 下一步要把哪個 `data_ref` 傳給哪個 operation。

先看 before / after。

Before：

```
API response 整包進 context
  ↓
LLM 被大量無關欄位干擾
  ↓
token 變大
  ↓
下一步其實只是把同一包資料繼續處理
```

After：

```
API response 留在 runtime / tool layer
  ↓
LLM 只拿到 data_ref
  ↓
下一步 operation server-side resolve data_ref
  ↓
context 只保留必要控制訊號
```

實務上有一個很典型的場景：  
我呼叫了一個外部 API，它的 response 有幾千行 JSON，但系統當下只需要知道 HTTP status 是不是 200。

如果是 200，就把這包資料傳給下一個 tool 處理。

這種情況下，LLM 不需要看那幾千行內容。  
它只需要看狀態碼，然後把 `data_ref` 傳下去。

> 大腦負責看燈號，管線負責傳重貨。

> API response 是給 runtime / tool 用的，不一定是給模型讀的。

所以後來我的做法改了。

tool 回傳的大 JSON，大部分留在 runtime state、DB 或 object storage。  
tool 回給 LLM 的，是 `data_ref`、必要狀態、下一步控制訊號。

流程會像這樣：

```
tool result: large JSON
  ↓
runtime state / DB / object storage
  ↓
return data_ref to LLM
  ↓
LLM passes data_ref to next operation
  ↓
next operation resolves data_ref server-side
  ↓
only summary / control signal enters context
```

這不只是在省 token，也是在設計治理邊界。

原始資料留在 runtime / tool layer，LLM 只能透過允許的 operation 使用它。  
它不能任意展開、複製、混用，也比較不容易在 final answer 裡洩漏完整內容。

Context Management 的核心問題是：

> 怎麼讓模型在正確的時間，只看到它需要看的資訊。

---

## 二、Context window 大，不代表模型真的能完成長任務

這裡還有一個實務觀察。

現在很多模型都標稱支援很大的 context window。  
但在 Agent workflow 裡，context 能塞進去，和模型能不能穩定完成任務，是兩件事。

我曾在控制同一 Skill、同一測資、同一 tool、同一 temperature 的情況下，透過 LLM Evaluation 架構測試 `gemma-4-26b-a4b-it-mlx` 與 `gemma-4-31b-it`，實測數據如下：

- **Model A (`26b-a4b`)**：
  - 10k tokens：10 次過 9 次
  - 30k tokens：10 次過 4 次（Failure：跳過 summary builder、漏 warning、提早停止）
- **Model B (`31b`)**：
  - 30k tokens：10 次過 9 次

這組數據證明，Token 不只是計費單位，它直接壓縮了模型執行複雜流程的能力。

我在實務上看到的是：當 context 變長、tool result 變多、Skill 規則變複雜之後，模型比較容易出現幾種問題。

它可能漏掉前面的規則。  
可能跳過必要 operation。  
可能提早停止。  
可能把不同 tool output 混在一起。  
也可能最後回答看起來合理，但其實沒有照 workflow 走完。

這不是單純的 token 數問題。

長任務穩不穩，通常跟三件事一起有關：

```
context load
× model capacity
× workflow complexity
```

context load 越重，模型要同時維持的資訊越多。  
model capacity 會影響它在高負載下還能不能守住 Skill。  
workflow complexity 則會放大這個問題：如果流程需要 state、transition、stop condition、tool selection、evidence binding，模型就更容易在長 context 裡漏步驟。

所以我後來不只看模型標稱支援多長的 context window。

我更在意幾個 runtime 指標：

這次 run 的 context tokens 是多少？  
哪一個 tool result 讓 context 膨脹？  
哪一段 Skill 在長 context 下最容易被漏看？  
錯誤型態是跳步、提早停止、漏 warning，還是 final answer 幻覺？  
同一個 scenario 重跑多次，穩定性有沒有下降？

這也是為什麼我會說：

> Token 不是只有 billing metric，也是 reliability metric。

token 當然會影響成本。  
但在 Agent workflow 裡，它也描述了模型當時工作的負載條件。

當 Agent 做錯時，如果沒有 context length、model、Skill version、scenario、failure type 這些紀錄，你很難判斷問題到底在哪裡。

你只能說：

> 模型好像怪怪的。

但有了這些紀錄，你才有機會判斷：

是 context 塞太多？  
是 Skill 寫得不清楚？  
是模型容量不夠？  
是 workflow 太複雜？  
還是某個 tool result 根本不該進 context？

所以我後來的做法，不是看到長 context 失敗就直接換大模型。

我會先回頭檢查 context management：

這個 Skill 是不是塞了太多 API response？  
是不是可以用 `data_ref` 取代原文？  
是不是只需要把 summary 或 control signal 放進 context？  
是不是有些資料應該留在 runtime state，而不是丟給 LLM？

維持健康的 working context，通常比盲目追求大視窗更重要。

---

## 三、第二個錯覺：把流程寫進 Skill，不代表真的控制流程

解決 context 問題後，下一個問題是 workflow。

我一開始以為，只要把 SOP 寫清楚，LLM 就會照著走。

例如在 Skill 裡寫：

第一步做什麼。  
第二步做什麼。  
什麼情況進下一步。  
什麼情況停止。  
哪些 operation 可以用。  
錯誤時怎麼處理。  
最後要輸出什麼格式。

這看起來合理。

但實務上，LLM 讀懂流程，不代表它會穩定遵守流程。

它可能跳過必要 operation。  
可能順序錯。  
可能該繼續時提早停。  
可能該停止時繼續跑。  
可能自己做 deterministic tool 應該做的事，例如自己心算日期。  
也可能在錯誤處理時繞過 fallback 規則。

這時候我才知道：

> Workflow written in prompt is not workflow control.

把流程寫進 Skill，只是讓模型知道流程。  
runtime 還要能檢查它有沒有照流程走。

---

### 血淚案例三：Skill 寫了流程，但 LLM 沒照流程走

分享時，沿用前面的 Log 分析與報告任務來串聯這個問題：
查回 Log、完成分析之後，任務還要求交付固定格式的正式報告。

最直覺的做法，是讓 LLM 自由把分析結果整理成報告。

但自由撰寫的報告，格式可能不一致，必要分類或欄位也可能遺漏。

在我的案例裡，正式報告需要固定格式、完整分類、必要 warning、統計與明細，所以我準備了專門的 Builder 來產生這份交付。

這裡先檢查的是流程：

模型有沒有呼叫指定的 Builder，並交付它產生的報告？

後面談 Evidence 時，仍用同一個報告任務，但換成另一個問題：模型提出的結論，有沒有工具結果支持？

這是同一個任務的兩種檢查，不是說 Builder 本身會編造分析內容。

有一個很典型的狀況是：  
Skill / SOP 明明寫好流程，最後應該呼叫固定的 summary builder。

但 LLM 有時候沒有照順序呼叫 operation。  
甚至在流程還沒走完時，自己組了一段 final summary。

表面上看起來，它有回答。  
使用者也看到一段看似完整的 summary。

實際上有兩個問題。

第一，格式不符合規格。  
第二，有些分類結果被漏掉。

這個錯誤很危險，因為它不是直接爆 exception。  
它看起來像完成了。

錯誤路徑：

```
analyze_discrepancies
  ↓
LLM 自己組 summary
  ↓
格式不符 + 分類漏掉
```

正確路徑：

```
analyze_discrepancies
  ↓
build_execution_summary
  ↓
固定格式 + 完整分類 + warning / 統計 / 明細
```

這個案例讓我記住一句話：

> Final answer 看起來有內容，不代表 workflow 正確完成。

在企業流程裡，有些 final output 不適合讓 LLM 自由生成。  
尤其是有固定格式、固定欄位、固定 warning、固定附件、固定統計的輸出。

這類輸出應該交給固定 builder。

LLM 可以負責判斷流程、傳遞 ref、呼叫 operation。  
正式輸出則交給 deterministic builder 收斂格式和欄位。

所以把流程寫進 Skill 還不夠。  
trace 和 eval 要能確認：

它真的有照流程走。  
它真的有呼叫該呼叫的 builder。  
它沒有自己跳出來寫一段看起來合理、但其實不完整的 summary。

Evaluation 就是把這些任務要求，變成每次執行後採用的評估標準。

要判斷是否達標，先看指定報告有沒有交付，再看工具呼叫與回傳紀錄。

報告看起來正式，只能幫助檢查交付內容，不能證明它來自 Builder。

要確認來源，需要查到 Builder 的呼叫及 Tool 回傳結果，再與最後交付的報告或引用對照。

只有呼叫過 Builder，也不代表模型最後交付了它的輸出。

指定報告有沒有交付，是 Outcome Evaluation。

必要的 Builder 有沒有呼叫，是 Trajectory Evaluation。

這兩個名稱指的是評估對象；同一份工具紀錄，也可以用來確認交付結果的來源。

對明確、可核對的條件，可以做成程式檢查：確認紀錄中有指定 Builder 呼叫，並對照最後交付與這次 Builder 回傳的結果。

這不是再評判 Builder 底層程式算得對不對，而是評估 Agent 有沒有完成指定任務。

需要語意判斷時，可以讓模型依準則評審，這是 LLM-as-a-Judge。這裡的 Builder 案例有明確、可核對的要求，以程式檢查示範即可，不額外加入 Judge 案例。

固定 Skill、測資、工具與模型設定後，重跑同一個任務，用相同標準觀察是否仍會漏步驟。

即使目前這一批測試全部通過，也不代表下一次一定照做。

Skill 仍是自然語言說明，LLM 的執行仍有機率性。

在我的案例裡，當 Skill 開始承載 workflow contract 的責任時，它就不能只是散文。

它需要明確的：

- 狀態（State）
    
- 轉移條件（Transition）
    
- 退出條件（Exit Condition）
    

對於這個作法，常見的疑慮是：

> 流程都規定得這麼細了，為什麼不直接寫 if-else？這還叫 Agent 嗎？

我自己的回答是：Agent 不一定等於無邊界自治。

在企業場景裡，更可控的做法，是把 AI 放進明確的流程與狀態邊界內，讓它在安全軌道上做語意判斷。

很多時候，Agent 會卡在 loop 裡、重複呼叫工具，或在該繼續時提早結束。  
這往往是因為 Skill 缺乏明確的邊界定義：

> 什麼條件下可以進下一步？  
> 什麼條件下應該停下來交 final answer？

簡單的摘要或分類，Skill 只需要幾段 instruction 即可。

摘要、分類、簡單問答，可能只需要幾段清楚 instruction。

但如果一個 Skill 要承載企業 workflow，要決定下一步 operation，要處理錯誤、查重、通知、開單、停止條件與輸出格式，它就會逐漸承擔 workflow contract 的責任。

所以我會這樣講：

> Skill 不一定都是 workflow contract；但當它開始控制企業流程，就不能只把它當 prompt。

每一次 Agent 沒照流程走，最後都會變成一條新的 Skill 規則。  
每一次它提早停止、跳步、亂組輸出、錯誤處理不完整，Skill 就會再補一段限制。

到這裡，我已經不是只在寫 tool loop。

我是在慢慢長出一個 runtime。

---

## 四、第三個錯覺：Prompt 寫了，模型就會遵守

下一個問題是 guardrail。

剛才用 Evaluation 觀察的是：模型能不能穩定照 Skill 完成流程。

但測試不是未來每次執行的保證，所以接下來要問：哪一種錯，我一次也不能接受？

這裡不是把漏掉 Builder 的案例改成程式硬鎖整套流程。

我們會用日期結果、報告結論的證據與修改權限，說明哪些明確條件需要由系統承接檢查。

很多時候，我們會在 Prompt 或 Skill 裡寫：

不要幻覺。  
不要推測。  
沒有資料就說不知道。  
請依照 tool return value 回答。  
請不要自行編造。  
請遵守 SOP。

這些規則有用。  
它們定義了模型應該怎麼做。

但 Prompt 寫了，模型不一定每一次都會穩定遵守。

尤其當 context 變長、tool result 佔掉大量篇幅、任務流程變複雜時，模型可能漏看規則，也可能在某個步驟誤解規則。

所以這裡要分兩種情況。

可以接受偶發錯誤的行為，可以先用 Prompt 管。  
一次錯都不能接受的行為，要拉出來交給程式碼守。

例如：

```
日期不能讓模型自己心算
→ 用 deterministic tool 算

tool arguments 不能亂傳
→ 用 schema validation 擋

沒有 evidence 的 claim 不能進 final answer
→ 用 claim-evidence check 擋

寫入 operation 不能直接執行
→ 用 permission / precondition / approval gate 擋

loop 不能無限跑
→ 用 max iteration / retry budget 擋
```

這章的核心句是：

> 可以接受偶發錯誤的，用 Prompt 管。  
> 一次錯都不能接受的，用程式碼守。

Guardrail 的核心意義，在於把不可違反的條件轉化為程式碼可檢查的邊界。

---

### HITL Gate：讓人介入，確認理解、批准操作

Human-in-the-Loop可以讓人在需要確認的時機介入：先確認Agent理解的目標與範圍，或在特定操作執行前批准或拒絕。兩者處理的是不同問題。

最近我做的 HITL 案例，不是放在最後一步執行前，而是放在更前面：意圖判斷。

使用者輸入的自然語言，常常不是單一指令。

它可能同時包含條件、範圍、例外、排序、優先順序，還有一些隱含的業務規則。  
LLM 需要先把這段自然語言分析成 structured intent。

例如：

```
user_input:
請幫我找出 A 類但排除 B 條件，而且只處理最近三天失敗的項目

interpreted_intent:
- target: A 類項目
- exclude: B 條件
- time_range: 最近三天
- status: failed only
- next_workflow: discrepancy_analysis
```

這裡的 HITL，不是在問：

> 你確定要執行嗎？

它問的是：

> Agent 對這句話的理解對嗎？

如果人確認 intent 正確，runtime 才進入後續 workflow。  
如果人修正 intent，後面的流程就根據修正後的 structured intent 繼續。

這個 gate 很重要，因為很多 Agent 錯誤不是 tool 壞掉，也不是 final answer 寫錯。  
是一開始就理解錯使用者要做什麼。

一旦 intent 錯了，後面每一個 tool call 看起來都可能是對的，但整條 workflow 仍然是錯的。

所以我會把 HITL 分成兩種：

```
Intent validation gate
→ 確認 Agent 是否理解對了

Execution approval gate
→ 確認高風險 operation 是否可以執行
```

Intent validation gate 要呈現的不是一段漂亮摘要，而是 structured intent。

例如：

```
Detected intent:
- action: analyze
- target: failed transactions
- scope: last 3 days
- exclude: manually resolved cases
- next workflow: discrepancy investigation
- risk: may trigger downstream ticket creation
```

人可以選：

```
Confirm
Edit intent
Reject
Need more info
```

這個確認結果也要進 trace。

```
intent_analysis:
  model_output: ...
  approved_by: ...
  approved_at: ...
  approved_intent: ...
  edited_fields: ...
  next_workflow: ...
```

這樣後面 workflow 出錯時，我們才知道問題出在哪裡。

是 LLM 原本 intent 判錯？  
是人沒有發現？  
是人修正錯？  
還是後續 workflow 根據正確 intent 還是走錯？

所以 HITL 不只是讓人按下執行確認。

更精準地說：

> HITL 是把人放在最容易誤判、而且錯了代價最高的邊界上。

---

### Approval Gate：拿到 approval 不代表可以執行

另一種常見 HITL，是 execution approval gate。

部分 operation 雖然必要，但絕對不能交由 Agent 自動執行。  
例如寫入、開單、扣款、發通知給外部、修改正式資料。

這些操作一旦出錯，代價通常很高。  
所以它們需要 approval gate。

但 approval gate 有一個容易忽略的坑：

> 拿到 approval，不代表可以執行。

因為 approval gate 會把一次 Agent run 切成兩段。

第一段，Agent 產生提案。  
第二段，人批准之後，系統真正執行。

中間可能隔幾分鐘，也可能隔幾小時。

這段時間裡，原本的前置條件可能已經變了。

資料可能被別人處理掉。  
任務可能已經關閉。  
狀態可能已經更新。  
餘額或帳務狀態可能已經不同。

所以 approval 不是拿到就直接執行。  
執行前要重新檢查 precondition。

Approval 本身也要進 trace。

誰批准的？  
什麼時候批准的？  
批准時看到的是哪一份 preview？  
執行前重新檢查了哪些條件？

少了這些紀錄，事後很難判斷責任。

是人看錯？  
是 Agent 給錯 preview？  
還是批准後狀態改變？

所以 approval gate 不是加一個確認按鈕。  
它會牽動 runtime state、trace 和 precondition check。

---

### Evidence Boundary：有資料不代表有根據

Evidence 是 Guardrail 裡很重要的一層。

仍然是前面的 ELK Log 分析與報告任務，但現在換一個檢查問題。

前面看的是：有沒有照流程呼叫 Builder、交付指定報告？

現在看的是：報告裡每一項結論，有沒有對應的 Tool Result 支持？

這不是說 Builder 的格式化程式會自己產生幻覺。

我要防止的是：模型把沒有依據的分析內容，混進正式輸出。

我在實務上遇過，LLM 把工具結果沒有回傳的內容寫進報告。

有查回資料，不代表模型提出的每一句結論都有依據。

例如圖解中，工具只有逾時紀錄與錯誤訊息，報告卻多了「服務已重啟」。

這句是教學用的例子，不是實際報告的逐字引文。

沒有這項工具依據，不能把它當成已確認的事實放進正式報告。

這也不等於證明服務一定沒有重啟，只表示目前沒有支持這個結論的結果。

LLM 需要 log。  
但有 log，不代表有 evidence。

我在實務上做 LLM 問題分析時，會讓模型查 ELK system log。

一開始我以為，只要模型有查 log，答案就會比較可靠。

實戰證明，模型的弱點往往在於「下結論」，而非「查資料」。

它可能真的看到了 log。  
也可能真的找到了錯誤訊息。

問題出在下一步：它可能把工具沒有回傳的內容，自己補成確定結論。除此之外，它也可能過度解讀已有資料。

它會把時間接近的事件講成因果關係。  
把某個 service 的 error 講成 root cause。  
把 log 裡的局部現象擴大成整個系統的結論。  
把沒有證據的推測包裝成確定原因。

所以 runtime 要管理的不只是 log，還有 claim 和 evidence 的關係。

> Log 是資料。  
> Evidence 是被用來支撐某個 claim 的資料。

對 Agentic Runtime 來說，重點不是「有沒有查 ELK」。  
重點是每一個 conclusion 能不能回到具體 evidence。

我要檢查的是輸出結論是否有對應且相關的工具結果支持，不是重新驗證 Tool Result 本身是真是假。

來源存在與支持結論是兩件事；只附上一個不相關的 Ref，也不能算有 Evidence。

這裡要區分兩種 ref。

`data_ref` 指向大型原始資料，例如一批 log、一包 API response、一個 tool result。  
`evidence_ref` 指向支撐某個 claim 的具體證據，例如某段 log、某個 metric、某個查詢結果。

如果一個 conclusion 沒有 evidence_ref，它就不應該被當成確定結論。  
如果 evidence 只能支持可能性，它就應該被標成 hypothesis。  
如果 evidence 不足，Agent 應該輸出 missing evidence，而不是硬湊 root cause。

可以想成這樣：

```
Claim:
payment-service timeout 在 10:03 後增加

Evidence:
ELK log A
ELK log B
metric C

Conclusion type:
observed fact / hypothesis / insufficient evidence
```

查到 log 不等於有 evidence。  
能把 claim 綁回 log，才叫 evidence。

這並非要求它重新默寫 500 行 log。  
那樣只會增加 context 負擔，也可能引發更多幻覺。

我們要的是：模型輸出 conclusion 時，必須附上指向原始資料的 evidence_ref。

程式碼可以先檢查 evidence_ref 是否存在、格式是否正確、是否指向有效資料。  
至於 evidence 是否足以支持 claim，可以再交給 LLM as a Judge 或人工 review 輔助判斷。

用 evidence_ref 綁定結論，不能保證模型永遠不幻覺。  
但它能讓無根據的結論更難直接通過。

---

## 五、第四個錯覺：有 log，不代表有 trace

前面做了系統檢查與人工確認，但任務仍可能出錯。
除了執行前防錯，出了問題也要能回看當時的執行。

從最後發現的問題，對照當時收到的任務、模型回應、工具執行與交付結果，才能找出需要追查的環節。

接下來用前面漏 Builder 的案例示範追查方法。

當 Agent 沒有照 workflow 走時，一開始我是從最後結果發現的。

結果明顯錯。  
某些 operation 沒有被呼叫。  
最後 summary 少了東西。  
某些 warning 沒有出現。  
流程提早停止。

這種發現方式太晚。

結果錯了，只告訴你「它壞了」。  
你還不知道它為什麼壞。

所以後來我開始補 log / trace。

一開始記的是 tool execution log：

operation name。  
operation input arguments。  
operation output。  
final answer。  
部分 error。

這些有用。  
至少可以知道 Agent 做了什麼。

但有 log，不代表有 trace。

Log 是單點紀錄。  
Trace 是把一次 Agent run 串成可回放的決策路徑。

這裡的回放，是打開歷史 Run，回看當時保存的輸入、規則、動作與結果。\
不是把模型重新跑一次，就保證得到完全相同的答案。

### 一個好的 Trace，要留下哪些資訊？

第一組是任務與執行路徑。\
用 Run ID 把同一次任務串起來，保留每一步的順序、父子關係、開始與結束時間。\
有並行或重試，也要看得出是哪一次操作，不只是把時間相近的紀錄排在一起。

第二組是每輪模型實際看到與產生的內容。\
不是只保存系統裡有什麼資料，而是保存那一輪真正送進模型的 Context，以及模型回應。\
這樣才能回頭檢查：當時是否有提供必要資料？Builder 的說明是否真的在 Context 裡？模型最後選擇了什麼動作？

第三組是當時使用的版本與設定。\
包括 Skill、Prompt、模型、模型設定，以及影響執行的 Runtime／工具版本。\
版本或 Hash 必須能對回當時的實際內容，不能只有一個找不到原文的編號。

第四組是工具輸入與結果。\
保存 Tool 名稱、呼叫 ID、輸入參數、回傳結果與錯誤，並連回對應的步驟。\
完整結果可以留在系統裡，以 Ref 連回 Trace，不需要全部塞進模型的 Context。\
但 Ref 必須能取回當時那份資料快照，不能只指向後來已被修改的資料。

第五組是檢查結果與停止原因。\
如果有 Guard、人工批准或執行條件檢查，就記錄實際判定與結果。\
最後也要分得出：模型要求結束、Runtime 判定完成、錯誤中止、逾時，還是達到步數或預算限制。\
模型說「完成了」，不等於系統已確認任務符合要求。

第六組是執行消耗。\
保存每輪 Token 用量與耗時；若計算費用，也要留下使用的價格依據。\
這樣才能知道成本和時間花在哪一步，而不只是看到最後的總數。

這六組資訊，不是要求每個 Run 都一定有 Guard 或人工批准。\
有發生就記錄；沒有保存的資訊，就明確標示缺漏，不讓模型事後補寫成事實。\
敏感資料需要遮罩、權限與保留期限；被遮罩或未收集的部分，也要說清楚回看時的限制。

可以收成一句：

> 保存當時的輸入、版本、路徑與結果，才能重建那次執行，而不是事後猜測。

### 用紀錄追查，而不是猜測模型的內部思考

Log 記錄某個時間點發生了什麼：

這個 tool 被呼叫。  
傳了哪些參數。  
回傳了什麼結果。  
最後回答了什麼。

Trace 要回答的是另一組問題：

這些事件在同一次 Agent run 裡怎麼串起來。  
Agent 為什麼從這一步走到下一步。  
它當時以為自己在哪個 workflow state。  
它根據哪一段 Skill 判斷下一步。  
它為什麼覺得前置條件已經滿足。  
它為什麼覺得可以停止。  
它是不是誤解了某一段 SOP。  
它是不是被前面的 tool result 污染。  
它是不是因為 context 太長而漏看規則。

尤其當下一步是由 LLM 選的時候，只記錄 tool call 不夠。

你不只要知道它做了什麼。  
你還要知道它為什麼這樣做。

不過，Trace 不是讀心術。\
上面的「為什麼」是追查問題，不代表每一個問題都能從紀錄直接得到確定答案。\
我們用可觀察的輸入、輸出與動作提出解釋，再用 Evaluation 或其他檢查驗證；不要求模型公開內部思考，也不把它事後編出的理由當成執行證據。

可以分成三層：

```
Operation Log:
Agent 做了什麼？

Decision Trace:
Agent 為什麼這樣做？

Evidence Binding:
Agent 憑什麼這樣說？
```

Operation log 用來 debug tool execution。  
Decision trace 用來 debug workflow behavior。  
Evidence binding 用來 debug conclusion hallucination。

這裡可以收成一句：

> Log 記錄事件，Trace 重建決策，Evidence 支撐結論。

Trace 不只是給人看的。

我的 Skill 很多是 AI 根據 PRD、SOP、code 產生的。  
當執行結果不對，我會希望 AI 讀 eval log 和 execution trace，分析是哪一段 Skill 寫得不清楚。

如果 Skill 是 AI 寫的，你就需要 AI-readable trace，讓 AI 反過來修 Skill。

這裡還有一個容易忽略的小細節：trace 必須知道這次 run 用的是哪一版 Skill。

如果 Skill 是 AI 在 loop 裡持續修改的，每一次 run / eval 的 trace 都應該綁定當時的 `skill_version` 或 `skill_hash`。

少了這個欄位，trace 不能真正回放，regression 也無法歸因。

但只有 Skill 版本也不夠。\
還需要保留當時的內容、每輪 Context、工具結果與相關執行設定，才能回看那次執行的脈絡。\
版本綁定是必要依據之一，不是完全重現機率模型輸出的保證。

你只知道那次 Agent 做了什麼。  
你不知道那次 Agent 背後是哪一版 Skill。  
而那一版 Skill 可能早就被 AI 改掉了。

當 Prompt / Skill 變成 runtime artifact，版本資訊就是 trace 可回放的基本條件。

---

## 六、第五個錯覺：Eval 不是只看 final answer

當 workflow 變複雜後，Eval 也不能只看 final answer。

一般 LLM Eval 很容易被想成：

```
input → output
```

看使用者問什麼，模型最後答什麼。  
最後答案正不正確、完整不完整、格式對不對。

這對一般問答或摘要任務可能夠用。  
對 Agentic workflow 來說不夠。

Agent 的錯誤常常發生在中間流程。

它可能最後產出一段看起來合理的 summary。  
但它跳過了必要 operation。  
它可能呼叫了正確 tool，但 arguments 傳錯。  
它可能拿到了 tool result，卻沒有照 Skill / SOP 進下一步。  
它可能最後答案看起來對，workflow path 其實不可靠。

只看 final answer，你只知道它最後說了什麼。  
你不知道它是不是用正確方式走到那裡。

所以：

> Agent Eval 是 workflow behavior test。

---

### Outcome Eval：最後結果是否正確

第一層還是 outcome。

最後 summary 是否正確。  
有沒有漏掉重要資訊。  
有沒有產生錯誤結論。  
格式是否符合規格。  
warning / escalation 是否出現在輸出裡。  
使用者需要的資訊有沒有交代清楚。

這一層重要，但它只是第一層。

在企業 workflow 裡，過程本身也是產品的一部分。  
如果過程錯了，只是剛好最後答案看起來合理，這套系統不能被信任。

---

### Trajectory Eval：Agent 有沒有照流程走

第二層是 trajectory。

也就是 Agent 實際走過哪些 operation。

我會把每個 eval scenario 定義成一條預期路徑。

```
expected operation sequence
vs
actual operation sequence
```

這可以抓很多 final answer 看不出來的錯誤：

跳過必要步驟。  
順序錯誤。  
重複呼叫同一個 operation。  
提前結束。  
走到不該走的分支。  
該 escalation 時沒有 escalation。

我的 Agentic workflow 不是完全 hardcode 的流程。  
我會把 workflow 寫在 Skill 裡，讓 LLM 在 Skill 的邊界內選擇下一步。

既然下一步是 LLM 選的，Eval 就要檢查：

> 它是不是真的照 Skill 走。

---

### Tool Usage Eval：operation 和 arguments 是否正確

第三層是 tool usage。

Agent 不只要呼叫 tool，還要正確使用 tool。

呼叫的是不是正確 operation。  
arguments 是否正確。  
日期有沒有用 deterministic tool 的結果。  
該傳的 ref 有沒有傳下去。  
必要參數有沒有漏。  
有沒有在缺少前置條件時呼叫下一步。  
有沒有把 tool error 當成正常資料處理。

很多錯誤不是 tool 壞掉。  
是 Agent 傳錯參數、漏傳 ref，或在錯誤的 workflow state 呼叫它。

所以 Eval 要檢查 tool usage，而不只看 final output。

---

### LLM as a Judge：語意判斷可以用，明確規則不要丟給它猜

在 Eval 裡，我也會用 LLM as a Judge。

但我不會把它當成萬能驗證器。

有些東西應該用程式碼檢查：

operation sequence。  
arguments。  
schema。  
required warning。  
token budget。  
missing evidence_ref。

這些是明確規則，不需要另一個模型來猜。

LLM as a Judge 比較適合處理語意型判斷：

final summary 是否完整。  
結論是否過度推論。  
claim 是否真的被 evidence 支撐。  
是否把 hypothesis 講成 fact。  
是否漏掉重要風險。

我的原則是：

> 能用程式碼判斷的，不要丟給 Judge；需要語意理解的，再交給 Judge。

例如 final answer 完全沒有 evidence_ref，程式碼可以直接擋。  
但 evidence_ref 是否真的支持 claim，這種語意關係可以交給 LLM as a Judge 輔助評估。

LLM as a Judge 是 Eval 的一部分，不是保證器。

---

### 重複執行：不是為了證明 100% 成功，而是觀察穩定性

LLM Agent 本質上有隨機性。

同一個 prompt、同一個 Skill、同一組測試資料，重跑多次也可能出現不同結果。  
所以我不會只看單次 Eval pass / fail。

我會用重複執行觀察穩定性。

```
同一個 scenario 跑 10 次，有沒有成功 9 次？
同一個 scenario 跑 5 次，有沒有 5 次都成功？
```

這裡可以借用 `pass@K` 和 `pass^K` 的概念。

`pass@K` 比較像在問：

> 給它 K 次機會，有沒有至少一次成功？

`pass^K` 可以借用 τ-bench 裡的概念來理解：  
同一個 task 重複執行 K 次，觀察它是不是能穩定成功。

實務上我不會只停在公式。  
我會把它轉成具體門檻：

```
跑 10 次，成功 9 次
跑 5 次，成功 5 次
```

此數據代表有限樣本下的觀察成功率門檻。

如果 5 次裡錯 1 次，觀察到的成功率就是 80%。  
如果 10 次裡錯 1 次，觀察到的成功率就是 90%。

重點是根據風險和成本，決定這個 scenario 需要達到什麼穩定性。

成功率往上推通常不是免費的。

可能要換更強模型。  
增加 retry。  
增加 validator。  
增加 judge。  
增加 guardrail。  
拉進人工 review。  
或者跑更多 eval。

這些都會增加成本、延遲和系統複雜度。

所以 Eval 看的不是一次成功。  
Eval 要看的是：在可接受成本下，成功率是否達到風險要求。

---

### Eval Scenario 不是一次寫完，而是會長出來

我的 Eval scenario 主要來自三個地方。

第一，PRD / SOP 裡原本定義的 use case。  
我會讓 AI 讀 PRD，用 MECE 的方式拆出第一版 scenarios，盡量涵蓋主要流程、分支與異常情境。

第二，實際執行遇到的 failure case。  
只要 Agent 曾經跳步、漏 warning、提前停止、arguments 傳錯、error handling 錯，那個 case 就應該補進 regression suite。

第三，AI 根據 Skill 補出來的 edge case。  
Skill 越來越像 workflow contract 之後，AI 可以反過來讀 Skill，找出哪些分支還沒有被測到。

Eval dataset 不會一次建完。  
它會隨著 Skill、failure case、實務流程一起成長。

---

### 血淚案例四：修好一個 failure case，卻弄壞另一個 scenario

以修復 failure case 為例。

我曾經為了修某個 failure case，改了一版 Skill。

當下看起來是成功的，因為原本那個 scenario 過了。  
但重跑其他 scenario 之後才發現，另一個原本會過的流程壞掉了。

這個案例突顯了一個問題：

> Prompt / Skill 的修改不是 local patch。

它不像改一個小 function，只影響那個 function。  
對 LLM 來說，Prompt 是全局有效的行為規格。

一句看似不起眼的修改，可能影響其他 step 的判斷、operation 選擇、輸出格式，甚至停止條件。

所以修 Skill 不能只看原本那個錯有沒有修好。  
一定要重跑 regression，確認沒有修 A 壞 B。

這裡我會留一句：

> 修 Prompt 不是局部修補，而是全局回歸風險。

---

### Eval 的目的不是打分數，而是推動修改

很多 Eval 最後只產出一個分數：

```
pass rate: 82%
score: 4.1 / 5
```

但工程迭代需要更多資訊。

我真正需要知道的是：

這次錯在哪裡？  
Skill 哪裡沒寫清楚？  
operation sequence 哪裡錯？  
tool contract 哪裡不清楚？  
context 是不是太大，導致模型漏看規則？  
evidence 不足時，模型是不是硬下結論？  
guardrail 哪裡沒擋住？

所以 Eval 要接 log / trace。

Trace 告訴我 Agent 實際怎麼跑。  
Eval 告訴我這樣跑是否符合預期。  
AI 再根據 Eval log 分析失敗原因，回頭修改 prompt 或 Skill。

這條 loop 還少不了一個步驟：

> 把失敗案例鎖進 Regression Suite。

修好 Skill 不代表結束。  
曾經失敗的 trace，要轉成永久的 eval scenario。

昨天踩過的坑，今天修好後，明天就應該變成自動化回歸測試的一部分。

這個 loop 長這樣：

```
LLM Evaluation
  ↓
Log / Trace
  ↓
AI Analysis
  ↓
Modify Prompt / Skill
  ↓
Regression Eval
```

這裡的重點是：

> Eval 是讓 Skill 可以被修正的回饋機制。

所以我會說：

> 修改 prompt 需要嚴謹的數據支撐。這是一個 regression 問題。

每次修改 Skill，都要問：

這次修改修掉了哪些 failure case？  
有沒有弄壞原本會過的 scenario？  
operation sequence 有沒有變穩？  
warning / escalation 有沒有照規格出現？  
token / latency 有沒有爆？  
evidence boundary 有沒有被守住？

這才是從 prompt tuning 走向 Agent Engineering。

這章最後我想留下的觀念是：

> Agent Eval 不是 QA pair，而是 workflow behavior test。

再補一句：

> Eval 的價值不是分數，而是讓 Skill 能被持續修正。

---

## 七、第六個錯覺：成本不是最後才看的帳單

最後是成本。

我說成本，不是指一開始就要做 cost optimization。  
更重要的是，先知道成本在哪裡。

Agentic workflow 的成本不是單次 LLM call 的成本。  
它來自很多地方：

context 變長。  
tool loop 變多。  
retry 變多。  
validator 變多。  
Eval scenario 變多。  
Regression suite 變大。  
AI 讀 log、分析 failure、修 Skill，也都需要成本。

尤其 Eval 不是免費的。

如果要走 eval-driven development，每次改 Skill 都要跑 Eval。  
每次補 failure case 都要跑 Regression。

你就必須知道：

跑一次 scenario 要多少 token。  
跑完整 Eval suite 要多少成本。  
哪個 scenario 特別貴。  
哪個 Skill 特別容易造成 context 膨脹。  
哪個模型在長 context 下成本高，完成率卻沒有提升。  
每次 regression 的成本是不是可接受。

所以 cost observability 不是最後補的營運報表。

> 沒有成本紀錄，就沒有可持續的 Eval。

很多人會覺得，每次改 Skill 都要跑 Regression Eval，成本太高、太花時間。

這就是企業級開發的取捨。

比起跑 Eval 的 token 成本，把未知錯誤推上線造成的客戶損失、信任折損和後續補救成本，通常更難承受。

跑 Eval 的成本，可以用架構分層處理：

明確規則交給程式碼檢查。  
低風險或格式型檢查，可以交給較便宜的模型。  
高風險語意判斷，才交給更強模型或人工 review。

token / cost observability 也不只是錢。

context token 一大，模型品質可能下降。  
所以 token 記錄同時也是可靠性紀錄。

> Token 不是只有 billing metric，也是 reliability metric。

當 Agent 做錯時，你需要知道：

是 Skill 寫錯？  
是 operation sequence 錯？  
是 guardrail 沒擋？  
是模型能力不足？  
還是 context 已經大到模型無法穩定完成任務？

沒有 token / context length 的紀錄，就很難做判斷。

這裡我想保留一句話：

> 模型會越來越聰明，但是我的口袋沒有越來越深。

這句話不是單純講省錢。

它提醒我：不能每次遇到問題，就只靠更大的模型、更長的 context、更多 retry、更多 judge。

這些方法短期可能有效。  
長期會帶來成本、延遲和不可觀察性。

所以 token / cost observability 是 Agentic Runtime 的基本觀測能力。

---

## 八、從 Prompt Engineering 到 Loop Engineering

最後，我想講 Prompt / Skill 怎麼被產生和修正。

在我的系統裡，從第一版 Skill 到功能完成，我沒有手寫過一行 prompt。  
全部都是 AI 讀 PRD、SOP、code 產生，再靠 Eval loop 修出來的。

流程大概是這樣：

AI 先產生第一版 Skill。  
跑 LLM Evaluation。  
留下 log / trace。  
AI 分析哪裡錯、哪個流程條件不清楚、哪個 stop condition 沒定義好。  
AI 修改 Prompt 或 Skill。  
再跑 Regression Eval。

這個 loop 長這樣：

```
LLM Evaluation
  ↓
Log / Trace
  ↓
AI Analysis
  ↓
Modify Prompt / Skill
  ↓
Regression Eval
```

所以我想講的不是 Prompt 不重要。

Prompt / Skill 會越來越像 runtime artifact：  
可以被生成、被測試、被修正、被回歸驗證。

人類的角色也會改變。

人要定義成功標準。  
定義 Eval scenario。  
定義風險邊界。  
定義 review gate。  
決定哪些修改可以接受。  
決定哪些修改需要人工 review。

AI 則負責在這個 loop 裡產生、分析、修正 Prompt / Skill。

這不是說可以完全放手讓 AI 自己亂跑。

當邊界、Eval、Trace 和 review gate 都設計好之後，AI 可以承擔更多產生、分析與修正工作。  
但每一次修改是否能被接受，仍然要回到 Eval 和必要的人為審查。

所以我會說：

> Prompt Engineering 已經從「手工寫 prompt」，變成「設計讓 AI 能修 prompt / skill 的 loop」。

我不確定 Prompt Engineering 這個角色會不會消失。  
但我很確定，單純靠人手工雕 prompt 的工作比例會下降。

真正重要的能力，會變成設計 Eval、Trace、Review Gate，讓 AI 可以安全地修 Prompt / Skill。

這件事會回頭強化前面所有主題。

如果 prompt / skill 是 AI 寫的，你更需要 trace。  
如果 prompt / skill 是 AI 修的，你更需要 eval。  
如果 eval 會反覆執行，你更需要 token / cost observability。  
如果 AI 會根據 log 修改 skill，你更需要 evidence boundary，避免它根據錯誤結論修出更錯的規則。

所以當 Prompt / Skill 也由 AI 撰寫，Agent Framework 的核心就不只是執行它。

它還要能觀察、評估、驗證，讓 Prompt / Skill 可以安全地演化。

---

## 九、收束：從 while loop 到可治理的 Agentic Runtime

回頭看一開始，我以為自己要寫的是：

```
LLM API
+ while loop
+ function call
+ message append
```

真的做下去之後，production agentic workflow 需要的能力長這樣：

```
Tool Loop
+ Context Management
+ Workflow / Skill Contract
+ Guardrail / Evidence Boundary
+ Log / Trace / Observability
+ Eval / Regression
+ Token / Cost Observability
+ Governance Boundary
```

這些能力讓 Agent 可以進入企業流程。

Context 決定模型看到什麼。  
Workflow / Skill 決定模型在哪些流程邊界內行動。  
Guardrail 決定哪些錯不能通過。  
Evidence 決定哪些結論可以被相信。  
Trace 決定錯了能不能回放。  
Eval 決定改了之後能不能驗證。  
Token / Cost Observability 決定這套迭代能不能持續。  
Governance Boundary 決定這些能力能不能接進企業既有流程。

這場分享的核心價值，在於超越單純的 LLM 呼叫。

我想講的是：

> 當你把 LLM 放進企業流程，Framework 要怎麼讓它的行為可以被限制、被觀察、被評估、被修正、被治理。

呼叫 LLM 很快。  
讓它 call tool 也很快。  
讓這個 loop 不要失控，才是真正的工程問題。

最後我會用幾句話收束：

> Tool loop 只是讓 Agent 跑起來；Runtime 才是讓 Agent 可以交付。

> 不用框架，不代表不用設計框架。

> Context 不是垃圾桶。

> Skill 不一定都是 workflow contract；但當它開始控制企業流程，就不能只把它當 prompt。

> Prompt 定義模型應該怎麼做，Guardrail 定義哪些錯不能通過。

> 可以接受偶發錯誤的，用 Prompt 管；一次錯都不能接受的，用程式碼守。

> HITL 不只是讓人按下執行確認，而是把人放在最容易誤判、且錯了代價最高的邊界上。

> Log 記錄事件，Trace 重建決策，Evidence 支撐結論。

> Agent Eval 不是 QA pair，而是 workflow behavior test。

> 修 Prompt 不是局部修補，而是全局回歸風險。

> Token 不是只有 billing metric，也是 reliability metric。

最後回到那句話：

> 模型會越來越聰明，但是我的口袋沒有越來越深。

真正需要變聰明的，不只是模型。  
我的 Framework 也必須變聰明。

因為不能每次遇到問題，就只靠更大的模型、更長的 context、更多 retry、更多 judge。  
那樣短期可以解問題，長期會讓成本、延遲和不可觀察性一起上升。

最後一句：

> Agent 不是 while loop。  
> Agent 是模型能力，加上一整套讓模型能力可以被安全交付的 runtime harness。
