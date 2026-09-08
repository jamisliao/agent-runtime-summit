# 第16–60頁實際產圖提示詞

來源：60-slide-storyboard-v6-image-first.md。工具：內建 imagegen。狀態：候選；沿用 v2 產圖規範，保留人工審查。

## 16

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 16
Title『Context 拉長，成功率可能掉下來』emphasize『成功率』. Large aligned three-row comparison using numeric fractions and accurately proportioned90%,40%,90% bars no cells. Labels『26b-a4b｜10k』『26b-a4b｜30k』『31b-it｜30k』; scores9/10,4/10,9/10. Header『Gemma 4｜10 次成功』. At y24% large note『同 Skill、測資、Tool、Temperature｜實務觀察』. right sparse three failure labels『跳 Builder』『漏 Warning』『提早停止』. No universal benchmark claim.
SOURCE (context; choose visible text as above):
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


## 17

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 17
Title『長 Context 讓流程缺東缺西』emphasize『缺東缺西』. Five clean horizontal execution tracks, each one localized visible defect, labels『漏規則』『跳 Operation』『漏 Warning』『混用 Output』『提早停止』. Distinguish skipped hollow node, missing warning, conflated results, truncated line. Single sentence at y26%『答案合理，流程仍可能沒走完』. No arbitrary numerical results.
SOURCE (context; choose visible text as above):
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


## 18

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 18
Title『Token 也反映工作負載』focus『工作負載』. Three nonquantitative source strips『Context Load』『Model Capacity』『Workflow Complexity』 each simple document/chip/branch icon meet shared baseline『任務穩定性』. No numeric bars or multiplication formula. Prominent note『Token 多，不代表必然失敗』above y78%.
SOURCE (context; choose visible text as above):
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


## 19

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 19
Title『留下執行欄位，才能定位問題』focus『定位問題』. One large Run Record sheet left65%, six fields in2columns3rows: context_tokens, model, prompt_version, scenario, failure_type, tool_result_source. Right35% three question labels『Context 太重？』『規則不清楚？』『模型能力不足？』. Do not invent actual record values.
SOURCE (context; choose visible text as above):
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


## 20

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 20
Title『Context 管理，要做三件事』focus『三件事』. Asymmetric editorial checklist no arrows or boxes: three vertically aligned small icons document filter/gauge/magnifier, labels『看對資訊』『控制負載』『查出原因』each one concise line『select／compress／data_ref』『context_tokens／model capacity』『版本／Scenario／Failure』. Large whitespace left headline『讓模型看到對的資訊』 not repeated entire title.
SOURCE (context; choose visible text as above):
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


## 21

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 21
Title『SOP 寫清楚，仍可能不照走』focus『不照走』. Left big single statement『讀懂流程 ≠ 遵守流程』, right one SOP paper with visible step01,02,03 and a single detour curve skips02. Label skipped step『跳步』. No separate panel or comparison cards.
SOURCE (context; choose visible text as above):
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


## 22

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 22
Title『規格寫明，執行仍可能偏離』focus『偏離』. Elegant four-row aligned matrix no icons, columns『Skill 已寫明』『執行仍可能』 rows『步驟與順序｜跳步／亂序』『轉移條件｜條件不足仍前進』『停止條件｜提早停止』『Error Handling｜繞過 Fallback』. Large roomy readable.
SOURCE (context; choose visible text as above):
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


## 23

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 23
Title『有內容，不代表流程完成』focus『流程完成』. One central completed-looking Summary report, two neat short callouts to empty required fields『必要 Operation 未執行』『Warning 空白』. Label above report『看似完整的 Summary』. Make absence visible using outlined empty checkbox and empty warning field not tiny lorem ipsum.
SOURCE (context; choose visible text as above):
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


## 24

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 24
Title『LLM 繞過 Builder，自己寫答案』focus『繞過 Builder』. One workspace path from『分析結果』to『Builder』to『正式報表』navy; separate coral bypass curved around builder leading to DIFFERENT visibly incomplete report『自行輸出』『漏欄位／Warning』. No crossing. Short source label『analyze_discrepancies』may omit long builder identifier in favor Builder. Correct path and wrong path must not merge.
SOURCE (context; choose visible text as above):
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


