# 發佈52頁分頁稿與含圖講稿｜驗證

Final Decision: PASS_WITH_KNOWN_LIMITATIONS

判定範圍是發佈包完整性；不是圖片全部核准、精細文字或投影驗收。

## 交付與驗證

- 純文字分頁稿：storyboard/52-slide-storyboard-v17-integrated.md。
- 含圖完整文字稿：images/candidates/2026-10-01-v17-slides-01-52/README.md，每頁包含圖片、核心訊息、畫面文字與設計、搭配講稿、重點及轉場。
- 52張PNG均複製到發佈目錄，每張1672×941，合計79,868,188 bytes；hash與選定來源一致，沒有依賴未上傳候選圖片。
- 新52頁連續，原60頁映射各出現一次。第08頁新圖、標題、講稿、重點與前後轉場已整合。
- verify.mjs核對52張圖片、52段完整講稿、52個錨點、Markdown與HTML所有本機連結；--staged另核對連結目標都已追蹤。
- 原本尚未提交的根README、v16來源manifest及60頁presenter/deck.json hash未變；無關檔案不納入提交。
- GitHub目標已查證：jamisliao/agent-runtime-summit，PRIVATE，預設main；提交前本機與origin/main一致（0/0）。限定本次發佈包與這份計畫／驗證提交，非force push。
- 實際提交與push成功證據由終端結果與後續git ls-remote核對；驗證文件不寫入自身commit SHA，避免自引用。

## 限制

- 44张沿用圖保留原60頁圖內頁碼；其中43張與新頁碼不同，第01頁新舊均為01。閱讀以文件標頭與檔名的新52頁頁碼為準。
- 06、12、16、29、33、51仍有必要文字放大需求。點陣圖無法證明實際pt，未做實際投影驗收。
- 圖片仍標pending_user_review，不因推送而全部視為核准；目前60頁播放器不更換。
- GitHub Markdown預覽可顯示圖片；HTML在blob頁面不會執行，不宣稱已部署網站或GitHub Pages。
- Browser render / physical projection: NOT_RUN。本輪檢查本機連結、已追蹤圖檔與Git遠端，不繞過此前file URL限制。

可重跑：node images/candidates/2026-10-01-v17-slides-01-52/verify.mjs --staged。
