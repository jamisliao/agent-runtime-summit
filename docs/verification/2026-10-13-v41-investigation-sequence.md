# v41 追查章節去重與58頁站台驗證

Final Decision: PASS_WITH_KNOWN_LIMITATIONS

## 敘事及映射

原六頁整理成五頁，新37～41各有不同作用：條件檢查、症狀與原因的區別、重跑不能取代出錯那次紀錄、四類資訊、Builder逐段對照。原39泛用轉場不再列入播放；原40起順延一頁；新42接AI協助整理線索。

重畫新38、39；其餘56張PNG保持來源SHA完全一致。舊v40全部檔案仍保留，沒有刪除原圖。新39重跑圖為方法示意，沒有聲稱新增實測；下方標籤已修正為同一個任務。

## 同步檔案

- v41 builder、58頁分頁稿、58頁完整圖片與講稿README、純圖/講稿HTML、37～42連續預覽、manifest、提示、頁碼映射及逐頁重點。
- 原始完整講稿、根README與播放器README。
- 播放站台deck-config與deck；id=v41-58pages-investigation、圖片及講稿版本v41，來源目錄與頁數均更新。

## 實際結果

- 兩張產圖已目視核對：標題、繁體中文、手繪筆觸、問題/待查方向與重跑/原始紀錄的差別。圖片原生1672×941。
- `node docs/build-v41-investigation-sequence.mjs`：PASS；58頁，56張保留PNG SHA相符；新37～42來源為舊37、38、40、41、42、43；原39未列入，最後金句保留。
- `node presenter/build-deck.mjs`：PASS；58張圖片SHA與全部講稿、轉場、重點核對成功。
- `launchctl print gui/501/com.jamisliao.agent-runtime-presenter-8767`：確認原服務來自本專案serve.py、/usr/bin/python3及8767埠。
- `launchctl kickstart -k gui/501/com.jamisliao.agent-runtime-presenter-8767`：成功重新載入原服務，新來源與頁數生效，仍僅127.0.0.1綁定。
- `node presenter/tests/http-check.mjs http://127.0.0.1:8767`：PASS；實際58張PNG SHA、完整講稿與重點、deck及6個UI資源相符；第59頁及私有路徑拒絕，投影不請求講稿資料。
- `node --test presenter/tests/core.test.mjs presenter/tests/preview-layout.test.mjs`：12/12通過（核心fixture及UI配置回歸）。
- `python3 presenter/tests/server_test.py`：2/2通過。
- `git diff --check`：PASS。

## 已知限制

- 供使用者視覺與故事線確認，尚未提交或推送。
- 未更新歷史PDF，未做實體雙螢幕/投影驗收，未宣稱1080p。
- 第16頁字體仍未重畫；33頁分析錯範圍提案仍不修改。
- 舊版與不相關工作樹異動保留。
