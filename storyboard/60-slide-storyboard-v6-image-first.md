---
title: "Agent Runtime Summit - 60 Slide Storyboard v6 Image First"
date: 2026-09-04
status: review
version: v6-image-first
slide_count: 60
source:
  - "自己刻 Agent 框架：最難的不是呼叫 LLM（v3.1）"
  - "Agent Runtime Summit - 60 Slide Storyboard v5 Editorial"
  - "2026-09-03-image-first-generation-constraints"
visual_direction: "Warm Hand-drawn Engineering Editorial"
---

# Agent Runtime Summit — 60 頁分鏡 v6

## 全域敘事

**溝通任務：**分享結束時，具備 LLM／Agent 開發經驗的工程師應理解：`while loop` 包住 `LLM API`、`function call` 與 `message append`，只能形成最小 Tool Loop。要讓 Agent 在真實任務中反覆運作、被診斷、被驗證並持續演化，Framework 還必須逐步承擔 Context、Workflow、Guardrail、HITL、Evidence、Trace、Eval、Regression 與 Cost。

**故事主線：**不是先設計一套宏大架構，而是每遇到一個真實 Failure，Runtime 就被迫長出一項新責任。企業 AI 治理只在最後作為自行掌握 Runtime 邊界的延伸價值，不取代「自己刻框架所遇到的工程問題」這條主線。

**45 分鐘節奏：**Opening 4 分鐘、Context 10 分鐘、Workflow 6 分鐘、Guardrail／HITL／Evidence 8 分鐘、Trace 5 分鐘、Eval／Regression 7 分鐘、Cost／Loop Engineering／Closing 5 分鐘。轉場頁控制在 15–25 秒；案例與章節收束頁保留 50–75 秒。

## 全域視覺與排版規格

```markdown
你是架構師（The Architect），負責把真實 Agent Runtime 工程經驗整理成可閱讀、可分享的 16:9 手繪工程圖片簡報。

**CORE DIRECTIVES**

1. 每頁只保留一個主要結論；標題優先控制在 12–20 個中文字，盡量單行。
2. 內容頁標題 60–68 px；高密度技術頁不得低於 54 px；主要正文至少 42 px。輸出 PDF 後不得低於約 30 pt。
3. 整份簡報約 30% 使用具象工程插畫，70% 使用大字、程式碼、編輯式資料展示、表格與必要的技術圖。
4. 不把抽象名詞硬轉成 icon；只有真實情境才使用插畫，例如 ELK、Intent Review、Approval Brief、Trace Review、Eval Failure 與 Cost Ledger。
5. 不連續使用相同的「卡片＋箭頭」版型；一致性來自紙張、字體、色盤、線條與間距，構圖必須跟著內容關係改變。
6. Linear Pipeline 只用於真正單向的步驟；分支使用 Gate／State；回歸與重試使用有起點、停止條件與 Review Gate 的 Feedback Loop。
7. 動畫只揭示順序、資料移動、狀態變化、Gate 阻擋與回流。換頁後不自動播放；PDF 顯示完整穩定狀態。

**STYLE INSTRUCTIONS**

Design Aesthetic: Warm Hand-drawn Engineering Editorial。高品質工程筆記紙、炭黑麥克筆、少量色鉛筆陰影與螢光標記；親切但精準。
Background: 暖象牙白 #F7F1E6，極淡方格與紙張纖維。
Typography Reference: `codex-clipboard-5cf74e5d-048c-4ea6-bb28-df1e9f9f2e2f.png`。每次圖片生成都必須把這張圖作為字形參考。
Primary Typography: 粗黑、窄身、圓角的手寫麥克筆字；中文字與英文字必須有相同筆觸、粗細與節奏。
Typography Prohibition: 不使用 jf open 粉圓、Noto Sans TC、Iansui、PingFang、Chalkboard 或一般簡報無襯線字取代指定字形；字形明顯漂移時該頁不得交付。
Code Font: IBM Plex Mono。
Palette:
- 炭黑 #2F2B27：主要文字。
- 深靛藍 #4F557D：正常執行路徑、結構與主要框線。
- 珊瑚紅 #EF7C68：錯誤判斷、風險、Gate 與需要注意的 Failure。
- 芥末黃 #E5B94B：模型選擇、候選項與尚待判定內容。
- 鼠尾草綠 #89A88D：已驗證結果、Evidence 與通過狀態。
Color Semantics: 顏色必須承載固定語意；不得用紅色表示一般流程，也不得使用無意義裝飾光點。
Layout Families: Poster／Statement、Editorial Evidence、Table／Matrix、Linear Pipeline、Branch／Gate／State、Feedback Loop／Layered System。相同家族不要連續超過兩頁。
```

## 動畫政策

- **手動播放動畫頁（21 頁）：**02、07、10、11、12、14、17、23、24、28、32、34、36、38、42、44、47、50、52、55、57。
- **Controlled Loop：**02、57；第一次完整播放後才允許循環。
- **靜態頁（39 頁）：**其餘頁面進入時直接顯示完整內容，不放播放提示；Slide 59 使用已確認的完整齒輪構圖，不製作齒輪動畫。

---

# Opening｜Slides 01–06

## Slide 01｜自己刻 Agent 框架，最難的不是呼叫 LLM

### 主題重點
建立全場問題：這不是 API 教學，而是一個 Tool Loop 如何被實務問題逼成完整 Framework 的故事。

### 投影片文字
> 自己刻 Agent 框架  
> 最難的不是呼叫 LLM

一個 Tool Loop，如何長成 Agent Runtime

### 視覺
海報式封面。右側只放一條未封閉的深靛藍 Loop 與四個低對比節點；不放機器人、Logo、裝飾箭頭或完整架構。

### 排版
標題佔左側約 58%，兩行大字；副標一行。右側圖形不超過畫面 30%，整頁留白至少 55%。

### 動畫
靜態。Loop 只作封面識別，不旋轉、不發光。

### 搭配講稿
我一開始沒有想做一套很大的框架，只想把 LLM、function call 和 messages 串成一個 loop。這場分享要談的是：當這個 loop 開始處理真實任務，哪些工程問題會接連出現，又如何逼著 Framework 一層一層長大。

### 來源定位
主稿標題、開場與 Tool Loop 逐步長成 Runtime 的故事主線。

---

## Slide 02｜我以為三個步驟放進 Loop 就是 Agent

### 主題重點
建立最初的心理模型：`while loop` 是外層結構，包住三個反覆執行的步驟。

### 投影片文字
`while loop { LLM API → function call → message append }`

`＝ Agent?`

### 視覺
一個大型迴圈框住三個依序排列的模組：`LLM API`、`function call`、`message append`。箭頭只表示 01→02→03→01，不加無關線條。

### 排版
標題單行置頂。Loop 置於畫面中央偏左，`＝ Agent?` 放在框外右側；不要放在迴圈中央，以免被誤讀成其中一步。

### 動畫
手動播放。三個步驟依序出現，迴圈最後閉合，`＝ Agent?` 最後揭露；首次播放完成後才進入受控循環。

### 搭配講稿
最開始的做法真的很簡單：while loop 呼叫 LLM；模型要求 function call 時執行工具；再把結果 append 回 messages，進到下一輪。當時我以為，把這三個步驟包起來，就已經是 Agent。

### 來源定位
主稿開場最小 Tool Loop；三個步驟必須由 while loop 包覆，而非四個並列元件。

---

## Slide 03｜會動！也確實只需要幾行程式碼

### 主題重點
讓觀眾直接看見 naive loop；這段程式碼是全場回扣的起點。

### 投影片文字
```python
while not done:
    call LLM
    if model wants function:
        call function
        append result to messages
    else:
        return final answer
```

### 視覺
滿版 Code Block；只用珊瑚紅標記 `append result to messages`，替 Context 章預埋伏筆。

### 排版
標題一行；Code 佔畫面 70% 以上，左對齊，行距寬鬆。不要附加卡片、流程或解說段落。

### 動畫
靜態。

### 搭配講稿
它確實只需要幾行，也真的會動。這段程式解決的是模型可以反覆呼叫工具，但還沒有處理 Context、流程、錯誤、風險、除錯與驗證。後面每一章，都是從這幾行旁邊長出來的責任。

### 來源定位
主稿原始 while loop 程式碼。

---

## Slide 04｜你以為這樣就結束了嗎？

### 主題重點
用停頓製造轉折：能跑起來只完成了最小執行核心，真正困難的部分還沒開始。

### 投影片文字
> 真正的問題，現在才開始。

### 視覺
極簡懸念頁。只有大問題句、珊瑚底線與一句承接文字；移除淡色 Loop、交叉線與任何沒有敘事作用的裝飾。

### 排版
中央偏左的大字，整頁留白超過 65%。頁碼保留右上角；其餘元素不超過三個。

### 動畫
靜態。

### 搭配講稿
看到這幾行，很容易覺得 Agent 已經做完。但當它開始處理更長的任務、更多工具與真實資料，問題才真正開始。

