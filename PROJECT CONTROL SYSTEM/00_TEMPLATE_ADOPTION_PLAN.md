# 00 — Controlled Template Adoption Plan

Status: IN PROGRESS
Project: Master Hub
Date: 2026-09-30
Protected baseline branch: main
Protected baseline commit: ef13e706cfa678fc519802298944a5c45b12d7d2
Adoption branch: control/ai-idea-master-template-adoption

## Owner Direction
Incorporate the entire AI Idea Master Template into MasterHub as its project-management/governance operating system.

## Scope Boundary
The template governs project control, traceability, evidence, approvals, testing, release, recovery, and finalization.
It does NOT silently redefine Master Hub product identity, features, UX, implementation, data, integrations, or business scope.

## Non-Destructive Rules
- Do not overwrite, restart, rename, replace, merge, delete, or silently restructure established Master Hub state.
- Do not convert PROPOSED, ASSUMED, or UNKNOWN items into APPROVED items without explicit owner approval.
- Do not treat conversation memory as canonical when repository control records exist.
- Do not claim IMPLEMENTED, TESTED, VERIFIED, LIVE, OWNER ACCEPTED, DONE, or FINALIZED without supporting evidence.
- Do not merge this adoption branch into main until the controlled reconciliation, verification, and owner approval steps are complete.

## Existing Baseline Preserved
Master Hub already contains:
- 01_MASTER_PROJECT_BRIEF.md
- 02_PROJECT_CONSTITUTION.md
- 03_DECISION_LOG.md
- 04_FEATURE_REGISTER.md
- 05_BUILD_ROADMAP.md
- 06_CURRENT_STATE.md
- 07_OPEN_ISSUES.md
- 08_CHECKPOINT.md
- 09_REQUIREMENTS_REGISTER.md
- 10_TEST_REGISTER.md
- 11_DEFECT_REGISTER.md
- 12_RISK_REGISTER.md
- 13_CHANGELOG.md
- 14_DEPENDENCY_REGISTER.md
- 15_DATA_DICTIONARY.md
- 16_SECURITY_AND_PRIVACY.md
- 17_RELEASE_CHECKLIST.md
- 18_ROLLBACK_AND_RECOVERY.md
- 19_USER_FEEDBACK_REGISTER.md
- 20_TECHNICAL_DEBT_REGISTER.md
- 21_REQUIREMENTS_TRACEABILITY_MATRIX.md

Required top-level PRODUCT / DEVELOPMENT / TESTING / RELEASES / BACKUPS structures also already exist.

## Reconciliation Method
For every template section, classify the result as:
1. EXISTING — already represented accurately.
2. MISSING — not yet represented.
3. CONFLICT — inconsistent with current approved Master Hub state.
4. ADOPT — safe additive governance rule or structure.
5. NEEDS OWNER DECISION — would change an approved rule, scope, identity, terminology, workflow, or irreversible state.

No CONFLICT or NEEDS OWNER DECISION item may be silently resolved.

## Section Mapping

| Template Area | Master Hub Canonical Owner | Adoption State |
|---|---|---|
| Original idea / project capture | 01_MASTER_PROJECT_BRIEF + registers | EXISTING / REVIEW |
| Information classification | 02_PROJECT_CONSTITUTION + registers | EXISTING / REVIEW |
| Permanent control system | 01–21 + top-level folders | EXISTING |
| Master Project Brief | 01_MASTER_PROJECT_BRIEF | EXISTING / REVIEW |
| Project Constitution | 02_PROJECT_CONSTITUTION | EXISTING / REVIEW |
| Decision Log | 03_DECISION_LOG | EXISTING |
| Feature Register | 04_FEATURE_REGISTER | EXISTING |
| Build Roadmap | 05_BUILD_ROADMAP | EXISTING |
| Current State | 06_CURRENT_STATE | EXISTING |
| Open Issues | 07_OPEN_ISSUES | EXISTING |
| Checkpoint | 08_CHECKPOINT | EXISTING |
| Requirements Register | 09_REQUIREMENTS_REGISTER | EXISTING |
| Requirements Traceability Matrix | 21_REQUIREMENTS_TRACEABILITY_MATRIX | EXISTING |
| Definition of Ready | Requirements / roadmap / release governance | MISSING EXPLICIT CONTROL |
| Definition of Done | Requirements / tests / release / checkpoint | MISSING EXPLICIT CONTROL |
| GIVEN/WHEN/THEN acceptance criteria | 09_REQUIREMENTS_REGISTER + 10_TEST_REGISTER | PARTIAL / NEEDS STANDARDIZATION |
| Test Register | 10_TEST_REGISTER | EXISTING |
| Defect Register | 11_DEFECT_REGISTER | EXISTING |
| Risk Register | 12_RISK_REGISTER | EXISTING |
| Changelog | 13_CHANGELOG | EXISTING |
| Dependency Register | 14_DEPENDENCY_REGISTER | EXISTING |
| Data Dictionary | 15_DATA_DICTIONARY | EXISTING |
| Security and Privacy | 16_SECURITY_AND_PRIVACY | EXISTING |
| Release Checklist | 17_RELEASE_CHECKLIST | EXISTING |
| Rollback and Recovery | 18_ROLLBACK_AND_RECOVERY | EXISTING |
| User Feedback Register | 19_USER_FEEDBACK_REGISTER | EXISTING |
| Technical Debt Register | 20_TECHNICAL_DEBT_REGISTER | EXISTING |
| Authority Order | 02_PROJECT_CONSTITUTION / 08_CHECKPOINT | MISSING EXPLICIT CONTROL |
| Source-of-Truth Ownership | 02_PROJECT_CONSTITUTION / individual canonical files | PARTIAL; SOURCE TRUNCATED |

## Source Completeness Warning
The current owner-supplied template extends through PART 29, but the provided source ends during SOURCE-OF-TRUTH OWNERSHIP after "Field definitions".
Do not invent the missing remainder.
This supersedes the older observation that the supplied prompt ended during Definition of Done.

## Adoption Stages
- STAGE A — Protect baseline and capture source: COMPLETE.
- STAGE B — Section-by-section reconciliation: COMPLETE.
- STAGE C — Draft proposed governance amendments: COMPLETE.
- STAGE D — Owner review of conflicts/material changes: COMPLETE.
- STAGE E — Apply approved governance amendments on adoption branch: IN PROGRESS.
- STAGE F — Verify repository, build/test impact, checkpoint and recovery state: NOT STARTED.
- STAGE G — Owner activation approval: NOT STARTED.
- STAGE H — Merge/freeze new governance baseline: NOT AUTHORIZED.

## Current Next Controlled Action
Apply approved governance amendments to canonical control files on the adoption branch. Preserve product code and main.
