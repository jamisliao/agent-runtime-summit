# Agent Runtime Summit

私人工作庫，保存講稿來源、最新58頁無頁碼圖片，以及歷史分頁版本。

## 最新發佈：v38・58頁・圖內無頁碼（2026-10-13）

封面署名：JamisLiao（草寫英文）。

第7至8頁講稿已補上「下一步由誰使用資料」的轉場，維持58頁及現有圖片。

第16頁改為「分析完 Log，還要交付正式報告」，先呈現自由撰寫的風險，再接Builder；新圖已按原第43頁母版檢查並收斂鋼筆筆觸。

保留v37順序，加入兩頁Evaluation介紹，共58頁。第21頁採任務驗收卡，第13頁標題為「資訊放在中間，也容易被 LLM 忽略」。第23頁說明驗收依據，第26頁將明確條件做成程式檢查；交付來源需用工具呼叫及Tool結果對照確認。完整主稿與投影站台同步。

- [58頁完整圖片與講稿（GitHub直接瀏覽）](images/candidates/2026-10-13-v38-slides-01-58-evaluation-intro/README.md)
- [58頁純圖片HTML](images/candidates/2026-10-13-v38-slides-01-58-evaluation-intro/gallery-images-only.html)
- [58頁分頁稿](storyboard/58-slide-storyboard-v38-evaluation-intro.md)
- [講述重點](presenter/58-page-key-points.md)
- [啟動與雙螢幕操作](presenter/README.md)
- [發佈驗證](docs/verification/2026-10-13-v38-evaluation-presenter-publish.md)

在專案根目錄執行：

```bash
node presenter/build-deck.mjs
python3 presenter/serve.py --port 8767
```

開啟 http://127.0.0.1:8767/ ，關閉舊投影後重新整理控制台，再開啟投影。GitHub只保存檔案，不會啟動本機服務；歷史PDF尚未更新為v38。

以下均為歷史版本當時的紀錄；其中本機試作不一定發佈至GitHub，現行內容以上方v38為準。

## 本機最新：Builder案例合併 v35（2026-10-12）

原19頁的「格式不符、分類漏掉」併入18頁，移除獨立19頁。案例現在直接接「有回答，不代表流程正確完成」，再進Evaluation介紹，共55頁。其餘54張圖片沿用v34；封面與第5頁修改保留。

依使用者選擇，圖片內仍保留原頁碼：播放順序1～18對應原圖1～18，播放順序19～55對應原圖20～56。分頁稿與含圖文件列出對照，不宣稱圖內頁碼已重編。投影站台現使用v35；未commit／push，PDF仍是v32的56頁。

