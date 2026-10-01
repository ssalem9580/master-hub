# 13 — Changelog

## 2026-09-30 — Project Control Foundation
- Added permanent Project Control System.
- Added canonical brief, constitution, decisions, features, roadmap, current state, issues, checkpoint, requirements, tests, defects, risks, dependencies, data dictionary, security/privacy, release, rollback, feedback, technical debt, and traceability.
- Added Project Control Center route to Master Hub.
- Added Project Control Center to Master Hub registry.
- Recorded that supplied source ends mid Definition of Done and did not invent missing text.


## Canonical Change Entry Schema
Meaningful new changes use stable CHANGE-### identifiers and:

```text
CHANGE ID:
DATE:
VERSION:
DESCRIPTION:
AUTHORIZED BY:
RELATED DECISION:
RELATED REQUIREMENT:
RELATED FEATURE:
FILES AFFECTED:
REASON:
RESULT:
```

Existing historical changelog entries are preserved. Unknown historical fields must not be retroactively fabricated.


## 2026-09-30 — Controlled AI Idea Master Template adoption
- CHANGE ID: CHANGE-001
- VERSION: GOVERNANCE-ADOPTION-RC1
- DESCRIPTION: Adopted approved AI Idea Master Template governance controls on protected branch.
- AUTHORIZED BY: Project Owner via DEC-007.
- RELATED DECISION: DEC-006, DEC-007.
- RELATED REQUIREMENT: REQ-009 through REQ-012.
- RELATED FEATURE: FEAT-006, FEAT-008, FEAT-009.
- FILES AFFECTED: PROJECT CONTROL SYSTEM only.
- REASON: Make the template Master Hub's project-management/governance operating system.
- RESULT: Governance controls applied and repository-verified on adoption branch; main/product code unchanged; merge still pending explicit approval.


## 2026-09-30 — AI Idea Master Template governance activated on main
- CHANGE ID: CHANGE-002
- VERSION: CONTROL-BASELINE-1.0
- DESCRIPTION: Merged the verified governance adoption package into main through PR #1.
- AUTHORIZED BY: Project Owner / DEC-009.
- RELATED DECISION: DEC-009, DEC-010.
- RELATED REQUIREMENT: REQ-009 through REQ-012.
- RELATED FEATURE: FEAT-009.
- FILES AFFECTED: PROJECT CONTROL SYSTEM only.
- REASON: Establish the AI Idea Master Template as Master Hub's canonical governance operating system.
- RESULT: Merge succeeded; canonical governance is active on main; frozen baseline reference pending final creation.


## 2026-09-30 — MasterHub Reconstruction & Reality Audit started
- CHANGE ID: CHANGE-003
- VERSION: AUDIT-RC1
- DESCRIPTION: Began evidence-based reconstruction of actual repository, routes, tests, deployments, registry links, persistence, and public-data boundaries.
- AUTHORIZED BY: Project Owner / DEC-012.
- RELATED DECISION: DEC-012.
- RELATED REQUIREMENT: REQ-001 through REQ-008 as applicable.
- FILES AFFECTED: PROJECT CONTROL SYSTEM only.
- REASON: Reconcile documented state with actual system reality before new feature development.
- RESULT: First audit snapshot recorded; no product/deployment/destructive changes made.


## 2026-09-30 — Security + quality hardening release candidate
- CHANGE ID: CHANGE-004
- VERSION: SECURITY-QUALITY-RC1
- DESCRIPTION: Patched Next.js to 16.3.8, regenerated the dependency lock, aligned automated UI tests to the current product, corrected verified lint violations, and upgraded CI from build-only to lint/test/build verification.
- AUTHORIZED BY: Project Owner / DEC-013.
- RELATED DECISION: DEC-013.
- RELATED REQUIREMENT: REQ-013, REQ-014.
- RELATED FEATURE: FEAT-001, FEAT-003, FEAT-004.
- FILES AFFECTED: master-hub-app package metadata/lock, current UI tests, CI workflow, lint-corrected application source, Project Control System evidence.
- REASON: Resolve the P0/P1 dependency-security and false-confidence CI findings from the reconstruction audit.
- RESULT: SECURITY-QUALITY-RC1 verified on branch. GitHub Actions run 36810355612 passed install, lint, tests, and production build. PR #2 remains unmerged and production unchanged.


## 2026-09-30 — SECURITY-QUALITY-1.0 released
- CHANGE ID: CHANGE-005
- VERSION: SECURITY-QUALITY-1.0
- DESCRIPTION: Merged SECURITY-QUALITY-RC1 through PR #2, activated Next.js 16.3.8 and enforced lint/test/build CI on main, then verified the resulting production deployment.
- AUTHORIZED BY: Project Owner / DEC-014.
- RELATED DECISION: DEC-013, DEC-014.
- RELATED REQUIREMENT: REQ-013, REQ-014.
- RELATED FEATURE: FEAT-001, FEAT-003, FEAT-004.
- FILES AFFECTED: package metadata/lock, CI workflow, current UI tests, lint-corrected application source, Project Control System release records.
- REASON: Resolve verified security-patch and verification-gate defects before new feature development.
- RESULT: PR #2 merged as f81fd436a8df50ac0da93ec3c93ec26d09e0badf; post-merge CI 36811990043 passed; Vercel deployment dpl_3Veoi3hAuDV6hLcbvWM7GqaNoYJ5 READY; six canonical routes HTTP 200; post-release runtime error scan clean.


## 2026-09-30 — Restricted field-service security boundary finalized
- CHANGE ID: CHANGE-006
- VERSION: SECURITY-BOUNDARY-1.0
- DESCRIPTION: Finalized the RESTRICTED default classification for field-service operational material, verified public exposure inventory, quarantine plan, recovery rules, and containment gates.
- AUTHORIZED BY: Project Owner / DEC-016 / DEC-017.
- RELATED DECISION: DEC-016, DEC-017.
- RELATED REQUIREMENT: REQ-015.
- RELATED FEATURE: FEAT-002, FEAT-003.
- FILES AFFECTED: Project Control System, release, and backup records only.
- REASON: Freeze the approved distribution/security boundary before migration or removal.
- RESULT: Classification/security boundary finalized. Existing public exposure remains OPEN / CRITICAL until private preservation and physical containment are completed.
