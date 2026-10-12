# 投影站台同步與發佈驗證

Final Decision: PASS_WITH_KNOWN_LIMITATIONS

## 版本與範圍

- 現行來源：v32、56頁；圖片與講稿均為v32。
- `presenter/deck-config.json`指向完整v32圖集及`storyboard/56-slide-storyboard-v32-integrated.md`。
- 重新建置`presenter/deck.json`與`56-page-key-points.md`；沒有重新產圖、換頁序或改寫原稿。
- 納入播放器、最新版圖稿／分頁稿／原稿／PDF與必要歷史回歸測試來源。v28只納入manifest與分頁稿；v29、v30圖片用於驗證v32未改動頁面；v31保留兩張已確認來源。
- 舊v17未提交的修改、其他試作、暫存資料與歷史大型ZIP不在本次提交範圍。

## 本次執行證據

- `node presenter/build-deck.mjs`：PASS；56張圖片SHA256與講稿、重點、轉場相符。
- `node --test presenter/tests/*.test.mjs`：23／23通過，無跳過。
- `python3 presenter/tests/server_test.py`：2／2通過。
- 啟動`python3 presenter/serve.py --port 8767`，本機服務載入v32設定。
- `node presenter/tests/http-check.mjs http://127.0.0.1:8767`：PASS；56張PNG實際HTTP內容雜湊完全相同，講稿／重點／轉場相符，6個UI資產可載入，私有與超出頁數路徑返回404，投影不請求講者資料。
- 使用`git checkout-index`將staged內容匯出到獨立暫存目錄；在沒有工作站未提交依賴的匯出中，重新建置並執行全部23個Node及2個Python測試：全部通過。
- 在獨立匯出中檢查v32含圖README、兩種gallery、播放器README與root README最新版區塊：190個相對連結均存在；56張PNG納入Git內容。
- 所有提交檔案均小於GitHub單檔100MiB上限。170份PNG路徑對應59個不同Git blob（約96.3MB）；Git會共用相同圖片內容。
- `git diff --cached --check`原始檢查僅列出Markdown換行雙空白與一個末尾空行；保留原稿排版，以`git -c core.whitespace=-blank-at-eol,-blank-at-eof diff --cached --check`檢查：exit0。
- 提交前fetch：HEAD與origin/main無超前或落後提交；不使用force push。

## PDF保留

沿用已驗證的56頁、16:9精簡PDF，未重新壓縮或改動。27,546,985 bytes；本次SHA256重新核對為：

`ff82581ecc447d8228459dc6c9f2c1c1632c41534d6591e6751f06d27de73f0c`

來源驗證：[v32完整整合](2026-10-08-log-context-10-11-integration.md)。

## 限制

- 本次驗證資料、HTTP與可攜式建置；未重新驗證實體雙螢幕、會場投影及精確字型。
- 站台是127.0.0.1本機服務；GitHub保存原始碼與圖稿，不直接執行Python站台。
- root README已區分現行入口與歷史本機工作紀錄；未發佈舊試作不保證在GitHub可開啟。
- 本文件記錄提交前驗證；remote推送成功與提交SHA另由完成回覆提供，不預先宣稱推送成功。