## 25

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 25
Title『固定格式與欄位，交給程式碼』focus『交給程式碼』. Left LLM context icon with『理解語意』『選擇下一步』『傳遞 Ref』 single handoff arrow to right larger Builder tool icon then final report labelled『格式／欄位』『Warning／統計／附件』. One responsibility handoff not competitive split, no bypass.
SOURCE (context; choose visible text as above):
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


## 26

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 26
Title『不能只看答案，還要檢查路徑』focus『檢查路徑』. One pale expected path and actual navy path overlay, missing required operation visible hollow circle, actual stops before expected endpoint. Short labels『必要 Operation？』『順序正確？』『提早停止？』 placed cleanly under corresponding event. Legend Expected/Actual directly adjacent no tiny notes.
SOURCE (context; choose visible text as above):
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


## 27

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 27
Title『有流程邊界，仍然可以是 Agent』focus『仍然可以』. One aligned responsibility matrix Code and LLM no VS or inequality. 4rows source content concise. At top of table small code braces icon and context document icon. Main relationship cooperating responsibilities not replacement.
SOURCE (context; choose visible text as above):
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


## 28

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 28
Title『LLM 做判斷，系統守住邊界』focus『守住邊界』. Three equal state nodes Analyze→Validate→Finalize horizontally. Interior small purple『語意判斷』; links labelled『Transition 檢查』『Exit 檢查』. One illegal bypass Analyze toward Finalize terminated at red X before arrival. Bottom summary『State／Transition／Exit／Validation』 above78%.
SOURCE (context; choose visible text as above):
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


## 29

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 29
Title『Prompt 寫了，不代表一定遵守』focus『不代表』. Spacious two-line statement with small meaningful document icon only:『Prompt：應該怎麼做』『Guardrail：哪些錯不能通過』. Second sentence larger. No risk spectrum, no process arrows. All black except titlefocus coral.
SOURCE (context; choose visible text as above):
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


## 30

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 30
Title『不能接受的錯，要用程式碼擋』focus『程式碼擋』. Center-top question『這個錯誤，能接受嗎？』 splitting into two independent branches no continuum: left『可接受偶發偏差』chat icon『Prompt／Skill』『引導行為』; right『不可接受錯誤通過』checkpoint icon『Guardrail』『Code／Validator／Gate』. Must not imply guardrail guarantees bugfree or prompt useless. Elegant asymmetry right stronger.
SOURCE (context; choose visible text as above):
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


## 31

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 31
Title『不可違反的條件，交給程式碼』focus『不可違反』. One five-row mapping list, small icon per row(calendar/schema/evidence-link/lock/retry) only if readable.『日期計算 → deterministic tool』『tool arguments → schema validation』『無 Evidence Claim → claim-evidence check』『寫入操作 → permission／approval gate』『無限 Loop → iteration／retry budget』. Shorten technical wrapping but preserve five mappings.
SOURCE (context; choose visible text as above):
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


## 32

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 32
Title『先確認 Agent 理解對了』focus『理解對了』. User sentence top-left『找 A 類、排除 B』『最近三天的失敗項目』 small chat icon; right single review sheet four fields target=A, exclude=B, range=3 days, status=failed. Short arrow labelled『解析』. Bottom near75%『先確認理解，再開始高代價流程』. No approval granted checkmarks automatically.
SOURCE (context; choose visible text as above):
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


## 33

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 33
Title『HITL 要確認可檢查的 Intent』focus『可檢查』. One large structured intent sheet six legible rows with concise semantic Chinese values: action: analyze; target: failed transactions; scope: last 3 days; exclude: manually resolved; next_workflow: discrepancy investigation; risk: downstream ticket creation. Right four review outcomes Confirm/Edit/Reject/Need more info vertically. No buttons. Fit using two line long values not tiny type.
SOURCE (context; choose visible text as above):
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


## 34

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 34
Title『Intent 錯了，後面全綠也沒用』focus『Intent 錯了』. One actual path starting red『錯誤 Intent』through3 green successful operation nodes to red『錯誤目標』, faint separate target marker『真正目標』not reached. below『確認與修改，都要進 Trace』 with fields model_output / approved_by / edited_fields / approved_intent in2 lines.
SOURCE (context; choose visible text as above):
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


