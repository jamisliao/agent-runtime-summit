# 投影全螢幕快捷鍵L與第16頁發佈驗證

Final Decision: PASS_WITH_KNOWN_LIMITATIONS

- 投影鍵盤handler由F改為L（大小寫均可），不攔截Ctrl、Cmd、Alt搭配L；F不再進全螢幕，Esc仍交由瀏覽器原生處理。
- projection.html、控制台提示、錯誤/權限提示及目前README同步。保留按鈕、雙擊、Esc退出，不修改Chrome設定，不啟用自動全螢幕。
- 第16頁字重修正版及其重建來源一起發佈，其他57張圖片與58頁所有講述內容及頁序不變，詳見[圖片整合驗證](2026-10-14-slide16-weight-integration.md)。
- 新增測試先跑L/F/提示3項FAIL，修改後L/l、F與Esc、修飾鍵與提示4/4 PASS。使用實際projection模組及最小DOM邊界，不將模擬Fullscreen API呼叫視為瀏覽器權限驗收。
- Node聚焦回歸20/20 PASS。
- 8767實際HTTP檢查PASS：58張PNG、提示／講稿來源、6個UI資源與隱私限制一致。
- 實際控制台reload後顯示L；開啟測試投影同步到第16頁成功，提示使用L，完成後已關閉測試投影。投影popup未由內建瀏覽器工具暴露為可操作tab，因此沒有聲稱實體Chrome中的L鍵或多螢幕已驗收。
- [站台提示截圖](../../output/playwright/2026-10-14-shortcut-l/site-shortcut-l.png)。
- `git diff --check`與簽章提交前暫存區檢查PASS。
- 使用範圍簽章提交與一般push；推送後另核對本機HEAD與origin/main SHA。

限制：未修改Chrome權限，未啟用自動全螢幕，未更新PDF；舊投影視窗須關閉再開，以載入L按鍵版本。