### 來源定位
主稿從 basic loop 進入真實任務的敘事轉折。

---

## Slide 05｜會動！但問題也確實很多

### 主題重點
把後續內容濃縮成六個工程問題，讓觀眾知道整場分享會如何推進。

### 投影片文字
Context 怎麼控制？　流程誰來守？　錯誤怎麼擋？

決策怎麼還原？　修改怎麼驗證？　成本怎麼掌握？

### 視覺
六個問題沿兩條不規則但整齊的文字基線排列，使用關鍵詞加問句，不做六張卡片或六個 icon。

### 排版
上半部保留標題；下半部兩行各三個問題。每個問題至少 48 px，頁尾只放一句：「這些問題一路補起來，才慢慢長成 Runtime。」

### 動畫
靜態。

### 搭配講稿
Context 越來越長怎麼辦？模型漏掉步驟誰負責？Tool 參數傳錯怎麼擋？出了問題怎麼還原？Prompt 改完怎麼證明更好？Regression 又要花多少成本？這些不是我先畫好架構再照著做，而是一個一個真實問題逼出來的。

### 來源定位
主稿九章的問題主線與 Runtime responsibility 清單。

---

## Slide 06｜為什麼不用別人做好的？

### 主題重點
回答自然疑問：自研不是否定現成方案，而是希望保留模型選擇自由與完整執行透明度。

### 投影片文字
**模型自由度**

自由替換模型／多模型 routing／內部或開源模型

**執行透明度**

Context、Tool Arguments、錯誤、狀態與決策路徑

### 視覺
一個編輯式雙欄對照：左欄是模型選擇範圍，右欄是一條可觀察的 Agent Run。現成框架名稱只作上方情境文字，不做勝負表。

### 排版
問題放在標題。下方 45／55 非對稱雙欄；右欄稍大，對應本場分享重點。欄間只用細線，不使用大卡片。

### 動畫
靜態。

### 搭配講稿
Open-source frameworks、Claude Code、OpenAI SDK 都能加速開發。我仍然自己做，是因為我想自由替換模型、做 routing、接內部模型，也想看清 Context 怎麼變、Tool 傳了什麼、流程為什麼停，以及錯誤究竟發生在哪裡。

### 來源定位
主稿開場「為什麼沒有直接使用現成框架」與使用者確認的自由度／透明度主軸。

---

# Context 管理｜Slides 07–20

## Slide 07｜我遇到的第一個問題

### 主題重點
最直覺的做法會把每一輪 Message 與 Tool Result 全部 append 回 Context，資料只進不出。

### 投影片文字
`user → assistant → tool result → append → next LLM call`

缺少：`select`／`compress`／`classify`／`reference`

### 視覺
一個逐輪變厚的 Context 容器；每次 Tool Result 都回流進去。視覺只呈現「累積」，不使用「Loop 失控」等抽象形容。

### 排版
標題與問題分離。主視覺佔左側 65%，右下以四個大字動詞指出缺少的能力；不做完整卡片牆。

### 動畫
手動播放。Message 與 Tool Result 逐輪 append，Context 容器逐漸變厚，最後才揭露四個缺少的動作。

### 搭配講稿
我一開始把 messages 直接當 Context：User message、assistant message、tool result，每一輪都 append，再把全部內容交給下一次 LLM call。系統沒有選擇、壓縮、分類，也沒有把只需要傳位置的資料改成 reference。

### 來源定位
主稿第一章「Context 不是 append 就好」。

---

## Slide 08｜Context 越長，中間越容易漏

### 主題重點
用 Lost in the Middle 的研究觀察，說明長 Context 中的資訊並不會被平均使用。

### 投影片文字
開頭：較容易利用　中間：明顯下降　結尾：較容易利用

> Context window capacity ≠ information usability

### 視覺
一條簡化 U 型位置效果曲線，只標開頭／中間／結尾與相對高低，不自行添加百分比。

### 排版
曲線置中偏下，標題與一句結論置上。研究名稱與限制用 32–34 px 放底部；不把曲線塞進卡片。

### 動畫
靜態。

### 搭配講稿
〈Lost in the Middle〉在多文件問答與 retrieval 任務中觀察到，相關資訊位於長 Context 中間時，表現常比位於頭尾差。不是說模型只看頭尾，而是 Context 變長後，中間的重要資訊更容易被漏掉。

### 來源定位
主稿 Context punchline；Liu et al., *Lost in the Middle*。

---

## Slide 09｜Context 長大後，LLM 開始胡言亂語

### 主題重點
把「胡言亂語」落在四個可觀察 Failure，而不是只作情緒性描述。

### 投影片文字
規則漏看　／　Tool Result 抓錯重點

流程跳步　／　Final Answer 出現幻覺

### 視覺
一條由穩定逐漸轉為破碎的執行軌跡，四個 Failure 直接標在斷點旁；不用四張 Warning 卡片。

### 排版
左上標題；中央一條主軌跡；右下四個短標籤。Token 增長只用淡色刻度作背景，不搶主視覺。

### 動畫
靜態。

### 搭配講稿
Context 膨脹後，模型不只是變貴。它開始漏規則、抓錯 Tool Result 的重點、跳過步驟，甚至在最後用沒有被證明的內容補出一個完整故事。

### 來源定位
主稿第一、二章長 Context Failure 清單。

---

## Slide 10｜模型會發揮你想不到的想像力

### 主題重點
用 ELK 案例呈現：資料片段是真的，模型補上的因果與 Root Cause 卻未被證明。

### 投影片文字
Raw Logs 真的存在：錯誤訊息、時間點、局部 Service Error

模型自行補上：因果關係、完整故事、Root Cause

### 視覺
具象 ELK 工程場景。螢幕上幾段真實 Log 以深靛藍標示；模型補出的連線與 Root Cause 使用珊瑚紅虛線。不是 before／after 分割。

### 排版
插畫佔左側 58%，右側只放兩組文字：「資料裡有什麼」與「模型補了什麼」。每組最多三行。

### 動畫
手動播放。真實 Log 先出現，模型再補上資料沒有證明的紅色因果線與 Root Cause。

### 搭配講稿
模型真的看到了錯誤訊息，但它也會把時間接近補成因果，把局部 Service Error 補成整個系統的 Root Cause。資料是真的，連接資料的故事卻可能是模型想像的。

### 來源定位
主稿血淚案例一。

---

## Slide 11｜LLM 是填空與寫故事的大師

### 主題重點
拆解上一頁：當資料片段連不起來時，LLM 會用最合理的續寫填補空缺。

### 投影片文字
`錯誤訊息 A　　？　　局部 Service Error　　？　　系統異常`

模型補成：`A → Service Error → Root Cause`

### 視覺
三張同層級資料片段，中間保留清楚空白與獨立問號。模型補完後才出現一條珊瑚紅因果線；線不得碰到卡片文字。

### 排版
三個片段橫向分散，上方留白；下方只放一句模型補完後的故事。問號是資訊缺口，不是裝飾。

### 動畫
手動播放。先顯示真實片段與空白，再逐段補出因果箭頭。

### 搭配講稿
LLM 本來就是填空與寫故事的大師。幾個 Log 片段都是真的，但中間缺少足以建立因果的資訊。它很容易用最合理的續寫填滿空白，最後把可能性說成確定原因。

### 來源定位
主稿 ELK 案例中時間接近、局部錯誤與 Root Cause 的錯誤推論。

---

## Slide 12｜Raw Logs 先整理，再交給模型

### 主題重點
模型需要足以分析的 Evidence，不需要整包未整理的 Raw Logs。

### 投影片文字
`縮小時間窗 → 保留欄位 → 分組 Pattern → 代表樣本 → Focused Context`

保留：`timestamp`、`service`、`level`、`message`、`trace_id`、`error_code`

### 視覺
單一收斂漏斗或逐段變窄的資料帶，表達 Context Shaping；不用五張卡片串箭頭。

### 排版
主視覺置中，五個動詞沿資料帶排列。保留欄位放底部一行，至少 42 px。

### 動畫
手動播放。Raw Logs 依序經過四個 shaping 動作，資料量逐段收斂。

### 搭配講稿
完全不給模型內容只會讓它瞎猜。真正要做的是縮小時間窗、保留必要欄位、分類 Pattern，再挑代表樣本。完整 Raw Logs 留在 Runtime State，Context 只保留分析所需內容。

### 來源定位
主稿血淚案例一的 Context Shaping 實務。

---

## Slide 13｜Tool 回傳的資料，不一定都要給 LLM

### 主題重點
有些 Tool Result 是下一個 Tool 的完整輸入；LLM 只需要狀態與下一步控制資訊。

### 投影片文字
**完整 Payload**：留在 Runtime／Tool Layer

**LLM 只看**：`status` ＋ `data_ref` ＋ 下一步控制訊號

### 視覺
一個非對稱雙層剖面：上層是大型 Payload 留在 Runtime／Tool Layer；下層只露出給 LLM 的小型 Control Record。不畫資料庫，也不使用「重貨／管線」隱喻。

