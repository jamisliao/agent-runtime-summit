# 雙螢幕圖片簡報播放器

本機講者控制台，搭配獨立的純圖片投影視窗。目前接入v32的56張圖片及對應分頁稿，保留每頁主旨、重點、原講稿與轉場。播放器建置只讀取來源，不修改投影片圖片或改寫來源講稿。

目前圖集為 [56頁v32純圖片](../images/candidates/2026-10-08-v32-slides-01-56-log-context-integrated/gallery-images-only.html) 與 [含圖講稿](../images/candidates/2026-10-08-v32-slides-01-56-log-context-integrated/README.md)。v32整合第10、11頁線上問題與Log篩選案例，其餘54張圖片與v30相同。已確認的第5頁、Trace銜接、結尾三金句及歷史版本保留。

## 啟動

目前共56頁；預設網址為 `http://127.0.0.1:8767/`。需要Python 3，重新建置資料時另需Node.js 22或更新版。

```bash
# 在下載或 clone 後的專案根目錄執行
node presenter/build-deck.mjs
python3 presenter/serve.py --port 8767
```

用 Chrome 開啟 [講者控制台](http://127.0.0.1:8767/)。不要直接雙擊 HTML 檔案，因為資料載入、視窗同步和螢幕權限需要 HTTP 環境。

這次已啟動8767服務。若先前開著控制台或投影，請關閉舊投影、重新整理控制台，再開啟投影；頁首應顯示「56頁・圖片v32／講稿v32」。本機服務需要持續執行，電腦重啟後請重新啟動。

若 8767 已占用，先確認是否已有此播放器在執行，也可以指定其他埠，例如 `--port 8768`，並開啟 `http://127.0.0.1:8768/`。不要直接終止未知程序。停止服務時，在啟動它的 Terminal 按 Ctrl+C；重新執行即可恢復。

## 雙螢幕操作

1. 在 macOS 顯示器設定使用「延伸桌面」，不要使用鏡像顯示。
2. 將講者控制台放在講者的螢幕。
3. 點「偵測螢幕」，允許此本機網站管理螢幕上的視窗。
4. 選擇觀眾／投影螢幕，再點「開啟投影」。Chrome 會在指定位置開啟另一個視窗。
5. 點「投影全螢幕」。如果瀏覽器不允許跨視窗啟動，直接到投影視窗按 **F** 或點「全螢幕，只顯示圖片」。這不是錯誤頁碼，屬於瀏覽器的使用者手勢限制。
6. 回到講者控制台換頁、閱讀講稿。投影畫面不會包含講稿或控制 UI。

投影保持圖片完整比例，以黑色補足不同螢幕的留邊，不放大裁切圖片。預覽中的「投影已同步」必須等投影圖片載入成功；失敗時顯示上一張實際投影的頁碼。

不支援偵測或拒絕權限時：開啟投影 → 手動拖到第二個螢幕 → 按 F。螢幕拔除後請重新選擇，不保證 OS 會把全螢幕視窗移到正確螢幕。

## 控制

- ← / →、Page Up / Page Down：換頁，講者與投影視窗都支援。
- 空白鍵：下一頁（輸入框或按鈕有焦點時保留原本的操作）。
- Home / End：第一頁／最後一頁。
- 頁碼欄位：輸入頁數後按 Enter、Tab 或點其他地方切換。
- 縮圖：直接跳頁。
- A− / A＋：講稿字級 18–36px；頁碼與字級在同一瀏覽器保留。
- 講者區先顯示本頁主旨與 2–3 個講述重點，下方保留原講稿及接下一頁；重點也跟隨 A− / A＋ 調整字級。
- 投影視窗 F / 雙擊：進入全螢幕；Esc 退出。
- 「關閉投影」：只關閉觀眾視窗，講者頁保留。
- 下一頁預覽使用左側欄位 77% 寬度，標題置於圖片上方，保持完整比例不裁切。

## 資料更新與測試

```bash
cd /Users/jamisliao/projects/agent-runtime-summit
node presenter/build-deck.mjs
node --test presenter/tests/*.test.mjs
python3 presenter/tests/server_test.py
node presenter/tests/http-check.mjs http://127.0.0.1:8767
```

`deck-config.json`是建置與伺服器共用的版本、來源與頁數設定。建置會從v32分頁稿解析講稿、主旨與轉場，重點取自同一版`manifest.json`，並檢查56頁的標題、頁序、講稿及PNG的SHA256全部對應，才產生`deck.json`與[56頁重點文件](56-page-key-points.md)。歷史`key-points.json`與`60-page-key-points.md`不再是現行來源。

更換圖片或講稿後重跑建置並重新整理控制台；更換`deck-config.json`來源目錄或頁數時，要先停止自己的服務，再重新啟動。圖片網址带SHA256版本識別，避免舊快取；頁碼記憶依版本區分，避免沿用60頁版的停留位置。

觀眾視窗只收到圖片、標題、頁碼，不收到 notes、transition、message 或 points。

HTTP server只綁定`127.0.0.1`，只提供白名單播放器檔案與56張具名PNG；第57頁起、歷史資料、設定檔、git、主講稿、目錄清單及任意repo檔案都不提供。播放器與最新圖稿納入Git版本管理，但這不是公開hosting；GitHub不會直接執行這個Python服務。

## 已知限制

- 指定螢幕需 Window Management API 與瀏覽器授權；主要支援 Chrome。不同瀏覽器的 fullscreen 行為不同。
- 歷史版本曾驗證Chrome可偵測兩個螢幕、放置獨立投影視窗並在投影視窗進入全螢幕；從講者頁呼叫fullscreen被拒絕，已提供F／直接點擊備援。v30未重測實體雙螢幕。
- 實際大會投影機、Safari、拔插螢幕和長時間播放未驗證；使用前應在會場測試。
- [Chrome Window Management API 官方說明](https://developer.chrome.com/docs/capabilities/web-apis/window-management)

本次驗證：[投影站台同步與發佈](../docs/verification/2026-10-12-presenter-v32-publish.md)。來源整合驗證：[v32第10、11頁完整整合](../docs/verification/2026-10-08-log-context-10-11-integration.md)。歷史雙螢幕驗證：`docs/verification/2026-10-01-dual-screen-presenter.md`；不代表本輪已重測實際雙螢幕或投影機。
