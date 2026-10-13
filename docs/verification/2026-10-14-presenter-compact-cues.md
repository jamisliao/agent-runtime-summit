# 精簡講者提示與14吋免捲動版面驗證

Final Decision: PASS_WITH_KNOWN_LIMITATIONS

## 實作

- 右側移除重複投影片標題、原講稿與來源說明，只留主旨、2～3個講述重點及一句轉場，保留頁碼與章節定位。
- 58頁提示重新逐頁整理為分享用短句，刪除編排備註；定義、Builder來源核對、評估方法與對象的區分、有限測試與Guard的區分仍保留。
- 精簡來源`docs/speaker-cues-v41.json`用n/title嚴格對照；builder同步manifest、分頁稿、含圖README、圖庫、deck與逐頁重點。
- 壓縮頁首與投影設定，桌面工作區填滿剩餘高度；目前頁與下一頁約65:35分配，兩圖object-fit:contain。
- 總覽改為按鈕開啟原生dialog，選頁自動關閉；總覽內允許瀏覽全部縮圖，不占正常分享畫面。
- A±保留18～36px偏好，渲染後依實際內容自動調整至可容納大小，顯示適配狀態。未對主旨、重點或轉場使用裁切、行數截斷或hidden overflow。

## 證據

- 新增compact-presenter測試先跑4項FAIL：舊介面仍有標題/原稿、總覽非dialog、桌面高度未配置、精簡資料缺少；完成後通過。
- Node：`node --test presenter/tests/compact-presenter.test.mjs presenter/tests/core.test.mjs presenter/tests/preview-layout.test.mjs`，16/16 PASS。
- 建置：v41 builder與deck builder均PASS，58筆標題校驗及图片SHA、notes/transition同步檢查通過。
- 修改前後逐筆核對：58張SHA、頁碼、檔名及標題完全不變；全部58筆搭配講稿原文保留。
- CUA實際瀏覽器逐頁：1512×850、1440×800、1280×720，各58頁，共174次；body與提示區均無水平/垂直溢位，接下一頁完整在視窗內。既有24px偏好可完整顯示。
- 1280×720放大至36px偏好，再查58頁：全部免捲動；有效字級依內容適配為25～31px。
- 總覽開啟及選50頁關閉已驗證；首尾頁、頁碼跳轉、最後一頁下一張隱藏正常。測試後還原一般視窗及原第50頁、24px偏好。
- 一般視窗1135×1406：body尺寸與視窗一致、提示無溢位、總覽關閉；瀏覽器error/warn紀錄為空。
- 原始量測：[232次檢查](../../output/playwright/2026-10-14-compact-presenter/layout-checks.json)。
- 截圖：[1280×720第50頁](../../output/playwright/2026-10-14-compact-presenter/1280x720-page50.png)。
- HTTP：`node presenter/tests/http-check.mjs http://127.0.0.1:8767` PASS，58張PNG、精簡提示、完整notes來源及UI資源一致；隱私與越界路由限制通過，投影不請求deck。
- Python server：`python3 -m unittest presenter/tests/server_test.py`，2/2 PASS。
- `node --check presenter/presenter.mjs`與`git diff --check`：PASS。

## 已知限制

- 本次驗證桌面可用viewport，不代表14吋所有縮放設定都一樣。窄於1024px保留自然手機排列，可能需要捲動；瀏覽器額外放大及更矮視窗未驗收。
- 本輪沒有實體雙螢幕或會場投影測試；未更新PDF；未提交或推送。
