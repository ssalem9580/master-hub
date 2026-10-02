# 22 — Master Hub Project Operations & Queue

DATE: 2026-10-02
STATUS: ACTIVE — REMEDIATION WAVE 1 FINALIZED / SCOPE ISOLATION FINALIZED / SECURITY CONTAINMENT PREPARATION FINALIZED / VERCEL FAN-OUT AUDIT FINALIZED / STANDALONE SOURCE OWNERSHIP VALIDATED / PRIVATE DESTINATION APPROVED

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
- Verified production deployment for the accepted fan-out audit release: `dpl_6fML2omJ4CYitTrXXVE7tp2ZTHwG`
- Verified fan-out audit production commit: `e6470da8e7407bc2978573eb9de6ba907767cda3`
- Production state: `READY`
- Live `/project-control`: HTTP 200 after the audit release deployment.
- Production Scope Templates JavaScript contains strict Device → SubDevice hierarchy, exact template compatibility filtering, compatible-lead attachment filtering, and cross-group attachment blocking logic.
- Safe prior rollback candidate for scope behavior: `dpl_2Mtpv99iSHbBfPtNsUFU43Z1R59z` @ `965a2b2`.

## Operational Queue
| Queue ID | Title | Area / Tool | Priority | Status | Approval | Dependencies / Blockers | Related Evidence | Next Action | Finalization |
|---|---|---|---|---|---|---|---|---|---|
| QUEUE-001 | Contain restricted field-service material | Security & Restricted Data | CRITICAL | IN DEVELOPMENT | Preparation FINALIZED / OWNER ACCEPTED; private canonical destination establishment APPROVED; destructive containment NOT authorized | Approved private destination must be created and verified private; verified preservation + recovery checkpoint required before removal | DEC-016, DEC-017, DEF-009, SECURITY-BOUNDARY-1.0, SECURITY-CONTAINMENT-PREP-1.0, preservation manifest, source-hash record | Create private destination through authorized admin path; verify privacy; preserve and verify completeness; then request public-containment approval | PREPARATION FINALIZED / PHYSICAL CONTAINMENT NOT FINALIZED |
| QUEUE-002 | Repair Package Part # auto-fill source | Repair Packages | HIGH | READY FOR REVIEW | APPROVED / BUILT / DEPLOYED / VERIFIED | Owner finalization only | DEF-010 VERIFIED; CI 36947000535; live /repair-packages 200 | Present verified behavior for owner review | NOT FINALIZED |
| QUEUE-003 | Repair Package cost-update regression verification | Bugs & Testing | HIGH | READY FOR REVIEW | APPROVED / VERIFIED | None known | DEF-010 automated Part # → name → cost → add → total → persistence PASS | Retain regression coverage; close/finalize only with owner approval | NOT FINALIZED |
| QUEUE-004 | Reduce duplicate Vercel project build fan-out | Build & Deployment | HIGH | READY FOR REVIEW | AUDIT FINALIZED / OWNER ACCEPTED; source-ownership validation complete; Git-integration cleanup and project retirement remain separately approval-gated | Reversible Vercel configuration change still requires owner approval; retirement remains destructive and separately gated | `VERCEL-FANOUT-AUDIT-1.0`; `33_VERCEL_BUILD_FANOUT_AUDIT.md`; `34_STANDALONE_SOURCE_OWNERSHIP_VALIDATION.md`; ISSUE-002 / RISK-001 / TD-009 | Present exact reversible Git-integration changes for `field-diagnostic-hub` and `recovery-value-calculator` without deleting projects | CLEANUP NOT FINALIZED |
| QUEUE-005 | Restore Recovery Value Calculator live target | Integration | HIGH | IN DEVELOPMENT | Recovered source and matching Vercel project VALIDATED; production promotion not authorized | Recovered source is not present on current `main`; canonical source destination/preservation and controlled preview are required before production promotion | Recovered source commit `751a73b`; READY previews `dpl_GqUtL7rAeTVtF92do5hYknWiNS6A` / `dpl_ARDHGmgp38HhZkEdPr1MmP1NRNuq`; `34_STANDALONE_SOURCE_OWNERSHIP_VALIDATION.md`; ISSUE-008 / ISSUE-012 | Establish canonical preserved source, deploy exact-source preview, verify calculator behavior, then request production-promotion approval | NOT FINALIZED |
| QUEUE-006 | Source-bind Project Control Center status | Project Control | NORMAL | FINALIZED | OWNER ACCEPTED / PRODUCTION VERIFIED | None | Commit `9290338`; CI `36951330664` PASS; production `dpl_9k5EKov9oJM7jKwvEFgmeNUjPtjf`; live /project-control 200 | Maintain source-bound status from canonical records | FINALIZED / PRODUCTION VERIFIED |
| QUEUE-007 | Recover canonical source for standalone tools | Recovery / Integrations | HIGH | IN DEVELOPMENT | Investigation APPROVED; Recovery Value and Field Diagnostic ownership validated | NTE Quote, Billed Work Tracker, Sam Hub and any other standalone source/backup ownership remains incomplete | `34_STANDALONE_SOURCE_OWNERSHIP_VALIDATION.md`; ISSUE-011 / RISK-012 / TD-011 | Continue source/backup ownership mapping for remaining standalone tools; do not treat recovered Field Diagnostic standalone snapshot as current canonical source | PARTIAL / NOT FINALIZED |
| QUEUE-008 | Enforce main/baseline repository protection | Governance / GitHub | HIGH | WAITING / BLOCKED | OWNER APPROVAL REQUIRED | Workflow-impacting governance action | GitHub main `protected=false` | Present exact ruleset/status-check proposal before enabling | NOT FINALIZED |
| QUEUE-009 | Project Operations & Queue control layer | Project Control | HIGH | FINALIZED | OWNER ACCEPTED 2026-10-01 | None | PROJECT-OPS-1.0 | Maintain as canonical operational system | FINALIZED 2026-10-01 |
| QUEUE-010 | Strict Device → SubDevice → Scope isolation | Scope Templates | HIGH | FINALIZED | OWNER ACCEPTED | None | `de9d82b` strict enforcement; `d1b857d` regression; CI `36949404777` PASS; production `dpl_9k5EKov9oJM7jKwvEFgmeNUjPtjf`; live strict JS artifact verified | Maintain regression coverage; future behavior changes require new queue item | FINALIZED — `SCOPE-ISOLATION-1.0` |
| QUEUE-011 | Controlled reconstruction / canonical truth pass | Project Control | HIGH | FINALIZED | OWNER ACCEPTED | None | Commit `cf1c79d`; reconciled Current State / queue; Wave-1 CI PASS; source-bound production verified | Maintain canonical truth during later remediation waves | FINALIZED |

