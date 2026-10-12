# v37 投影站台與發佈驗證

Final Decision: PASS_WITH_KNOWN_LIMITATIONS

## 內容與圖片

- 以已確認的v37核對包推廣為正式候選目錄，共56張PNG；逐張SHA256完全相同，沒有再次重画、裁切或縮放。
- 原55頁順序保留，在原第12頁後插入Lost in the Middle。圖內無頁碼，控制台使用目前1–56的播放順序。
- 原圖局部修補的56/56像素驗證與來源SHA另記於候選目錄的image-preservation-verification.json；其中liveSiteUnchanged是前一輪製圖時的狀態，非目前站台狀態。
- 圖片、標題、講稿、重點、轉場已同步v37；第37–41頁移除原先圖片預覽與講稿不同步的問題。
- 純圖片HTML、含圖README及分頁稿完整。GitHub使用相對PNG連結，不依賴本機file URL或ZIP。

## 測試

- `node presenter/build-deck.mjs`：56張SHA及講稿一致，成功產生deck.json與56頁重點。
- Node：core、preview-layout、v28、v29、v30、v32、v37測試，26 passed，0 failed。
- `python3 presenter/tests/server_test.py`：2 passed。
- `node presenter/tests/http-check.mjs http://127.0.0.1:8767`：56張實際HTTP回傳PNG的SHA256、完整講稿/重點/轉場、6份UI資源皆通過；私人檔案與超出頁數路徑皆404。
- 8767既有launchd服務經核對程式為本專案presenter/serve.py後重啟；仍只綁定127.0.0.1。
- `git diff --check`通過。

## 發佈範圍與限制

本次提交限v37自包含圖集、分頁稿、播放器資料、必要測試與說明。不納入v36的60頁試作、ZIP、暫存、其他歷史工作目錄異動。舊版圖集與原圖保留在本機。

現用站台為56頁、圖片v37、講稿v37。PDF沒有更新；未重測實體雙螢幕、大會投影及長時間播放。GitHub是原始檔案保存，不是公開站台部署。
