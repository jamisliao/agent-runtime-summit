# V9 圖片生成提示詞

來源：60-slide-storyboard-v9-review.md。使用內建 image_gen，每張獨立生成。字形參考只限定筆觸，不沿用原圖模組。

## 01 自己刻 Agent 框架，最難的不是呼叫 LLM

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 01
PRIMARY MESSAGE (not extra visible text): 這是一場從親身失敗出發，逐步補齊 Runtime 責任的分享。
EXACT TITLE: "自己刻 Agent 框架，最難的不是呼叫 LLM"
EXACT PAGE NUMBER: "01"
EXACT CONTENT:
從幾行 Loop，到真實任務

COMPOSITION AND SEMANTICS:
- 構圖：標題為主體，下方短句與一條尚未展開的 Loop 線形成留白封面。
- 焦點：標題中的「最難的不是呼叫 LLM」。底線：無。
- icon 與連線：只有一個小型循環線稿，不畫完整架構，不提前放出全部模組。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
我一開始只想做一個能查資料、做分析、交付結果的 Agent。這裡的 Agent，會用模型判斷下一步，也會透過工具實際做事。後來才發現，光把它們接起來，還不足以完成真實工作。今天談一次任務從開始到交付，不展開跨任務的長期記憶。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
COVER GEOMETRY OVERRIDE: Print the ENTIRE title as ONE single horizontal line at y=100 spanning x=110..1560, black, about 56px lettering. Main subtitle centered around y=430 at about 58px. Only ONE small navy circular loop arrow below subtitle near y=590, diameter 70px, EMPTY inside. Absolutely NO documents, gears, checkmarks, node clusters or extra icons. Background mostly empty. Do not split or repeat title anywhere.
~~~

## 02 我以為，把三個步驟接起來就好

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 02
PRIMARY MESSAGE (not extra visible text): 從一個教學小任務認識模型、工具與執行系統，再看最小循環。
EXACT TITLE: "我以為，把三個步驟接起來就好"
EXACT PAGE NUMBER: "02"
EXACT CONTENT:
調查一筆失敗交易
LLM：判斷下一步
Tool：實際查資料
回填結果
Runtime：安排執行
最終回答
流程示意

COMPOSITION AND SEMANTICS:
- 構圖：上方短需求，下方是三節點的最小循環。以一個開放括號包住循環，標示 Runtime，不把它畫成第四個模型或多加架構模組。
- 焦點：LLM 判斷與 Tool 實際執行的分工。底線：無。
- icon 與連線：模型用紫色對話符號，工具用藍色工具文件，結果用文件。LLM 到 Tool，再到結果，再回 LLM；LLM 另有出口到最終回答。需求作情境提示，不畫成已完成的真實交易調查。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
例如使用者說：幫我調查一筆失敗交易。LLM 就是模型，它判斷下一步要查什麼；Tool 是實際查資料或執行動作的程式。模型要求使用工具時，由外面的 Runtime 安排執行，再把結果交回模型。Runtime 是讓這個過程運作的系統，後面也會逐步補上檢查。模型看結果，再選下一步或交付回答。這個反覆過程就是最小 Tool Loop，這裡用交易查詢作流程示意，不是新增實測案例。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 03 會動！也確實只需要幾行程式碼

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 03
PRIMARY MESSAGE (not extra visible text): 這幾行足以說明基本循環，但還沒處理真實流程責任。
EXACT TITLE: "會動！也確實只需要幾行程式碼"
EXACT PAGE NUMBER: "03"
EXACT CONTENT:
while not done:
  response = call_llm(messages)
  if response.tool_call:
    result = execute(response.tool_call)
    messages.append(result)
  else:
    return response.final_answer
概念示意，省略訊息協定細節

COMPOSITION AND SEMANTICS:
- 構圖：中央一個大程式碼區，不套編輯器視窗。說明放程式碼旁的留白，不貼底。
- 焦點：call_llm、execute、append 所在三行，使用同一低強度藍色。底線：無。
- icon 與連線：不加 icon 或箭頭，保留縮排、字距與行距；所有字維持指定手寫筆觸。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
不用逐行讀程式碼，認三個動作就好：呼叫模型、執行工具、把結果加回下一輪資料。這是省略訊息協定的概念碼。簡單任務很快能動，所以我當時以為剩下只是增加工具。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 04 你以為這樣就結束了嗎？

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 04
PRIMARY MESSAGE (not extra visible text): 從能動的 Demo 轉入真實任務。
EXACT TITLE: "你以為這樣就結束了嗎？"
EXACT PAGE NUMBER: "04"
EXACT CONTENT:
真正的問題，現在才開始。

COMPOSITION AND SEMANTICS:
- 構圖：標題上方、主句居中，至少約 45% 留白。延續已確認的一句重點頁。
- 焦點：「現在才開始」用珊瑚色。底線：只在「現在才開始」下方一道，不跨到前半句。
- icon 與連線：無，不把留白補成裝飾。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
當任務變長、工具變多、資料變真實，可以跑和可以交付之間的差距，才開始出現。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 05 會動之後，問題才一個個攤開

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 05
PRIMARY MESSAGE (not extra visible text): 先讓觀眾記住六個問題，59 再回來回答。
EXACT TITLE: "會動之後，問題才一個個攤開"
EXACT PAGE NUMBER: "05"
EXACT CONTENT:
Tool Loop
給模型看什麼？
流程誰來守？
錯誤怎麼擋？
修改怎麼驗證？
決策怎麼還原？
成本怎麼掌握？

COMPOSITION AND SEMANTICS:
- 構圖：小型 Tool Loop 置中，六個問題攤開成六角，不加卡片框。由左上順時針依序為 Context、流程、錯誤、修改、決策、成本；59 完全沿用這組位置。
- 焦點：六個問題包圍原本很小的 Loop。底線：無，不把六個問題全部加紅。
- icon 與連線：依序用疊文件、分支流程、停止閘門、測試清單、路徑放大鏡、計量表。每個 icon 搭自己的問題，尺寸一致。用無箭頭的短連線表示責任關聯，不暗示六步必經順序。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
資訊怎麼給、流程誰來守、錯誤怎麼擋、修改怎麼驗證、決策怎麼還原、成本怎麼掌握。這不是我先畫好的一張架構圖，是每次做錯才長出來的問題。最後我們會回到同一張圖，看它們各自需要什麼責任。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 06 為什麼不用別人做好的？

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 06
PRIMARY MESSAGE (not extra visible text): 自研是為了掌握模型與執行邊界，不是宣稱現成框架缺乏能力。
EXACT TITLE: "為什麼不用別人做好的？"
EXACT PAGE NUMBER: "06"
EXACT CONTENT:
可替換模型
看得見執行
自己的 Runtime
模型看到的內容
工具參數
停止原因
接進既有企業規則

COMPOSITION AND SEMANTICS:
- 構圖：一個開放剖面的 Runtime，頂部是可替換模型接頭，側面展開三個觀察點，基座連到企業規則。
- 焦點：「自己的 Runtime」位在剖面中央。底線：無。
- icon 與連線：模型用可替換接頭，不用品牌 logo；觀察點用小放大鏡；企業規則用文件。只有接合線，不畫現成框架被打叉。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
現成框架和 SDK 都有價值。Runtime 就是剛才包在循環外、負責實際安排執行的系統。我選擇自己做，是想自由換模型，也能查清楚模型看到什麼、工具收到什麼參數、為什麼停下來，並接入公司既有規則。今天分享的是這些責任怎麼長出來，不是要求大家都從頭自研。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 07 Tool 回什麼，都要放進 Context 嗎？

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 07
PRIMARY MESSAGE (not extra visible text): 先定義 Context 與其中的工作說明，再問工具結果需要放多少。
EXACT TITLE: "Tool 回什麼，都要放進 Context 嗎？"
EXACT PAGE NUMBER: "07"
EXACT CONTENT:
工具回傳
全部放進去？
Context
這輪給模型看的內容
工作說明 Skill
對話與必要資料
下一步需要什麼？

COMPOSITION AND SEMANTICS:
- 構圖：左側一包工具資料，右側一份較大的 Context 文件，內含工作說明與對話／資料兩區。問句靠近交付箭頭，不再增加第四種名詞或術語表。
- 焦點：「下一步需要什麼？」。底線：可只畫在「需要什麼」下方。
- icon 與連線：工具文件到 Context 疊文件只有一條帶問號的箭頭。Skill 是 Context 文件內的一張工作說明，不畫成執行工具。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
Context 是這一輪交給模型看的內容，包括工作說明、對話和工具結果。這裡的 Skill，就是描述這個任務要怎麼做的工作說明與流程規則，不是另一個執行工具。一開始我把工具回傳全部加進去，資料多了才發現要先問下一步需要什麼。選取、壓縮、分類、Ref 都可以選用，並非每個任務都要做全套。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 08 同一份資訊，放的位置也有差

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 08
PRIMARY MESSAGE (not extra visible text): 位置效果與 Context 長度是不同問題，不能用研究曲線代替 Agent 實測。
EXACT TITLE: "同一份資訊，放的位置也有差"
EXACT PAGE NUMBER: "08"
EXACT CONTENT:
任務表現
較高
較低
相關資訊的位置
開頭
中間
結尾
位置效果示意

