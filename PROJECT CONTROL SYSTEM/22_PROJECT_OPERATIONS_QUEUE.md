# 22 — Master Hub Project Operations & Queue

DATE: 2026-10-02
STATUS: ACTIVE — CONTROLLED RECONSTRUCTION READY FOR REVIEW

This is the canonical operational queue for the existing Master Hub. It does not create a second project-management system.

## State Rules
Queue: `QUEUED / APPROVED / IN DEVELOPMENT / TESTING / READY FOR REVIEW / WAITING / BLOCKED / FINALIZED / REJECTED / DEFERRED`

Priority: `CRITICAL / HIGH / NORMAL / LOW / SOMEDAY`

Built is not deployed. Deployed is not verified. Verified is not finalized until explicit Project Owner approval.

## Current Build & Deployment Snapshot
- Reconstructed product-code head: `d1b857dc5c6fb6cf9239d3d68557a43077b2c097`
- Latest product CI: GitHub Actions `36949404777` — PASS (install / lint / test / build)
- Canonical production alias: `https://master-hub-sigma.vercel.app`
- Observed production deployment: `dpl_2Mtpv99iSHbBfPtNsUFU43Z1R59z`
- Observed production commit: `965a2b2e6ea15b053e2d60ca4c76802bcd3d5755`
- Production state: `READY`
- Source ahead of production by 2 product commits: `de9d82b`, `d1b857d`
- Safe prior READY rollback candidate: `dpl_FQ56GB4NKryTiPUQQj1kSdEb35qg` @ `7b851a6`

## Operational Queue
| Queue ID | Title | Area / Tool | Priority | Status | Approval | Dependencies / Blockers | Related Evidence | Next Action | Finalization |
|---|---|---|---|---|---|---|---|---|---|
| QUEUE-001 | Contain restricted field-service material | Security & Restricted Data | CRITICAL | WAITING / BLOCKED | Boundary APPROVED; destructive containment not yet authorized | Verified private canonical destination + recovery checkpoint required | DEC-016, DEC-017, DEF-009, SECURITY-BOUNDARY-1.0 | Establish safe private preservation; verify completeness; then request destructive-containment approval | NOT FINALIZED |
| QUEUE-002 | Repair Package Part # auto-fill source | Repair Packages | HIGH | READY FOR REVIEW | APPROVED / BUILT / DEPLOYED / VERIFIED | Owner finalization only | DEF-010 VERIFIED; CI 36947000535; dpl_FQ56...; live /repair-packages 200 | Present verified behavior for owner review | NOT FINALIZED |
| QUEUE-003 | Repair Package cost-update regression verification | Bugs & Testing | HIGH | READY FOR REVIEW | APPROVED / VERIFIED | None known | DEF-010 automated Part # → name → cost → add → total → persistence PASS | Retain regression coverage; close/finalize only with owner approval | NOT FINALIZED |
| QUEUE-004 | Reduce duplicate Vercel project build fan-out | Build & Deployment | HIGH | WAITING / BLOCKED | OWNER DECISION REQUIRED for disconnect/retire | Destructive project changes require approval | ISSUE-002 / RISK-001 / TD-009 | Reconfirm canonical project map, then present exact non-destructive + destructive cleanup plan | NOT FINALIZED |
| QUEUE-005 | Restore Recovery Value Calculator live target | Integration | HIGH | QUEUED | Repair need established | Recovered source not canonicalized / production mapping unresolved | Fresh 2026-10-02 HTTP 404; ISSUE-008 / ISSUE-012 | Validate recovered source and propose controlled restore/promotion | NOT FINALIZED |
| QUEUE-006 | Source-bind Project Control Center status | Project Control | NORMAL | QUEUED | NOT YET APPROVED FOR IMPLEMENTATION | Architecture choice needed | ISSUE-007 / DEF-005 / TEST-018; live page still displays stale DEF-010 text | Design smallest generated canonical-status artifact | NOT FINALIZED |
| QUEUE-007 | Recover canonical source for standalone tools | Recovery / Integrations | HIGH | QUEUED | Investigation APPROVED | Historical source locations incomplete | ISSUE-011 / RISK-012 / TD-011 | Locate and document repo/path/deployment/backup ownership per live tool | NOT FINALIZED |
| QUEUE-008 | Enforce main/baseline repository protection | Governance / GitHub | HIGH | WAITING / BLOCKED | OWNER APPROVAL REQUIRED | Workflow-impacting governance action | Fresh GitHub main `protected=false` | Present exact ruleset/status-check proposal before enabling | NOT FINALIZED |
| QUEUE-009 | Project Operations & Queue control layer | Project Control | HIGH | FINALIZED | OWNER ACCEPTED 2026-10-01 | None | PROJECT-OPS-1.0 | Maintain as canonical operational system | FINALIZED 2026-10-01 |
| QUEUE-010 | Strict Device → SubDevice → Scope isolation | Scope Templates | HIGH | TESTING | APPROVED / BUILT | Latest strict enforcement is 2 product commits ahead of observed production | `965a2b2` centralization deployed; `de9d82b` enforcement; `d1b857d` regression; CI 36949404777 PASS | Deploy latest main product state and live-verify exact grouping + cross-group attachment block | NOT FINALIZED |
| QUEUE-011 | Controlled reconstruction pass | Project Control | HIGH | READY FOR REVIEW | APPROVED by Project Owner request | None | Git/release/decision/queue/route/Vercel evidence ledger | Owner review, then finalize if accepted | NOT FINALIZED |

## Bugs & Testing
- DEF-009 — restricted field-service public exposure: `OPEN / CRITICAL`.
- DEF-010 — Repair Package Part # / cost auto-fill: `VERIFIED` in the canonical Defect Register. Old queue text saying it remains in testing is superseded.
- Strict scope isolation latest source: CI PASS, production verification pending.

## Live Route Snapshot
Fresh HTTP 200 on canonical production:
`/`, `/project-control`, `/field-resource-hub`, `/field-diagnostic-hub`, `/finances-command-center`, `/repair-packages`, `/scope-templates`.

## Registry Accuracy
- Live Master Hub root displays 10 `Live` workspaces and 0 `Setup needed`.
- This is registry metadata, not full health verification.
- Recovery Value Calculator is displayed `Live` but its configured public URL is freshly verified HTTP 404.
- Therefore accurate-runtime-status work remains open under REQ-005 / TEST-015 / RISK-004.

## Security & Restricted Data
Field-service diagnostics, repair procedures, parts, billed-work operational data, scope wording, quoting workflows, customer-operational information, and related proprietary material remain RESTRICTED by default.

No destructive containment/history rewrite/visibility change/deployment retirement is authorized by this queue update.

## Release History Reality
Finalized/accepted releases preserved:
- CONTROL-BASELINE-1.0
- SECURITY-QUALITY-1.0
- SECURITY-BOUNDARY-1.0 classification baseline (containment still open)
- PROJECT-OPS-1.0

Recent product work after PROJECT-OPS-1.0 is not automatically finalized. Repair Package verification and Scope Templates isolation remain separately tracked.
