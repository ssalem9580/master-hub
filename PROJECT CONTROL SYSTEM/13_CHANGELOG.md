# 13 — Changelog

## 2026-09-30 — Project Control Foundation
- Added permanent Project Control System and canonical control registers.
- Added Project Control Center route and registry entry.
- Preserved source incompleteness instead of inventing missing template content.

## Canonical Change Entry Schema
Meaningful new changes use stable `CHANGE-###` identifiers and record date, version, description, authorization, related decision/requirement/feature, files affected, reason, and result. Historical records are preserved; unknown historical fields are not fabricated.

## CHANGE-001 — Controlled AI Idea Master Template adoption
DATE: 2026-09-30
VERSION: GOVERNANCE-ADOPTION-RC1
AUTHORIZED BY: Project Owner / DEC-007
RESULT: Governance controls applied and repository-verified on adoption branch; product source unchanged.

## CHANGE-002 — Governance activated on main
DATE: 2026-09-30
VERSION: CONTROL-BASELINE-1.0
AUTHORIZED BY: Project Owner / DEC-009 / DEC-010
RESULT: PR #1 merged governance adoption; canonical Project Control System activated; finalized by DEC-011 and frozen reference `baseline/governance-control-1.0`.

## CHANGE-003 — Reconstruction & Reality Audit started
DATE: 2026-09-30
VERSION: AUDIT-RC1
AUTHORIZED BY: Project Owner / DEC-012
RESULT: Evidence-based repository/route/test/deployment/security audit initiated.

## CHANGE-004 — Security + quality hardening RC
DATE: 2026-09-30
VERSION: SECURITY-QUALITY-RC1
AUTHORIZED BY: Project Owner / DEC-013
RESULT: Next.js patch, current UI tests, lint fixes and CI lint/test/build gates verified on branch.

## CHANGE-005 — SECURITY-QUALITY-1.0 released
DATE: 2026-09-30
VERSION: SECURITY-QUALITY-1.0
AUTHORIZED BY: Project Owner / DEC-014
RESULT: PR #2 merged; CI 36811990043 PASS; production dpl_3Veoi3hAuDV6hLcbvWM7GqaNoYJ5 READY; canonical routes verified.

## CHANGE-006 — Restricted field-service boundary finalized
DATE: 2026-09-30
VERSION: SECURITY-BOUNDARY-1.0
AUTHORIZED BY: Project Owner / DEC-016 / DEC-017
RESULT: Classification finalized. Physical containment remains OPEN / CRITICAL.

## CHANGE-007 — Project Operations & Queue activated
DATE: 2026-10-01
VERSION: PROJECT-OPS-RC1
AUTHORIZED BY: Project Owner instruction
RESULT: Single operational queue/control layer added to existing Project Control System.

## CHANGE-008 — Operations checkpoint refresh
DATE: 2026-10-01
VERSION: PROJECT-OPS-CHECKPOINT-20261001-0958
AUTHORIZED BY: Project Owner
RESULT: Evidence checkpoint captured and later owner accepted.

## CHANGE-009 — Operations checkpoint finalized
DATE: 2026-10-01
VERSION: PROJECT-OPS-CHECKPOINT-20261001-0958-FINAL
AUTHORIZED BY: Project Owner
RESULT: Checkpoint finalized without silently closing independent defects/security work.

## CHANGE-010 — PROJECT-OPS-1.0 finalized
DATE: 2026-10-01
VERSION: PROJECT-OPS-1.0
AUTHORIZED BY: Project Owner explicit `Finalize`
RESULT: Project Operations & Queue owner-accepted and finalized.

## CHANGE-011 — Repair Package exact Part # verification
DATE: 2026-10-02
VERSION: REPAIR-PACKAGE-DEF010-VERIFICATION
AUTHORIZED BY: Existing approved Repair Packages scope
RELATED FEATURE: FEAT-003
RESULT: DEF-010 automated interaction path verified; canonical defect status is VERIFIED. Owner finalization of the broader update remains separate.

## CHANGE-012 — Scope Templates Device/SubDevice isolation
DATE: 2026-10-02
VERSION: SCOPE-ISOLATION-RC
AUTHORIZED BY: Project Owner exact grouping instruction
RELATED FEATURE: FEAT-011 / FEAT-012
RESULT: Scope isolation centralized and deployed at 965a2b2; stricter cross-group enforcement at de9d82b and regression test at d1b857d passed CI but were awaiting production verification.

