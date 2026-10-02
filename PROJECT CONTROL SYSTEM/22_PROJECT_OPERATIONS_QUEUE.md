# 22 — Master Hub Project Operations & Queue

DATE: 2026-10-02
STATUS: ACTIVE — REMEDIATION WAVE 1 FINALIZED / SCOPE ISOLATION FINALIZED / SECURITY CONTAINMENT PREPARATION FINALIZED / VERCEL FAN-OUT AUDIT FINALIZED / PRIVATE PRESERVATION STORE VERIFIED

This is the canonical operational queue for the existing Master Hub. It does not create a second project-management system.

## State Rules
Queue: `QUEUED / APPROVED / IN DEVELOPMENT / TESTING / READY FOR REVIEW / WAITING / BLOCKED / FINALIZED / REJECTED / DEFERRED`

Priority: `CRITICAL / HIGH / NORMAL / LOW / SOMEDAY`

Built is not deployed. Deployed is not verified. Verified is not finalized until explicit Project Owner approval.

## Current Build & Deployment Snapshot
- Strict scope regression CI: GitHub Actions `36949404777` — PASS (install / lint / test / build).
- Wave-1 reconciliation/source-binding CI: GitHub Actions `36951330664` — PASS (install / lint / test / build).
- Security-containment preparation CI: GitHub Actions `36958317975` — PASS (install / lint / test / build).
- Vercel fan-out audit CI: GitHub Actions `36964223310` — PASS (install / lint / test / build).
- Canonical production alias: `https://master-hub-sigma.vercel.app`
- Verified production deployment for the accepted fan-out audit commit: `dpl_EHgESvVSgSZszHtgVt9fQy8Wa9PR`
- Verified audit production commit: `baa7e75ea02444580d5354d215fb7c363dcdf266`
- Production state: `READY`
- Live `/project-control`: HTTP 200 after the audit deployment.
- Production Scope Templates JavaScript contains strict Device → SubDevice hierarchy, exact template compatibility filtering, compatible-lead attachment filtering, and cross-group attachment blocking logic.
- Safe prior rollback candidate for scope behavior: `dpl_2Mtpv99iSHbBfPtNsUFU43Z1R59z` @ `965a2b2`.

## Operational Queue
| Queue ID | Title | Area / Tool | Priority | Status | Approval | Dependencies / Blockers | Related Evidence | Next Action | Finalization |
|---|---|---|---|---|---|---|---|---|---|
| QUEUE-001 | Contain restricted field-service material | Security & Restricted Data | CRITICAL | IN DEVELOPMENT | Preparation FINALIZED / OWNER ACCEPTED; private destination/store establishment APPROVED; destructive containment NOT authorized | Private owner-only preservation store now exists; exact source-byte copy, Supabase operational payload backup/recovery verification, and remaining standalone restricted-source preservation are still required before removal | DEC-016, DEC-017, DEF-009, SECURITY-BOUNDARY-1.0, SECURITY-CONTAINMENT-PREP-1.0, preservation manifest, source-hash record, `34_RESTRICTED_PRIVATE_PRESERVATION_CHECKPOINT.md` | Transfer exact restricted source bytes into verified private store; verify hashes/byte counts; preserve/recovery-test Supabase operational state; resolve standalone source preservation; then request public-containment approval | PREPARATION FINALIZED / PRIVATE STORE VERIFIED / PHYSICAL CONTAINMENT NOT FINALIZED |
| QUEUE-002 | Repair Package Part # auto-fill source | Repair Packages | HIGH | READY FOR REVIEW | APPROVED / BUILT / DEPLOYED / VERIFIED | Owner finalization only | DEF-010 VERIFIED; CI 36947000535; live /repair-packages 200 | Present verified behavior for owner review | NOT FINALIZED |
| QUEUE-003 | Repair Package cost-update regression verification | Bugs & Testing | HIGH | READY FOR REVIEW | APPROVED / VERIFIED | None known | DEF-010 automated Part # → name → cost → add → total → persistence PASS | Retain regression coverage; close/finalize only with owner approval | NOT FINALIZED |
| QUEUE-004 | Reduce duplicate Vercel project build fan-out | Build & Deployment | HIGH | WAITING / BLOCKED | AUDIT FINALIZED / OWNER ACCEPTED; Git-integration cleanup and project retirement remain separately approval-gated | Canonical source/recovery ownership must be confirmed before changing standalone project Git integration; destructive project changes require approval | `VERCEL-FANOUT-AUDIT-1.0`; `33_VERCEL_BUILD_FANOUT_AUDIT.md`; ISSUE-002 / RISK-001 / TD-009 | Validate Recovery Value and Field Diagnostic canonical source/recovery ownership, then present reversible Git-integration cleanup for approval | AUDIT FINALIZED / CLEANUP NOT FINALIZED |
| QUEUE-005 | Restore Recovery Value Calculator live target | Integration | HIGH | QUEUED | Repair need established | Recovered source not canonicalized / production mapping unresolved | Fresh audit HTTP 404; ISSUE-008 / ISSUE-012 | Validate recovered source and propose controlled restore/promotion | NOT FINALIZED |
| QUEUE-006 | Source-bind Project Control Center status | Project Control | NORMAL | FINALIZED | OWNER ACCEPTED / PRODUCTION VERIFIED | None | Commit `9290338`; CI `36951330664` PASS; production `dpl_9k5EKov9oJM7jKwvEFgmeNUjPtjf`; live /project-control 200 | Maintain source-bound status from canonical records | FINALIZED / PRODUCTION VERIFIED |
| QUEUE-007 | Recover canonical source for standalone tools | Recovery / Integrations | HIGH | QUEUED | Investigation APPROVED | Historical source locations incomplete | ISSUE-011 / RISK-012 / TD-011 | Locate and document repo/path/deployment/backup ownership per live tool | NOT FINALIZED |
| QUEUE-008 | Enforce main/baseline repository protection | Governance / GitHub | HIGH | WAITING / BLOCKED | OWNER APPROVAL REQUIRED | Workflow-impacting governance action | GitHub main `protected=false` | Present exact ruleset/status-check proposal before enabling | NOT FINALIZED |
| QUEUE-009 | Project Operations & Queue control layer | Project Control | HIGH | FINALIZED | OWNER ACCEPTED 2026-10-01 | None | PROJECT-OPS-1.0 | Maintain as canonical operational system | FINALIZED 2026-10-01 |
| QUEUE-010 | Strict Device → SubDevice → Scope isolation | Scope Templates | HIGH | FINALIZED | OWNER ACCEPTED | None | `de9d82b` strict enforcement; `d1b857d` regression; CI `36949404777` PASS; production `dpl_9k5EKov9oJM7jKwvEFgmeNUjPtjf`; live strict JS artifact verified | Maintain regression coverage; future behavior changes require new queue item | FINALIZED — `SCOPE-ISOLATION-1.0` |
| QUEUE-011 | Controlled reconstruction / canonical truth pass | Project Control | HIGH | FINALIZED | OWNER ACCEPTED | None | Commit `cf1c79d`; reconciled Current State / queue; Wave-1 CI PASS; source-bound production verified | Maintain canonical truth during later remediation waves | FINALIZED |

