# v38 Evaluation 銜接與58頁站台驗證

Final Decision: PASS_WITH_KNOWN_LIMITATIONS

## 修改與視覺檢查

- 僅重新生成第21頁，原標題保留，以一張「任務驗收卡」列出必要操作、交付成果；無頁碼，延續深藍手繪字、方格紙與淡藍排線。
- 目視確認文字完整、圖示正確、未使用已通過勾選，沒有再次繪製Evaluation三步流程。原生1672×941，不宣稱1080p。
- 20指出完成不能只看回答；21定義成功；22介紹實際測試；23沿用條件尋找執行依據。附近講稿、轉場與每頁重點一致更新。
- 新圖來源及完整prompt：`images/candidates/2026-10-13-evaluation-intro-preview/CRITERIA-V6-PROMPT.json`；使用內建imagegen。

## 驗證證據

- `node docs/build-v38-evaluation-preview.mjs`：58頁、v37其餘55張原圖雜湊及相對順序一致。
- `node presenter/build-deck.mjs`：58頁、圖片v38／講稿v38，圖片雜湊與講稿檢查通過。
- Node測試：core、preview-layout、v28、v29、v30、v32、v37、v38，29/29通過。
- v38測試以先前已推送commit `37b1b62e269bed2d2974b8684a1f27165d8a6d4a` 比較，57張PNG位元組完全相同，只有第21頁改變。
- Python路由測試2/2通過。
- 既有launchd服務重新啟動；`node docs/verify-v38-live.mjs`通過：HTTP deck與磁碟資料相符、58張PNG雜湊一致、7個UI路徑200、私有路徑與第59頁404。
- 兩份gallery各58張，README58張；講稿、重點、轉場與站台逐頁一致。

## 已知限制

- 尚未取得使用者對新圖的視覺接受，也未做實體雙螢幕或會場投影驗收。
- 歷史PDF保留，未更新為58頁。
- 只更新本機站台；GitHub保存文件與圖片，不替使用者執行本機服務。
- 既有v17修改與淘汰的預覽不納入此次提交。
