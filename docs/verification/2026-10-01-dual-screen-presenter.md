# 雙螢幕圖片簡報播放器驗證

Final Decision: PASS_WITH_KNOWN_LIMITATIONS

Date: 2026-10-01
Plan: `/Users/jamisliao/projects/agent-runtime-summit/docs/plans/2026-10-01-dual-screen-presenter.md`
Registry: P-291
Changes: 新增 `presenter/`，不改 v14 PNG、v13 講稿或原圖庫，不 commit/push。

## 自動測試證據

- `node --test presenter/tests/core.test.mjs`：8/8 PASS、0 failures、exit 0。
- `python3 presenter/tests/server_test.py`：2/2 PASS、exit 0。
- `node presenter/tests/http-check.mjs http://127.0.0.1:8767`：60 PNGs、deck、6 UI 資產 PASS；私密路徑 404；投影頁不請求講稿資料。
- `node --check presenter/presenter.mjs`、`node --check presenter/projection.mjs`：exit 0。
- TDD：核心 parser、邊界、同源/session 驗證、ack、圖片載入競態先 RED 後 GREEN。
- 後續發現並覆蓋：按鈕取得焦點後方向鍵仍須換頁；指定頁碼需支援 Enter/blur/Tab。已新增失敗測試，再實作修正並於 UI 實測。

## 瀏覽器實測

### Codex 內建瀏覽器

- 60 縮圖與原講稿載入；圖片 naturalWidth = 1672。
- 換頁同步講稿、轉場提示與下一頁。
- 獨立投影視窗回覆實際載入成功：第 2、3 頁皆顯示「投影已同步」。
- 直接輸入 25 + Enter 切換 25；下一頁按鈕後按 Right 切到 27。
- 輸入 60 + Tab 切到 60，下一頁 disabled，顯示簡報結束；回到第 1 頁正常。
- 講稿字級 22px → 24px 的 computed style 已核對。
- 375×812：clientWidth = scrollWidth = 375，無水平溢出；已重設 viewport。
- 桌面：clientWidth = scrollWidth = 1043，無水平溢出。
- 瀏覽器 error/warn logs：空陣列。
- 跨視窗 fullscreen 失敗：講者頁提示改到投影視窗按 F，沒有假成功訊息。

### Chrome 訪客模式、實體兩個螢幕

- 使用專用訪客視窗，未讀取個人分頁、cookie 或登入帳戶。
- 「偵測螢幕」觸發 Chrome 的 window-management 授權。允許後顯示 2 個螢幕。
- 講者視窗位於 LG ULTRAWIDE；選取另一個「內建Retina顯示器 · 1512 × 982」。
- 開啟投影後，Chrome 的視窗選單顯示投影可「移到 LG ULTRAWIDE」、講者可「移到內建Retina顯示器」，核對兩視窗在不同螢幕。
- 在投影視窗點全螢幕及按 F 皆成功：AX 只剩投影片影像，螢幕截圖沒有按鈕、工具列或講稿，黑色補邊且圖片完整。
- 投影端按 Right 由第 1 頁切到第 2 頁；回到講者頁看到第 2 頁圖片、正確講稿及「投影已同步」。
- 從講者頁呼叫 fullscreen 被 Chrome 拒絕；直接在投影視窗按 F 備援成功。
- 退出 fullscreen、關閉測試投影後，講者頁回到「尚未開啟投影」，選取頁碼和講稿保留。

## 預覽證據

- 講者控制台：`/private/tmp/agent-runtime-presenter-2026-10-01.jpg`
- Chrome 第二螢幕純圖片全螢幕：`/private/tmp/agent-runtime-projection-2026-10-01.jpg`

## 限制與人工驗收

- 本機雙螢幕與 Chrome 的直接 fullscreen 已實測，不代表會場投影機或所有瀏覽器已驗收。
- Safari、螢幕拔插、拒絕權限、popup blocker、長時間簡報播放：MANUAL_REQUIRED。拒絕/不支援等路徑有程式備援，但未逐項實測。
- Chrome 講者頁的一鍵 fullscreen 不能保證成功；明確要求觀眾視窗的一次使用者手勢。
- 講稿為 v13 分頁稿的逐頁節錄，不是完整主稿逐字講稿。候選图片尚未改成 approved。
- 服務只綁 127.0.0.1，不公開發布，不提供 Tailscale 或 GitHub hosting。
- 本機 8766 已被既有服務占用，本輪使用 8767，沒有終止或修改既有服務。
- 功能與測試已完成；視覺設計是否採用、會場投影體驗，仍由使用者確認。
