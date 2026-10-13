# 追查章節去重與58頁站台更新

**Goal:** 把原37～42六頁整理為五頁，移除重複轉場，讓各頁新增不同資訊。

**Architecture:** 從現行v40的59頁來源另建v41共58頁；省略原39頁，重畫原38與40（新38、39），其餘56張PNG按來源SHA原樣複製。保留舊版檔案，更新現有投影站台設定、講稿與頁碼映射。

**Tech Stack:** built-in image_gen、Node.js builder、Python presenter及現有launchd服務。

## 敘事設計

- 37：批准後執行前檢查條件，保留原圖。
- 38：看見錯誤，原因仍待確認；不重講批准，不先展開追查方法。
- 39：重跑一次不能取代出錯那次的紀錄；沿用漏Builder場景，重跑圖為可能情形示意。
- 40（原41）：四類資訊，保留原圖。
- 41（原42）：Builder逐段對照，保留原圖。
- 42（原43）：AI協助交叉比對，保留原圖；之後頁面順延一頁。

## 執行與驗證

1. 完成並檢視兩張新圖，保存到v41 workspace來源與提示檔。
2. 建立`docs/build-v41-investigation-sequence.mjs`，產出58頁完整文件、HTML、manifest及映射；同步原始講稿及README。
3. 修改`presenter/deck-config.json`並執行`node presenter/build-deck.mjs`。
4. 重新啟動既有本機8767 launchd服務，載入新的來源目錄與頁數，不擴大網路曝光。
5. 建置斷言核對58頁與56張保留圖SHA、跑既有核心/伺服器測試與HTTP全圖講稿核對、`git diff --check`。
6. 儲存`docs/verification/2026-10-13-v41-investigation-sequence.md`並完成全域計畫；本輪待使用者視覺確認，不提交推送，不改歷史PDF。
