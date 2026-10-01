# 00 — AI Idea Master Template Reconciliation Matrix

Status: STAGE B COMPLETE — RECONCILIATION ONLY
Project: Master Hub
Date: 2026-09-30
Branch: control/ai-idea-master-template-adoption
Protected baseline: main @ ef13e706cfa678fc519802298944a5c45b12d7d2

## Purpose
Compare the Project Owner-supplied AI Idea Master Template against the existing approved Master Hub Project Control System without silently changing existing product scope, history, terminology, or constitutional rules.

## Classification
- EXISTING — already represented materially.
- PARTIAL — concept exists but the template requires additional fields/rules.
- MISSING — no explicit equivalent currently exists.
- CONFLICT — template convention differs from established Master Hub convention.
- SOURCE INCOMPLETE — supplied template ends before the section is complete.
- SAFE TO PROPOSE — can be drafted as an additive governance amendment without changing product scope.
- NEEDS OWNER DECISION — adoption would change an established convention or approved control rule.

## Reconciliation

| Part | Template Control | Existing Master Hub Owner | Finding | Disposition |
|---|---|---|---|---|
| Operating Principle | Full controlled lifecycle; evidence/reality/approval/verification/traceability | 02 Constitution; 05 Roadmap; 08 Checkpoint | EXISTING | Preserve; verify wording during amendment draft |
| Project Name | Do not invent/lock unapproved name | 01 Brief; 02 Constitution | EXISTING | Master Hub already approved |
| 1 | Capture Original Idea | 01 Brief; 03/04/07/09/12/14 registers | PARTIAL | SAFE TO PROPOSE: add explicit capture checklist/gap markers |
| 2 | Information Classification | 02 Constitution; registers | PARTIAL | SAFE TO PROPOSE: explicitly add all template statuses, including OBSOLETE/SUPERSEDED/CROSS-PROJECT CONTAMINATION where absent |
| 3 | Permanent Project Control System | PROJECT CONTROL SYSTEM 01–21 + PRODUCT/DEVELOPMENT/TESTING/RELEASES/BACKUPS | EXISTING / EXTENDED | Preserve existing 01–21; template requires 01–20 and Master Hub additionally has 21 traceability |
| 4 | Master Project Brief | 01_MASTER_PROJECT_BRIEF | EXISTING | Review for any missing subfields only |
| 5 | Project Constitution | 02_PROJECT_CONSTITUTION | PARTIAL | SAFE TO PROPOSE: explicit Authority Order and source ownership references; do not activate until reviewed |
| 6 | Decision Log | 03_DECISION_LOG | EXISTING | Preserve historical decisions |
| 7 | Feature Register | 04_FEATURE_REGISTER | EXISTING | Preserve rejected/superseded history |
| 8 | Build Roadmap | 05_BUILD_ROADMAP | EXISTING | Preserve rule that roadmap cannot create scope |
| 9 | Current State | 06_CURRENT_STATE | EXISTING | Preserve reality-over-intention rule |
| 10 | Open Issues | 07_OPEN_ISSUES | EXISTING | Minor schema expansion optional |
| 11 | Checkpoint | 08_CHECKPOINT | EXISTING | Preserve restart role |
| 12 | Requirements Register | 09_REQUIREMENTS_REGISTER | EXISTING / PARTIAL | SAFE TO PROPOSE: normalize objective acceptance criteria and status fields |
| 13 | Requirements Traceability Matrix | 21_REQUIREMENTS_TRACEABILITY_MATRIX | EXISTING | Preserve bidirectional traceability |
| 14 | Definition of Ready | 17 Release Checklist references it, but no canonical explicit definition | MISSING EXPLICIT CONTROL | SAFE TO PROPOSE as constitutional/release governance amendment |
| 15 | Definition of Done | Concept partially reflected in release/checkpoint rules | MISSING EXPLICIT CONTROL | SAFE TO PROPOSE exact supplied progression and completion gates |
| 16 | Acceptance Criteria | 09 Requirements Register | PARTIAL | SAFE TO PROPOSE GIVEN/WHEN/THEN standard and AC IDs |
| 17 | Test Register | 10_TEST_REGISTER | PARTIAL | SAFE TO PROPOSE expanded schema: feature, type, purpose, preconditions, input, steps, expected, actual, evidence, date, notes; normalize PASS/FAIL/BLOCKED/NOT RUN |
| 18 | Defect Register | 11_DEFECT_REGISTER | PARTIAL + CONFLICT | NEEDS OWNER DECISION for BUG-### vs existing DEF-###; safe to add missing defect fields without rewriting history |
| 19 | Risk Register | 12_RISK_REGISTER | PARTIAL | SAFE TO PROPOSE category, trigger, contingency, owner; preserve existing records |
| 20 | Changelog | 13_CHANGELOG | PARTIAL | SAFE TO PROPOSE CHANGE-### entries, version, authorization, relationships, files, reason, result |
| 21 | Dependency Register | 14_DEPENDENCY_REGISTER | PARTIAL | SAFE TO PROPOSE template failure/fallback/recovery/version/provider fields |
| 22 | Data Dictionary | 15_DATA_DICTIONARY | PARTIAL | SAFE TO PROPOSE allowed values, units, ownership, retention, sensitivity, authoritative source |
| 23 | Security and Privacy | 16_SECURITY_AND_PRIVACY | PARTIAL | SAFE TO PROPOSE explicit authn/authz, roles, permissions, secrets/env vars, encryption, deletion, audit/logging, third-party sharing, compliance, incident-response fields |
| 24 | Release Checklist | 17_RELEASE_CHECKLIST | PARTIAL | SAFE TO PROPOSE explicit data, UX, integrations, monitoring and recovery checks |
| 25 | Rollback and Recovery | 18_ROLLBACK_AND_RECOVERY | PARTIAL | SAFE TO PROPOSE source/deployment/config/database rollback, migration limitations, backup location, recovery testing/dependencies |
| 26 | User Feedback Register | 19_USER_FEEDBACK_REGISTER | PARTIAL | SAFE TO PROPOSE observation/request/problem/evidence/user-type/action fields; feedback remains non-scope until approved |
| 27 | Technical Debt Register | 20_TECHNICAL_DEBT_REGISTER | PARTIAL | SAFE TO PROPOSE why/temporary implementation/desired implementation/risk/trigger fields |
| 28 | Authority Order | No explicit full hierarchy in Constitution | MISSING EXPLICIT CONTROL | SAFE TO PROPOSE exact supplied hierarchy; constitutional activation requires controlled review |
| 29 | Source-of-Truth Ownership | Implicit across individual files; not fully codified | PARTIAL + SOURCE INCOMPLETE | SAFE TO PROPOSE only the mappings actually supplied; do not invent content after "Field definitions" |