## 35

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 35
Title『高風險操作，先看懂再批准』focus『先看懂』. Single approval brief, left large『準備扣款』『等待批准』with small lock, right three spacious paragraphs『影響範圍：失敗交易』『預計變更：扣款並寫回狀態』『風險：正式狀態可能已改變』. Essential note『執行前重新檢查』near risk. No fabricated counts or money.
SOURCE (context; choose visible text as above):
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


## 36

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 36
Title『Approval 後，條件要重新檢查』focus『重新檢查』. Proposal→Approval→clock gap→Re-check centered. Re-check splits uppergreen『條件成立 → Execute』lowercoral『條件改變 → Abort』. No direct Approval→Execute bypass. One short above-gap label『等待期間，狀態可能改變』.
SOURCE (context; choose visible text as above):
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


## 37

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 37
Title『Log 是資料，Evidence 才是根據』focus『才是根據』. Left one raw log paper stack, three highlighted short strips tagged A/B/C extracted into right『支撐 Claim 的片段』. One Claim paper above evidence not full execution flow. No invented log facts; placeholders『Log A』『Log B』『Metric C』. Big sentence『查過 ELK，不代表結論有根據』at y25% instead of footer.
SOURCE (context; choose visible text as above):
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


## 38

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 38
Title『沒有證據，不能當成確定結論』focus『確定結論』. Central claim『10:03 後 timeout 增加』 and three refs『A：ELK Log』『B：ELK Log』『C：Metric』 connect to Evidence Ref Check then three alternatives Observed Fact / Hypothesis / Insufficient Evidence. Label alternatives『依證據強度分類』; no-ref route X『擋下確定結論』while still allowing Insufficient Evidence output; do not imply all unsupported content prohibited or every referencedclaimfact.
SOURCE (context; choose visible text as above):
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


## 39

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 39
Title『有 Log，不代表有 Trace』focus『不代表』. Editorial three lines『Log 記錄事件』『Trace 重建決策』『Evidence 支撐結論』second line largest, faint baseline only, no busy icons, no additional bottom sentence.
SOURCE (context; choose visible text as above):
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


## 40

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 40
Title『三種紀錄，回答三種問題』focus『三種問題』. Three spacious rows single open table, Operation Log→『做了什麼？』; Decision Trace→『為什麼這樣做？』; Evidence Binding→『憑什麼這樣說？』. Not chronological arrows; use two columns without arrows.
SOURCE (context; choose visible text as above):
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


## 41

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 41
Title『同一次 Run，需要三種紀錄』focus『同一次 Run』. One ELK Case Sheet three stacked sections, Operation Log: query_elk(time_range, service); Decision Trace:『為何縮小時間窗？』『為何選這些 Pattern？』; Evidence Binding:『Claim → Log A／B、Metric C』. Right margin questions『做了什麼』『為什麼』『憑什麼』 aligned.
SOURCE (context; choose visible text as above):
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


## 42

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 42
Title『Trace 要能重播決策依據』focus『決策依據』. Six labeled phases in 3+3 serpentine wide layout not tiny one-row:『狀態』『操作』『參數／Ref』『結果』『條件判定』『下一步／停止』. Single lower snapshot『只找到部分訊號』『卻判定資訊足夠 → 提早停止』; note at25%『保存狀態、依據與理由，不保存思考全文』. Condition assessment coral only.
SOURCE (context; choose visible text as above):
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


## 43

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 43
Title『沒有 Skill 版本，就無法歸因』focus『無法歸因』. Three clean trace rows tied to skill_version v1 / v2 / missing; third red『版本缺失』→『無法歸因』. v1/v2 marked示意 no fabricated hashes. Header『每次 Run 綁定 skill_version 或 skill_hash』. No claim full deterministic replay just by version.
SOURCE (context; choose visible text as above):
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


## 44

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 44
Title『AI 找出模糊規則，提出候選修改』focus『候選修改』. One review workspace left Trace: stop_reason=information sufficient, annotation『停止條件不可檢查』; right Diff sheet minus『資訊足夠時停止』 plus2 lines『required_operations 完成』『且 missing_evidence 為空』. Flow ends at『Regression Gate』with conditional『通過後才能套用』. Label Diff示意, no invented thresholds.
SOURCE (context; choose visible text as above):
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


