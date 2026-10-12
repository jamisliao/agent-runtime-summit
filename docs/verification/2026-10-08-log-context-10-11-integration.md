# 第10、11頁Log與Context案例整合驗證

Final Decision: PASS_WITH_KNOWN_LIMITATIONS

## 範圍與來源

- 使用者已確認v31兩張預覽；v32只替換第10、11頁，共56頁，頁序不變。
- 第10頁SHA256：74c6abfec24f73aa63d7d8677985649324829fa5c77401cd43b56eb48af41faa。
- 第11頁SHA256：eb62a0346a714151367f2fbd1c918aac8d1c67106a0ae965b071f79f16322bd4。
- 原v30圖集及PDF保留。其他54張PNG，以及54頁的標題、畫面文字／設計、講稿、重點與轉場均與v30一致。
- 同步原稿v3.1案例開頭、第10、11頁分頁講稿、含圖README、兩種完整圖集、播放器與PDF；未commit／push。
- 敘事是分析線上問題→LLM判斷查Log→Tool回傳大量原始Log→整包回塞使Context爆量→先篩選再放進Context。沒有將前段改為幻覺或Evidence章節。
- 篩選方式按需選用，不是固定四步，原始資料保留以供後續取用。

## 結構與資料驗證

- `node docs/build-56-slides-v32.mjs`：56頁、177個相對連結通過、其他54張圖片位元組相同。
- `node presenter/build-deck.mjs`：56張來源PNG雜湊，以及講稿與轉場完全對應。
- `node --test presenter/tests/*.test.mjs`：23／23通過。最後更正畫面設計文字的繁體字後，v30／v32目標測試4／4再通過。
- v30測試保留歷史來源驗證，不再要求現行播放器必須是v30；v32新增測試嚴格核對目前播放器全部56頁。
- `python3 presenter/tests/server_test.py`：2／2通過。
- 8767舊監聽PID31065經`ps`確認為本專案`presenter/serve.py --port 8767`，只停止並重新啟動該服務，載入v32設定。
- `node presenter/tests/http-check.mjs http://127.0.0.1:8767`：56張PNG雜湊一致，講稿／重點／轉場一致，6個UI資產可載入，私有與超出頁數路由拒絕。
- `node tmp/check-v29-http.mjs`：從當前v32匯出紀錄檢查5份HTML、56張PNG、2份Markdown、PDF，全部HTTP200且雜湊相同。8769入口URL保留。

## PDF

- `tmp/pdfs/export_v32.py`：56張960×540pt頁面，16:9。只重新嵌入第10、11頁JPEG品質94、4:4:4、不下採樣；其他54頁圖片與內容串流完全不變，草寫JamisLiao封面及第5頁保留。
- 27,546,985 bytes；SHA256：ff82581ecc447d8228459dc6c9f2c1c1632c41534d6591e6751f06d27de73f0c。
- `pdftoppm -f 10 -l 11 -scale-to 1672 -png ...`：exit0。兩頁完整尺寸目視核對中文、英文、頁碼、icon及留白，未見文字重疊、缺字或裁切。

## 未驗收事項

- 本輪兩頁已確認，不將全圖集提升為正式核准。
- 未重測實體雙螢幕／會場投影、精確字型或Raster實際pt；HTTP檢查不等於上述驗收。
- JPEG為有損壓縮，不保證任意放大倍率皆無差異。
