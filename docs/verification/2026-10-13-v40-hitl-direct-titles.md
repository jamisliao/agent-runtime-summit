# HITL 三頁具體標題驗證

Final Decision: PASS_WITH_KNOWN_LIMITATIONS

## 調整

- 34：Agent 要做什麼，有時需要人先確認
- 35：先確認目標與範圍，再開始任務
- 36：寫入、扣款或通知前，先取得批准
- 33頁轉場由輸出依據轉到行動前的確認，不以「符合規則」作為前提。
- 同步原始講稿、59頁分頁稿、圖片README與HTML、manifest、提示、逐頁重點與站台。

## 實際驗證

- 三張生成圖片目視核對：新標題正確，原圖內文、圖示概念、手繪字體與配置保留，無內嵌頁碼。
- 更新前後全部59個PNG SHA比對：僅34、35、36變更；其他56個逐位元一致，33頁圖片不變。
- `node docs/build-v40-execution-bridge.mjs`：PASS；59頁，51張未改v39來源SHA核對，來源順序不變，新三頁標題斷言通過。
- `node presenter/build-deck.mjs`：PASS；59頁圖片與講稿同步核對。
- `node presenter/tests/http-check.mjs http://127.0.0.1:8767`：PASS；59張PNG hash、完整講稿、重點、deck及6個UI資源相符；私有與超出頁數路徑拒絕，投影不請求講稿。
- `git diff --check`：PASS。
- 使用者追問33頁時，讀取既有瀏覽器：選取33頁，標題「沒有對應證據的結論，不能進正式報告」。DOM實際src為`/slides/slide-33.png?v=093084df7ec28da731847bb6da63eaf4de477e72d966b2581d48c42b1d0bba99`。實際畫面與使用的原圖相同，紅色服務已重啟項目因無Tool Result不進正式報告。未操作換頁或重新整理。

## 限制

- 本輪先本機更新待使用者視覺與敘事確認，未提交推送。
- 原生圖片1672×941；未宣稱1080p，未更新歷史PDF。
- 未進行實體雙螢幕與投影驗收。
- 無關v17異動、歷史檔案及上一輪未提交變更保留。
