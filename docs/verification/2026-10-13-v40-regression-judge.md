# v40 回歸測試與 Judge 銜接驗證

Final Decision: PASS_WITH_KNOWN_LIMITATIONS

## 範圍

先產生兩張圖片，再修改順序、原始講稿、59頁分頁稿、圖片與講稿README、純圖與講稿HTML、manifest、重點及站台deck。

- 45：原回歸風險圖片移到全面重測之前，圖片位元不變。
- 46：重畫完整流程與其他情境重測。
- 47–49：Builder呼叫、傳入資料、報告交付。
- 50：重畫Judge依輸出、評分準則與範例評審。
- 52接受門檻銜接53 AI協助撰寫Skill。

## 實際執行結果

- `node docs/build-v40-execution-bridge.mjs`：PASS；59頁，54張未改v39圖像逐位元SHA相符，45–50來源順序為51、44、46、47、45、48。
- `node presenter/build-deck.mjs`：PASS；59頁，v40圖片與講稿，全部圖片hash及講稿核對成功。
- `node presenter/tests/http-check.mjs http://127.0.0.1:8767`：PASS；實際HTTP全部59張PNG hash、完整講稿與重點、deck、6項UI資源相符；私有與超出頁數路徑被拒絕，投影頁不請求講稿資料。
- `git diff --check`：PASS，無空白錯誤。
- 目視產圖：完整流程與其他情境兩組資訊、Judge輸入/準則/範例/評分關係及繁體文字已檢視。維持原手繪圖示、深藍手寫字、方格紙風格；無內嵌頁碼。

## 已知限制

- 圖片原生1672×941；未宣稱1920×1080，未用放大代替真實解析度。
- 歷史PDF未更新，未進行實體雙螢幕或投影驗收。
- 視覺與敘事最終接受仍由使用者確認。
- 工作樹中不相關v17異動與歷史未追蹤檔案保留，不納入本次提交。