## Bugs & Testing
- DEF-009 — restricted field-service public exposure: `OPEN / CRITICAL`; private preservation store is verified, but restricted source-byte/data preservation is not yet complete and physical containment has not occurred.
- DEF-010 — Repair Package Part # / cost auto-fill: `VERIFIED`. Owner finalization remains separate.
- Strict Device → SubDevice → Scope isolation: `VERIFIED / FINALIZED`; automated regression PASS and strict enforcement is present in verified production.
- Project Control source-binding: `VERIFIED / FINALIZED / PRODUCTION VERIFIED`.

## Live Route Snapshot
Established canonical internal routes:
`/`, `/project-control`, `/field-resource-hub`, `/field-diagnostic-hub`, `/finances-command-center`, `/repair-packages`, `/scope-templates`.

Fresh restricted-exposure verification on 2026-10-02:
- `/field-resource-hub` — HTTP 200
- `/scope-templates` — HTTP 200
- `/bw-dashboard.html` — HTTP 200

## Registry Accuracy
- Master Hub root currently represents Field Diagnostic Hub and Scope Templates as established workspaces.
- Registry `Live` labels remain static metadata, not full health verification.
- Recovery Value Calculator remains a separate broken-target remediation item.
- Runtime-health-backed status remains open remediation.

## Security & Restricted Data
Field-service diagnostics, repair procedures, parts, billed-work operational data, scope wording, quoting workflows, customer-operational information and related proprietary material remain RESTRICTED by default.

`SECURITY-CONTAINMENT-PREP-1.0` is FINALIZED / OWNER ACCEPTED. Owner approval to establish/migrate a private canonical destination/store was granted. A Google Drive preservation folder now exists and has been verified owner-only / `shared=false`; private checkpoint and evidence metadata files are stored there and are also verified not shared. The current repository-backed restricted source blob IDs/byte counts still match the exact source-hash manifest, including finalized Scope Isolation source. Supabase Billed Work state has been mapped non-destructively: relevant state tables have RLS enabled with owner-scoped authenticated policies, and non-content row-count/payload-size/fingerprint metadata is recorded. Exact restricted source bytes and Supabase payload backups have NOT yet been transferred/recovery-tested in the private store, so destructive containment remains blocked.

No destructive containment, history rewrite, visibility change, project disconnection, deployment retirement, route removal, or public source deletion is authorized yet.

## Data & Integrations
Known browser-local persistence remains:
- Master Hub actions: `localStorage`.
- Finances Command Center: `localStorage`.
- Repair Package drafts, local part overrides and saved packages: `localStorage`.
- Billed Work / Scope Templates use existing local state plus Supabase-backed state in `billed_work_state` and `billed_work_scope_state`; both relevant tables have RLS enabled.

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
- SECURITY-CONTAINMENT-PREP-1.0
- VERCEL-FANOUT-AUDIT-1.0

Repair Package owner finalization, physical restricted-data containment, actual duplicate Vercel Git-integration cleanup/retirement, Recovery Value restoration, standalone-source recovery and repository protection remain separately open.