### 排版
完整 Payload 佔畫面 60%，LLM Control Record 佔 25%，兩者以清楚標籤區分。不要畫成完整流程，這一頁只建立資料責任分工。

### 動畫
靜態。

### 搭配講稿
前面的 ELK 案例，模型需要看部分 Log。但有些 API Response 根本不是讓模型分析的，而是下一個 Tool 要使用的完整輸入。LLM 真正需要的，可能只有狀態碼，以及下一步該傳哪個 `data_ref`。

### 來源定位
主稿血淚案例二；依使用者校正，不把設計誤解成資料庫架構。

---

## Slide 14｜Data Ref 讓 Tool 按需取回資料

### 主題重點
LLM 傳遞資料位置；下一個 Operation 在 Tool Layer 解析 Reference 並取得完整 Payload。

### 投影片文字
`Tool A → Runtime State → status + data_ref → LLM → Tool B(data_ref)`

> 穿過 LLM 的是 Reference，不是完整資料。

### 視覺
雙軌 Swimlane。上軌「完整 Payload」停留在 Runtime／Tool Layer；下軌「控制資訊」讓 `status + data_ref` 經過 LLM。Tool B 向上依 Ref 取回 Payload。只畫必要節點。

### 排版
標題單行。兩條水平軌道各自有清楚名稱；箭頭不穿過文字。`Tool B` 主標與 `input: data_ref` 次標分開，避免擠字。

### 動畫
手動播放。Tool A 先產生 Payload；Runtime State 回傳 Reference；Reference 經 LLM 傳到 Tool B；Tool B 最後依 Ref 取得完整資料。

### 搭配講稿
Tool A 產生大型資料後，完整內容留在 Runtime／Tool Layer，只把 `status` 與 `data_ref` 放進 Context。LLM 選擇下一步時把 Reference 傳給 Tool B，Tool B 再在 Server Side Resolve。LLM 搬的是位置，不是整包資料。

### 來源定位
主稿 API Response After Flow；不把 Data Ref 侷限為資料庫。

---

## Slide 15｜Context 放得下，不保證模型做得好

### 主題重點
移除不必要資料只是第一步；即使內容相關，Context 變長仍可能降低任務品質。

### 投影片文字
> Context Capacity ≠ Task Quality

### 視覺
Statement 頁。一條很長的 Context 軸延伸到畫面右側，但任務完成線在中途失去連續性；不畫大腦或容量 icon。

### 排版
Punchline 置中偏左，76–88 px；背景軸線低對比。整頁留白超過 60%。

### 動畫
靜態。

### 搭配講稿
前面處理的是什麼資訊該進 Context。接著是第二個問題：即使內容都相關，放得下仍然不代表模型能抓住重點、守住流程並把長任務做好。

### 來源定位
主稿第二章開頭。

---

## Slide 16｜Context 拉長，成功率可能掉下來

### 主題重點
用同 Prompt／Skill、測資、Tool 與 Temperature 的實測，呈現 Context Load 與模型容量對工作流完成率的影響。

### 投影片文字
| 模型 | Context | 10 次成功 |
|---|---:|---:|
| `gemma-4-26b-a4b-it-mlx` | 10k | 9／10 |
| `gemma-4-26b-a4b-it-mlx` | 30k | 4／10 |
| `gemma-4-31b-it` | 30k | 9／10 |

### 視覺
Editorial Evidence：三條水平成功率條為主體，模型與 Context 是左側索引；4／10 使用珊瑚紅，9／10 使用鼠尾草綠。

### 排版
標題一行。主數據佔左側 65%，右側只列三種 30k Failure：跳過 Builder、漏 Warning、提早停止。清楚標註控制條件一致。

### 動畫
靜態。

### 搭配講稿
我固定 Prompt／Skill、測資、Tool 與 Temperature，只改 Context 與模型。26b-a4b 在 10k 是九次成功，拉到 30k 只剩四次；31b 在 30k 又回到九次。失敗不是單純回答不好，而是整個 Workflow 開始漏步驟。

### 來源定位
主稿第二章模型實測數據與 Failure Types。

---

## Slide 17｜長 Context 讓流程開始缺東缺西

### 主題重點
用多次相同 Scenario 的執行軌跡呈現跳步、漏 Warning、混用結果與提早停止。

### 投影片文字
漏規則　跳 Operation　漏 Warning　混用 Tool Output　提早停止

### 視覺
五條細長 Run Timeline 並排；相同起點、不同 Failure。正常路徑深靛藍，缺漏或錯誤只在發生點使用珊瑚紅。

### 排版
Timeline 是唯一主視覺。每條只標一個 Failure，不加旁邊說明卡；頁尾保留一句：「Final Answer 合理，Workflow 仍可能沒走完。」

### 動畫
手動播放。五條 Run 同時開始，再分別顯示跳步、漏 Warning、混用結果與提早停止。

### 搭配講稿
這些失敗很容易被一句「模型怪怪的」帶過。但看執行路徑就會發現，它漏規則、跳 Operation、混用結果或提早停止。甚至最後答案看起來合理，流程其實沒有走完。

### 來源定位
主稿第二章長 Context Failure 清單。

---

## Slide 18｜Token 也描述模型承受的工作負載

### 主題重點
Token 不只是帳單數字，也是理解這次任務負載的重要條件，但不能單獨預測可靠性。

### 投影片文字
`Context Load`　＋　`Model Capacity`　＋　`Workflow Complexity`

共同影響：**任務穩定性**

### 視覺
三個不同寬度的編輯式資料條，最後在同一條「任務穩定性」基線交會。不是箭頭流程，也不用乘法公式。

### 排版
上半部一句結論；下半部三條負載條。頁尾放限制句：「Token 越多不代表必然失敗。」

### 動畫
靜態。

### 搭配講稿
Token 當然會影響成本，但它也反映模型這次承受多少工作負載。它不能單獨決定 Agent 穩不穩；Context Load、Model Capacity 與 Workflow Complexity 會一起作用。

### 來源定位
主稿第二章三項共同因素與 Token 工作負載觀察。

---

## Slide 19｜沒有執行欄位，就只能說模型怪怪的

### 主題重點
Agent Failure 必須與 Context、模型、Prompt 版本與 Scenario 一起記錄，才有機會定位原因。

### 投影片文字
`context_tokens`　`model`　`prompt_version`

`scenario`　`failure_type`　`tool_result_source`

### 視覺
一張大型 Run Record，六個欄位沿同一張紙的閱讀順序排列；其中一個 Failure 被珊瑚紅圈出，旁邊列出候選原因。

### 排版
非對稱 2／3＋1／3。左側 Run Record 是主體；右側最多四個候選原因，不畫 Dashboard。

### 動畫
靜態。

### 搭配講稿
如果沒有 Context Length、Model、Prompt Version、Scenario 與 Failure Type，最後只能說模型好像怪怪的。有了這些欄位，才有機會分辨是 Context 太重、Prompt 不清楚、模型容量不足，還是 Tool Result 根本不該進 Context。

### 來源定位
主稿第二章 Runtime 指標與失敗歸因清單。

---

## Slide 20｜看對資訊、控制負載、查出原因

### 主題重點
收束 Context 章：Context 管理同時處理資訊選擇、工作負載與除錯能力。

### 投影片文字
**看對資訊**　`select／compress／data_ref`

**控制負載**　`context_tokens／model capacity`

**查出原因**　`prompt_version／scenario／failure_type`

### 視覺
極簡 Editorial Triad，但不做三張等重卡片。左側是一個大型主結論，右側三條不同長度的工程註記，形成視覺層級。

### 排版
標題一行 60–68 px。主結論佔左側 45%；三項工程手段在右側垂直排列，從大到小；整頁不使用箭頭。

### 動畫
靜態。

### 搭配講稿
所以 Context 管理不是只算最多能塞多少 Token。第一，要讓模型看到對的資訊；第二，要讓它承受合理負載；第三，要留下足以歸因的欄位。這三件事合在一起，才是實務上能工作的 Context 管理。

### 來源定位
主稿第一、二章的章節結論。

---

# Workflow Control｜Slides 21–28

## Slide 21｜我遇到的第二個問題

### 主題重點
SOP 即使寫得清楚，LLM 仍可能跳步、亂序或提早停止。

### 投影片文字
> SOP 寫得很清楚  
> LLM 還是不一定照著走

### 視覺
一張清楚編號的 SOP 紙張，旁邊只有一條偏離既定順序的實際軌跡；不畫人物。

### 排版
Section／Statement 版型。文字佔左側 55%，SOP 紙張低對比置右；留白至少 55%。

### 動畫
靜態。

### 搭配講稿
整理完模型該看到什麼，下一個問題是它真的會照流程走嗎？我原本以為 SOP 寫清楚就夠了，後來才發現：讀得懂流程，不代表每一次都會遵守流程。

### 來源定位
主稿第三章開頭。

---

## Slide 22｜Prompt 看得懂，也可能不照做