## CHANGE-013 — Controlled reconstruction refresh
DATE: 2026-10-02
VERSION: RECONSTRUCTION-SNAPSHOT-20261002
AUTHORIZED BY: Project Owner explicit reconstruction request
RELATED DECISION: DEC-012 and finalized governance authority
RELATED FEATURE: FEAT-001 through FEAT-012 as applicable
RESULT: Current canonical records refreshed from evidence. Unknown source ownership, unverified external health and restricted-data containment remained explicitly open.

## CHANGE-014 — Remediation Wave 1 finalized
DATE: 2026-10-02
VERSION: REMEDIATION-WAVE1-1.0
AUTHORIZED BY: Project Owner — explicit `yes` after Wave-1 review
RELATED FEATURE: Project Control Center / Operations Queue
RESULT: Canonical project truth reconciled, DEF-010 state drift corrected and Project Control source-binding finalized. CI `36951330664` PASS; production deployment `dpl_9k5EKov9oJM7jKwvEFgmeNUjPtjf` verified the source-bound control output.

## CHANGE-015 — Scope Isolation 1.0 verified and finalized
DATE: 2026-10-02 UTC / 2026-10-01 CDT
VERSION: SCOPE-ISOLATION-1.0
AUTHORIZED BY: Project Owner
RELATED REQUIREMENT: REQ-018
RELATED FEATURE: FEAT-012
RESULT: CI `36949404777` passed install/lint/tests/build; production `dpl_9k5EKov9oJM7jKwvEFgmeNUjPtjf` is READY at `1b5d4e78f164fc4c68f9322aa6348d90cca2c7c5`; live `/scope-templates` and `/bw-dashboard.html` return HTTP 200; production client code contains strict Device/SubDevice filtering and explicit cross-group attachment blocking. `SCOPE-ISOLATION-1.0` is VERIFIED / FINALIZED / OWNER ACCEPTED.

## CHANGE-016 — Restricted field-service containment preparation started
DATE: 2026-10-02 UTC / 2026-10-01 CDT
VERSION: SECURITY-CONTAINMENT-PREP-RC1
AUTHORIZED BY: Project Owner instruction to move into controlled security-containment preparation
RELATED DECISION: DEC-016 / DEC-017
RELATED DEFECT: DEF-009
FILES AFFECTED: Restricted exposure inventory, quarantine plan, preservation manifest, Current State, Operations Queue, this changelog
REASON: Begin the safe non-destructive preparation stage required before any public route/source removal, history rewrite, repository visibility change, or Vercel retirement.
RESULT: Exposure inventory refreshed, Vercel project ownership map recorded, private-preservation checklist created, QUEUE-001 moved into active preparation, and all destructive gates remain closed. No restricted source/routes, Git history, repositories, projects or deployments were deleted, disconnected, rewritten or retired.

## CHANGE-017 — Security containment preparation finalized; private destination approved
DATE: 2026-10-02 UTC / 2026-10-01 CDT
VERSION: SECURITY-CONTAINMENT-PREP-1.0
AUTHORIZED BY: Project Owner explicit `finalize and action next task`
RELATED DECISION: DEC-016 / DEC-017
RELATED DEFECT: DEF-009
FILES AFFECTED: Quarantine Plan, Preservation Manifest, source-hash preservation record, Current State, Operations Queue, release/backup/finalization records, this changelog
REASON: Finalize the non-destructive containment-preparation architecture and authorize the next preservation gate without authorizing physical cleanup.
RESULT: `SECURITY-CONTAINMENT-PREP-1.0` is OWNER ACCEPTED / FINALIZED. Private canonical destination establishment/migration is APPROVED. Exact current-main repository-backed restricted source blob IDs and byte counts are recorded for preservation. The connected GitHub control surface exposes only the public `ssalem9580/master-hub` repository and has no repository-creation action, so the approved private destination is not yet created or privacy-verified. Physical containment, public route/source removal, Git-history rewrite, visibility changes and Vercel retirement/disconnection remain separately gated; DEF-009 remains OPEN / CRITICAL.

