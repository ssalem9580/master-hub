# 02 — Project Constitution

Status: APPROVED foundation

## 1. Product Identity
Master Hub is the owner's durable command center and project system of record.

## 2. Product Mission
Keep important tools accessible while making project state controlled, traceable, recoverable, testable, and maintainable.

## 3. Primary User
Project Owner.

## 4. Core Product
Master Hub application + canonical Project Control System.

## 5. Product Promise
Reality over intended state; evidence over assumption.

## 6. Core Workflow
Capture → reconstruct → verify → correct → define → require → approve → scope → architect → plan → build → test → verify → fix → retest → release candidate → audit → owner acceptance → final release → backup → baseline freeze.

## 7. Product Principles
- APPROVED: Functional, data-dense, logical UI.
- APPROVED: No fake/demo data or decorative filler.
- APPROVED: Preserve existing functionality when reorganizing.
- APPROVED: One source of truth for project state.
- APPROVED: Unknowns remain unknown until confirmed.

## 8. Evidence Rules
Facts require repository, deployment, test, source-document, or explicit owner evidence. Estimates and assumptions must be labeled. AI recommendations are not approvals.

## 9. Terminology Lock
- APPROVED = explicitly accepted.
- PROPOSED = discussed, not accepted.
- REJECTED = explicitly declined.
- POSTPONED = intentionally deferred.
- VERIFIED = supported by current evidence.
- LIVE = deployed and reachable, not merely built.
- FINALIZED = owner accepted, backed up, and baseline frozen.

## 10. UX Rules
Prioritize directness, operational clarity, compact information, and useful controls. Avoid fake metrics, generic greetings, decorative clutter, and unsupported status labels.

## 11. AI Rules
AI must not silently change approved scope, invent missing project facts, or treat generated code as done. Material changes should map to a decision, requirement, or owner instruction.

## 12. Data Rules
Private financial data, credentials, secrets, and sensitive personal values must not be hard-coded into the public repository. Prefer local/private storage or approved secure integrations.

## 13. Change-Control Rules
Constitutional change: PROPOSED → REVIEWED → APPROVED → RECORDED. No silent modification.


## 14. Master Project Lifecycle
Master Hub projects must not jump directly from IDEA to BUILD.

Required lifecycle:

```text
IDEA
→ CAPTURE
→ RECONSTRUCTION
→ VERIFICATION
→ CORRECTION
→ PRODUCT DEFINITION
→ REQUIREMENTS
→ APPROVAL
→ SCOPE
→ ARCHITECTURE
→ PLANNING
→ BUILD
→ TEST
→ VERIFY
→ FIX
→ RETEST
→ RELEASE CANDIDATE
→ FINALIZATION AUDIT
→ OWNER ACCEPTANCE
→ FINAL RELEASE
→ BACKUP
→ BASELINE FREEZE
→ FINALIZED VERSION
```

At every stage:
- Evidence over assumption.
- Reality over intended state.
- Approval over silent change.
- Verification over generated output.
- Traceability over memory.
- Documented state over conversational memory.

## 15. Information Classification
Every material project item must have an explicit classification when applicable:
- APPROVED
- PROPOSED
- REJECTED
- POSTPONED
- MVP
- POST-MVP
- EXPERIMENTAL
- UNKNOWN / NEEDS CONFIRMATION
- OBSOLETE
- SUPERSEDED
- CROSS-PROJECT CONTAMINATION

PROPOSED, ASSUMED, EXPERIMENTAL, or UNKNOWN information may not become APPROVED without explicit approval.

## 16. Definition of Ready
A feature may enter implementation only when all applicable items are satisfied:
- problem is defined
- intended user is defined
- user story exists
- inputs are known
- outputs are known
- requirements exist
- acceptance criteria exist
- dependencies are identified
- risks are recorded
- MVP/Post-MVP classification exists
- data implications are known
- privacy/security implications are reviewed
- blocking questions are resolved
- required approval exists

Otherwise: **STATUS = NOT READY**.

## 17. Definition of Done
A feature is not DONE merely because code exists, AI generated it, the page loads, the UI looks correct, or one test passed.

Required progression:

```text
APPROVED
→ READY
→ IMPLEMENTED
→ TESTED
→ VERIFIED
→ OWNER ACCEPTED
→ DONE
```

DONE requires, when applicable:
- requirement implemented
- acceptance criteria satisfied
- normal workflow tested
- expected inputs tested
- expected outputs tested
- error states tested
- edge cases tested
- integration behavior tested
- mobile behavior tested
- desktop behavior tested
- authentication tested
- authorization tested
- data behavior verified
- privacy/security requirements reviewed
- no blocking defects
- documentation updated
- Requirements Register updated
- Feature Register updated
- Decision Log updated if required
- Current State updated
- Checkpoint updated
- owner acceptance completed when required

## 18. Authority Order
When project information conflicts, use this hierarchy unless the Project Owner explicitly changes it:
1. Latest explicit Project Owner decision
2. Approved Project Constitution
3. Approved Decision Log
4. Approved Master Project Brief
5. Approved Requirements Register
6. Approved Feature Register
7. Approved Current State
8. Approved Build Roadmap
9. Approved Checkpoint
10. Verified source documents
11. Earlier project conversation
12. Assistant-generated proposals
13. Assumptions

Assistant-generated ideas may never override approved project decisions.
If two authoritative sources conflict, identify the conflict.
Do not silently choose unless the Authority Order clearly resolves it.

## 19. Source-of-Truth Ownership
Each major project concept has one canonical owner. Based only on the supplied template:
- Product identity → PROJECT CONSTITUTION
- Requirements → REQUIREMENTS REGISTER
- Features → FEATURE REGISTER
- Historical decisions → DECISION LOG
- Current reality → CURRENT STATE
- Tests → TEST REGISTER
- Defects → DEFECT REGISTER
- Risks → RISK REGISTER
- Dependencies → DEPENDENCY REGISTER

The supplied template ends during Part 29 after the words "Field definitions". No additional mappings are inferred without source evidence or a later Project Owner decision.

## 20. Master Hub Local Governance Conventions
- Defect IDs use **DEF-###** permanently under DEC-006.
- Existing historical identifiers are never renamed solely to match a generic template.
- Master Hub may extend the template when an approved local control improves traceability without contradicting the template; 21_REQUIREMENTS_TRACEABILITY_MATRIX.md is one such approved extension.
