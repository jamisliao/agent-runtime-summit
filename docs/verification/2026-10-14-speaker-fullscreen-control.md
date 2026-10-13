# 講者控制台全螢幕驗證

Final Decision: PASS_WITH_KNOWN_LIMITATIONS

## 已完成

- 講者點「投影全螢幕」同步使用 Fullscreen Capability Delegation。
- 投影側已無網頁按鈕；全螢幕只有完整比例的圖片。
- 來源、指定 popup、session 三項仍逐一驗證；訊息不含講稿或 ScreenDetailed。
- L/l及雙擊備援保留，原生 Esc 不攔截、不自動重進。
- 成功由 fullscreenchange／document.fullscreenElement 證實；拒絕或3.5秒無回報均提示備援，不虛報成功。
- 未更動瀏覽器政策、持續性權限、圖片、58頁內容或排序。實作階段未提交／推送；後續依使用者「commit & push」授權，只提交本次控制台修改、測試及驗證文件，保留既有不相關異動。

## 測試證據

- TDD RED：最初新增8項測試，4項因缺委派及仍有觀眾按鈕而失敗；補正失敗提示測試後5項失敗。新增無回報提示／取消timer兩項亦先失敗。已全螢幕重點按測試先失敗，再修正。
- 最後執行：`node --test presenter/tests/speaker-fullscreen.test.mjs presenter/tests/projection-shortcut.test.mjs presenter/tests/compact-presenter.test.mjs presenter/tests/core.test.mjs presenter/tests/preview-layout.test.mjs`：31/31 PASS。
- `python3 -m unittest presenter/tests/server_test.py`：2/2 PASS。
- `node presenter/tests/http-check.mjs http://127.0.0.1:8767`：PASS；58PNG SHA、講稿／重點、6個UI資源及拒絕越界路由均通過。
- `git diff --check`：PASS。

## 實際 Chrome（CUA 原生視窗）

瀏覽器連接器不可用，改用已安裝 Google Chrome 訪客視窗，以原生按鈕／選單完成以下操作，未修改設定或登入。

1. 載入 localhost控制台，開啟投影；投影頁顯示圖與非全螢幕提示，無網頁按鈕。
2. 回控制台點「投影全螢幕」，Chrome投影視窗的網址列與提示消失，只有圖片。原生Chrome提示亦顯示按esc退出。
3. 按Esc，網址列與非全螢幕提示恢復。控制台收到「投影已退出全螢幕」，未自行重進。
4. 再次點控制台全螢幕成功；控制台收到「投影已進入全螢幕」。
5. 控制台點下一頁，實際回報「投影已同步 · 第2頁」。
6. 關閉測試投影及訪客視窗，原本控制台已重新整理。

畫面：

- [投影全螢幕](../../output/playwright/2026-10-14-speaker-fullscreen/chrome-projection-fullscreen.png)
- [控制台成功回報與換頁](../../output/playwright/2026-10-14-speaker-fullscreen/chrome-speaker-confirmed.png)

## 已知限制／未驗收

- Chrome以手動位置測試；沒有變動OS顯示配置或授予額外螢幕權限。實體雙螢幕指定／正式投影設備仍未驗收。
- L鍵 handler單元測試通過。原生輸入一次l未見狀態改變，故不宣稱原生L實測通過；控制台操作及Esc已實測。
- IAB可開投影與同步換頁，但不回報委派全螢幕；現有3.5秒未確認提示適用，不能用IAB代表Chrome驗收。

## API依據

- https://github.com/w3c/window-management/blob/main/HOWTO.md#how-to-use-api-enhancements
- https://github.com/WICG/capability-delegation