### 主題重點
區分「規格已經寫明」與「執行真的遵守」。

### 投影片文字
| Skill 已寫明 | 執行仍可能發生 |
|---|---|
| 步驟與順序 | 跳步／亂序 |
| 轉移條件 | 條件不足仍前進 |
| 停止條件 | 提早停止 |
| Error Handling | 繞過 Fallback |

### 視覺
單一矩陣；每列以同一條基線對照「規格」與「偏差」。不附加流程圖或 icon。

### 排版
表格佔畫面中央 72%，行距寬鬆。Final Output Format 移到講稿，避免表格過滿。

### 動畫
靜態。

### 搭配講稿
Skill 可以寫步驟、順序、Transition、Stop Condition 與 Error Handling，但 LLM 仍可能跳步、在條件不足時前進、該繼續時停止，或繞過 Fallback 自己完成答案。

### 來源定位
主稿第三章 Skill 內容與行為偏差清單。

---

## Slide 23｜跳過步驟，也能交出完整答案

### 主題重點
呈現 Silent Failure：Final Answer 外觀完整，必要 Operation 與 Warning 卻可能缺失。

### 投影片文字
表面：一份看似完整的 Summary

實際：必要 Operation 未執行，Warning 欄位空白

### 視覺
具象報告畫面。先讓中央報告看起來完整，再以旁註揭露未勾選的 Operation 與空白 Warning；不做 before／after。

### 排版
報告佔中央 60%，旁註只放兩個缺漏。頁尾 Punchline：「有內容，不代表流程完成。」

### 動畫
手動播放。先顯示完整報告，再揭露兩個執行缺口。

### 搭配講稿
這種錯最麻煩，因為它不會爆 Exception。使用者看到完整 Summary，但背後可能漏了分類、Warning，甚至沒走過必要 Operation。

### 來源定位
主稿血淚案例三前半。

---

## Slide 24｜LLM 繞過報表 Tool，自己寫答案

### 主題重點
流程要求使用 Deterministic Builder，但 LLM 繞過 Tool，導致固定欄位與 Warning 缺漏。

### 投影片文字
正確：`analyze_discrepancies → build_execution_summary`

實際：`analyze_discrepancies → LLM 直接輸出報表`

### 視覺
一張正式報表製作工作台。深靛藍主路徑經過 Builder；珊瑚紅偏離線從分析結果直接跳到缺欄位報表。

### 排版
Builder 與兩份輸出報表是主要物件。正確／實際標籤直接貼近路徑，不使用兩排流程卡片。

### 動畫
手動播放。正確路徑先建立，LLM 的偏離路徑再從中途跳過 Builder。

### 搭配講稿
這個案例規定最後必須呼叫 `build_execution_summary`，由程式碼產生固定格式、分類、Warning 與統計。但 LLM 在流程還沒走完前，決定自己寫 Final Summary，結果表面完整，必要內容卻漏掉。

### 來源定位
主稿血淚案例三錯誤路徑與正確路徑。

---

## Slide 25｜固定格式與欄位，交給程式碼

### 主題重點
建立 LLM 與 Deterministic Builder 的責任分工。

### 投影片文字
**LLM**：理解語意、選擇下一步、傳遞 Ref

**Builder**：固定格式、固定欄位、Warning、統計、附件

### 視覺
一張左右責任接縫圖。兩邊不是競爭，而是 LLM 的候選結果交給 Builder 收斂為正式輸出。

### 排版
左 42%、右 58%；Builder 稍大，反映本頁結論。只用一條交接線，不做表格卡片。

### 動畫
靜態。

### 搭配講稿
有固定格式、固定欄位與不可缺漏 Warning 的輸出，不適合讓模型自由生成。LLM 可以負責語意判斷與選擇 Operation；正式輸出交給程式碼收斂。

### 來源定位
主稿血淚案例三的責任分工。

---

## Slide 26｜不能只看答案，還要檢查走過的路

### 主題重點
Final Answer 正確不能證明必要 Operation、順序與 Stop Condition 都正確。

### 投影片文字
必要 Operation 是否執行？

順序是否正確？是否提早停止？是否產生規格外輸出？

### 視覺
一條 Expected Path 作為淡色底稿，Actual Path 疊在上面；只標出一個被跳過的節點與一個提早停止點。

### 排版
Timeline 佔畫面中央，文字問題放在左下，最多三行；不再列四項卡片。

### 動畫
靜態。作為 Trace／Eval 的前置概念。

### 搭配講稿
只看最後答案不夠。系統還要確認產生正式輸出的 Tool 真的被呼叫、Operation Sequence 正確，也沒有在中途跳出來寫一段看似合理的答案。

### 來源定位
主稿血淚案例三後半 Trace／Eval 驗證責任。

---

## Slide 27｜流程有邊界，為什麼不直接寫 if-else？

### 主題重點
固定、可驗證的邊界交給程式碼；模糊語意與情境判斷仍交給 LLM。

### 投影片文字
| 適合 Code | 適合 LLM |
|---|---|
| State／Transition | 理解模糊需求 |
| Preconditions | 判斷資料是否足夠 |
| Exit Condition | 在允許範圍內選擇 Operation |
| 固定格式 | 處理語意差異 |

### 視覺
單一責任矩陣，中間用合作接縫而非 VS 符號。

### 排版
表格佔中央 68%，頁尾大字：「有邊界，不代表這就不是 Agent。」

### 動畫
靜態。

### 搭配講稿
真實任務仍有大量語意判斷：使用者想做什麼、資料是否足夠、下一步該選哪個 Operation。固定邊界交給 Code，情境判斷交給 LLM；兩者不是互斥。

### 來源定位
主稿第三章「為什麼不直接寫 if-else」。

---

## Slide 28｜LLM 做判斷，系統守住流程邊界

### 主題重點
收束 Workflow 章：LLM 在 State 內判斷，系統管理 Transition、Exit 與必要檢查。

### 投影片文字
`Analyze → Validate → Finalize`

LLM：理解語意、判斷資料、提出下一步

系統：State、Transition、Exit、Validation

### 視覺
三狀態 State Machine。State 內部用芥末黃標示 LLM 可做的判斷；深靛藍框線守住 Transition；珊瑚紅只標示被阻擋的非法轉移。

### 排版
State Machine 置中，三個狀態寬度一致。責任說明分別貼在 State 內與 Transition 上，不另加雙欄表。

### 動畫
手動播放。State 逐站建立；LLM 判斷先出現，Transition／Exit 檢查隨後鎖定可走範圍。

### 搭配講稿
LLM 可以理解語意、判斷資料是否足夠，並在允許範圍內選擇下一步；系統守住 State、Transition、Exit Condition 與必要 Operation。流程有邊界，Agent 仍然可以做判斷。

### 來源定位
主稿第三章 State／Transition／Exit Condition 與責任分工。

---

# Guardrail／HITL／Evidence｜Slides 29–38

## Slide 29｜Prompt 寫了，不代表模型一定遵守

### 主題重點
區分行為指引與不可違反的系統邊界。

### 投影片文字
Prompt 定義：**應該怎麼做**

Guardrail 定義：**哪些錯不能通過**

### 視覺
Statement 頁。兩句上下排列，以珊瑚紅只標記「不能通過」；不放盾牌 icon。

### 排版
大字置中偏左，留白至少 60%。第二句稍大，形成章節轉折。

### 動畫
靜態。

### 搭配講稿
「不要幻覺、沒有資料就說不知道」這些 Prompt 規則都有用，但不會每次穩定遵守。不可接受的錯誤，必須從行為指引變成 Runtime 可以檢查的邊界。

### 來源定位
主稿第四章開頭。

---

## Slide 30｜一次都不能錯的，用程式碼守

### 主題重點
用風險決定控制方式：可接受偶發偏差的行為用 Prompt；明確且不可違反的條件用 Code／Validator／Gate。

### 投影片文字
| 風險 | 控制方式 |
|---|---|
| 可接受偶發偏差 | Prompt／Skill |
| 一次都不能錯 | Code／Validator／Gate |

### 視覺
大型兩列決策表。第二列使用深靛藍底與珊瑚紅側標，成為視覺重心。

### 排版
表格只佔中央 60%，上下留白。頁尾不再重複結論。

### 動畫
靜態。

### 搭配講稿
不是所有事情都要 Hardcode，但一次錯都不能接受的行為，不能只靠模型記得 Prompt。Runtime 必須用 Validator 或 Gate 直接擋住。

### 來源定位
主稿第四章 Guardrail 核心判斷準則。

---

## Slide 31｜不可違反的條件，要交給程式碼

### 主題重點
把 Guardrail 原則落到五種可檢查的工程控制。

### 投影片文字
```text
日期計算          → deterministic tool
tool arguments    → schema validation
無 evidence claim → claim-evidence check
寫入 operation    → permission／approval gate
無限 loop         → max iteration／retry budget
```

### 視覺
一張大型規則清單，左側是風險，右側是控制；每行只有一條直線對應，不做五張卡片。