## 45

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 45
Title『只看答案，會漏掉中間的錯』focus『中間的錯』. Left huge『還要驗證 Workflow Behavior』, right small trajectory with skipped hollow required node and green final answer. Label『跳過必要步驟』at defect,『答案看似合理』at end. No implication correct final guarantees run.
SOURCE (context; choose visible text as above):
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


## 46

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 46
Title『Outcome Eval，先檢查最後結果』focus『最後結果』. One report sheet with5 short questions near relevant regions『Summary 完整？』『格式／欄位正確？』『Warning 有出現？』『Claim 過度推論？』『Evidence 足夠？』. All questionmarks, no prefilled approvals. No execution path.
SOURCE (context; choose visible text as above):
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


## 47

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 47
Title『答案正確，路徑仍可能錯』focus『路徑仍可能錯』. EXACT two horizontal tracks Expected A→B→C→D; Actual A→C→C→Final. Exactly4nodes each. Three labels『跳過 B』『重複 C』『提早停止』below correct places. No invented extra nodes.
SOURCE (context; choose visible text as above):
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


## 48

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 48
Title『很多錯誤，出在參數與 Ref』focus『參數與 Ref』. One elegant 5-row matrix Operation｜錯 Tool／漏呼叫; Arguments｜日期／欄位／範圍錯; Refs｜漏 data_ref／evidence_ref; Preconditions｜條件不足仍執行; Tool Error｜被當成正常資料. No extra icons; small coral side marker on Refs.
SOURCE (context; choose visible text as above):
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


## 49

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 49
Title『能確定的規則，就不要再猜』focus『不要再猜』. Two responsibility zones open not boxes: Code small ruler/braces icon,6labels Sequence/Arguments/Schema/Warning/Token Budget/Missing Ref; LLM Judge paper annotation icon4labels Summary完整性/過度推論/Claim與Evidence/風險遺漏. Explicit『Judge 不是保證器』at y76%.
SOURCE (context; choose visible text as above):
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


## 50

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 50
Title『踩過的坑，留進 Regression』focus『留進 Regression』. Three sources PRD／SOP, Failure Cases, Skill Branches atleft merge without crossings to big Regression Suite paperstack right. Short adjacent subtitles『核心 Scenario』『真實失敗』『未測分支』. No magic robots. Failure paper coral edge.
SOURCE (context; choose visible text as above):
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


## 51

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 51
Title『過一次，不代表真的穩定』focus『真的穩定』. Exact10runmarks ✓ ✓ ✕ ✓ ✕ ✓ ✓ ✕ ✓ ✓ with large『示意』label; note『同一 Scenario、同一組條件，重跑多次』above. No empirical rate, not added numeric score. Statement『觀察能否反覆通過』at75%.
SOURCE (context; choose visible text as above):
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


## 52

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 52
Title『Eval 要指出下一步怎麼修』focus『怎麼修』. Big Failure Trace with5rows State / Operation / Argument / Context / Skill Version; handoff to small Skill Diff then Regression gate. Main short『分數之外，要有可行動的 Trace』 omit illustrative82% to avoid fabricated empirical. Show regression may expose『另一 Scenario 失敗』not guaranteed pass.
SOURCE (context; choose visible text as above):
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


## 53

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 53
Title『Agent 成本，來自整條執行鏈』focus『整條執行鏈』. Five nodes Context→Tool Loop→Retry→Validator→Judge, 3+2 readable serpentine single clear path simple icons docs/tools/retry/checklist/scales. Below at75% ledger four labels『Input／Output Tokens』『Tool Calls』『Retry』『Latency』no arbitrary bar lengths or numbers. NO regression nodes.
SOURCE (context; choose visible text as above):
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


## 54

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 54
Title『看得見成本，Regression 才跑得久』focus『看得見成本』. Single Cost Ledger sheet fields Model/Tokens/Retry/Latency/Cost/Pass-Fail, illustrative Scenario A/B rows with dashes not invented numeric data, label『記錄欄位示意』. One large paired observation『成本上升 ↑』『完成率未提升 →』no quantified graph. Don't imply measuredactual.
SOURCE (context; choose visible text as above):
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


