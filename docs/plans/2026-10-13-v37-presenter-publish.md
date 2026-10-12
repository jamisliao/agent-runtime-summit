# v37 投影站台更新與GitHub發佈

使用者授權：把已完成56頁無頁碼圖集套用投影站台，提交推送到既有GitHub遠端。

- 以v37核對包為唯一圖片來源，保留55頁原順序並在原12後插入Lost in the Middle。
- 將56張PNG與自包含manifest、含圖README、HTML及對應分頁稿納入正式候選目錄。
- 同步播放器設定、講稿、重點與cache hash；修正原預覽版未同步的執行紀錄頁講述內容，使圖片與講稿一致。
- 僅重新啟動已確認為此專案的8767服務，維持localhost及白名單。
- 驗證建置、單元/伺服器測試、56張HTTP實際bytes、頁數與私有路徑拒絕。
- 精準stage本次產物，排除其他歷史未提交修改、ZIP及暫存資料；提交並正常push origin/main，不force。
- 核對遠端commit SHA及必要檔案完整性。實體雙螢幕與大會投影不在本輪驗證範圍。

驗證：docs/verification/2026-10-13-v37-presenter-publish.md