### 排版
Dense Technical 版型。等寬字體至少 42 px；五行垂直平均分布。箭頭使用深靛藍，珊瑚紅只標高風險項目。

### 動畫
靜態。

### 搭配講稿
日期不能讓模型自己心算；Arguments 要過 Schema；沒有 Evidence 的 Claim 不能進答案；寫入操作要有 Permission 或 Approval；Loop 也要有 Iteration 與 Retry Budget。這些都可以被程式碼清楚檢查。

### 來源定位
主稿第四章五個 Guardrail 例子。

---

## Slide 32｜第一種 HITL，先確認 Agent 理解對了

### 主題重點
HITL 不只是在最後按確認；高代價流程開始前，先確認 Agent 對需求的 Structured Intent。

### 投影片文字
使用者：找出 A 類、排除 B，只處理最近三天失敗項目

Agent 解析：`target=A`　`exclude=B`　`range=3 days`　`status=failed`

### 視覺
具象工作介面：左側是自然語言需求，右側浮出 Structured Intent 預覽；人逐項確認欄位，不是按通用 OK。

### 排版
自然語言佔左側 42%，Structured Intent 佔右側 50%；中間保留清楚轉換空間。重要文字全部可編輯。

### 動畫
手動播放。需求先出現，四個 Intent 欄位逐項解析，最後停在確認狀態。

### 搭配講稿
自然語言常同時包含條件、範圍與例外。這裡的 HITL 不是問你確定要執行嗎，而是先問：Agent 對這句話的理解對嗎？

### 來源定位
主稿 HITL Gate 的 user input 與 interpreted intent 範例。

---

## Slide 33｜HITL 要確認 Structured Intent

### 主題重點
Intent Gate 應呈現可檢查欄位，並允許人確認、修改、拒絕或補充資訊。

### 投影片文字
```yaml
action: analyze
target: failed transactions
scope: last 3 days
exclude: manually resolved cases
next_workflow: discrepancy investigation
risk: may trigger downstream ticket creation
```

`Confirm`　`Edit`　`Reject`　`Need more info`

### 視覺
一張大型 YAML Review Sheet；四種回應放在紙張右緣作為 Review Outcome，不模仿產品按鈕。

### 排版
YAML 佔畫面 68%，四種回應縱向排列於右側。Code 42 px 以上；不加 UI Chrome。

### 動畫
靜態。

### 搭配講稿
Intent Gate 要呈現可檢查的結構，而不是一段聽起來正確的摘要。人可以確認、修改、拒絕或要求更多資訊；後續 Workflow 必須使用確認後的 Intent。

### 來源定位
主稿 Detected Intent Schema 與四種回應。

---

## Slide 34｜Intent 錯了，後面全綠也沒有用

### 主題重點
錯誤 Intent 會讓系統正確執行錯誤目標；技術上成功不代表任務正確。

### 投影片文字
`錯誤 Intent → 每一步都成功 → 抵達錯誤目標`

Trace 記錄：`model_output`、`approved_by`、`edited_fields`、`approved_intent`

### 視覺
一條執行路徑從第一個節點就偏向錯誤目標，後續節點全部顯示成功。珊瑚紅只標第一個偏離與終點；中間成功節點維持鼠尾草綠。

### 排版
主路徑佔畫面上半部；Trace 欄位只在底部一行，不做第二張表。

### 動畫
手動播放。Intent 先偏離，後續節點逐一轉綠，最後揭露終點錯誤。

### 搭配講稿
很多 Agent 錯誤不是 Tool 壞掉，而是一開始就理解錯需求。後面每個 Operation 都可能成功，整條 Workflow 還是錯的，所以確認與修改結果也必須進 Trace。

### 來源定位
主稿 HITL Gate 的錯誤來源與 Trace 欄位。

---

## Slide 35｜高風險 Operation，先看懂再決定

### 主題重點
Execution Approval Gate 必須讓人看到影響範圍、預計變更與風險，而不是只提供一個確認按鈕。

### 投影片文字
**準備執行扣款**

影響範圍：待處理的失敗交易

預計變更：執行扣款並寫回交易狀態

風險：正式狀態可能已改變；執行前必須重新檢查

### 視覺
單一 Approval Brief。左側是操作名稱與「等待批准」，右側依序列出影響範圍、預計變更、風險；不畫五個操作卡片或裝飾閘門。

### 排版
Editorial Evidence 版型，約 32／68 非對稱分欄。操作名稱 80–88 px，三個審查欄位 46–50 px，整體像一張可審閱的工程文件；不顯示未由來源提供的筆數。

### 動畫
靜態。

### 搭配講稿
對寫入、開單、扣款、外部通知與修改正式資料，人需要看到這次到底要做什麼、影響多少資料、有哪些風險，才能做出真正有意義的批准。

### 來源定位
主稿 Approval Gate 的高風險 Operation；排版依已確認的極簡編輯式版本。

---

## Slide 36｜Approval 後，必須重新確認條件

### 主題重點
Approval 會把 Run 切成提案與執行兩段；等待期間的狀態變化可能使原條件失效。

### 投影片文字
`Proposal → Approval → Re-check Preconditions`

條件仍成立：`Execute`　條件已改變：`Abort`

### 視覺
Approval Gate 後不是直接執行，而是先進 Re-check Gate，再分成 Execute 與 Abort。等待時間用留白與時間刻度表示，不用更多卡片。

### 排版
主流程停在畫面中央的 Re-check Gate；兩個結果上下分支。主路徑深靛藍，Abort 珊瑚紅，Execute 鼠尾草綠。

### 動畫
手動播放。Proposal 通過 Approval，中間顯示時間與狀態變化；Re-check 最後分流 Execute／Abort。

### 搭配講稿
人批准後，資料可能已被別人處理、任務可能關閉、餘額可能改變。Approval 不是拿到就執行；Runtime 必須重新檢查前置條件，決定執行或終止。

### 來源定位
主稿 Approval Gate 的時間差與 Precondition Check。

---

## Slide 37｜Log 是資料，Evidence 才是根據

### 主題重點
查到資料只能證明資料存在；被選來支撐特定 Claim 的具體片段，才構成 Evidence。

### 投影片文字
`Log`：系統發生過的原始資料

`Evidence`：支撐某個 Claim 的具體資料

### 視覺
具象 ELK 工作桌。大量 Logs 佔畫面左側，只有三段被圈選並移到 Claim 旁，成為 Evidence。重點是選取關係，不做流程。

### 排版
左 60% Raw Logs、右 35% Evidence Extract。頁尾一行：「查過 ELK，不代表結論有根據。」

### 動畫
靜態。

### 搭配講稿
模型真的查到 Log，不代表它的結論就有 Evidence。Log 是原始資料；Evidence 是被用來支撐某個 Claim 的資料。前面的 ELK 案例正是資料很多，結論卻不一定有根據。

### 來源定位
主稿 Evidence Boundary 中 Log 與 Evidence 的區分。

---

## Slide 38｜沒有 Evidence Ref 的 Claim，不能成為確定結論

### 主題重點
把防幻覺落成可驗證的輸出契約：Claim 必須指向具體 Evidence Ref，Runtime 再依證據強度限制結論類型。

### 投影片文字
**Claim**：payment-service timeout 在 10:03 後增加

**Evidence Ref Check**：`[A] ELK Log`　`[B] ELK Log`　`[C] Metric`

**Conclusion Type**：`Observed Fact`／`Hypothesis`／`Insufficient Evidence`

`0 Evidence → Stop`

### 視覺
單一 Claim-Evidence Gate。Claim 是畫面主體，三條 Evidence Ref 直接連回原始資料；Gate 右側是三種清楚分離的 Conclusion Type。沒有 Evidence 的支線在輸出前停止。不要畫成連續風險光譜，也不要使用多張 UI 卡片。

### 排版
標題維持單行。Claim 與 Evidence Gate 置於中央 20–70% 高度；三種結論類型放右側並使用一致起點。所有文字至少 42 px；`0 Evidence → Stop` 靠近 Gate，不放在畫面最下方 8%。

### 動畫
手動播放。Claim 先出現，Evidence Links 逐一建立；Runtime 依證據強度決定 Fact、Hypothesis 或 Insufficient Evidence。缺少 Evidence 的 Claim 最後被擋在輸出前。

### 搭配講稿
防止幻覺不能只靠 Prompt 寫一句「不要亂說」。Runtime 要管理 Claim 與 Evidence 的關係：有足夠證據才能輸出 Observed Fact；只能支持可能性就標成 Hypothesis；證據不足就輸出 Insufficient Evidence。這不能保證模型永遠不幻覺，但能讓無根據的結論更難直接通過。

### 來源定位
主稿 data_ref／evidence_ref、Claim Binding 與 Conclusion Type；排版依極簡編輯式原型。

---

# Trace｜Slides 39–44

## Slide 39｜有 Log，不代表有 Trace

### 主題重點
單點事件紀錄只能回答發生了什麼，不能重建 Agent 為什麼這樣做。

