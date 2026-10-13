# 精簡講者提示與14吋免捲動版面 Implementation Plan

> **For Codex:** REQUIRED SUB-SKILL: Use executing-plans to implement this plan task-by-task.

**Goal:** 保留58頁圖片及順序，讓講者只讀主旨、重點、轉場，並在小螢幕免捲動操作。

**Architecture:** 使用原生HTML/CSS/JS，講者工作區按可用視窗高度配置。左側目前頁與下一頁約65:35，右側精簡提示；總覽改為按鈕開啟dialog。58頁提示以有標題校驗的資料檔保存，透過既有builder同步manifest、分頁稿與deck，長講稿仍保留於來源文件。

**Tech Stack:** 現有Node建置與測試、原生CSS Grid、HTML dialog、CUA瀏覽器視窗能力。

## Task 1：來源與失敗測試

- 保存目前manifest於驗證資料，核對58頁與50/51已互換。
- 新增`presenter/tests/compact-presenter.test.mjs`，檢查右側無標題/原講稿、總覽dialog、桌面高度配置、精簡提示的數量和長度。
- 執行`node --test presenter/tests/compact-presenter.test.mjs`，確認功能未完成而FAIL。

## Task 2：提示整理與版面

- 新增`docs/speaker-cues-v41.json`：58筆n/title/message/points/transition，保留技術區分、示例限制，刪除編輯備註。
- 修改`docs/build-v41-investigation-sequence.mjs`，依n/title嚴格核對後套用精簡提示，原搭配講稿保持。
- 修改`presenter/index.html`、`presenter/styles.css`、`presenter/presenter.mjs`，移除長講稿及重複標題，壓縮控制列，桌面工作區使用剩餘高度。
- 保留上一頁/下一頁、頁碼跳轉、A±、雙螢幕投影及隱私邊界；不足時自動降低提示字級至18px，不裁切內容。
- 改寫既有`preview-layout.test.mjs`的舊77%寬度假設，適應65:35高度布局。

## Task 3：驗證與交付

- 建置提示與deck，全部58張圖片SHA與之前完全一致。
- 用CUA驗證1512×850、1440×800、1280×720的58頁（含最大字級要求、首頁尾頁、總覽開關及頁碼跳轉），DOM量測body/notes無溢位，圖片object-fit:contain。
- 保留實際瀏覽器截圖；測試後還原視窗尺寸與原選取頁。
- Node測試、Python server測試、live HTTP檢查、git diff --check；更新README與驗證檔。
- 不提交推送、不更新PDF、不宣稱實體雙螢幕已驗收。

驗證檔：docs/verification/2026-10-14-presenter-compact-cues.md