- [本機投影站台](http://127.0.0.1:8767/)
- [55頁純圖片](images/candidates/2026-10-12-v35-slides-01-55-builder-merged/gallery-images-only.html)
- [55頁含圖講稿](images/candidates/2026-10-12-v35-slides-01-55-builder-merged/README.md)
- [55頁分頁稿v35](storyboard/55-slide-storyboard-v35-integrated.md)
- [55頁講述重點](presenter/55-page-key-points.md)

## 上一版：第5頁移除下方註記 v34（2026-10-12）

第5頁移除下方括線及「本場：單次任務的 Runtime」，保留三組圖示、中英文標籤與排版。其餘55張圖片及所有講述內容與v33相同；第1頁仍為「從 while loop，到 Agent Runtime」。v34原版保留；現行站台版本以上方v35為準。

- [本機投影站台](http://127.0.0.1:8767/)
- [56頁純圖片](images/candidates/2026-10-12-v34-slides-01-56-slide05-clean/gallery-images-only.html)
- [含圖講稿](images/candidates/2026-10-12-v34-slides-01-56-slide05-clean/README.md)
- [分頁稿v34](storyboard/56-slide-storyboard-v34-integrated.md)

## 已發佈56頁：Log與Context案例整合 v32（2026-10-08）

第10、11頁替換為已確認的新圖，講清楚「分析線上問題→LLM先查Log→Tool回傳大量原始資料→整包塞回使Context爆量→先篩選再交回模型」。原稿、分頁稿、含圖文件、PDF與投影網站同步。其餘54張圖片及PDF頁面串流不變；已確認的第5頁和草寫姓名封面保留。本次發佈包含 v32 最新內容、播放器與必要回歸測試來源。

- [56頁純圖片（第10頁）](http://127.0.0.1:8769/gallery-images-only.html#slide-10)
- [圖片、重點與講稿](http://127.0.0.1:8769/gallery.html#slide-10)
- [最新56頁PDF](output/pdf/agent-runtime-summit-v32-56-slides-JamisLiao-compact.pdf)
- [56頁含圖README](images/candidates/2026-10-08-v32-slides-01-56-log-context-integrated/README.md)
- [56頁分頁稿v32](storyboard/56-slide-storyboard-v32-integrated.md)
- [完整講稿v3.1](manuscript/complete-manuscript-v3.1.md)
- [投影站台啟動與雙螢幕操作](presenter/README.md)
- [每頁講述重點](presenter/56-page-key-points.md)
- [本次站台與發佈驗證](docs/verification/2026-10-12-presenter-v32-publish.md)
- [整合驗證](docs/verification/2026-10-08-log-context-10-11-integration.md)

v32發佈時8769閱讀入口及8767投影網站使用v32。現行8767已套用上方v35；8769仍是v32閱讀版本。請重新整理講者控制台並重新開啟投影視窗；舊版圖集保留，不會自動換圖。

### 啟動最新版投影站台

在專案根目錄執行（Node.js 22 或更新版、Python 3）：

```bash
node presenter/build-deck.mjs
python3 presenter/serve.py --port 8767
```

以 Chrome 開啟 [講者控制台](http://127.0.0.1:8767/)，目前本機頁首應顯示「55頁・圖片v35／講稿v35」。投影視窗只有投影片，講稿只在控制台顯示。此站台是本機服務；push 到 GitHub 不等於公開部署。GitHub仍為v32，請使用該版「56頁含圖README」瀏覽圖片，HTML需下載後在本機開啟。

以下為歷史工作紀錄；其中未納入本次提交的舊試作與下載檔僅保留於原工作站，版本狀態及服務資訊以本節為準。

## 上一版56頁：第5頁自研動機整合 v30（2026-10-08）

第5頁已替換為使用者確認的「模型選擇／Model Choice、執行可控／Controllability、治理整合／Governance」。中文為主、英文補充。原稿、分頁稿、含圖文件、投影網站與PDF同步；其餘55張圖片及PDF頁面串流不變，草寫姓名封面保留。未commit／push。

- [56頁純圖片（第5頁）](http://127.0.0.1:8769/gallery-images-only.html#slide-05)
- [第5頁圖片、重點與講稿](http://127.0.0.1:8769/gallery.html#slide-05)
- [最新56頁PDF](output/pdf/agent-runtime-summit-v30-56-slides-JamisLiao-compact.pdf)
- [56頁含圖README](images/candidates/2026-10-08-v30-slides-01-56-slide05-integrated/README.md)
- [56頁分頁稿v30](storyboard/56-slide-storyboard-v30-integrated.md)
- [本輪驗證](docs/verification/2026-10-08-slide-05-controllability-integration.md)

8769閱讀入口及8767投影網站使用v30。請重新整理控制台並重新開啟投影。原v28／v29圖集保留為歷史版本，不會自動換圖。

## 上一版56頁：人工審核銜接Trace v29（2026-10-07）

新增第36頁「有人審核，任務仍可能出錯」，再回到Builder案例，接續Trace歷史Run的追查。原36–55順延為37–56，前35張圖片原樣保留；55頁舊版也保留。原稿v3.1、分頁稿、含圖文件、圖集、投影網站與PDF已同步，等待使用者視覺確認；未commit／push。

- [56頁純圖片（從35頁開始）](http://127.0.0.1:8769/gallery-images-only.html#slide-35)
- [56頁圖片、重點與講稿](http://127.0.0.1:8769/gallery.html#slide-35)
- [原始完整講稿v3.1](http://127.0.0.1:8769/manuscript.html)
- [56頁PDF（約27.4 MB）](http://127.0.0.1:8769/slides-56.pdf)
- [56頁含圖README](images/candidates/2026-10-07-v29-slides-01-56-trace-bridge/README.md)
- [56頁分頁稿v29](storyboard/56-slide-storyboard-v29-integrated.md)
- [來源與生成紀錄](images/candidates/2026-10-07-v29-slides-01-56-trace-bridge/GENERATION.json)
- [本輪驗證](docs/verification/2026-10-07-v29-56-slide-trace-bridge.md)

閱讀服務仍使用下方8769啟動指令和相同網址；目錄名稱保留舊日期以維持既有連結，但內容已是v29的56頁。投影服務8767也更新為v29；請重新整理舊控制台並重新開啟投影視窗。

## 上一版55頁金句整合 v28（2026-10-06）

已整合20、48、49、50頁金句、第53頁新金句與簡化小圖，以及第29頁「同一份Log報告」轉場圖；其餘49張圖片沿用v25。24、27、28、29頁講稿串起同一個任務的兩種檢查：流程是否照做，以及結論是否有工具結果支持。總數55頁、頁序與54–55結尾不變。

原始完整講稿v3.1也已同步Builder／Evaluation與Evidence的銜接。以下是保留的55頁來源；[本機閱讀入口](http://127.0.0.1:8769/)目前提供上方最新56頁，與8767投影網站分開，僅在執行服務的Mac上可用。

如閱讀服務停止，可重新啟動：

```bash
python3 -m http.server 8769 --bind 127.0.0.1 --directory /Users/jamisliao/projects/agent-runtime-summit/output/review/2026-10-06-log-bridge
```

- [完整55頁純圖片](images/candidates/2026-10-06-v28-slides-01-55-quotes-integrated/gallery-images-only.html)
- [圖片、重點與講稿](images/candidates/2026-10-06-v28-slides-01-55-quotes-integrated/gallery.html)
- [含圖文字稿README](images/candidates/2026-10-06-v28-slides-01-55-quotes-integrated/README.md)
- [55頁分頁稿v28](storyboard/55-slide-storyboard-v28-integrated.md)
- [55頁投影片PDF：草寫姓名、簡化小圖與Log案例銜接](output/pdf/agent-runtime-summit-v28-55-slides-JamisLiao-compact-v7-log-bridge.pdf)
- [來源與生成紀錄](images/candidates/2026-10-06-v28-slides-01-55-quotes-integrated/GENERATION.json)
- [整合驗證](images/candidates/2026-10-06-v28-slides-01-55-quotes-integrated/verification.json)

v25及金句預覽原檔保留；未commit／push。v28為歷史55頁版本；現行播放器見下方v29啟動說明。精確字型一致、實際pt與會場投影仍未驗收。

## 上一版55頁文字校準候選 v25（2026-10-05）

依完整逐頁檢查重新生成24頁的文字；其餘31張圖片與v24完全相同。講稿、頁序及文字內容不變，固定原43頁為字形參考。仍待使用者確認，不宣稱精確字型完全一致。

- [完整55頁純圖片](images/candidates/2026-10-05-v25-slides-01-55-typography/gallery-images-only.html)
- [24頁修改前後對照](images/candidates/2026-10-05-v25-slides-01-55-typography/typography-comparison.html)
- [圖片、重點與講稿](images/candidates/2026-10-05-v25-slides-01-55-typography/gallery.html)
- [含圖文字稿README](images/candidates/2026-10-05-v25-slides-01-55-typography/README.md)
- [55頁分頁稿v25](storyboard/55-slide-storyboard-v25-integrated.md)
- [生成prompt與來源](images/candidates/2026-10-05-v25-slides-01-55-typography/GENERATION.json)

v24來源保留；未commit／push。目前播放器版本見下方v29啟動說明。

## 上一版55頁圖片與講稿 v24（2026-10-05）

已將結尾三個金句、小圖與講稿整合回完整55頁版本，重畫53～55頁；前52張圖片沿用v23不變，52頁只調整轉場。字型規範補回原產圖文件：固定第43頁母版，保留字形、字重、筆壓與墨紋，不把文字改成極細單線字。圖片仍待筆觸與美感確認。

- [完整55頁純圖片](images/candidates/2026-10-05-v24-slides-01-55-ending-integrated/gallery-images-only.html)
- [圖片、重點與講稿](images/candidates/2026-10-05-v24-slides-01-55-ending-integrated/gallery.html)
- [含圖文字稿README](images/candidates/2026-10-05-v24-slides-01-55-ending-integrated/README.md)
- [55頁分頁稿v24](storyboard/55-slide-storyboard-v24-integrated.md)
- [原產圖規範與字型釐清](docs/plans/2026-10-04-55-slides-pen-style-v20-design.md)

舊版本與被否定候選保留；未commit／push。播放器現已更新至v29的56頁。

## 上一版55頁圖片與講稿v23（2026-10-05）

保留既有頁序與55頁總數；本次重畫22、23並同步21～24的銜接：**Evaluation定義 → Outcome／Trajectory評估對象 → Code-based／LLM-as-a-Judge評估方法 → 套回Builder案例**。明確區分評估對象與判斷方法，LLM-as-a-Judge也可評估軌跡。第29、31頁後續已局部移除圖片上的「教學示意」標示，其餘圖文保留。 第36頁改為「漏了 Builder，回看當時的執行過程」，移除程式卡住的暗示；第35頁轉場講稿同步更新。

- [完整 55 頁純圖片](images/candidates/2026-10-05-v23-slides-01-55-evaluation-terms/gallery-images-only.html)
- [圖片、重點與講稿](images/candidates/2026-10-05-v23-slides-01-55-evaluation-terms/gallery.html)
- [含圖文字稿 README](images/candidates/2026-10-05-v23-slides-01-55-evaluation-terms/README.md)
- [55 頁分頁稿 v23](storyboard/55-slide-storyboard-v23-integrated.md)
- [上一版 v22 純圖片](images/candidates/2026-10-05-v22-slides-01-55-evaluation-bridge/gallery-images-only.html)
- [上一版 v21 純圖片](images/candidates/2026-10-05-v21-slides-01-55-context-reordered/gallery-images-only.html)
- [上一版 v20 純圖片](images/candidates/2026-10-04-v20-slides-01-55-pen-unified/gallery-images-only.html)

v23為歷史候選，舊版本保留。目前獨立播放器使用v29的56頁；之後圖集修改仍需建置才會同步。

## 啟動56頁投影網站（v32）

目前播放器使用**56張v32圖片**，搭配**v32分頁稿**的講稿、逐頁主旨、2–3個講述重點與轉場。網站已啟動於8767；舊分頁的控制台請重新整理並重新開啟投影。第5、10、11頁已確認，圖集整合不代表全部圖片已正式定稿。

在 Terminal 執行（需要 Python 3）：

```bash
cd /Users/jamisliao/projects/agent-runtime-summit
python3 presenter/serve.py --port 8767
```

接著用 Chrome 開啟 [講者控制台：http://127.0.0.1:8767/](http://127.0.0.1:8767/)。請透過這個網址開啟，不要直接雙擊 HTML。

- 講者螢幕：目前圖片、主旨、講述重點、原講稿、下一頁預覽與換頁控制。
- 投影螢幕：在延伸桌面模式下，點「偵測螢幕」→ 選擇投影螢幕 →「開啟投影」。投影視窗只顯示圖片；按 F 進入全螢幕，Esc 退出。
- 若無法偵測螢幕：將投影視窗手動拖到第二個螢幕，再按 F。
- 停止服務：回到啟動服務的 Terminal 按 Ctrl+C；之後重跑指令即可啟動。
- 若 8767 已占用：先確認是否已有這個播放器在執行；也可改用 `--port 8768`，並開啟 `http://127.0.0.1:8768/`。不要直接終止未知程序。

服務僅供本機使用，綁定 `127.0.0.1`，不會公開到網路。GitHub 的 Markdown 預覽不能直接執行這個播放器。

修改分頁稿或重點後，先重新建置資料（此步需要 Node.js），再啟動或重新整理瀏覽器：

```bash
cd /Users/jamisliao/projects/agent-runtime-summit
node presenter/build-deck.mjs
```

完整操作說明：[播放器README](presenter/README.md)；整份講述提示：[56頁重點文件](presenter/56-page-key-points.md)。更換版本設定後需重新啟動本機服務；圖片與講稿修改後需重新建置資料。

## 內容

### 歷史 52 頁整合候選版（2026-10-01）

依八組合併方案完成 [52 頁整合分頁稿 v15](storyboard/52-slide-storyboard-v15-integrated.md)，每頁包含核心訊息、畫面文字與設計、講稿、重點及轉場。

- [完整 52 頁圖片與講稿圖庫](images/candidates/2026-10-01-v15-slides-01-52/gallery.html)
- [八張合併新圖先看](images/candidates/2026-10-01-v15-slides-01-52/gallery.html?filter=merged)
- [52 頁圖片 README](images/candidates/2026-10-01-v15-slides-01-52/README.md)
- [合併原因及新舊頁對照](storyboard/52-slide-consolidation-review-2026-10-01.md)

這版重畫八張，其餘44張沿用；沿用圖內仍顯示舊60頁頁碼，以圖庫標頭的新頁碼為準。這是歷史候選；目前8767播放器已使用55頁v28，未推送。

### 目前使用與歷史版本

- [完整講稿 v3.1](manuscript/complete-manuscript-v3.1.md)
- [播放器使用的55頁分頁稿v28](storyboard/55-slide-storyboard-v28-integrated.md)
- [播放器使用的55頁圖片v28](images/candidates/2026-10-06-v28-slides-01-55-quotes-integrated/README.md)
- [歷史60頁分頁稿v13](storyboard/60-slide-storyboard-v13-review.md)
- [歷史60頁圖片v14](images/candidates/2026-09-28-v14-no-chapter-tags/README.md)
- [60 頁分頁 v6 Image First](storyboard/60-slide-storyboard-v6-image-first.md)
- [完整圖片總覽（15 張歷史保留＋11 張近期候選）](images/approved/gallery.html)
- [逐張確認紀錄與更正說明](images/approved/confirmation-index-2026-09-07.md)

## 範圍

此工作庫包含講稿、分頁稿、圖片候選與本機播放器。歷史保留圖和近期候選分開管理；未獲確認的圖片不因整合進播放器而視為定稿。

`images/approved/` 已依原對話補回漏列五張，共 15 張歷史保留圖（12 張有使用者明確肯定、3 張沿用既有保留狀態）；PNG 與 Markdown 可在 GitHub 瀏覽。9/7 補回內容尚未推送，最新狀態以本機確認紀錄為準。