### 投影片文字
> Log 記錄事件  
> Trace 重建決策  
> Evidence 支撐結論

### 視覺
Statement 頁。三句沿一條低對比時間基線排列；不使用放大鏡、腳印或追蹤 icon。

### 排版
三句由小到大形成章節節奏，中央句「Trace 重建決策」是視覺焦點。

### 動畫
靜態。

### 搭配講稿
我一開始只記 Tool Name、Arguments、Output、Final Answer 與部分 Error。這些能告訴我發生了什麼，但不能重建 Agent 為什麼從這一步走到下一步。

### 來源定位
主稿第五章開頭與三層 Punchline。

---

## Slide 40｜三種紀錄，回答三種除錯問題

### 主題重點
Operation Log、Decision Trace 與 Evidence Binding 服務不同的 Debug 對象，不能互相取代。

### 投影片文字
| 紀錄 | 回答的問題 |
|---|---|
| Operation Log | Agent 做了什麼？ |
| Decision Trace | Agent 為什麼這樣做？ |
| Evidence Binding | Agent 憑什麼這樣說？ |

### 視覺
一張三列 Editorial Table。每列只有名稱與問題句，背景層次由淺到深；不再附加 execution／decision／claim 三張卡片。

### 排版
表格置中佔畫面 68%；「為什麼」與「憑什麼」用珊瑚紅與鼠尾草綠文字強調。

### 動畫
靜態。

### 搭配講稿
Operation Log 用來 Debug Tool Execution；Decision Trace 用來 Debug Workflow Behavior；Evidence Binding 用來 Debug Conclusion Hallucination。缺少任何一層，回答的問題都不完整。

### 來源定位
主稿第五章三層模型與用途。

---

## Slide 41｜同一次 Run，需要三種紀錄

### 主題重點
用同一次 ELK 分析說明三層紀錄分別保存 Operation、選擇理由與 Claim Evidence。

### 投影片文字
`Operation Log`：`query_elk(time_range, service)`

`Decision Trace`：為什麼縮小時間窗？為什麼選這些 Pattern？

`Evidence Binding`：Claim 綁回 Log A／B 與 Metric C

### 視覺
一張垂直 ELK Case Sheet，三個區段位於同一張紙上。不是三張獨立卡片，也不使用水平流程。

### 排版
Case Sheet 佔左側 70%；右側只放三個問題：「做了什麼／為什麼／憑什麼」。

### 動畫
靜態。

### 搭配講稿
同一次 ELK 分析裡，Log 告訴我查了什麼；Trace 告訴我為什麼縮小時間窗與挑選 Pattern；Evidence Binding 告訴我最後的 Claim 憑哪些資料成立。

### 來源定位
主稿 ELK Evidence 範例與三層紀錄用途。

---

## Slide 42｜Trace 要能重播「為什麼這樣決定」

### 主題重點
Trace 保存足以重建決策的結構化資訊，不保存 LLM 完整思考全文。

### 投影片文字
`狀態 → 操作 → 參數／參照 → 結果 → 條件判定 → 下一步／停止`

這次為什麼提早停止？

> 只找到部分訊號，卻判斷「資訊已足夠」而提早停止。

`Trace 保留狀態、依據與停止理由，不保存思考全文。`

### 視覺
單一橫向 Run Timeline。整條正常執行路徑統一使用深靛藍；只有錯誤的「條件判定」與「資訊已足夠」使用珊瑚紅。移除綠色虛線與多重線型圖例。

### 排版
上半部是六節點 Timeline；下半部是單一 Editorial Decision Snapshot，以左側珊瑚色直線標記。不要再使用數字門檻、五欄公式或多張卡片。

### 動畫
手動播放。六個節點依序重播，最後停在珊瑚紅條件判定；下方展開這次提早停止的 Decision Record。

### 搭配講稿
Trace 不是保存模型完整的 Chain of Thought，而是保存當時的 State、使用哪一版 Skill、讀到哪些 Result／Ref、哪些前置條件被判定成立、最後選擇哪個 Operation 或 Stop，以及一段簡短結構化理由。這次只找到部分訊號，模型卻判斷資訊已足夠，所以提早停止；只有 Tool Call Log 看不出這個問題。

### 來源定位
主稿第五章 Trace 問題清單；內容與配色依最新確認版 Slide 42。

---

## Slide 43｜沒有 Skill Version，就無法回放

### 主題重點
每次 Run 必須綁定當時的 Skill Version 或 Hash，才能歸因與 Regression。

### 投影片文字
每次 Run 綁定：`skill_version` 或 `skill_hash`

否則無法回答：那次 Agent 用的是哪一版規則？

### 視覺
兩條幾乎相同的 Trace 連到不同 Skill Hash；第三條缺少 Hash，直接標示「無法歸因」。

### 排版
三條 Trace 以垂直版本比較呈現，不做流程；缺少 Hash 的一列使用珊瑚紅左標。

### 動畫
靜態。

### 搭配講稿
如果 Skill 會被持續修改，每次 Run 與 Eval 都必須綁定當時版本。否則只知道 Agent 做了什麼，卻不知道背後是哪一版行為規格。

### 來源定位
主稿第五章 `skill_version`／`skill_hash`。

---

## Slide 44｜AI 讀 Trace，找出模糊的 Skill 規則

### 主題重點
AI-readable Trace 讓 AI 找到模糊規則並提出修改，但修改仍必須通過 Regression Gate。

### 投影片文字
Trace：`stop_reason = information sufficient`

AI 發現：`「資訊足夠」沒有可檢查條件`

Proposed Skill Diff（示意）：

```diff
- 資訊足夠時停止
+ required_operations 完成，且 missing_evidence 為空時才能停止
```

> AI 可以提出修改；Regression 通過後才能套用。

### 視覺
單一 Artifact Review 工作桌。左側 55% 是帶版本的 Execution Trace；珊瑚紅註記圈出模糊 Stop Condition；右側 35% 是 Proposed Skill Diff。底部只有一道 Regression Gate。

### 排版
非對稱雙欄，不使用三個等寬卡片。Trace 與 Diff 以紙張層次區分，AI 分析只是一條註記，不畫人格化機器人或大型放大鏡。

### 動畫
手動播放。Trace 先顯示；模糊 Stop Condition 被圈出；Skill Diff 展開；最後停在 Regression Gate，不能直接套用。

### 搭配講稿
我的 Skill 很多是 AI 根據 PRD、SOP 與 Code 產生的。當執行不對，我希望 AI 能讀 Trace，定位哪條規則不清楚並提出 Diff。但 AI 提出的修改只是候選版本，仍要通過 Regression，不能直接接受。

### 來源定位
主稿第五章 AI-readable Trace 與第八章 Loop Engineering；移除先前自行補上的數字門檻。

---

# Eval／Regression｜Slides 45–52

## Slide 45｜只看 Final Answer，會漏掉中間的錯

### 主題重點
Agent Eval 必須從 QA Pair 擴展成 Workflow Behavior Test。

### 投影片文字
> Agent Eval 不是只看答案  
> 還要驗證 Workflow Behavior

### 視覺
Statement 頁。終點答案呈現鼠尾草綠，但中間一個必要節點被珊瑚紅跳過；不放完整 Eval 清單。

### 排版
大字佔左側 60%，右側只有一條低對比執行軌跡；留白至少 55%。

### 動畫
靜態。

### 搭配講稿
Agent 的錯誤常發生在中間。最後可能有一段合理答案，但它跳過必要 Operation、Arguments 傳錯，或根本沒有照 SOP 走。只看 Final Answer，不知道它是不是用正確方式到達終點。

### 來源定位
主稿第六章開頭與核心 Punchline。

---

## Slide 46｜先確認最後結果是否正確

### 主題重點
Outcome Eval 只檢查終點：Summary、格式、Warning、Claim 與 Evidence 是否正確完整。

### 投影片文字
Summary 正確完整？

格式與必要欄位符合？　Warning 出現？

Claim 是否過度推論？　Evidence 足以支撐？

### 視覺
一份 Final Report 是唯一主體。五個檢查點直接以短註記指向 Summary、欄位、Warning 與 Claim／Evidence，不在本頁畫 Execution Path。

### 排版
報告佔畫面 62%，檢查註記沿右側與底部排列；最多五個短句，避免表格化。

### 動畫
靜態。

### 搭配講稿
Final Answer 當然要檢查，但它只是第一層。Outcome Eval 回答最後結果是否正確：Summary 是否完整、格式與 Warning 是否符合、結論是否過度推論，以及 Evidence 是否真的支撐 Claim。

### 來源定位
主稿 Outcome Eval：Final Answer、Summary、格式、Warning 與錯誤結論。

---

## Slide 47｜答案正確，執行路徑仍可能錯

### 主題重點
Trajectory Eval 檢查 Agent 是否走過必要 Operation、正確順序與正確分支。

### 投影片文字
`Expected　A → B → C → D`

`Actual　　A → C → C → Final`

