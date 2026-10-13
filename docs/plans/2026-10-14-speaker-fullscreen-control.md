# 講者控制台管理投影全螢幕 Implementation Plan

> **For Codex:** REQUIRED SUB-SKILL: Use executing-plans to implement this plan task-by-task.

**Goal:** 講者在控制台點「投影全螢幕」即可控制投影視窗；移除觀眾側按鈕，保留 L 與原生 Esc。

**Architecture:** 延用相同來源、視窗及 session 驗證，以 Chrome Fullscreen Capability Delegation 將當次點按授權交給投影視窗。接收端立即 requestFullscreen；以 fullscreenchange 或已確認的 document.fullscreenElement 回報成功，不在 ready、換頁或 Esc 後自動請求。ScreenDetailed 不傳入訊息，沿用選定螢幕的位置。

**Tech Stack:** 原生 JavaScript、Window.postMessage、Fullscreen API、Node test runner。

## 範圍與限制

- 修改 presenter/presenter.mjs、projection.mjs、projection.html、index.html、README.md。
- 不修改 Chrome 權限、政策或自動全螢幕設定；不改投影片、講稿、排序。
- 本輪未要求再次提交推送；保留其他歷史異動。
- 實作信心 >=90%：現有訊息邊界已確認、無新依賴，W3C Window Management HOWTO 與 WICG capability-delegation 提供 Chrome 支援及確切語法。瀏覽器實際驗收另記錄，不能以單元測試替代。
- 未收到 fullscreenchange／錯誤回報時，3.5秒後提示未確認及 L 備援；不將命令已送出當成成功。

## Task 1: 寫測試並確認 RED

Create presenter/tests/speaker-fullscreen.test.mjs。執行實際兩個模組、僅替代 DOM/browser 邊界：驗證點按才送出 `{type:'enter-fullscreen',session}` 與 `{targetOrigin:location.origin,delegate:'fullscreen'}`；拒絕錯來源、視窗、session；失敗提示；投影頁無按鈕；Esc 不觸發再次進入。

Run: `node --test presenter/tests/speaker-fullscreen.test.mjs`。預期新委派及移除按鈕測試失敗。

## Task 2: 最小實作並確認 GREEN

講者點按 handler 同步執行 `popup.postMessage({type:'enter-fullscreen',session},{targetOrigin:location.origin,delegate:'fullscreen'})`。選定螢幕時先同步 moveTo/resizeTo，避免 await 消耗點按授權。接收端在 acceptMessage 後、validProjectionSlide 前處理命令並立即請求全螢幕。移除投影按鈕與孤立的元素引用；調整提示及使用說明。

Run: `node --test presenter/tests/speaker-fullscreen.test.mjs presenter/tests/projection-shortcut.test.mjs presenter/tests/compact-presenter.test.mjs presenter/tests/core.test.mjs presenter/tests/preview-layout.test.mjs`。

## Task 3: 站台與瀏覽器驗證

- `python3 -m unittest presenter/tests/server_test.py`
- `node presenter/tests/http-check.mjs http://127.0.0.1:8767`
- `git diff --check`
- 使用 CUA 在 Google Chrome 開啟專用測試頁，點開啟投影、點控制台全螢幕；核對實際回報。能操作投影時測 Esc、L 及控制台換頁。
- 若 Chrome 控制不可用，記錄實際限制，不能宣稱 Chrome／雙螢幕已驗收；可用 IAB 驗證本機整合。
- 儲存可核對的畫面至 output/playwright/2026-10-14-speaker-fullscreen/。
- 寫 docs/verification/2026-10-14-speaker-fullscreen-control.md，依實證給 Final Decision，然後完成登錄。

## 參考

- https://github.com/w3c/window-management/blob/main/HOWTO.md#how-to-use-api-enhancements
- https://github.com/WICG/capability-delegation
