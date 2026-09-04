# 已確認的圖片式樣本

以下 10 張是本次保留的圖片式投影片樣本，皆為 1672 × 941 PNG。此目錄刻意排除早期 State Machine／Cost Chain 圖、所有 GIF、後來退回的 Prompt vs Code，以及所有齒輪版本。

| Slide 04 | Slide 14 |
| --- | --- |
| [![Slide 04](slide-04-real-problems-begin-v1.png)](slide-04-real-problems-begin-v1.png) | [![Slide 14](slide-14-data-ref-flow.png)](slide-14-data-ref-flow.png) |

| Slide 17 | Slide 24 |
| --- | --- |
| [![Slide 17](slide-17-model-stability-run-matrix-v3.png)](slide-17-model-stability-run-matrix-v3.png) | [![Slide 24](slide-24-llm-builder-handoff.png)](slide-24-llm-builder-handoff.png) |

| Slide 30 | Slide 31 |
| --- | --- |
| [![Slide 30](slide-30-prompt-guardrail-claim-evidence.png)](slide-30-prompt-guardrail-claim-evidence.png) | [![Slide 31](slide-31-code-boundaries.png)](slide-31-code-boundaries.png) |

| Slide 33 | Slide 42 |
| --- | --- |
| [![Slide 33](slide-33-approval-time-gap.png)](slide-33-approval-time-gap.png) | [![Slide 42](slide-42-replayable-trace.png)](slide-42-replayable-trace.png) |

| Slide 46 | Slide 54 |
| --- | --- |
| [![Slide 46](slide-46-regression-suite-sources.png)](slide-46-regression-suite-sources.png) | [![Slide 54](slide-54-regression-cost-ledger.png)](slide-54-regression-cost-ledger.png) |

## 對照

| Slide | 核心訊息 |
| --- | --- |
| 04 | Tool Loop 跑起來後，真正的工程問題才開始。 |
| 14 | 完整資料留在系統，LLM 只收到下一步需要的 reference。 |
| 17 | 相同 Context 規格不代表模型在長流程的完成能力相同。 |
| 24 | LLM 做判斷，Deterministic Builder 守住正式輸出。 |
| 30 | Prompt 管可容錯行為；不可接受的錯誤交由程式碼攔下。 |
| 31 | 不可違反的條件必須變成可檢查的程式碼邊界。 |
| 33 | Approval 取得後，真實世界仍可能已經改變。 |
| 42 | Trace 必須能重播一條決策路徑。 |
| 46 | 真實失敗會持續成長為 Regression Scenario。 |
| 54 | Cost Ledger 讓每個 Scenario 的代價可比較。 |