跳過 B　／　重複 C　／　提早停止

### 視覺
Expected／Actual 雙軌 Execution Path。Expected 使用深靛藍細線，Actual 使用較粗線；被跳過、重複與提前停止的地方只用珊瑚紅標記。

### 排版
兩條軌道佔畫面中央 65%，錯誤標籤直接貼近節點；不另加 Trajectory Eval 清單。

### 動畫
手動播放。Expected Path 先完成；Actual Path 再逐步顯示跳過、重複與提前停止。

### 搭配講稿
最後答案可能剛好合理，但中間可能跳過必要 Operation、重複呼叫、走錯分支或提早停止。Trajectory Eval 要確認它是不是沿著一條可以被信任的路徑抵達終點。

### 來源定位
主稿 Trajectory Eval。

---

## Slide 48｜很多錯誤，是參數或 Ref 傳錯

### 主題重點
Tool Usage Eval 把 Failure 定位到 Operation、Arguments、Refs、Preconditions 與 Error Handling。

### 投影片文字
| 檢查 | 常見 Failure |
|---|---|
| Operation | 呼叫錯 Tool／漏呼叫 |
| Arguments | 日期、欄位、範圍錯誤 |
| Refs | 漏傳 `data_ref`／`evidence_ref` |
| Preconditions | 條件不足仍執行 |
| Tool Error | 被當成正常資料 |

### 視覺
一張五列 Editorial Matrix。左欄是 Contract 面向，右欄是具體 Failure；不再附加 Tool icon 或流程。

### 排版
表格佔畫面 70%，每列最多兩行。Ref 使用 IBM Plex Mono；高風險列以珊瑚紅側標，不整列塗紅。

### 動畫
靜態。

### 搭配講稿
很多錯誤不是 Tool 壞掉，而是模型呼叫錯 Tool、傳錯參數、漏傳 Ref，或在 Preconditions 不成立時執行。Tool Usage Eval 讓問題落到 Operation Contract，而不是籠統怪模型。

### 來源定位
主稿 Tool Usage Eval。

---

## Slide 49｜明確規則交給 Code，語意交給 Judge

### 主題重點
LLM Judge 適合語意判斷；可確定、可程式化的規則不應再交給另一個模型猜。

### 投影片文字
**Code 檢查**：Sequence、Arguments、Schema、Warning、Token Budget、Missing Ref

**LLM Judge**：Summary 完整性、過度推論、Claim／Evidence、風險遺漏

### 視覺
左右責任分界，但不是兩張卡片。左側像規則尺，右側像語意註解紙；中間一句：「能確定，就不要猜。」

### 排版
55／45 非對稱雙欄，Code 側稍大。每側最多六個短詞，正文不低於 42 px。

### 動畫
靜態。

### 搭配講稿
Operation Sequence、Arguments、Schema、Warning 與 Token Budget 都是明確規則，不需要另一個模型猜。Judge 適合處理語意：Evidence 是否真的支持 Claim、Summary 是否過度推論。Judge 是 Eval 的一部分，不是保證器。

### 來源定位
主稿 LLM as a Judge。

---

## Slide 50｜Eval Scenario 會跟著踩過的坑長大

### 主題重點
Regression Suite 來自 PRD／SOP、真實 Failure 與尚未覆蓋的 Skill Branches。

### 投影片文字
`PRD／SOP`：第一版核心 Scenario

`Failure Cases`：踩過的坑永久留下

`Skill Branches`：找出未測分支

### 視覺
三條來源匯入同一疊 Regression Scenario 文件。不是三張流程卡；Failure Case 使用珊瑚紅文件邊條，表示永久保留。

### 排版
Regression Suite 置於畫面右側 48%，三個來源從左側不同高度匯入。每條只用一個來源名與一句作用。

### 動畫
手動播放。PRD／SOP 先建立初版；Failure Case 與 Skill Branches 再依序加入 Regression Suite。

### 搭配講稿
Eval 不是一開始就要寫幾百條測資。AI 可以先從 PRD／SOP 拆出核心 Scenario；真正發生過的跳步、漏 Warning 與錯誤參數永久補進 Regression；再由 AI 反向讀 Skill，找出尚未測試的分支。

### 來源定位
主稿「Eval Scenario 不是一次寫完，而是會長出來」。

---

## Slide 51｜過一次，不代表 Agent 真的穩定

### 主題重點
單次成功只能證明那一次通過；重複執行才開始描述可重現性。

### 投影片文字
同一 Scenario、同一組條件、重跑多次

`✓　✓　✕　✓　✕　✓　✓　✕　✓　✓`　（示意）

> 單次 Pass 是結果；重複執行才描述穩定性。

### 視覺
一排十個大型 Run Marks，成功鼠尾草綠、失敗珊瑚紅；清楚標示「示意」，不捏造模型成功率。

### 排版
Statement／Evidence 混合版型。Run Marks 置中，Punchline 放下方；不展開 pass@K 或 pass^K 公式。

### 動畫
靜態。

### 搭配講稿
LLM 行為有變動性。同一個 Scenario 必須在相同條件下重跑多次，觀察有限樣本裡能不能反覆通過。重點不是公式，而是單次成功與可重現穩定性是兩件事。

### 來源定位
主稿重複執行與穩定性觀察；不新增外部數據。

---

## Slide 52｜Eval 要產出可行動的 Failure Trace

### 主題重點
Eval 的主要價值不是分數，而是指出哪個 State、Operation、Argument、Context 與 Skill Version 出錯，推動修改與 Regression。

### 投影片文字
`Eval Score：82%`　淡化

**Actionable Failure Trace**

`Failure → AI Analysis → Skill Diff → Regression`

### 視覺
一張大型 Failure Trace 佔畫面中央。82% 分數退到角落；Trace 中只突出五個可行動欄位。右側是一小段 Skill Diff，底部顯示 Regression 結果可能讓另一個 Scenario 轉紅。

### 排版
Trace 佔 65%，Skill Diff 佔 25%；回歸風險只用一條底部狀態列，不畫完整 Loop。

### 動畫
手動播放。分數先淡出；Failure Trace 放大；AI Analysis 與 Skill Diff 出現；最後進入 Regression。

### 搭配講稿
工程迭代需要的不是 82 分，而是錯在哪個 State、哪個 Operation、哪個 Argument、哪一版 Skill。我曾修好一個 Failure Case，卻弄壞另一個 Scenario；Prompt 是全局行為規格，所以每次修改都必須重跑 Regression。

### 來源定位
主稿 Eval 目的、血淚案例四與 Feedback Loop。

---

# Cost／Loop Engineering／Closing｜Slides 53–60

## Slide 53｜Agent 的成本來自整條執行鏈

### 主題重點
一次 Agent Run 的成本不只來自 LLM Call，也包含 Tool、Retry、Validator、Judge 與 Latency。

### 投影片文字
一次 Run：`Context → Tool Loop → Retry → Validator → Judge`

觀測：`Input／Output Tokens` ＋ `Tool Calls` ＋ `Retry` ＋ `Latency`

### 視覺
單一 Run Cost Ledger，而不是七個節點塞成一排。上半部以一條執行鏈顯示五個成本來源；下半部是一行成本欄位摘要。Eval／Regression 留到下一頁。

### 排版
執行鏈採 3＋2 的折行編排或 S 型閱讀路徑，節點等寬且不裁切。底部成本摘要獨立成一條編輯式 Ledger。

### 動畫
靜態。

### 搭配講稿
Agent 每多走一輪、多一次 Retry、多一個 Validator 或 Judge，都會增加 Token、Tool Calls 與 Latency。成本觀測的第一步不是極端優化，而是先知道一條 Run 的成本花在哪裡。

### 來源定位
主稿第七章 Agentic Workflow 成本來源與 Cost Observability 欄位。

---

## Slide 54｜不知道成本，Regression 就跑不久

### 主題重點
每次 Skill 修改都要重跑 Eval；若不知道 Scenario 與 Suite 成本，改進循環無法長期持續。

### 投影片文字
每個 Scenario 要記錄：`Model`、`Tokens`、`Retry`、`Latency`、`Cost`、`Pass／Fail`

必須看見：成本上升，但完成率沒有提升

### 視覺
一張 Regression Cost Ledger。每列一個 Scenario，只突出一列「成本上升但完成率未提升」；不新增具體金額。

### 排版
Ledger 佔畫面中央 72%，標題上方；右下只放一句工程問題，不另畫流程。

### 動畫
靜態。

### 搭配講稿
每次修改 Skill 都要跑 Eval 與 Regression。如果不知道每個 Scenario 與整套 Suite 花多少，這個改進 Loop 很快就跑不久。成本觀測是讓 Regression 可以長期運作的基本條件。

### 來源定位
主稿第七章 Scenario／Suite 成本觀測需求。

---

## Slide 55｜我的第一版 Skill，不是我寫的

### 主題重點
用真實做法建立 Loop Engineering 的轉折：AI 讀 PRD、SOP 與 Code 產生第一版 Skill，再根據 Eval 與 Trace 修改。

