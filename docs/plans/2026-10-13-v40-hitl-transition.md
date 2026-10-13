# 第33至34頁 HITL 轉場調整

**Goal:** 在既有59頁中，補清楚證據檢查與人的確認處理不同問題。

**Architecture:** 沿用v40 builder；只替換34頁標題圖片，同步33至36頁轉場、原始講稿、分頁稿及站台。其他58張目前圖像不變，不新增頁數。

**Tech Stack:** built-in image_gen、Node.js builder、現有Python站台。

## 使用者確認的設計

- 34頁標題：符合規則，還有哪些事需要人確認？
- 保留理解確認與操作批准原圖，不新增人工檢查證據的語意。
- 33頁結尾：報告有依據，仍不代表理解正確或操作已獲批准。
- 34頁概述兩種介入，35、36頁分別展開。

## 執行與驗證

1. 先產圖檢視，再保存PNG與提示，修改builder與講稿。
2. 建置59頁文件與站台；builder驗證其餘來源SHA不變。
3. 執行`node presenter/tests/http-check.mjs http://127.0.0.1:8767`與`git diff --check`。
4. 儲存驗證檔`docs/verification/2026-10-13-v40-hitl-transition.md`。本輪供使用者確認，不提交推送，不更新歷史PDF。
