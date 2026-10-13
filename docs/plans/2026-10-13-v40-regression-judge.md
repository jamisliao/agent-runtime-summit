# v40 回歸測試與 Judge 銜接調整

**Goal:** 依使用者確認的順序，先說修一處可能影響其他情境，再帶出全面重測；Judge 改以準則與範例評審輸出。

**Architecture:** 沿用現有 v40 builder、59 頁站台與 v39 來源；只重畫兩張，其餘依來源 SHA 保留。先產圖再同步文件，不增加頁數。

**Tech Stack:** built-in image_gen、Node.js builder、Python presenter server。

## 已確認設計

- v39 來源順序：1–43、51、44、46、47、45、48、49、50、52–58；在原37之後保留新增橋接頁。
- 現45為回歸風險原圖，46為完整流程與其他情境重測新圖，50為 Judge 準則新圖。
- 52驗收門檻接53 AI協助撰寫 Skill，不再繞回風險金句。

## 執行步驟

1. 完成兩張圖片並檢視文字、風格，保存到 v40 preview 與提示紀錄。
2. 修改 `docs/build-v40-execution-bridge.mjs` 的順序、圖片來源、講稿與轉場；更新原始講稿及 README。
3. 執行 `node docs/build-v40-execution-bridge.mjs` 與 `node presenter/build-deck.mjs`；核對59頁、54張未改v39圖片來源SHA。
4. 執行 `node presenter/tests/http-check.mjs http://127.0.0.1:8767` 與 `git diff --check`，保存驗證紀錄。
5. 範圍內簽章提交與推送，核對遠端 SHA。歷史PDF與實體投影驗收不在此次範圍。

## 驗證檔

`docs/verification/2026-10-13-v40-regression-judge.md`