## Material Conflicts / Owner Decision Queue

### OD-001 — Defect Identifier Convention
Template: `BUG-###`
Current Master Hub: `DEF-###`

Changing historical identifiers would break traceability and rewrite established references.

**Proposed safe option for later review:** retain existing `DEF-###` records and either:
- keep `DEF-###` permanently as a Master Hub-approved local convention; or
- use `BUG-###` only for new records with an explicit compatibility rule.

STATUS: NEEDS OWNER DECISION. No identifier change made.

### OD-002 — Constitutional Activation of Authority Order
The template supplies a precise 13-level Authority Order. Master Hub does not currently state the full hierarchy.

STATUS: SAFE TO DRAFT; activation changes constitutional governance and therefore remains subject to review/recording before becoming active.

### OD-003 — Source-of-Truth Ownership Remainder
The supplied template ends during Part 29 after `Field definitions`.

STATUS: SOURCE INCOMPLETE. Adopt only mappings actually supplied. Do not infer the missing remainder.

## No-Change Findings
The following do not require replacement:
- Existing approved Master Hub identity.
- Existing 01–21 canonical files.
- Existing decision history.
- Existing feature/requirement IDs.
- Existing product code.
- Existing production branch.
- Existing verified deployment evidence.

## Stage B Result
Stage B reconciliation is COMPLETE.

No template rule has been silently activated by this matrix.
No product code has been changed.
No main-branch merge has been performed.

## Next Controlled Stage
STAGE C — Draft proposed governance amendments.

Stage C may:
- draft additive schema/rule changes,
- show exact before/after governance language,
- preserve historical records,
- isolate owner-decision items.

Stage C may NOT:
- rename existing defect IDs,
- overwrite approved decisions,
- change product scope,
- modify product code,
- merge to main,
- declare template adoption final.
