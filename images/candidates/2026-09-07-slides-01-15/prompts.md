# 本批實際初始提示詞

Create ONE finished 16:9 landscape raster engineering presentation image, ideally 1920x1080. Warm ivory beige paper #F7F1E6, extremely faint grid. Use provided reference ONLY for typography and paper, NEVER copy its gears or contents. Thick black condensed rounded marker handwriting, Traditional Chinese and English drawn by same hand. No sans-serif substitution, no calligraphic thin strokes. Title about 72px at 1080p; essential labels at least 44px, notes at least 40px (30pt equivalent). Limit accents to navy blue, coral orange, sage green. Wide generous whitespace. Side margins 6%, all essential content within y=8%-85%, bottom 12% blank. Titles single line except explicitly specified cover. Small consistent line icons only when useful. No people, robots, UI chrome, card walls, shadows, decorative stars. Exact supplied text only, no invented stats. This is a static complete image. 

## 01

Cover poster. Left 65%: two large headline lines '自己刻 Agent 框架' and '最難的不是呼叫 LLM'. Below at 65% height single subtitle '一個 Tool Loop，如何長成 Agent Runtime'. Right 25%: subtle open navy loop with four faint unlabeled nodes. At least 55% whitespace. Page number '01' top right.

## 02

Title '我以為三個步驟放進 Loop 就是 Agent'. Central-left large loop enclosing exactly three horizontal steps '01 LLM API' → '02 function call' → '03 message append'. Small document/dialogue, wrench, stacked document icons respectively. Single return arc BELOW steps from 03 back to 01, clear arrow pointing into 01, does not cross labels. Outer enclosure labelled 'while loop'. Outside on right, large '＝ Agent?' in coral. Page '02'.

## 03

Title '會動！也確實只需要幾行程式碼'. Large left-aligned seven-line pseudocode occupies center y28%-80%, on paper no box. Code is clean monospaced IBM Plex Mono style, title retains reference marker. Exact code and indentation:
while not done:
    call LLM
    if model wants function:
        call function
        append result to messages
    else:
        return final answer
Only append result to messages highlighted coral. No other graphics. Page '03'.

## 05

Title '會動！但問題也確實很多'. Six generously spaced questions in two rows three columns, no boxes/icons. Row1 'Context 怎麼控制？' '流程誰來守？' '錯誤怎麼擋？'. Row2 '決策怎麼還原？' '修改怎麼驗證？' '成本怎麼掌握？'. At y78% single conclusion '這些問題一路補起來，才慢慢長成 Runtime。'. Page '05'.

## 06

Title '為什麼不用別人做好的？'. Editorial two columns 45/55 separated by thin vertical line. Left heading navy '模型自由度', below three large lines '自由替換模型' '多模型 routing' '內部或開源模型'. Right heading green '執行透明度', below large lines 'Context 與 Tool Arguments' '錯誤與狀態' '決策路徑'. One small branching icon left and magnifier right. Aligned heading baseline, generous row spacing. Page '06'.

## 07

Title '我遇到的第一個問題'. Left 65% shows layered Context document stack accumulating message strips. Above stack exact labels 'user → assistant → tool result'. Arrow labelled 'append' feeds stack, outgoing arrow 'next LLM call'. Stack label 'Context 持續累積'. Right 30% at y40%-74% heading '缺少的處理', four large separate lines 'select' 'compress' 'classify' 'reference' with orange emphasis. No tiny internal text. Page '07'.

## 08

Title 'Context 越長，中間越容易漏'. Central navy U-shaped schematic curve. Top small but >=40px conclusion 'Context window capacity ≠ information usability'. Three equal aligned position labels beneath curve '開頭' '中間' '結尾', corresponding callouts '較容易利用' '明顯下降' '較容易利用'. No numeric ticks, no percentages. At y78%-85%, two large readable lines 'Lost in the Middle｜多文件問答與檢索研究' and '位置效應示意，非所有模型與任務的定律'. Page '08'.

## 09

Title 'Context 長大後，LLM 開始胡言亂語'. One large execution path across center, navy solid on left becoming broken coral segments toward right. Four well separated labels alternating above/below breakpoints: '規則漏看' 'Tool Result 抓錯重點' '流程跳步' 'Final Answer 出現幻覺'. Small outline break markers, no warning cards. No implication of exact numeric relationship. Bottom y78% 'Context 膨脹，開始影響任務品質'. Page '09'.

## 10

Title '模型會發揮你想不到的想像力'. Left 55% simple line drawing of an ELK analysis monitor with three large readable lines only '錯誤訊息' '時間點' '局部 Service Error' in navy. Dashed coral connectors lead from these fragments toward a coral bubble 'Root Cause？' explicitly labelled '未被證明'. Right 35% two text groups heading '資料裡有什麼' with '錯誤、時間、局部異常'; heading '模型補了什麼' with '因果關係、完整故事'. All text >=40px, no fake log timestamps or measurements. Page '10'.

## 11

Title 'LLM 是填空與寫故事的大師'. Upper center row three unboxed document fragments with exact labels '錯誤訊息 A', '局部 Service Error', '系統異常'. Clear standalone coral question marks in both gaps; no solid arrows connecting facts. Lower row heading '模型補成的故事（未驗證）', below coral dashed arrows in 'A → Service Error → Root Cause'. Large final sentence at y80% '資料片段是真的，因果仍需要證據。'. Page '11'.

## 12

Title 'Raw Logs 先整理，再交給模型'. Single continuous horizontal tapering data ribbon center, wide left to narrow right, 5 equally spaced label anchors. Labels exact order '縮小時間窗' '保留欄位' '分組 Pattern' '代表樣本' 'Focused Context'. At each stage a small simple icon: clock, document, grouped dots, selected dots, focused document. No five separate cards. Below at y72% heading '保留欄位'; next two large lines 'timestamp · service · level' and 'message · trace_id · error_code'. Keep final line above85% height. Page '12'.

## 13

Title 'Tool 回傳的資料，不一定都要給 LLM'. One asymmetric two-layer cross-section. Upper broad layer contains stack of documents labelled '完整 Payload', clear boundary label 'Runtime／Tool Layer', annotation '完整資料留在這裡'. Lower narrower layer labelled 'LLM 只看', shows 'status ＋ data_ref' and below '下一步控制訊號'. Use small document icon, no database cylinder, no transport pipe or warehouse metaphor, no full workflow. Big balanced typography. Page '13'.

## 15

Title 'Context 放得下，不保證模型做得好'. Minimal statement image. Center-left enormous two aligned lines 'Context Capacity' and '≠ Task Quality', inequality coral. Below y70% faint long horizontal context line, shorter broken task completion line, labelled 'Context 容量' and '任務完成品質' in readable >=40px. Schematic only, no numeric data or scales. At least60% whitespace. No brain icons. Page '15'.

## 版面修訂

08：研究出處及限制改放標題下方。11：結論改放標題下方。12：欄位清單改放標題下方。皆保留大字並騰出底部空間。

