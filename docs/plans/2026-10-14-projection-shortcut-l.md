# 投影全螢幕快捷鍵改為L

使用者要求把F改為L，並接續上一個尚未執行的提交與推送要求。

1. 先新增投影鍵盤行為測試，確認L/l進全螢幕、F不再觸發、修飾鍵不觸發、Esc不被攔截。
2. 修改projection.mjs及目前站台所有提示、README；既有按鈕和原生Esc退出不變，不自動重進，不修改Chrome權限。
3. 執行鍵盤及站台回歸、HTTP與差異檢查；連同第16頁圖片整合做範圍簽章提交與推送，核對origin/main SHA。

驗證檔：docs/verification/2026-10-14-projection-shortcut-l.md
