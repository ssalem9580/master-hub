# 22 — Master Hub Project Operations & Queue

DATE: 2026-10-02
STATUS: ACTIVE — REMEDIATION WAVE 1 FINALIZED / SCOPE ISOLATION FINALIZED

This is the canonical operational queue for the existing Master Hub. It does not create a second project-management system.

## State Rules
Queue: `QUEUED / APPROVED / IN DEVELOPMENT / TESTING / READY FOR REVIEW / WAITING / BLOCKED / FINALIZED / REJECTED / DEFERRED`

Priority: `CRITICAL / HIGH / NORMAL / LOW / SOMEDAY`

Built is not deployed. Deployed is not verified. Verified is not finalized until explicit Project Owner approval.

## Current Build & Deployment Snapshot
- Strict scope regression CI: GitHub Actions `36949404777` — PASS (install / lint / test / build).
- Wave-1 reconciliation/source-binding CI: GitHub Actions `36951330664` — PASS (install / lint / test / build).
- Canonical production alias: `https://master-hub-sigma.vercel.app`
- Verified production deployment for strict scope + source-bound Project Control: `dpl_9k5EKov9oJM7jKwvEFgmeNUjPtjf`
- Verified production commit: `1b5d4e78f164fc4c68f9322aa6348d90cca2c7c5`
- Production state: `READY`
- Live `/project-control`, `/scope-templates`, and `/bw-dashboard.html`: HTTP 200.
- Production Scope Templates JavaScript contains the strict Device → SubDevice hierarchy, exact template compatibility filtering, compatible-lead attachment filtering, and cross-group attachment blocking logic.
- Safe prior rollback candidate for scope behavior: `dpl_2Mtpv99iSHbBfPtNsUFU43Z1R59z` @ `965a2b2`.

## Operational Queue
| Queue ID | Title | Area / Tool | Priority | Status | Approval | Dependencies / Blockers | Related Evidence | Next Action | Finalization |
|---|---|---|---|---|---|---|---|---|---|
| QUEUE-001 | Contain restricted field-service material | Security & Restricted Data | CRITICAL | WAITING / BLOCKED | Boundary APPROVED; destructive containment not yet authorized | Verified private canonical destination + recovery checkpoint required | DEC-016, DEC-017, DEF-009, SECURITY-BOUNDARY-1.0 | Establish safe private preservation; verify completeness; then request destructive-containment approval | NOT FINALIZED |
| QUEUE-002 | Repair Package Part # auto-fill source | Repair Packages | HIGH | READY FOR REVIEW | APPROVED / BUILT / DEPLOYED / VERIFIED | Owner finalization only | DEF-010 VERIFIED; CI 36947000535; live /repair-packages 200 | Present verified behavior for owner review | NOT FINALIZED |
| QUEUE-003 | Repair Package cost-update regression verification | Bugs & Testing | HIGH | READY FOR REVIEW | APPROVED / VERIFIED | None known | DEF-010 automated Part # → name → cost → add → total → persistence PASS | Retain regression coverage; close/finalize only with owner approval | NOT FINALIZED |
| QUEUE-004 | Reduce duplicate Vercel project build fan-out | Build & Deployment | HIGH | WAITING / BLOCKED | OWNER DECISION REQUIRED for disconnect/retire | Destructive project changes require approval | ISSUE-002 / RISK-001 / TD-009 | Reconfirm canonical project map, then present exact non-destructive + destructive cleanup plan | NOT FINALIZED |
| QUEUE-005 | Restore Recovery Value Calculator live target | Integration | HIGH | QUEUED | Repair need established | Recovered source not canonicalized / production mapping unresolved | Fresh audit HTTP 404; ISSUE-008 / ISSUE-012 | Validate recovered source and propose controlled restore/promotion | NOT FINALIZED |
| QUEUE-006 | Source-bind Project Control Center status | Project Control | NORMAL | FINALIZED | OWNER ACCEPTED / PRODUCTION VERIFIED | None for finalized source-binding scope | Commit `9290338`; CI `36951330664` PASS; production `dpl_9k5EKov9oJM7jKwvEFgmeNUjPtjf`; live /project-control 200 | Maintain source-bound status from canonical records | FINALIZED / PRODUCTION VERIFIED |
| QUEUE-007 | Recover canonical source for standalone tools | Recovery / Integrations | HIGH | QUEUED | Investigation APPROVED | Historical source locations incomplete | ISSUE-011 / RISK-012 / TD-011 | Locate and document repo/path/deployment/backup ownership per live tool | NOT FINALIZED |
| QUEUE-008 | Enforce main/baseline repository protection | Governance / GitHub | HIGH | WAITING / BLOCKED | OWNER APPROVAL REQUIRED | Workflow-impacting governance action | GitHub main `protected=false` | Present exact ruleset/status-check proposal before enabling | NOT FINALIZED |
| QUEUE-009 | Project Operations & Queue control layer | Project Control | HIGH | FINALIZED | OWNER ACCEPTED 2026-10-01 | None | PROJECT-OPS-1.0 | Maintain as canonical operational system | FINALIZED 2026-10-01 |
| QUEUE-010 | Strict Device → SubDevice → Scope isolation | Scope Templates | HIGH | FINALIZED | OWNER ACCEPTED — explicit `promote to verified/finalized` | None for finalized isolation scope | `de9d82b` strict enforcement; `d1b857d` regression; CI `36949404777` PASS; production `dpl_9k5EKov9oJM7jKwvEFgmeNUjPtjf`; live strict JS artifact verified | Maintain regression coverage; future behavior changes require new queue item | FINALIZED — `SCOPE-ISOLATION-1.0` |
| QUEUE-011 | Controlled reconstruction / canonical truth pass | Project Control | HIGH | FINALIZED | OWNER ACCEPTED — explicit `yes` after Wave-1 review | None | Commit `cf1c79d`; reconciled Current State / queue; Wave-1 CI PASS; source-bound production verified | Maintain canonical truth during later remediation waves | FINALIZED |