## CHANGE-018 — Vercel build fan-out audit finalized
DATE: 2026-10-02 UTC / 2026-10-01 CDT
VERSION: VERCEL-FANOUT-AUDIT-1.0
AUTHORIZED BY: Project Owner explicit `finalize`
RELATED QUEUE: QUEUE-004
RELATED ISSUE/RISK/DEBT: ISSUE-002 / RISK-001 / TD-009
FILES AFFECTED: `PROJECT CONTROL SYSTEM/33_VERCEL_BUILD_FANOUT_AUDIT.md`, release and recovery-checkpoint records, this changelog
REASON: Preserve the verified cross-project deployment evidence and accepted cleanup boundary before any Vercel configuration changes.
RESULT: `VERCEL-FANOUT-AUDIT-1.0` is VERIFIED / FINALIZED / OWNER ACCEPTED. The audit confirms `master-hub` is canonical while the same repository commits also trigger `field-diagnostic-hub` and `recovery-value-calculator`. CI `36964223310` passed install/lint/test/build and the accepted release deployment reached READY. No Git integration was disconnected and no Vercel project was retired or deleted; actual fan-out cleanup remains separately approval-gated.

## CHANGE-019 — Standalone source ownership validated
DATE: 2026-10-02 UTC / 2026-10-02 CDT
VERSION: STANDALONE-SOURCE-OWNERSHIP-RC1
AUTHORIZED BY: Project Owner command `next`
RELATED QUEUE: QUEUE-004 / QUEUE-005 / QUEUE-007
RELATED ISSUE/RISK/DEBT: ISSUE-008 / ISSUE-011 / ISSUE-012 / RISK-012 / RISK-013 / TD-011 / TD-012
FILES AFFECTED: `PROJECT CONTROL SYSTEM/34_STANDALONE_SOURCE_OWNERSHIP_VALIDATION.md`, Current State, Operations Queue, this changelog
REASON: Determine exact source/project ownership for Recovery Value Calculator and Field Diagnostic Hub before any reversible Vercel Git-integration cleanup or Recovery Value production repair.
RESULT: Recovery Value source commit `751a73b` and its matching Vercel project were validated using READY recovered-source deployments. The recovered source is not present on current `main`, so canonicalization and production restoration remain open. Historical Field Diagnostic standalone source commit `3c8ea7c` and matching Vercel project were also validated, but the active canonical Field Diagnostic source is now the evolved integrated Master Hub `main` route/static asset. No Git integration was disconnected, no project was retired, no restricted source was duplicated back into public `main`, and no production promotion was performed. Status: READY FOR OWNER REVIEW / NOT FINALIZED.

## CHANGE-020 — Restricted private preservation store established
DATE: 2026-10-02
VERSION: RESTRICTED-PRESERVATION-RC1
AUTHORIZED BY: Existing DEC-016 / DEC-017 containment authority and approved private-destination establishment
RELATED QUEUE: QUEUE-001
RELATED REQUIREMENT: REQ-015
RELATED DEFECT: DEF-009
FILES AFFECTED: `06_CURRENT_STATE.md`, `10_TEST_REGISTER.md`, `11_DEFECT_REGISTER.md`, `21_REQUIREMENTS_TRACEABILITY_MATRIX.md`, `22_PROJECT_OPERATIONS_QUEUE.md`, `35_RESTRICTED_PRIVATE_PRESERVATION_CHECKPOINT.md`, this changelog
REASON: Advance the Critical restricted-content remediation without changing finalized product behavior or destructively removing public source before recovery exists.
RESULT: An owner-only, `shared=false` private Google Drive preservation store was created and verified. Private checkpoint/evidence metadata was stored there. The restricted repository-backed source lineage still matches the exact blob/byte preservation manifest after `SCOPE-ISOLATION-1.0`. Supabase Billed Work state was mapped non-destructively with RLS/policy verification and non-content recovery fingerprints. Exact restricted source-byte transfer and Supabase operational payload backup/recovery remain incomplete; DEF-009 stays OPEN / CRITICAL and no public source/routes/deployments were removed, rewritten, disconnected or retired. Status: READY FOR REVIEW / NOT FINALIZED.