COMPOSITION AND SEMANTICS:
- 構圖：完整 X／Y 軸與淡網格，X 為資訊位置，Y 為定性任務表現。單一平滑曲線示意中間較低；不放百分比、偽造樣本點或模型圖例。
- 焦點：曲線中段的下降區，旁邊直接標「位置效果示意」。底線：無。
- icon 與連線：不加 icon。曲線不可延伸成流程箭頭，軸標必須大且靠近軸，不壓線。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
Lost in the Middle 在多文件問答與鍵值檢索設定中觀察到相關資訊位置的影響。這不表示所有模型只看頭尾，也不能直接推論我的 Agent 為什麼跳步。這張只提醒我們：放進去，不等於都能有效利用。來源：[Lost in the Middle](https://arxiv.org/abs/2307.03172)，本圖為概念示意，不重製特定研究數據。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 09 我的測試裡，開始出現這些錯誤

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 09
PRIMARY MESSAGE (not extra visible text): 錯誤出現在不同位置，不能全歸因於 Context 太長。
EXACT TITLE: "我的測試裡，開始出現這些錯誤"
EXACT PAGE NUMBER: "09"
EXACT CONTENT:
讀規則：漏看
取資料：抓錯
走流程：跳步
下結論：無根據
不同失敗，分開追查

COMPOSITION AND SEMANTICS:
- 構圖：一條任務路徑標出四個觀察位置，前三處淡一些，最後的結論文件較突出。
- 焦點：「下結論：無根據」，引出下一頁。底線：無。
- icon 與連線：規則文件、資料夾、分支路徑、結論文件，左至右。位置連線只表示工作順序，不表示前一錯誤必然造成後一錯誤。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
我看過漏規則、抓錯 Tool Result、跳步和無根據結論。它們是不同失敗，不能只說一句 Context 太長就算找到原因。先看最容易讓人誤信的一種。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 10 Log 沒有說的，模型自己補上了

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 10
PRIMARY MESSAGE (not extra visible text): 真實資料片段與模型新增的因果主張，需要清楚拆開。
EXACT TITLE: "Log 沒有說的，模型自己補上了"
EXACT PAGE NUMBER: "10"
EXACT CONTENT:
資料片段
payment-service：timeout
其他服務：error
模型的結論
payment-service 是整體故障根因
未被證實
案例示意

COMPOSITION AND SEMANTICS:
- 構圖：左側兩筆可讀片段，右側一份回答。服務名稱保持深色，額外擴大的「整體故障根因」用珊瑚色，旁邊標「未被證實」。32 重用相同片段與主張。
- 焦點：回答裡超出資料的那一段。底線：無，用一段紅色虛線引出疑點即可。
- icon 與連線：Log 紙張與回答文件，不畫機器人。資料到回答用一般閱讀箭頭；不得畫出兩個 error 間已證實的因果箭頭。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
這裡的 Log，是被調查系統的事件紀錄。ELK 是查這些紀錄的系統，名稱不是重點。紀錄確實出現 timeout，也就是等待逾時，但模型可能把局部錯誤說成整個系統的根因。這種超出資料、卻說得像已確認的內容，就是這裡要處理的幻覺。畫面依主稿重建，不是原始 Log 截圖。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 11 時間接近，不代表存在因果

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 11
PRIMARY MESSAGE (not extra visible text): 共同出現和時間先後，尚不足以支持根因判斷。
EXACT TITLE: "時間接近，不代表存在因果"
EXACT PAGE NUMBER: "11"
EXACT CONTENT:
時間順序
payment-service timeout
其他服務 error
造成？
缺少因果證據
案例示意

COMPOSITION AND SEMANTICS:
- 構圖：上半部正常時間軸承載兩個事件；下半部用同樣兩個事件端點檢視因果，中央留明顯缺口。
- 焦點：因果連線的缺口與「缺少因果證據」。底線：無。
- icon 與連線：事件都是小文件。時間軸是實線；待驗證因果用珊瑚虛線並標「造成？」。不能讓兩種線看起來都已成立。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
幾筆 Log 可能都是真的，時間也可能接近，但中間缺了建立因果的資訊。合理故事不等於已被證明的原因。後面談 Evidence，會回來處理這個缺口。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 12 先讓模型看到分析需要的資料

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 12
PRIMARY MESSAGE (not extra visible text): Context Shaping 是依問題選用的處理方法，不是固定四步，也不保證消除幻覺。
EXACT TITLE: "先讓模型看到分析需要的資料"
EXACT PAGE NUMBER: "12"
EXACT CONTENT:
這次要分析的問題
必要片段
縮小時間窗
保留必要欄位
依問題分組
挑代表片段
依任務選用
原始資料仍保留

COMPOSITION AND SEMANTICS:
- 構圖：中央一份聚焦問題的 Context，四項方法作為旁邊的編輯註記。完整資料文件置於側後方，不畫成被丟掉。
- 焦點：中央「必要片段」。底線：無。
- icon 與連線：時鐘、欄位文件、分組資料、摘錄紙張四種小 icon，分別指向中央資料的不同位置。沒有方法彼此相連的流水線。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
先處理這次分析需要看什麼：依問題縮小時間窗、保留必要欄位，或分組、挑代表片段。原始 Log 仍保留。整理資料可以讓模型比較容易利用，但不等於它寫出的因果就成立。後面會回到同一案例，檢查結論的證據。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 13 這一步只需知道成功與否，再傳 Ref

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 13
PRIMARY MESSAGE (not extra visible text): 用控制判斷案例介紹 Ref 是定位資料的取件編號，並非壓縮後內容。
EXACT TITLE: "這一步只需知道成功與否，再傳 Ref"
EXACT PAGE NUMBER: "13"
EXACT CONTENT:
數千行 JSON
資料取得成功？
本例：HTTP 200
成功後傳 data_ref
Ref：資料的取件編號

COMPOSITION AND SEMANTICS:
- 構圖：左側大量資料頁，右側放大成功狀態與取件標籤。資料頁不塞可讀假 JSON，短解釋緊貼 Ref。
- 焦點：小型 Ref 與完整資料的大小對比。底線：無。
- icon 與連線：資料文件、狀態標記與 Ref 紙籤。只讓狀態進入判斷，完整資料仍在文件位置，不能把大文件畫成被壓成小標籤。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
這是另一個 API 案例：回傳有幾千行 JSON，但這一步只需知道資料取得是否成功，原案例以 HTTP 200 判斷。成功後把 data_ref 交給下一個工具。Ref 像取件編號，用來定位保存的資料，不是把內容壓縮成幾個字。單看這個成功判斷，程式也能做；它只是整個任務中的資料交接，不表示每一步都需要模型。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 14 Data Ref 讓 Tool 按需取回完整資料

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 14
PRIMARY MESSAGE (not extra visible text): 系統保存完整資料，模型傳控制資訊，Tool 依 Ref 取資料。
EXACT TITLE: "Data Ref 讓 Tool 按需取回完整資料"
EXACT PAGE NUMBER: "14"
EXACT CONTENT:
完整資料
下一步操作
Tool A
System State / DB
status + data_ref
LLM
選擇下一步
Tool B
input: data_ref
按 Ref 取回

COMPOSITION AND SEMANTICS:
- 構圖：沿用已認可的雙層 Data Ref 構圖。上層「完整資料」，下層「下一步操作」。使用中文標示兩條路徑，縮短英文縮寫負擔，不放底部重複結論。
- 焦點：模型傳 Ref，Tool B 仍取得完整資料。底線：無。
- icon 與連線：Tool A 到 DB 是完整資料；完成回傳的 status + data_ref 到 LLM，再到 Tool B。Tool B 向 DB 的虛線標「按 Ref 取回」，表示解析／讀取請求，不混成資料流向。原圖僅作構圖參考，文案與安全區以本稿為準。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
上面是完整資料，保存在 Runtime 的狀態或儲存層；下面是下一步操作。模型知道取得資料成功，依工作說明選下一個工具，並傳出取件編號。Tool B 由系統執行，依 Ref 取得原始內容。若下一步是請模型分析內容，仍要把相關片段交給模型，不是永遠只給編號。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 15 Context 放得下，任務就做得完嗎？

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 15
PRIMARY MESSAGE (not extra visible text): 從輸入選擇轉向任務完成能力，不暗示下一頁測的是整理效果。
EXACT TITLE: "Context 放得下，任務就做得完嗎？"
EXACT PAGE NUMBER: "15"
EXACT CONTENT:
輸入能容納
任務能完成？
完成必要步驟
交付必要內容

COMPOSITION AND SEMANTICS:
- 構圖：左側文件在 Context 邊界內，右側任務清單只列完成步驟、交付內容兩項。這裡建立「完成」的閱讀基準，下一頁才看次數。
- 焦點：「任務能完成？」。底線：只在「能完成」下方一道。
- icon 與連線：左側疊文件，右側清單。不畫容量長條或因果箭頭，也不把兩項清單冒充原始完整評分表。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
前面問哪些資料值得給，現在問放得下之後能不能完成。接下來的觀察看工作流是否走完、必要內容是否交付，不是單題答案寫得漂不漂亮。原稿記錄的失敗包括漏掉摘要工具、漏警告、提早停止。我們先帶著這個完成概念，再看測試次數。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 16 同一個任務，完成率出現差異

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 16
PRIMARY MESSAGE (not extra visible text): 三組有限樣本呈現差異，不足以把所有失敗歸因於單一因素。
EXACT TITLE: "同一個任務，完成率出現差異"
EXACT PAGE NUMBER: "16"
EXACT CONTENT:
模型
Context（tokens）
成功次數
A：26b-a4b
10k
9/10
A：26b-a4b
30k
4/10
B：31b
30k
9/10
每組 10 次，實務觀察
工作說明、測資、工具、生成設定固定

COMPOSITION AND SEMANTICS:
- 構圖：三列對齊矩陣。模型與 Context 在左，十個結果格在中，成功次數在右；兩句限制在矩陣旁或緊接其下，保持大字與安全區。
- 焦點：第二列 4/10，其餘保持較低彩度。底線：無。
- icon 與連線：第一列9勾1叉、第二列4勾6叉、第三列9勾1叉，各恰好10格。格子只表示總次數，不宣稱真實執行順序。不畫因果箭頭或無依據的性能倍率。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
這裡的 tokens，是模型處理文字所用的單位，不是固定對應中文字數。10k 是一萬 tokens，30k 是三萬。先把兩個模型叫 A 和 B：A 在10k十次成功九次，30k十次成功四次；B在30k十次成功九次。工作說明、測資、工具與 Temperature 固定，成功次數沿用原測試判定。這是小樣本工作流觀察，不是整理前後實驗，也不足以證明所有失敗只由長度造成。完整模型名稱為 gemma-4-26b-a4b-it-mlx 與 gemma-4-31b-it。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 17 失敗時，流程少了哪些東西？

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 17
PRIMARY MESSAGE (not extra visible text): 把完成率拆成具體行為，讓觀眾知道「失敗」的意思。
EXACT TITLE: "失敗時，流程少了哪些東西？"
EXACT PAGE NUMBER: "17"
EXACT CONTENT:
漏呼叫摘要工具
漏掉警告
提早停止
失敗型態示意

COMPOSITION AND SEMANTICS:
- 構圖：三條對齊短軌跡，分別突出跳過工具、報告漏警告、提前到終點，不加 API 名稱。
- 焦點：三種不同缺口。底線：無。
- icon 與連線：第一條繞過工具文件，第二條報告的警告位置留空，第三條停止點提前。這是失敗型態，不能畫成同一次執行全部發生。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
原稿記錄的失敗包括沒呼叫摘要工具、漏掉 Warning，也就是警告資訊，或過早停止。這裡的摘要工具是固定組裝報告的程式，下一章會完整說明。這些例子讓我們知道失敗可能是少做必要事情，不只是回答文筆不好。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 18 任務穩定性，要連同執行條件看

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 18
PRIMARY MESSAGE (not extra visible text): Context 負載、模型能力與流程複雜度，是需要一起比較的條件。
EXACT TITLE: "任務穩定性，要連同執行條件看"
EXACT PAGE NUMBER: "18"
EXACT CONTENT:
同一個任務
Context 負載
模型能力
流程複雜度
實測完成情況

COMPOSITION AND SEMANTICS:
- 構圖：一個任務文件置中，三個等層級條件環繞，旁接完成清單。文字短而清楚，不使用乘法公式。
- 焦點：「同一個任務」連同周圍三個條件一起閱讀。底線：無。
- icon 與連線：資料疊層、模型接頭、分支流程。條件到任務用無箭頭關聯線；任務到完成清單才表示測試觀察。不得用無資料的長短條表示影響大小。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
不要只看資料量，還要看使用哪個模型、這次有多少步驟和分支。這些是一起比較的條件，不是影響大小的公式。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 19 失敗，是在什麼條件下發生？

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 19
PRIMARY MESSAGE (not extra visible text): 用剛才的失敗當主體，說明紀錄服務於比較與追查。
EXACT TITLE: "失敗，是在什麼條件下發生？"
EXACT PAGE NUMBER: "19"
EXACT CONTENT:
漏呼叫摘要工具
模型 A：26b-a4b
Context：30k tokens
工作說明版本
輸入資料 Ref
測試情境
紀錄結構示意

COMPOSITION AND SEMANTICS:
- 構圖：上方是一筆失敗摘要，中間放已知模型與負載，下方三個相鄰註記表示尚需保存的追查資訊。不畫虛構 Skill hash 或實際 Run ID。
- 焦點：同一個錯誤與其條件綁在一起。底線：無。
- icon 與連線：失敗清單、版本標籤、Ref 紙籤、測試文件。註記用短引線連回失敗，不連成已證實根因鏈。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
每次失敗都要綁住當時條件：哪個模型、多少資料、哪版工作說明、哪個測試情境。測試情境就是這一次要它做什麼，以及怎樣算完成。這樣才能比較，不會只留下『模型怪怪的』。同時出現的條件仍不等於已確認的根因。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 20 先整理 Context，再評估模型是否適合

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 20
PRIMARY MESSAGE (not extra visible text): 資訊選擇、真實任務測試與失敗條件紀錄共同支持改善。
EXACT TITLE: "先整理 Context，再評估模型是否適合"
EXACT PAGE NUMBER: "20"
EXACT CONTENT:
給必要資訊
跑真實任務
留下失敗條件

COMPOSITION AND SEMANTICS:
- 構圖：三個短動作沿同一閱讀基線排列，沒有大卡片或第二段結論。
- 焦點：三個可執行動作，第三個接向後面的追查能力。底線：無。
- icon 與連線：Context 文件、測試清單、Run 記錄；以細短線表示工作關聯，不表示完成這三件事就保證成功。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
遇到長任務失敗，我先看是否給了不必要資料，再用真實任務測試模型，保留條件供比較。不是每次出錯，都直接加大模型或 Context。資訊整理完，下一個問題是流程。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 21 SOP 寫清楚了，它就會照做嗎？

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 21
PRIMARY MESSAGE (not extra visible text): 開啟 Workflow 問題，暫時不重複展示跳步圖。
EXACT TITLE: "SOP 寫清楚了，它就會照做嗎？"
EXACT PAGE NUMBER: "21"
EXACT CONTENT:
接下來，看一份摘要怎麼出錯。

COMPOSITION AND SEMANTICS:
- 構圖：大標題與一份簡潔摘要文件，文件內不用假字填滿。為下一頁完整案例留出懸念。
- 焦點：「摘要怎麼出錯」。底線：可只在此短句下方一道。
- icon 與連線：一份報告 icon，不畫路徑、不畫 Guard，避免把22與23的內容提早演完。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
SOP就是標準作業流程。接下來用主稿的摘要案例看：步驟和輸出要求都寫進工作說明了，模型仍可能自行回答就結束。先看要求，再看實際損失。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 22 工作說明要求：交給摘要 Builder

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 22
PRIMARY MESSAGE (not extra visible text): 先讓觀眾理解具體契約，這頁只看應有路徑。
EXACT TITLE: "工作說明要求：交給摘要 Builder"
EXACT PAGE NUMBER: "22"
EXACT CONTENT:
Skill：任務工作說明
分析差異
摘要 Builder
正式報告
Builder：固定組裝報告的工具
案例示意

COMPOSITION AND SEMANTICS:
- 構圖：一份工作說明展開為三個大型節點，分析差異、摘要 Builder、正式報告由左到右。Builder 的白話解釋靠近工具，後續頁不反覆重印定義。
- 焦點：中間的摘要 Builder。底線：無。
- icon 與連線：分析是放大鏡文件，Builder 是扳手文件，報告是輸出文件。工作說明用開放括號關聯整條流程，節點以實線相連，不能讓 Skill 自己看起來在執行動作。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
這裡的任務是交付一份有固定要求的差異分析報告。Skill要求分析後呼叫摘要Builder，再交付正式報告。Builder就是前面提到的摘要工具，API名稱是build_execution_summary。它用程式按既定規格組裝報告，不是另一個模型。報告需要的欄位、分類和警告，不能臨時由文筆決定。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 23 它跳過摘要 Builder，自己交了答案

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 23
PRIMARY MESSAGE (not extra visible text): 在既定路徑上看見實際跳步，與22形成明確差異。
EXACT TITLE: "它跳過摘要 Builder，自己交了答案"
EXACT PAGE NUMBER: "23"
EXACT CONTENT:
分析差異
摘要 Builder
未呼叫
模型自行摘要
Final Answer
案例示意

COMPOSITION AND SEMANTICS:
- 構圖：沿用22節點位置，中間工具變成空心輪廓。珊瑚色實際路徑繞過工具，經「模型自行摘要」到回答。
- 焦點：被繞過的「摘要 Builder／未呼叫」。底線：無。
- icon 與連線：工具 icon 不變；模型自行摘要使用紫色對話加文件。正確路徑淡化，實際繞路清楚但不跨文字。不把「未呼叫」放到輸出文件上造成誤讀。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
但模型有時完成分析，就自行寫出最終摘要，把中間的摘要 Builder 跳過了。系統不一定報錯，使用者甚至看得到一份有頭有尾的回答。這就是為什麼只看『有沒有回答』很容易誤判。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 24 自行摘要，漏了報告需要的內容

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 24
PRIMARY MESSAGE (not extra visible text): 把跳步轉成可見的交付缺漏，建立 Builder 的必要性。
EXACT TITLE: "自行摘要，漏了報告需要的內容"
EXACT PAGE NUMBER: "24"
EXACT CONTENT:
要求的報告
模型自行摘要
分類結果
必要格式
缺漏
不符
警告、統計、明細也有固定要求
案例示意

COMPOSITION AND SEMANTICS:
- 構圖：兩份同尺寸報告對照，只以分類結果、必要格式兩列呈現主稿已確認的損失。其他固定要求放在報告旁的留白，不新增未證實的漏項。
- 焦點：模型摘要中的缺漏與格式不符。底線：無。
- icon 與連線：兩份報告用相同文件 icon，欄位對齊。缺漏用對應位置的留空和文字表達，不用密集假表格填滿。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
主稿這個案例出現的是格式不符、分類結果漏掉。完整報告還有警告、統計和明細等固定要求。這些內容給下游使用，不能只因為文字讀起來順，就認定交付完成。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 25 摘要 Builder 用程式組裝固定報告

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 25
PRIMARY MESSAGE (not extra visible text): 模型負責判斷與呼叫，Builder 依輸出契約組裝，不泛化到所有回答。
EXACT TITLE: "摘要 Builder 用程式組裝固定報告"
EXACT PAGE NUMBER: "25"
EXACT CONTENT:
LLM
判斷下一步
傳 data_ref
摘要 Builder
按固定規格組裝
分類、警告、統計、明細
正式報告
程式也需要測試

COMPOSITION AND SEMANTICS:
- 構圖：參考已認可的責任交接圖，左側模型判斷、中央 Ref 交接、右側工具與報告。固定內容以靠近 Builder 的兩行文字表示，不另開四張卡片。
- 焦點：模型與程式在 Ref 位置交接責任。底線：無。
- icon 與連線：LLM 用紫色對話文件，摘要 Builder 用藍色工具文件。LLM 傳 Ref 到 Builder，由 Builder 取得資料並組裝報告；沒有模型直接繞向正式報告的捷徑。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
LLM 判斷下一步、傳資料的 Ref，摘要 Builder 按既定規格取資料、組裝分類、警告、統計與明細。這裡固定的是交付規格，不代表所有分析都改成程式。開放式判讀仍可交給模型。Builder 本身也可能有 Bug，所以後面仍需要測試。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 26 完成條件，包含必要工具的結果

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 26
PRIMARY MESSAGE (not extra visible text): 結束前檢查必要操作與輸出結果，不能只接受模型說 done。
EXACT TITLE: "完成條件，包含必要工具的結果"
EXACT PAGE NUMBER: "26"
EXACT CONTENT:
改善設計：交付前檢查
必要操作完成？
摘要 Builder 結果有效？
通過
交付報告
未通過
待處理／回報失敗
設計示意

COMPOSITION AND SEMANTICS:
- 構圖：前面失敗出口改為一個交付前檢查點。兩個條件靠近同一檢查點，通過、未通過兩路清楚分開。『改善設計』與檢查點一起標示，不冒充新測試結果。
- 焦點：出口前多了實際檢查。底線：無。
- icon 與連線：檢查清單通過才連到報告；未通過連待處理／失敗。沒有無限重試箭頭，也不能將收到任意工具回傳直接等同結果有效。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
這裡開始講改善設計，不是宣稱加完就已經測到零失敗。交付前由 Runtime 查實際狀態：必要操作做完了嗎，摘要 Builder 的結果符合要求嗎？缺少時依規則補步驟、轉人工或回報失敗，不接受模型一句『完成了』就當成功。後面會再回看原先失敗，說明怎麼追查與驗證。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 27 流程都寫成程式，還需要 LLM 嗎？

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 27
PRIMARY MESSAGE (not extra visible text): 固定規則可以寫死，語意判讀與情境選擇仍可交給模型。
EXACT TITLE: "流程都寫成程式，還需要 LLM 嗎？"
EXACT PAGE NUMBER: "27"
EXACT CONTENT:
理解差異，選下一步
LLM
完成條件、固定輸出
程式碼

COMPOSITION AND SEMANTICS:
- 構圖：同一份差異分析文件在中央，左側標出語意判斷，右側標出固定契約。不畫兩個互相競爭的產品。
- 焦點：同一任務內的分工。底線：無。
- icon 與連線：紫色註解文件對應 LLM，藍色檢查清單對應程式碼；用開放括號連到任務的相應部分，不以箭頭暗示誰全面取代誰。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
這是很自然的疑問：都規定成這樣，為什麼不直接寫 if-else？能清楚寫成固定判斷的，就可以交給程式。LLM 負責自然語言理解、判讀差異與選擇下一步，固定格式和完成條件則由系統掌握。簡單任務也不需要因此全部做成複雜流程。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 28 LLM 選下一步，Runtime 檢查能不能走

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 28
PRIMARY MESSAGE (not extra visible text): 模型提出動作，Runtime 用實際狀態判斷是否符合前置條件。
EXACT TITLE: "LLM 選下一步，Runtime 檢查能不能走"
EXACT PAGE NUMBER: "28"
EXACT CONTENT:
LLM：準備交付
Runtime：摘要 Builder 結果有效？
有
允許交付
沒有
擋下，待補必要步驟
設計示意

COMPOSITION AND SEMANTICS:
- 構圖：從模型提案到完成檢查，再分成清楚兩路。下方「沒有」分支較突出，直接對應23的跳步。
- 焦點：「擋下，待補必要步驟」。底線：無。
- icon 與連線：提案用紫色文件、Runtime 用藍色檢查點；結果有／沒有都從檢查點出發。禁止 LLM 直接繞過檢查到交付，也不把 Runtime 畫成另一個模型猜測。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
沿用這個改善設計，模型可以提出『我要交付』，但 Runtime 會查這次執行留下的實際結果，再決定能不能放行。工作說明幫模型選路，程式檢查守住不能跳過的條件。兩者一起用，並不衝突。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 29 哪些規則，不能只靠模型記得？

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 29
PRIMARY MESSAGE (not extra visible text): 以違反規則的後果決定責任，而非把所有偏好都程式化。
EXACT TITLE: "哪些規則，不能只靠模型記得？"
EXACT PAGE NUMBER: "29"
EXACT CONTENT:
這條規則偶爾沒被遵守，能接受嗎？

COMPOSITION AND SEMANTICS:
- 構圖：一張規則紙和中央大問句，維持充足留白。
- 焦點：「能接受嗎」。底線：只在這四個字下方一道。
- icon 與連線：只保留規則文件，不放連續風險光譜或未定義高低刻度。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
Prompt就是交給模型的文字指令，有用但不一定每次都被遵守。先問規則失守的後果能不能接受，再決定哪些需要真正的系統檢查。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 30 Prompt 管偏好，Guard 守底線

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 30
PRIMARY MESSAGE (not extra visible text): 可以容許偶發偏差的先用 Prompt，不可違反的條件需要系統檢查。
EXACT TITLE: "Prompt 管偏好，Guard 守底線"
EXACT PAGE NUMBER: "30"
EXACT CONTENT:
可接受偶發偏差
語氣、表達偏好
Prompt 提醒
不可違反的條件
權限、必要步驟
Guard 檢查
檢查程式也需要驗證

COMPOSITION AND SEMANTICS:
- 構圖：兩個平行、對齊的責任區，各自從具體條件到處理方式。不要畫成 Prompt 升級為零錯誤程式碼。
- 焦點：左側提醒與右側攔截的行為差異。底線：無。
- icon 與連線：左側對話文件，右側實際閘門。區內垂直連線，不做跨區的高低比較箭頭；頁面沒有「零錯誤」標章。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
能接受偶發偏差的，可以先用 Prompt，也就是文字指令提醒。不可違反的條件，除了寫進工作說明，還要做成 Guard，讓系統真的檢查、攔截。像必要工具是否跑完、操作是否有權限，都不能只靠模型記住。重要規則仍要讓模型知道，只是不把是否遵守完全交給它。檢查本身也要驗證，不能保證所有錯誤都被攔下。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 31 把規則，變成真正的攔截點

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 31
PRIMARY MESSAGE (not extra visible text): 不同不可違反條件，需要不同機制，而不是一個通用盾牌。
EXACT TITLE: "把規則，變成真正的攔截點"
EXACT PAGE NUMBER: "31"
EXACT CONTENT:
參數不合規
檢查並擋下
缺少批准
等待批准
超過執行預算
停止執行
流程示意

COMPOSITION AND SEMANTICS:
- 構圖：三條短操作路徑上下對齊，各在真正檢查的位置停住。以白話問題與處理方式成對，不要求聽眾在此記三個英文模組名。
- 焦點：擋下、等待、停止各有不同用途。底線：無。
- icon 與連線：欄位檢查文件、批准閘門、計量表加停止符號各對應一條路。箭頭不能穿過停止位置，右側不接成功輸出。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
參數缺欄位或格式不符，可以用介面規格檢查，也就是 Schema 檢查。需要批准的操作先等批准，超過次數、時間或費用預算則停止。這些判斷都有可檢查條件。可是回答內容有沒有根據，還有另一種難度。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 32 查到 Log，還不能宣稱找到原因

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 32
PRIMARY MESSAGE (not extra visible text): 資料存在與資料能支持這個 Claim，是兩件事。
EXACT TITLE: "查到 Log，還不能宣稱找到原因"
EXACT PAGE NUMBER: "32"
EXACT CONTENT:
主張
payment-service 是整體故障根因
資料片段
payment-service：timeout
其他服務：error
只能確認出現錯誤
data_ref：整包資料
evidence_ref：相關片段
案例示意

COMPOSITION AND SEMANTICS:
- 構圖：沿用10的兩筆片段與同一句主張，這次放大主張到證據的連結。兩種 Ref 以相鄰短註記說明，不再重畫 Data Ref 全管線。
- 焦點：證據只支持「出現錯誤」，還不足以支持「整體故障根因」。底線：無。
- icon 與連線：主張文件指向兩筆資料，連線在「根因」語意處保留缺口，旁邊放限制文字。不能因有 evidence_ref 就把主張打綠勾。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
前面做 Context Shaping，是改善模型看到的資料。現在看回答裡每個結論憑什麼成立。data_ref 指一包資料，evidence_ref 定位與這個 Claim 有關的片段。片段只證明發生 timeout，不會自動證明它是整體根因。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 33 證據不足，就保留不確定性

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 33
PRIMARY MESSAGE (not extra visible text): 區分 Ref 有效性與語意支持程度，把不能確認的根因保留為待驗證。
EXACT TITLE: "證據不足，就保留不確定性"
EXACT PAGE NUMBER: "33"
EXACT CONTENT:
程式：Ref 有效？
模型評審／人工：證據足夠？
可確認：出現 timeout
待驗證：是否為根因
仍缺：跨服務關聯證據
案例示意

COMPOSITION AND SEMANTICS:
- 構圖：上方由左到右是引用有效性、語意支持程度兩層檢查。下方一份修正結論列可確認、待驗證、仍缺三行，保持大字。不把評審畫成真相保證器。
- 焦點：「待驗證：是否為根因」。底線：無。
- icon 與連線：Ref 檢查文件後接主張對照片段的放大鏡，再到結論。第一層的通過只屬於 Ref，不延伸成整份結論的綠勾。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
程式能查引用是否存在、能否取回資料，但資料和結論之間的意思是否相符，還需要語意判讀。Judge 在這裡指協助評估的模型評審，也可以由人工處理。多一個模型並不保證正確，評審也可能錯。我們要留下支持片段、標出待驗證部分，讓無根據定論更難直接交付，而不是宣稱幻覺已消失。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 34 人需要確認的是哪一件事？

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 34
PRIMARY MESSAGE (not extra visible text): 意圖確認與操作批准是兩種不同位置、不同問題的介入。
EXACT TITLE: "人需要確認的是哪一件事？"
EXACT PAGE NUMBER: "34"
EXACT CONTENT:
理解需求
理解對了嗎？
執行流程
允許操作嗎？
高風險操作
人的兩種確認

COMPOSITION AND SEMANTICS:
- 構圖：同一條任務路徑，在需求解讀後、風險操作前各設一個檢查點。兩個白話問題直接對齊相應位置，不堆縮寫。
- 焦點：確認理解與批准操作各在不同時間發生。底線：無。
- icon 與連線：前者是放大鏡需求文件，後者是批准閘門，不能都畫成同一個確定按鈕。不是每個任務都必須人工確認兩次。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
讓人在流程中介入，通常稱 HITL，Human in the Loop。這裡先分兩件事：模型有沒有理解對需求，以及人是否允許特定操作。前者是意圖確認，後者是操作批准。依任務風險安排，不是每一步都叫人按確定。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 35 把範圍與例外，攤開給人確認

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 35
PRIMARY MESSAGE (not extra visible text): 人應確認具體結構化條件，而不是只讀一段漂亮摘要。
EXACT TITLE: "把範圍與例外，攤開給人確認"
EXACT PAGE NUMBER: "35"
EXACT CONTENT:
分析最近三天失敗交易
排除人工處理過的案例
動作：分析
目標：失敗交易
範圍：最近三天
排除：人工已處理
後續：差異調查，可能開單
確認／修改／拒絕／補資料
案例示意

COMPOSITION AND SEMANTICS:
- 構圖：左側兩行需求，右側一份大型 Intent。以留白分區，不套表單 UI。五行欄位依序排列，處理方式放在同一份文件下緣內側，不貼畫面底部。
- 焦點：「排除：人工已處理」，與左側排除條件用同色呼應。底線：無。
- icon 與連線：需求用對話文件，Intent 用結構化文件；只有需求到整份 Intent 的一條箭頭。人確認的是完整 Intent，不把欄位各自連到不同處理選項。畫面不加入批准後直接開單的箭頭。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
例如使用者要求分析最近三天失敗交易，排除人工已處理的案例。把需求攤成動作、目標、範圍、排除條件，這份解讀叫 Intent，也就是任務意圖。人可以確認、修改、拒絕或補資訊。確認『你理解對了』不等於批准未來所有開單動作；預計後續流程也要讓人知道。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 36 Intent 錯了，後面全綠也沒有用

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 36
PRIMARY MESSAGE (not extra visible text): 工具執行成功不能替代需求理解正確。
EXACT TITLE: "Intent 錯了，後面全綠也沒有用"
EXACT PAGE NUMBER: "36"
EXACT CONTENT:
使用者要求：排除人工已處理
錯誤 Intent：未保留排除條件
Tool 執行成功
仍然處理錯誤範圍
案例示意

COMPOSITION AND SEMANTICS:
- 構圖：上方保留正確需求作基準，下方顯示排除條件遺失後的執行路徑，終點是錯誤範圍。
- 焦點：起點遺失的排除條件。底線：無。
- icon 與連線：綠勾只放在「Tool 執行成功」節點，不放在終點。錯誤 Intent 到錯誤範圍的路徑清楚；不把人畫成不會判錯的保證器。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
用剛才的需求來看，如果排除條件遺失，工具照收到的範圍執行仍可能成功，任務卻做錯。人修正後，後續應依核准 Intent 走，並留下原始解讀、修改與核准版本。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 37 高風險操作，先看懂再批准

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 37
PRIMARY MESSAGE (not extra visible text): 操作提案要讓人知道影響，而不是只顯示「確定嗎」。
EXACT TITLE: "高風險操作，先看懂再批准"
EXACT PAGE NUMBER: "37"
EXACT CONTENT:
操作提案：建立工單
範圍：近三天失敗交易
排除：人工已處理
預計變更：新增工單
風險：觸發後續處理
等待批准
案例示意

COMPOSITION AND SEMANTICS:
- 構圖：一份大型提案旁邊是尚未開啟的執行閘門；提案與閘門是主體，不畫彈出視窗。
- 焦點：「預計變更：新增工單」。底線：無。
- icon 與連線：工單文件到批准閘門，到閘門即停止。這裡只放已確認範圍的教學例子，不捏造實際筆數、金額或對象 ID。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
依風險規則，開單、寫入或外部通知可能需要批准。人在實際系統要看見具體對象、變更與影響範圍，這裡用工單提案示意。批准需要綁定那一份提案，不能只是沒有內容的「確定嗎」。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 38 批准後，執行前還要再檢查

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 38
PRIMARY MESSAGE (not extra visible text): 批准與執行之間的等待，可能使前置條件失效。
EXACT TITLE: "批准後，執行前還要再檢查"
EXACT PAGE NUMBER: "38"
EXACT CONTENT:
提案
批准
等待
重新檢查
條件仍成立
執行
條件已變
中止／重新提案
流程示意

COMPOSITION AND SEMANTICS:
- 構圖：上方主時間軸，中央保留寬一點的等待區，右側重新檢查後才分流。等待寬度只表達時間差，不表示量測時長。
- 焦點：等待之後的「重新檢查」。底線：無。
- icon 與連線：提案文件、批准標記、時鐘、檢查清單依序；檢查後才到執行或中止。禁止批准直接連執行，也不把每個失效提案自動重送批准。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
中間可能隔幾分鐘或幾小時，資料可能已被處理、狀態可能已更新。所以執行前要重新驗證條件。批准者、提案版本、當時看到的內容和重檢結果都要記錄，才能事後追查。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 39 回看那份漏了分類的摘要

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 39
PRIMARY MESSAGE (not extra visible text): 切換到 Agent 自己的執行紀錄，回顧前述失敗，不暗示改善後又實測失敗。
EXACT TITLE: "回看那份漏了分類的摘要"
EXACT PAGE NUMBER: "39"
EXACT CONTENT:
回看前面的失敗
分析工具已呼叫
回答已產生
摘要卻漏了分類
中間怎麼走到這裡？
追查示意

COMPOSITION AND SEMANTICS:
- 構圖：24的缺漏報告放右側，左側兩筆執行事件，中間留出要追查的決策關係。『回看前面的失敗』靠近報告作時間定位，不能藏在角落小字。
- 焦點：有事件，仍缺少執行關係。底線：無。
- icon 與連線：工具事件與回答文件都是 Agent 執行紀錄，不沿用10頁的業務 Log 內容。缺口放在關係線上，不能誤畫成工具完全沒留記錄。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
先分清楚：前面分析的是業務系統的 Log，現在要看的是 Agent 自己怎麼執行的紀錄。我們回看22–24頁那份失敗摘要，不是在說26–28的改善設計實測又失敗了。接下來用教學紀錄示範怎麼查，並不補造原始 Run。既然分析工具跑過、答案也有了，就要找它在哪一步決定直接交付。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 40 三種紀錄，回答三種問題

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 40
PRIMARY MESSAGE (not extra visible text): 執行事件、決策路徑與結論依據互相關聯，但用途不同。
EXACT TITLE: "三種紀錄，回答三種問題"
EXACT PAGE NUMBER: "40"
EXACT CONTENT:
操作紀錄
做了什麼？
決策路徑 Trace
怎麼走到這一步？
證據引用
結論憑什麼成立？

COMPOSITION AND SEMANTICS:
- 構圖：三列開放對照，左側紀錄名稱和 icon，右側白話問題。Trace 在決策路徑旁第一次明示，不另外堆完整英文複合名詞。
- 焦點：三種不同追查問題。底線：無。
- icon 與連線：工具文件、路徑放大鏡、結論連到資料片段。三列互不取代，不畫升級階梯或處理流水線。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
操作紀錄讓我們知道工具做了什麼，Trace 是執行路徑紀錄，讓我們查它怎麼走到這一步。證據引用則回到前面談的問題：這個結論根據哪段資料？這些都有用途。Trace 留的是系統看得到的狀態與選擇，不是保證讀到模型內部真正的想法。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 41 同一次執行，把紀錄連起來

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 41
PRIMARY MESSAGE (not extra visible text): 以同一摘要案例示範如何從輸出連回操作與決策。
EXACT TITLE: "同一次執行，把紀錄連起來"
EXACT PAGE NUMBER: "41"
EXACT CONTENT:
舊執行 Run S
操作：分析差異
決策：直接摘要
輸出：摘要報告
報告中的主張
對應資料片段
追查示意

COMPOSITION AND SEMANTICS:
- 構圖：Run S 表示一整次舊執行，主路徑連操作、決策、報告。報告的一個主張另向下連資料片段，42放大同一決策。
- 焦點：能從問題報告沿關係找回前面紀錄。底線：無。
- icon 與連線：操作、決策、輸出用各自固定 icon。實線表示執行次序，虛線表示引用，不把引用畫成流程下一步。圖不宣告失敗報告的所有主張都有有效證據。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
Run 就是從接到任務到結束的一次執行。這裡叫 Run S，只是方便講解的代號。從有問題的報告回找工具操作，再找當時的決策；如果問題是某一句結論，就另外看它引用哪段資料。關聯欄位與 Ref 要能把這些紀錄連回同一次執行。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 42 停下來的那一步，當時依據是什麼？

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 42
PRIMARY MESSAGE (not extra visible text): 具體保存可見輸入、狀態、規則與已輸出的決策理由。
EXACT TITLE: "停下來的那一步，當時依據是什麼？"
EXACT PAGE NUMBER: "42"
EXACT CONTENT:
Run S：直接摘要
工作要求：使用摘要 Builder
當時狀態：分析完成
可見輸入：分析結果 Ref
停止規則：資訊足夠時停止
已輸出理由：可整理答案
決策紀錄示意

COMPOSITION AND SEMANTICS:
- 構圖：放大41的決策紀錄，以工作要求作基準，下方對齊狀態、輸入、停止規則與已輸出理由。新增基準後減少周邊裝飾，保留足夠行距，不把六行擠成小字表格。
- 焦點：要求使用 Builder，停止規則卻有模糊空間。底線：無。
- icon 與連線：只有需求文件、狀態與 Ref 的少量行首 icon。用短引線指向停止規則，不畫模型內部大腦、思考鏈或已證實根因箭頭。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
用這份教學紀錄看：工作要求有摘要 Builder，但假設另一段停止規則寫成『資訊足夠時停止』，就值得檢查兩者是否有歧義。這是用來教追查方法的示例文字，不是原始紀錄或已確認根因。狀態、可見輸入、適用規則與模型已輸出的說明都要留下，但不能把說明當成模型內部真正原因的證明。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 43 追查歷史 Run，要看當時的 Skill

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 43
PRIMARY MESSAGE (not extra visible text): 歷史執行必須綁定歷史規則，不能拿最新版替代。
EXACT TITLE: "追查歷史 Run，要看當時的 Skill"
EXACT PAGE NUMBER: "43"
EXACT CONTENT:
舊執行 Run S
當時：Skill v1
資訊足夠時停止
修改候選：Skill v2
摘要 Builder 有效才交付
尚未接受
版本示意

COMPOSITION AND SEMANTICS:
- 構圖：舊執行在左，當時v1在右上，候選v2在右下。v2的候選狀態與其文字放在一起，不用綠勾或最新版標籤暗示已接受。
- 焦點：Run S 只對應當時v1。底線：無。
- icon 與連線：舊執行與v1用實線引用，v2保持空間，不接到舊Run。v2修改內容留給44放大，不畫新的執行結果。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
歷史執行要綁當時那版工作說明，不能拿後來修改的文字解釋舊錯誤。圖中v1是舊執行使用的版本，v2只是接下來要測的候選，還沒接受。實作上除了版本號或hash，也要保留可取得的原始內容。這一組版本代號都只用於教學。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 44 模糊停止條件，可以提出具體修改

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 44
PRIMARY MESSAGE (not extra visible text): Trace 支持找出待改善規則，但候選 Diff 仍須驗證。
EXACT TITLE: "模糊停止條件，可以提出具體修改"
EXACT PAGE NUMBER: "44"
EXACT CONTENT:
當時 v1
資訊足夠時停止
候選 v2
必要操作完成
摘要 Builder 結果有效才交付
待驗證，尚未接受
修改示意

COMPOSITION AND SEMANTICS:
- 構圖：同一張工作說明的原規則與候選修改上下對照。候選兩行是同一個完成條件群組，不拆成兩個互斥選項。
- 焦點：停止文字與實際完成條件對齊。底線：無。
- icon 與連線：原規則指向修訂文件，終點是待驗證候選，不直接到正式執行。只保留一個來自42停止規則的引用線索。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
候選v2把『資訊足夠』換成能對照的完成條件。這是在讓工作說明更清楚，不是用改文字取代Guard。兩者用途不同：工作說明引導模型選路，Runtime在沒照做時實際擋住。這個候選還沒有證明有效，接下來要在測試中看是否改善，連Guard有沒有擋對也一起驗證。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 45 修改 Agent，要測整次執行

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 45
PRIMARY MESSAGE (not extra visible text): 執行時的 Guard 與測試時的 Eval 互補，Eval 需要看結果與過程。
EXACT TITLE: "修改 Agent，要測整次執行"
EXACT PAGE NUMBER: "45"
EXACT CONTENT:
開發測試
測試中的 Agent
Guard：執行時攔截
Eval：檢查整次執行
答案
路徑
參數

COMPOSITION AND SEMANTICS:
- 構圖：中間是一條測試中的Agent任務路徑，Guard位在路徑內的操作邊界。外側Eval檢視括號涵蓋全程，『開發測試』靠近括號，不畫成第四個執行工具。
- 焦點：內部執行檢查與外部測試範圍的差別。底線：無。
- icon 與連線：Guard是閘門，Eval是放大鏡，指向答案、路徑與參數。檢視線沒有資料流箭頭，不能讓人以為任務要呼叫三個Eval工具才結束。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
現在換到開發測試。Eval就是用測試情境評估Agent，我們讓候選版本實際跑任務，再檢查整次結果。Guard是在任務進行中攔截，Eval則在測它有沒有做對，包括Guard本身是否有效。要看最後答案，也要看走過哪些步驟、工具參數是否合規。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 46 先看報告，有沒有交付必要內容

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 46
PRIMARY MESSAGE (not extra visible text): 用同一摘要報告說明輸出完整性、格式與結論檢查。
EXACT TITLE: "先看報告，有沒有交付必要內容"
EXACT PAGE NUMBER: "46"
EXACT CONTENT:
結果檢查 Outcome Eval
分類結果完整？
格式符合？
警告保留？
結論有根據？
摘要報告

COMPOSITION AND SEMANTICS:
- 構圖：24的同一份報告放大，在四個相關位置加檢查註記；不用四張卡片。
- 焦點：報告本身的完整性，不混入操作順序。底線：無。
- icon 與連線：報告文件與小檢查清單；註記引線連到對應區域，避免互相穿越。問題用問號，不預先畫全通過。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
先看使用者會收到的報告。分類是否完整、格式是否符合、必要警告是否保留、結論有沒有超出證據，這些是結果檢查，也叫Outcome Eval。但一份看似正確的報告，仍可能是走錯流程剛好得到的。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 47 答案看似正確，仍要檢查執行路徑

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 47
PRIMARY MESSAGE (not extra visible text): 用摘要案例比對契約要求與實際 Operation，而不是抽象 A／B／C。
EXACT TITLE: "答案看似正確，仍要檢查執行路徑"
EXACT PAGE NUMBER: "47"
EXACT CONTENT:
路徑檢查
規定路徑
分析差異
摘要 Builder
交付
實際路徑
分析差異
直接摘要
交付
漏呼叫摘要 Builder
案例示意

COMPOSITION AND SEMANTICS:
- 構圖：兩條三節點軌跡上下對齊，同一位置直接比較摘要 Builder與直接摘要；上方基準深藍，下方錯誤差異珊瑚色。
- 焦點：第二個節點的差異。底線：無。
- icon 與連線：兩列分析與交付的 icon 相同；中間一個是工具文件，一個是模型生成文件。節點箭頭各自留在自己的列，不交叉。這頁是檢查結果，不重講 Builder 的組裝原理。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
再檢查它怎麼完成：必要工具有沒有真的執行，順序、分支和停止是否符合這個測試情境，這類檢查叫Trajectory Eval。現在沿用摘要案例，看的是檢查方法，不是在重演另一個新的實測失敗。這個任務要求摘要Builder，其他任務也可能允許多條合法路徑。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 48 Tool 選對了，Ref 卻沒有傳進去

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 48
PRIMARY MESSAGE (not extra visible text): 把工具選擇正確與呼叫契約正確分開檢查。
EXACT TITLE: "Tool 選對了，Ref 卻沒有傳進去"
EXACT PAGE NUMBER: "48"
EXACT CONTENT:
工具呼叫檢查
摘要 Builder
需要：data_ref
實際：未提供
工具選對，呼叫仍不合規
錯誤類型示意

COMPOSITION AND SEMANTICS:
- 構圖：一個放大的工具呼叫，data_ref 的應有位置清楚留空；工具名稱旁僅以小勾標局部選擇正確，缺少參數處突出。
- 焦點：「實際：未提供」。底線：無。
- icon 與連線：工具文件與缺少的 Ref 輸入位置。輸入箭頭停在缺口，不能連到成功生成的報告。不得捏造這是前述實測某一次的原始 Tool Call。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
第三層看工具呼叫細節，叫Tool Usage Eval。例如模型選對摘要Builder，卻漏傳資料取件編號，工具仍然不能照要求執行。Runtime應攔截，測試則檢查它確實擋下，而不是誤當成功。日期範圍、其他參數與錯誤處理，也都要依工具要求驗證。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 49 程式檢查與模型評審，各自負責什麼

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 49
PRIMARY MESSAGE (not extra visible text): 明確契約用確定性檢查，Judge 輔助語意判讀但不是保證器。
EXACT TITLE: "程式檢查與模型評審，各自負責什麼"
EXACT PAGE NUMBER: "49"
EXACT CONTENT:
程式檢查 Code
必要 Ref、格式、順序、預算
依明確規格檢查
模型評審 Judge
摘要完整性、推論、證據支持
評審仍可能判錯

COMPOSITION AND SEMANTICS:
- 構圖：兩個開放區域，每區一個實際檢查例型與一行限制，文字靠近對應物件。
- 焦點：檢查對象的不同，不是把 Judge 畫成較高階 Code。底線：無。
- icon 與連線：Code 用規則清單，Judge 用帶註解的主張文件。兩邊沒有升級箭頭，也不畫全能盾牌。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
回到前面證據那一頁的分工：有明確規格的，讓程式直接檢查。模型評審Judge則輔助判斷語意，例如是否漏掉重要意思，或結論是否超過證據。Judge不是不會錯的裁判，評分標準、引用依據與必要人工審查都要保留。能直接檢查的，也不必每次都多呼叫一個模型。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 50 踩過的坑，留進回歸測試

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 50
PRIMARY MESSAGE (not extra visible text): 先解釋每次修改要重測既有能力，再說明測試集從何累積。
EXACT TITLE: "踩過的坑，留進回歸測試"
EXACT PAGE NUMBER: "50"
EXACT CONTENT:
需求與 SOP
真實失敗
未覆蓋的分支
回歸測試集
修改後，重測既有案例

COMPOSITION AND SEMANTICS:
- 構圖：三個來源向右匯入同一疊測試文件。『修改後，重測既有案例』緊貼測試集，讓用途先於英文名詞。
- 焦點：真實失敗被保留下來，之後可以再次檢查。底線：無。
- icon 與連線：需求文件、失敗紀錄、分支流程各一個icon，三條短線經匯流點到測試集，不交叉，不用密集卡片。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
每次修改，都要確認以前會做的事情沒有被弄壞，這就是回歸測試，Regression。一個測試情境叫Scenario，多個情境放在一起就是測試集或Suite。來源包括需求文件和SOP、真實失敗，以及工作說明裡還沒測過的分支。這套案例會隨著使用慢慢增加。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 51 同一個案例，需要重跑看穩定性

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 51
PRIMARY MESSAGE (not extra visible text): 固定條件重跑，觀察成功與失敗，而非把單次 Pass 當保證。
EXACT TITLE: "同一個案例，需要重跑看穩定性"
EXACT PAGE NUMBER: "51"
EXACT CONTENT:
同一測試情境
固定執行條件
執行
再執行
持續重跑
彙總成功與失敗
模型仍可能選出不同路徑
重跑流程示意

COMPOSITION AND SEMANTICS:
- 構圖：同一測試情境與固定條件在上方，下方展開重複執行，末端匯入結果記錄。「模型仍可能選出不同路徑」緊貼軌跡，不放在低處小字。
- 焦點：同一情境要觀察多次執行。底線：無。
- icon 與連線：同一測試文件分送到重複執行的循環，再匯到結果記錄。三個執行標籤只表示展開方式，不宣稱只需三次或指定成功率。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
為什麼同一個案例還要重跑？因為即使工作說明與測試資料一樣，模型每次仍可能選出不同步驟或停止位置。固定可控條件和測試資料，多次執行後看成功與失敗，才會看到16頁那種穩定性差異。次數與接受門檻依風險和成本決定，有限樣本不是永遠成功的保證。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 52 修好這一個，卻弄壞另一個

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 52
PRIMARY MESSAGE (not extra visible text): 用主稿的修 A 壞 B 案例，讓全套 Regression 的理由成為畫面主角。
EXACT TITLE: "修好這一個，卻弄壞另一個"
EXACT PAGE NUMBER: "52"
EXACT CONTENT:
修改前
修改後
案例 A
失敗
通過
案例 B
通過
失敗
不能只重測 A
案例示意

COMPOSITION AND SEMANTICS:
- 構圖：二列二欄對照，A／B 是列，修改前／後是欄。狀態文字配勾叉，大而疏朗；不是一般表格截圖。
- 焦點：修改後 B 從通過變失敗。底線：無，讓這個新紅叉成為唯一主要風險焦點。
- icon 與連線：A 的失敗到通過、B 的通過到失敗，各在同一列水平連接，不畫 A 導致 B 的因果箭頭。A／B 是主稿回歸案例的教學代號，不新增測試數量或成功率。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
我曾修一個失敗案例，原本壞的通過了，其他情境卻出現原本會過、現在不過。修改工作說明可能影響別的分支或停止條件，所以不能只重測A。這就是前面保留回歸測試集的用途。圖中A、B只是教學代號，重點是看修改前後每個情境的差異。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 53 Agent 成本，來自整條執行鏈

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 53
PRIMARY MESSAGE (not extra visible text): 觀察整次 Run 的資源與時間，不只看單次 LLM call。
EXACT TITLE: "Agent 成本，來自整條執行鏈"
EXACT PAGE NUMBER: "53"
EXACT CONTENT:
LLM
Tool
檢查
輸出
需要時重試
Tokens 資料量
工具呼叫次數
重試次數
端到端延遲

COMPOSITION AND SEMANTICS:
- 構圖：一條 Run 上標出模型、工具、檢查與輸出；下方靠近主圖設四個指標標籤，不放無實測長短條。
- 焦點：成本觀測涵蓋整條鏈。底線：無。
- icon 與連線：對話文件、工具文件、檢查清單、輸出文件順向排列。重試為可選回路，只標「需要時重試」，不是必經節點。四個指標不是可直接相加的四筆金額。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
前面為了可靠，增加工具檢查、必要時重試、語意評審和人工等待。這些都可能增加資源或時間開銷。Tokens是模型處理的資料量單位，還要一起看工具呼叫次數、重試次數、從開始到交付的時間。它們不是可以直接相加的四筆金額，而是幫我們看清成本在哪裡的指標。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 54 每次改 Skill，都要再付驗證成本

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 54
PRIMARY MESSAGE (not extra visible text): 模型能力會持續進步，但不能把每個問題都交給更大的模型、更多重試與更多 Judge。要讓驗證與迭代可持續，就需要掌握成本與責任分工。
EXACT TITLE: "每次改 Skill，都要再付驗證成本"
EXACT PAGE NUMBER: "54"
EXACT CONTENT:
模型會越來越聰明，但是你的口袋沒有越來越深

COMPOSITION AND SEMANTICS:
- 構圖：暖米色大字金句頁，標題保留在上方，主句置於中央。允許在逗號後排成兩行，但字句與標點不改。主句使用約 64–80 px 的指定手寫字，集中在畫面高度約 35–65%，保留充足下方留白。不要把原本的 Regression 流程圖一起塞進來。
- 焦點：「但是你的口袋沒有越來越深」這一行；其中只有「沒有越來越深」用珊瑚色，其他文字保持黑色。底線：只在「沒有越來越深」下方一道，不跨句、不碰字。
- icon 與連線：無。不加模型大腦、機器人、錢幣、空錢包或指數曲線，讓句子本身成為主角。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
模型會越來越聰明，但是你的口袋沒有越來越深。

這不是單純叫大家省錢。每次改 Skill 都要重跑驗證，不能每次遇到問題就加大模型、加長 Context、增加 Retry 或 Judge。我要知道每個 Scenario 和整套 Suite 的成本，再把明確規則與語意判斷分工，讓這套迭代真的跑得下去。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 55 我用開發 AI 產生 Skill，沒有手寫 Prompt

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 55
PRIMARY MESSAGE (not extra visible text): 讓 AI 讀來源產生 Skill，是這套驗證循環的真實使用方式。
EXACT TITLE: "我用開發 AI 產生 Skill，沒有手寫 Prompt"
EXACT PAGE NUMBER: "55"
EXACT CONTENT:
開發用 AI
讀需求、SOP、程式碼
產生候選 Skill
正式採用前，先驗證與審查

COMPOSITION AND SEMANTICS:
- 構圖：大標題為主，下方需求文件匯入修訂工作說明的開發用AI，再產生候選Skill。候選只是一份文件，不接到使用者任務的即時執行線。
- 焦點：「沒有手寫 Prompt」。底線：只在此短句下方一道。
- icon 與連線：來源文件、帶修訂筆的文件、候選Skill文件，三者簡潔連接。開發用AI不用機器人；保留與前面任務執行圖不同的修訂文件icon。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
現在再分清一個角色：這裡的AI協助我開發，前面的Agent是在幫使用者做任務。它們可以使用同一種模型，但任務與權限不同。在我的系統裡，從第一版Skill到功能完成，我沒有手寫過一行Prompt，而是讓開發用AI讀需求文件、SOP和程式碼產生，再透過測試與回饋修改。這不表示正式工作的Agent可以隨時改掉自己的規則，候選修改仍要經過驗證與審查。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 56 每個 Skill 版本，都要帶著驗證結果

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 56
PRIMARY MESSAGE (not extra visible text): 每個候選修改要能連回 Diff、測試結果與對應 Trace。
EXACT TITLE: "每個 Skill 版本，都要帶著驗證結果"
EXACT PAGE NUMBER: "56"
EXACT CONTENT:
Skill v1
原版本
Skill v2
候選，尚未接受
修改差異 Diff
測試結果
對應執行紀錄

COMPOSITION AND SEMANTICS:
- 構圖：兩份版本文件左右對照，中間是明確修改區；v2 下方附著自己的 Eval 與 Trace，不再畫生成、修改、回歸五個相似節點。
- 焦點：候選 v2 與其驗證材料綁在一起。底線：無。
- icon 與連線：版本文件、差異標記、測試清單、Trace 文件。每份材料只連自己的版本，不因 v2 較新就加接受綠勾。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
沿用剛才的教學版本，v1是原版本，v2仍是候選。Diff就是修改了哪些文字，旁邊要帶著測試結果和對應執行紀錄。版本號變大不表示品質更好，這些資料一起支持是否接受的判斷。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 57 候選修改，驗證後才接受

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 57
PRIMARY MESSAGE (not extra visible text): 候選版本在測試環境反覆修改，通過必要驗證與審查才成為接受版本。
EXACT TITLE: "候選修改，驗證後才接受"
EXACT PAGE NUMBER: "57"
EXACT CONTENT:
候選測試環境
候選 Skill
測試
通過
審查
接受版本
未通過或退回
分析紀錄並修改
超出預算
停止／人工處理

COMPOSITION AND SEMANTICS:
- 構圖：候選測試環境以開放邊界包住候選、測試與修改回路；審查位在接受出口前，接受版本放在外側。上層主路徑、下層修訂回路，停止出口留在側邊安全區。
- 焦點：候選不會直接變成接受版本。底線：無。
- icon 與連線：候選文件到測試清單，通過才到審查，再接受。測試未過或審查退回，都回到分析紀錄並修改，完成後再測。預算超出到停止／人工處理。環境邊界是開發階段，不畫成使用者任務中任意改正式規則。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
開發用AI可以修改候選Skill、執行Eval和回歸測試，讀Trace後再改。這是在候選測試環境內反覆進行，不是修改正式任務正在用的版本。測試通過後，仍按人定義的審查規則決定接受，退回就繼續修。超出預算或無法改善，也要能停止並交人工處理。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 58 AI 提出修改，人類決定接受標準

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 58
PRIMARY MESSAGE (not extra visible text): 人掌握成功條件與風險界線，不把接受權交給修改者自行宣告。
EXACT TITLE: "AI 提出修改，人類決定接受標準"
EXACT PAGE NUMBER: "58"
EXACT CONTENT:
修改差異 ＋ 驗證結果
必要測試情境通過？
風險條件守住？
成本可接受？
依標準接受或退回

COMPOSITION AND SEMANTICS:
- 構圖：57的 Review 節點放大成一份審查材料，左側候選差異與結果，右側三個檢查問題。
- 焦點：「依標準接受或退回」。底線：無。
- icon 與連線：差異文件與驗證清單進審查線，不畫人物。Review 的結果必須依所有適用條件，不把每個問題各連到不同接受結果。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
AI可以生成、分析、修改和跑測試，但成功條件與接受標準不能由修改者臨時放寬。哪些測試必須過、哪些風險不能接受、成本能花多少，以及何時一定要人工審查，都由人定義。最後不是看AI說自己修好了，而是看這些條件是否有足夠驗證。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 59 六個問題，長成一套 Runtime

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 59
PRIMARY MESSAGE (not extra visible text): 回答05六個問題，整合責任，而不是再列一份新模組清單。
EXACT TITLE: "六個問題，長成一套 Runtime"
EXACT PAGE NUMBER: "59"
EXACT CONTENT:
Tool Loop
Context
給對資訊
Skill 流程規則
說清必要步驟
Guard 檢查
守住操作與結論邊界
Eval 回歸測試
驗證修改
Trace 執行追查
還原過程
成本觀測
掌握開銷
執行觀測
企業規則與接受標準

COMPOSITION AND SEMANTICS:
- 構圖：完全沿用05六角的位置，問題換成白話責任名稱與短答案。中央是Tool Loop，左側相鄰的執行追查與成本觀測用開放括號合為執行觀測。外層標企業規則與接受標準，不新增Governance齒輪或第七個模組。
- 焦點：開場六個問題各有對應處理責任。底線：無。
- icon 與連線：沿用05疊文件、分支流程、閘門、測試清單、路徑放大鏡、計量表。六角與中央是無箭頭協作線，不表示固定六步流程。外框不加新縮寫或細字分類。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
回到開場：給模型必要資訊，用工作說明講清步驟，靠Guard與必要人工確認守邊界，再用執行紀錄和測試追查、驗證。過程與成本一起觀測，全部放在企業規則和接受標準內。這些責任隨任務風險逐步補齊，不要求第一天全部自研；也不能只把循環接起來就當可以交付。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~

## 60 Tool Loop 讓它跑起來

~~~text
Use case: infographic-diagram. Create ONE complete 16:9 raster image, preferably 1920x1080 or higher at the same ratio. This is an image-first editorial educational illustration, not a PowerPoint screenshot, not a UI or collage of slides.
REFERENCE INPUT: Image 1 is ONLY the mandatory typography and beige-paper style reference. Match its bold, condensed, rounded black marker handwriting for Traditional Chinese, Latin text and numbers. Do NOT copy its gears, text, layout, module list, black border or rounded screenshot corners. Do NOT use a neat sans-serif font, Iansui, PingFang, Chalkboard, Marker Felt, brush calligraphy or thin handwriting. All lettering must look made by the same hand.
VISUAL RULES: flat warm cream-beige paper #FBF5E5 with extremely subtle grid, navy outlines, blue system/data/tool accents, purple model judgment, green verified LOCAL checks, coral-orange risks or one focal phrase. Cohesive simple line icons; no robot, person, emoji, stars, photo, 3D, UI chrome, buttons, pills, card wall, giant enclosing dashboard, watermark or extra decorations. White space is intentional.
TEXT: Render ONLY the exact title, page number and exact content list provided below. Preserve Traditional Chinese, English, punctuation, case and code indentation. Do not print instructions or speaker notes. Do not add a summary/footer/caption not listed. Every listed content item must be present, but do not interpret the linebreak list as a single flow; use the layout instructions to connect things.
PLACEMENT: one centered single-line title in top 6-15%, approximately 64-80px at 1080h; content within 20-82%, all necessary labels >=44px at 1080h, main node labels 46-56px. Leave bottom 15% empty, 6% side margins. Page number small at upper right. Never place necessary text too low, overlap text and icons, cross connectors, wrap title, shrink text to fit, or invent data. Adapt spatial arrangement rather than using small text.
EMPHASIS: one focal area. Underline ONLY if explicitly instructed below; then exactly one coral short-phrase underline with a gap below letters, never touching words or spanning two phrases. If '底線：無' then no underline.
Return a single finished image.

PAGE 60
PRIMARY MESSAGE (not extra visible text): 以「能跑」與「能交付」收束整場，不再解釋一次全部模組。
EXACT TITLE: "Tool Loop 讓它跑起來"
EXACT PAGE NUMBER: "60"
EXACT CONTENT:
Runtime 讓它可以交付。

COMPOSITION AND SEMANTICS:
- 構圖：標題上方，中央一個大結論句。留白呼應04，不再放架構圖或清單。
- 焦點：「可以交付」。底線：只在此短句下方一道。
- icon 與連線：無，讓聽眾停在結論上。必要文字不在底部，不加未要求的聯絡資訊或 QR code。

BACKGROUND UNDERSTANDING ONLY, DO NOT PRINT:
開場那個循環讓Agent動了起來。這場分享真正補上的，是讓它知道該看什麼、該怎麼走，並且能被檢查、追查與驗證。模型能力可以繼續進步，我們仍要把交付責任和迭代成本掌握在系統裡。這就是我自己刻框架後，對Runtime的理解。

FINAL HARD CONSTRAINTS: Title must be ONE LINE ONLY across the top, never split into two rows. At 1672x941 target title about 56px high, positioned y=75..140; all necessary body labels at least 39px high. Body must finish above y=770. Preserve exact wording and do not add icon nodes beyond those explicitly specified. This page is a fresh composition, NOT the typography reference's diagram.
~~~
