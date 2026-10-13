# 雙螢幕圖片簡報播放器

## 現行版本：v40・59頁・圖內無頁碼

原37與38頁之間新增「可以執行，不代表能正確完成任務」，再接出錯後回看執行。原58張圖片逐位元保留，原38～58頁順延為39～59；37與新39頁講稿轉場同步。

- [59頁圖片與講稿](../images/candidates/2026-10-13-v40-slides-01-59-execution-bridge/README.md)
- [59頁純圖片HTML](../images/candidates/2026-10-13-v40-slides-01-59-execution-bridge/gallery-images-only.html)
- [59頁分頁稿](../storyboard/59-slide-storyboard-v40-execution-bridge.md)
- [59頁講述重點](59-page-key-points-v40.md)
- [發佈驗證](../docs/verification/2026-10-13-v40-execution-bridge.md)

## 上一版：v39・58頁

封面底部署名JamisLiao，使用草寫英文；依使用者回饋採較小尺寸。

第7至8頁的講稿與重點先問模型下一步需要哪些資料，再說明完整結果保存與本輪Context準備，頁數與圖片不變。

第16頁已更新標題、正式報告需求與自由撰寫風險的圖片，第16至17頁講稿同步；圖示依原第43頁母版維持細鋼筆筆觸，文字經第15及17頁對照收斂至中等手寫字重，紅色與深藍文字採一致的相對字重。

第23頁為「把實際執行，對回任務要求」，第24頁為「Evaluation 要看結果，也要看執行過程」。第25頁左側為Judge、右側為程式檢查，圖示與說明整組互換，講述順序先左後右。兩種方法不與結果或軌跡固定配對；不新增示範頁。26頁移除底部「每次執行後，用同一套標準判定」，接27頁重跑、28頁測試限制。第28頁標題改為「測試全過，不代表下次一定照做」。第30頁改為「輸出結論要有證據」、「權限不足不能修改」、「修改前由程式檢查」，講稿與重點同步。相較v38保留其餘50張圖，頁序與58頁總數不變。

第34頁為「讓人介入：確認理解、批准操作」，補上Human-in-the-Loop（HITL）；第38頁為「任務出錯時，要能回看當時的執行」。第33與37頁講稿轉場同步，保留第35、36與39～41頁圖片及內容。

- [58頁完整圖片與講稿](../images/candidates/2026-10-13-v39-slides-01-58-evaluation-titles/README.md)
- [純圖片HTML](../images/candidates/2026-10-13-v39-slides-01-58-evaluation-titles/gallery-images-only.html)
- [58頁分頁稿](../storyboard/58-slide-storyboard-v39-evaluation-titles.md)
- [58頁講述重點](58-page-key-points.md)
- [本輪驗證](../docs/verification/2026-10-13-v39-evaluation-judge.md)

## 啟動

需要 Node.js 22或更新版、Python 3。Clone後在專案根目錄執行：

```bash
node presenter/build-deck.mjs
python3 presenter/serve.py --port 8767
```

用 Chrome 開啟 [講者控制台](http://127.0.0.1:8767/)。頁首應顯示「59頁・圖片v40／講稿v40」。

已有控制台或投影視窗時，請先關閉舊投影、重新整理控制台，再開啟投影。圖片網址附SHA256避免舊快取，停留頁序依版本分開保存。換了來源目錄或頁數，須重新啟動自己的服務；不要終止不明的占用程序。

不要直接雙擊播放器HTML，資料載入與螢幕權限需要HTTP。此站台只綁定127.0.0.1；GitHub保存檔案，不會執行Python服務。GitHub可直接看上方含圖README，HTML需下載後開啟。

## 雙螢幕操作

1. macOS顯示器使用延伸桌面，不使用鏡像顯示。
2. 講者控制台放在講者螢幕，點「偵測螢幕」並授權。
3. 選觀眾螢幕，點「開啟投影」及「投影全螢幕」。
4. 若瀏覽器限制跨視窗全螢幕，切到投影視窗按 **F**，或點「全螢幕，只顯示圖片」。
5. 回控制台換頁、看講稿。觀眾視窗只顯示圖片，不接收講稿與重點。

不支援螢幕偵測時，可手動將投影視窗拖到第二螢幕再按F。投影保持完整比例，不裁切；黑邊補足螢幕比例差異。只有圖片成功載入後才回報投影已同步。

## 控制

- ←／→、Page Up／Page Down、空白鍵：換頁。
- Home／End：第一頁／最後一頁。
- 輸入頁碼或點縮圖：跳頁。頁序顯示在控制台，不印在圖片內。
- A−／A＋：講稿與重點字級18–36px。
- 投影視窗F／雙擊：全螢幕；Esc退出。
- 「關閉投影」只關觀眾視窗，講稿保留。
- 下一頁預覽為左欄77%寬，完整比例不裁切。

## 重建及驗證

`deck-config.json`是站台版本、來源目錄、頁數與分頁稿的設定來源。重建會檢查每張PNG的SHA256，以及講稿和manifest相符，再產生`deck.json`與58頁重點文件。一般重建不需重新製圖，也不需舊核對包。

```bash
node presenter/build-deck.mjs
node --test presenter/tests/core.test.mjs presenter/tests/preview-layout.test.mjs presenter/tests/v39.test.mjs
python3 presenter/tests/server_test.py
node docs/verify-v39-live.mjs
```

伺服器只提供播放器白名單檔案及58張具名PNG；第59頁起、git、歷史資料、來源講稿與任意repo檔案均不對外提供。投影視窗不請求完整deck講稿。

## 限制

- v39保留原生約1672×941尺寸，沒有放大或宣稱1080p。
- 本輪驗證本機HTTP、資料與圖片完整性；未重新驗證實體雙螢幕、會場投影、Safari或長時間播放。
- 原版本與PDF保留；歷史PDF不是此份v39的58頁版本。
- [Chrome Window Management API](https://developer.chrome.com/docs/capabilities/web-apis/window-management)