## Bugs & Testing
- DEF-009 — restricted field-service public exposure: `OPEN / CRITICAL`; preparation is finalized but physical containment has not occurred.
- DEF-010 — Repair Package Part # / cost auto-fill: `VERIFIED`. Owner finalization remains separate.
- Strict Device → SubDevice → Scope isolation: `VERIFIED / FINALIZED`; automated regression PASS and strict enforcement is present in verified production.
- Project Control source-binding: `VERIFIED / FINALIZED / PRODUCTION VERIFIED`.

## Live Route Snapshot
Established canonical internal routes:
`/`, `/project-control`, `/field-resource-hub`, `/field-diagnostic-hub`, `/finances-command-center`, `/repair-packages`, `/scope-templates`.

## Registry Accuracy
- Master Hub root currently represents Field Diagnostic Hub and Scope Templates as established workspaces.
- Registry `Live` labels remain static metadata, not full health verification.
- Recovery Value Calculator remains a separate broken-target remediation item even though its recovered source is now validated.
- Runtime-health-backed status remains open remediation.

## Security & Restricted Data
Field-service diagnostics, repair procedures, parts, billed-work operational data, scope wording, quoting workflows, customer-operational information and related proprietary material remain RESTRICTED by default.

`SECURITY-CONTAINMENT-PREP-1.0` is FINALIZED / OWNER ACCEPTED. Owner approval to establish/migrate a private canonical destination has been granted. Exact repository-backed preservation metadata is recorded. The private destination does not yet exist because the connected GitHub control surface has no repository-creation action. No destructive containment, history rewrite, visibility change, project disconnection, deployment retirement, route removal, or public source deletion is authorized yet.

The historical recovered standalone Field Diagnostic source is validated as a recovery artifact, but current canonical Field Diagnostic source is the integrated Master Hub `main` route/static asset. Do not duplicate that restricted standalone source back into public `main` while containment remains open.

## Data & Integrations
Known browser-local persistence remains:
- Master Hub actions: `localStorage`.
- Finances Command Center: `localStorage`.
- Repair Package drafts, local part overrides and saved packages: `localStorage`.

Recovery Value and Field Diagnostic source ownership are now validated. Project-wide integration/source ownership remains incomplete for other standalone tools and stays in development.

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

Standalone source-ownership validation is ready for owner review. Repair Package owner finalization, physical restricted-data containment, actual duplicate Vercel Git-integration cleanup/retirement, Recovery Value production restoration, remaining standalone-source recovery and repository protection remain separately open.