### 投影片文字
`PRD／SOP／Code → 第一版 Skill → Eval → Failure Trace → Skill Diff`

> 從第一版到功能完成，我沒有手寫過一行 Prompt。

### 視覺
具象工程工作桌。PRD、SOP 與 Code 匯入一份 Skill 文件；右側接 Eval Result、Failure Trace 與 Diff。不是魔法、機器人或抽象漏斗。

### 排版
工作桌佔畫面 62%，Punchline 放右下 48–56 px。流程文字直接貼在 Artifact 之間，不做五張卡片。

### 動畫
手動播放。三種來源先出現，生成第一版 Skill，再依序出現 Eval、Failure Trace 與 Skill Diff。

### 搭配講稿
我的第一版 Skill 不是我寫的。AI 先讀 PRD、SOP 和 Code 產生第一版，再根據 Eval 與 Trace 持續修改。從第一版到功能完成，我沒有手寫過一行 Prompt。這件事改變了我對 Prompt 的理解。

### 來源定位
主稿第八章第一版 Skill 的真實做法。

---

## Slide 56｜Prompt／Skill 正在成為 Runtime Artifact

### 主題重點
Prompt／Skill 不再只是手工文字，而是可以生成、版本化、測試、修改與回歸驗證的 Artifact。

### 投影片文字
`被生成`　`被版本化`　`被測試`　`被修正`　`被回歸驗證`

每次 Run 綁定：`skill_version`／`skill_hash`

### 視覺
一份 Skill 的版本歷史：v1、v2、v3 沿同一張 Artifact Sheet 展開，每版旁邊只保留 Eval 狀態與 Trace 連結。

### 排版
版本歷史橫向，但不使用箭頭卡片；以 Git Diff 紙張層疊感呈現。標題與版本資訊保持單行。

### 動畫
靜態。

### 搭配講稿
Prompt／Skill 已經不像神聖不可動的咒語，而開始像 Code Artifact：可以被生成、版本化、測試、修改與回歸驗證；每次 Run 也要綁定當時版本。

### 來源定位
主稿第八章 Prompt Engineering 到 Loop Engineering。

---

## Slide 57｜AI 可以產生、分析與修改 Skill

### 主題重點
Loop Engineering 是一個有起點、Regression 與 Human Review Gate 的持續改進循環。

### 投影片文字
`Generate Skill → Run Eval → Read Trace → Propose Diff → Regression`

Human Review Gate：決定新版是否進入下一輪

### 視覺
有明確方向的 Flywheel。五個階段沿同一閉環排列；Human Review Gate 位於迴圈外側，通過後才形成新版本並開始下一輪。回流線比主路徑細。

### 排版
Loop 置於畫面中央偏左，Review Gate 置右。每個節點只保留一個動詞；停止條件與 Gate 必須可見，避免裝飾性圓環。

### 動畫
手動播放。五階段依序建立，停在 Human Review Gate；只有通過後才回到 Generate，第一次完成後才允許 Controlled Loop。

### 搭配講稿
Prompt Engineering 的重點正在從人手寫一句完美 Prompt，轉成設計一個能持續產生、測試、分析與修改 Skill 的 Loop。AI 可以提出候選修改，但它不能自己決定是否接受。

### 來源定位
主稿第八章 Loop Engineering；動畫依已確認 Flywheel 原型。

---

## Slide 58｜AI 可以改 Skill，人類決定是否接受

### 主題重點
AI 負責產生候選與執行驗證；人類掌握 Success Criteria、Risk Boundary、Eval Scenario 與 Review Gate。

### 投影片文字
**AI**：生成 Skill、分析 Failure、提出 Diff、執行 Regression

**人類**：Success Criteria、Risk Boundary、Eval Scenario、Review Gate

### 視覺
一份 Proposed Skill Diff 停在 Review Line 前。Review Line 右側只有 Accepted Version；不畫人與機器握手。

### 排版
Diff 佔左側 58%，Review Line 置中，右側 25% 是人類決策標準。用版面距離表達「候選不等於接受」。

### 動畫
靜態。

### 搭配講稿
AI 可以生成 Skill、分析 Failure、提出修改，也可以跑 Regression。但成功標準、不可接受的風險與哪些 Scenario 必須通過，仍然由人決定。

### 來源定位
主稿第八章人類角色、成功標準、風險邊界與 Review Gate。

---

## Slide 59｜回頭看，我們長出的是一整套 Runtime

### 主題重點
回扣開場：Tool Loop 只是其中一項能力；Agent 要在真實任務中運作，需要七個 Runtime 模組彼此協作，Governance 則約束整套系統的邊界。

### 投影片文字
`Context`　`Workflow／Skill`　`Guardrail／HITL／Evidence`

`Trace`　`Token／Cost`　`Eval／Regression`　`Tool Loop`

Tool Loop：`LLM → Tool → Append`

`Trace` ＋ `Token／Cost`：`Observability`

最外層：`Governance Boundary`

> 這些能力，才讓 Agent 能進入企業流程

### 視覺
七個大小一致、齒距乾淨且真正咬合的齒輪。每個齒輪只放一個語意正確的線稿 icon；Tool Loop 不放在中央，也不比其他模組更大。Governance 不是齒輪，而是包住整套 Runtime 的圓角虛線外框。Trace 與 Token／Cost 保持兩個獨立齒輪，使用置中的括號歸入 Observability。

### 排版
標題置於上方安全區並保持單行。七個齒輪構成置中的主視覺，外框左右留白一致；icon 必須在齒輪內精確置中。模組標籤至少 42 px，結論句放在外框下方但高於最下方 8% 安全區。

### 動畫
靜態。這一頁不製作齒輪旋轉或 Git 式動畫，避免齒輪方向、咬合與觀看順序產生錯誤暗示。

### 搭配講稿
回頭看，Tool Loop 只是整套 Runtime 裡的一個齒輪。Context 決定模型看到什麼；Workflow 與 Guardrail 守住執行邊界；HITL 與 Evidence 控制高風險決策和結論；Trace、Token 與 Cost 讓執行可以被觀察；Eval 與 Regression 讓修改可以被驗證。Governance 不是另一個平行模組，而是包住這些能力的共同邊界。這些能力一起協作，Agent 才能進入企業流程。

### 來源定位
主稿第九章 Runtime 能力清單；依最新確認版修正 Tool Loop、Observability 與 Governance 的歸類。

---

## Slide 60｜Agent 不是 While Loop

### 主題重點
用可記憶的定義收束整場，不使用通用 Q&A 或謝謝頁。

### 投影片文字
> Agent 不是 While Loop

Agent 是模型能力，

加上一整套讓它能在真實任務中運作、驗證與持續改進的 Runtime Harness。

底部：Tool Loop 讓 Agent 跑起來；Runtime 讓 Framework 真正能 Work。

### 視覺
海報式封底。中央大字為唯一焦點；背景只保留從 Slide 01 延續的 Loop 線條，這次被完整 Harness 邊界收住。

### 排版
主句 96–112 px，定義 54–60 px，底部小結 42–46 px。留白超過 55%；不放「謝謝」或「有問題嗎」。

### 動畫
靜態。

### 搭配講稿
模型會越來越聰明，但不能每次遇到問題，就只靠更大的模型、更長 Context、更多 Retry 或更多 Judge。Tool Loop 只是讓 Agent 跑起來；真正能 Work 的，是模型能力加上完整 Runtime Harness。

### 來源定位
主稿第九章收束；用語依使用者確認，避免把主軸改寫成企業治理。

---

# 製作檢核

- 總頁數必須為 60；Slide 01 是封面，Slide 60 是具結論的封底。
- 每頁只有一個主要視覺焦點；相同版型家族不得連續超過兩頁。
- 標題優先單行；一般內容頁 60–68 px，高密度頁不低於 54 px。
- 所有可見文字至少 42 px；PDF 換算後至少約 30 pt。
- 深靛藍表示正常結構／執行，珊瑚紅表示錯誤／風險／Gate，鼠尾草綠表示 Evidence／通過，芥末黃表示模型候選／待判定。
- 不使用無意義線條、漂浮光點、裝飾性 Loop、卡片牆或需要解碼的隱喻。
- 每頁以完整 16:9 raster image 交付；精確文字、Code、YAML、Trace、表格與數據必須在生成後逐字人工核對，不以縮小字體或後加小字補救。
- 每次生成必須帶入指定字形參考圖；若中英文筆觸不一致、變成端正圓體或混用一般簡報字，該頁不得交付。
- 22 張動畫頁由使用者手動開始；換頁不自動播放；PDF 顯示動畫完成後的穩定狀態。
- Slide 42 保存結構化 Decision Record，不宣稱保存或揭露 LLM 完整 Chain of Thought。
- Slide 44 的 Skill Diff 不使用未在講稿定義的數字門檻。
- 完成製作後必須逐頁渲染檢查標題換行、文字溢位、重疊、箭頭方向與顏色語意。