## Bugs & Testing
- DEF-009 — restricted field-service public exposure: `OPEN / CRITICAL`.
- DEF-010 — Repair Package Part # / cost auto-fill: `VERIFIED`. Owner finalization remains separate.
- Strict Device → SubDevice → Scope isolation: `VERIFIED / FINALIZED`; automated regression PASS and strict enforcement is present in the verified production JavaScript artifact.
- Project Control source-binding: `VERIFIED / FINALIZED / PRODUCTION VERIFIED`.

## Live Route Snapshot
Established canonical internal routes:
`/`, `/project-control`, `/field-resource-hub`, `/field-diagnostic-hub`, `/finances-command-center`, `/repair-packages`, `/scope-templates`.

## Registry Accuracy
- Master Hub root currently represents Field Diagnostic Hub and Scope Templates as established workspaces.
- Registry `Live` labels remain static metadata, not full health verification.
- Recovery Value Calculator is still known broken at its configured target from the latest audit.
- Runtime-health-backed status remains an open remediation item.

## Security & Restricted Data
Field-service diagnostics, repair procedures, parts, billed-work operational data, scope wording, quoting workflows, customer-operational information and related proprietary material remain RESTRICTED by default.

No destructive containment, history rewrite, visibility change, project disconnection or deployment retirement is authorized by this scope finalization.

## Data & Integrations
Known browser-local persistence remains:
- Master Hub actions: `localStorage`.
- Finances Command Center: `localStorage`.
- Repair Package drafts, local part overrides and saved packages: `localStorage`.

Project-wide integration/source ownership remains incomplete for some standalone tools and stays queued for reconstruction.

## UI / UX
Current operating rule:
- Android/mobile first.
- Desktop fully supported.
- Favor fewer clicks, less scrolling, obvious saving, useful search, automatic population and one-screen workflows where practical.
- Do not redesign solely for appearance.

## Release History Reality
Finalized/accepted releases preserved:
- CONTROL-BASELINE-1.0
- SECURITY-QUALITY-1.0
- SECURITY-BOUNDARY-1.0 classification baseline (containment still open)
- PROJECT-OPS-1.0
- SCOPE-ISOLATION-1.0

Repair Package owner finalization, restricted-data containment, duplicate Vercel cleanup, Recovery Value restoration, standalone-source recovery and repository protection remain separately open.