## 55

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 55
Title『我的第一版 Skill，是 AI 產生的』focus『AI 產生的』. Three documents PRD/SOP/Code converge Skill then Eval→Failure Trace→Skill Diff, stages in readable two-level artifactdesk, not tiny cardchain. Prominent short personal quote『從第一版到完成，我沒手寫 Prompt』above diagram optional omit if repeat.
SOURCE (context; choose visible text as above):
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


## 56

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 56
Title『Prompt／Skill 成為 Runtime Artifact』focus『Runtime Artifact』. One Skill artifact sheet unfolding v1 v2 v3 history, stage strip『生成 · 版本化 · 測試 · 修正 · 回歸驗證』. Each version simple Eval/Trace tags not arbitrary Pass. Note『Run 綁定 skill_version／skill_hash』at75%. No animation/gears.
SOURCE (context; choose visible text as above):
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


## 57

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 57
Title『讓 Skill 在驗證中持續改進』focus『持續改進』. Five-stage readable loop Generate Skill→Run Eval→Read Trace→Propose Diff→Regression; Human Review Gate outside right interrupts return path. Only approved branch returns new version, rejection terminates at『退回修改』. No automatic selfapproval. Empty middle no decorative icon.
SOURCE (context; choose visible text as above):
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


## 58

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 58
Title『AI 提出修改，人類決定是否接受』focus『人類決定』. Left proposed Skill Diff sheet and labels『生成／分析／修改／Regression』; center Review Gate checklist『成功標準』『風險邊界』『必要 Scenario』; right『Accepted Version』connected only via label『接受後』. No person/handshake. Proposal not equals accepted.
SOURCE (context; choose visible text as above):
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


## 59

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 59
Title『回頭看，我們長出一整套 Runtime』focus『一整套 Runtime』. Source7gear composition, exactly7 equal size CLEAN geometrically regular gears in alternating two-row chain without overlap, labels OUTSIDE with ample space, each ONE centered simple icon. Modules Context(document),Workflow／Skill(branch),Guardrail／HITL／Evidence(shieldcheck),Tool Loop(circulararrows),Trace(path),Token／Cost(gauge),Eval／Regression(checklist). ToolLoop not central or enlarged. Place Trace and Token/Cost adjacent sameblue and one bracket Observability. Governance Boundary is thin outer dashed rectangle, NEVER gear. Do not copy incorrect8gear reference. Important text by82%. Omit redundant footer if crowded.
SOURCE (context; choose visible text as above):
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


## 60

Create ONE polished complete 16:9 raster educational image, full-bleed warm beige #F7F1E6 paper with extremely faint grid, not a slide UI mockup. Reference1 is mandatory FONT STYLE ONLY: thick black, condensed, rounded natural marker handwriting for Chinese and Latin with same hand. Do not copy reference content, gears, icons. Reference2 is emphasis style ONLY: one coral phrase and ONE curved handwritten underline, not screenshot black borders, corners, Canvas watermark. Use Traditional Chinese. Clear single main scene, precise visual hierarchy, generous whitespace. Title at y8-15% single line visually48-60pt, necessary body text >=30pt equivalent (44px at1080p minimum), no footnotes. Content at y25-78%, everything important ends by82%, bottom15% empty, margins6%. Small simple navy outline icons only if meaningful, consistent stroke and size6-10% image height. Coral for risks/emphasis, green passed/evidence, blue structures, purple reasoning. One emphasized phrase in title with one coral underline only; no other underlined labels. No decorative cards/dashboard/3D/people/robots. Make relations understandable, connectors never cross letters, no tiny captions. Use source below for meaning, not all speaker text as visible copy. Preserve exact data and semantic distinctions; condense labels not meaning; do not invent numbers. Static complete final-state image even if source mentions animation. Do not claim editable type; rendered raster. Page number top right. Exact focus and custom layout below override source layout when necessary for legibility.
PAGE 60
Title『Agent 不是 While Loop』focus『不是 While Loop』. Poster closing with huge central『模型能力 ＋ Runtime Harness』and beneath2large lines『在真實任務中運作』『驗證，並持續改進』. Very faint loop enclosed in harness boundary behind not touching text. No thanks/Q&A. At75% concise『Tool Loop 跑起來，Runtime 才能 Work』. One central composition, bold marker consistent.
SOURCE (context; choose visible text as above):
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


