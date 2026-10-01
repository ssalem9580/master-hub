# 09 — Requirements Register

## REQ-001 — Master command center
SOURCE: User / existing approved product
TYPE: Functional
PRIORITY: Critical
MVP: YES
DESCRIPTION: Provide a compact Master Hub that exposes approved applications and actions.
ACCEPTANCE CRITERIA: Core dashboard, directory, app opening, and actions work without fake data.
IMPLEMENTATION STATUS: IMPLEMENTED
TEST STATUS: PARTIAL
VERIFICATION STATUS: PARTIAL
FINAL STATUS: IMPLEMENTED

## REQ-002 — Field diagnostics
SOURCE: User
TYPE: Functional
PRIORITY: High
MVP: YES
DESCRIPTION: Preserve usable field diagnostic/troubleshooting workflows under Master Hub.
ACCEPTANCE CRITERIA: Intended diagnostic routes load and preserve approved hierarchy/functionality.
IMPLEMENTATION STATUS: IMPLEMENTED
TEST STATUS: PARTIAL
VERIFICATION STATUS: PARTIAL
FINAL STATUS: IMPLEMENTED

## REQ-003 — Repair Packages
SOURCE: User
TYPE: Functional / Data
PRIORITY: High
MVP: YES
DESCRIPTION: Build repair packages from real imported parts data; do not invent part numbers or compatibility.
ACCEPTANCE CRITERIA: Package workflow uses actual imported/library data and supports approved actions.
IMPLEMENTATION STATUS: IMPLEMENTED
TEST STATUS: PARTIAL
VERIFICATION STATUS: PARTIAL
FINAL STATUS: IMPLEMENTED

## REQ-004 — Finance privacy boundary
SOURCE: User / Decision
TYPE: Data / Security
PRIORITY: Critical
MVP: YES
DESCRIPTION: Personal finance values must not be hard-coded into the public repository.
ACCEPTANCE CRITERIA: Public source contains framework/defaults but not private account/credit values.
IMPLEMENTATION STATUS: IMPLEMENTED
TEST STATUS: REVIEW REQUIRED
VERIFICATION STATUS: OPEN
FINAL STATUS: OPEN

## REQ-005 — Accurate app status
SOURCE: Constitution
TYPE: UX / Functional
PRIORITY: High
MVP: YES
DESCRIPTION: App status labels must reflect evidence rather than intention.
ACCEPTANCE CRITERIA: "Live" is used only when deployment/reachability is verified.
IMPLEMENTATION STATUS: PARTIAL
TEST STATUS: OPEN
VERIFICATION STATUS: OPEN
FINAL STATUS: OPEN

## REQ-006 — Canonical project control
SOURCE: User
TYPE: Business / Documentation
PRIORITY: Critical
MVP: YES
DESCRIPTION: Maintain permanent canonical files for identity, decisions, requirements, tests, defects, risks, state, release and recovery.
ACCEPTANCE CRITERIA: Required control files exist in repository and are treated as system of record.
IMPLEMENTATION STATUS: IMPLEMENTED
TEST STATUS: N/A
VERIFICATION STATUS: IMPLEMENTED IN REPOSITORY
FINAL STATUS: IMPLEMENTED

## REQ-007 — Visible project control
SOURCE: User / Decision
TYPE: UX / Functional
PRIORITY: Medium
MVP: YES
DESCRIPTION: Master Hub provides direct access to project-control status.
ACCEPTANCE CRITERIA: /project-control route exists and is registered in Master Hub.
IMPLEMENTATION STATUS: IMPLEMENTED IN THIS CHANGE
TEST STATUS: OPEN
VERIFICATION STATUS: OPEN
FINAL STATUS: OPEN

## REQ-008 — Bidirectional traceability
SOURCE: User
TYPE: Business / Documentation
PRIORITY: High
MVP: YES
DESCRIPTION: Requirements must trace from user need through implementation/test/evidence/acceptance and back.
ACCEPTANCE CRITERIA: Traceability matrix exists and is maintained.
IMPLEMENTATION STATUS: IMPLEMENTED FOUNDATION
TEST STATUS: OPEN
VERIFICATION STATUS: OPEN
FINAL STATUS: OPEN


## Canonical Requirements Governance
Every requirement receives a stable REQ-### identifier and supports:

```text
REQUIREMENT ID:
TITLE:
SOURCE:
User / Constitution / Decision / Feature / Regulation / Dependency

DESCRIPTION:

TYPE:
Functional / UX / Data / AI / Security / Performance / Business / Legal / Integration

PRIORITY:
Critical / High / Medium / Low

MVP:
YES / NO

ACCEPTANCE CRITERIA:

DEPENDENCIES:

IMPLEMENTATION STATUS:

TEST STATUS:

VERIFICATION STATUS:

FINAL STATUS:
OPEN / IMPLEMENTED / VERIFIED / ACCEPTED / DEFERRED / REJECTED
```

### Acceptance Criteria Standard
Approved requirements must have objective acceptance criteria before final verification.

Preferred form:

```text
AC-###
GIVEN <precondition>
WHEN <action>
THEN <observable result>
```

Rules:
- Each acceptance criterion receives a stable AC identifier when normalized.
- Avoid vague criteria such as "works well", "looks good", or "should function".
- Criteria must be observable or verifiable.
- Existing requirements lacking normalized AC IDs remain valid historical records but are marked for criteria normalization when revisited.
- No approved requirement may silently disappear.


## REQ-009 — Controlled governance lifecycle
SOURCE: User / DEC-007 / Constitution
TYPE: Business / Documentation
PRIORITY: Critical
MVP: YES
DESCRIPTION: Master Hub governance must use the approved controlled lifecycle and explicit information classifications from the AI Idea Master Template.
ACCEPTANCE CRITERIA:
- AC-009A GIVEN the Project Constitution WHEN governance is reviewed THEN the full lifecycle from IDEA through FINALIZED VERSION is present.
- AC-009B GIVEN a material project item WHEN its status is recorded THEN approved template classifications are available and unknowns are not silently promoted.
DEPENDENCIES: 02_PROJECT_CONSTITUTION.md
IMPLEMENTATION STATUS: IMPLEMENTED ON ADOPTION BRANCH
TEST STATUS: PASS
VERIFICATION STATUS: VERIFIED ON ADOPTION BRANCH
FINAL STATUS: VERIFIED

## REQ-010 — Ready, Done, and acceptance gates
SOURCE: User / DEC-007 / Constitution
TYPE: Business / Documentation
PRIORITY: Critical
MVP: YES
DESCRIPTION: Master Hub governance must enforce Definition of Ready, Definition of Done, and objective acceptance criteria.
ACCEPTANCE CRITERIA:
- AC-010A GIVEN an implementation candidate WHEN Ready criteria are incomplete THEN status is NOT READY.
- AC-010B GIVEN a feature WHEN only code or UI exists THEN it is not DONE until required TESTED, VERIFIED, OWNER ACCEPTED gates are met.
- AC-010C GIVEN an approved requirement WHEN final verification is attempted THEN objective acceptance criteria exist.
DEPENDENCIES: Constitution; Requirements Register; Test Register
IMPLEMENTATION STATUS: IMPLEMENTED ON ADOPTION BRANCH
TEST STATUS: PASS
VERIFICATION STATUS: VERIFIED ON ADOPTION BRANCH
FINAL STATUS: VERIFIED

## REQ-011 — Authority and source-of-truth control
SOURCE: User / DEC-007 / Constitution
TYPE: Business / Documentation
PRIORITY: Critical
MVP: YES
DESCRIPTION: Conflicts must resolve through the approved Authority Order and canonical source ownership without inventing the missing Part 29 remainder.
ACCEPTANCE CRITERIA:
- AC-011A GIVEN conflicting project information WHEN resolution is required THEN the 13-level Authority Order is applied.
- AC-011B GIVEN a project concept with a supplied canonical owner WHEN state is recorded THEN that canonical file owns the concept.
- AC-011C GIVEN an unsupplied Part 29 mapping WHEN no owner decision exists THEN it remains UNKNOWN / NEEDS CONFIRMATION.
DEPENDENCIES: Constitution; Decision Log
IMPLEMENTATION STATUS: IMPLEMENTED ON ADOPTION BRANCH
TEST STATUS: PASS
VERIFICATION STATUS: VERIFIED ON ADOPTION BRANCH
FINAL STATUS: VERIFIED

## REQ-012 — Canonical governance register schemas
SOURCE: User / DEC-007
TYPE: Business / Documentation
PRIORITY: High
MVP: YES
DESCRIPTION: Requirements, tests, defects, risks, changes, dependencies, data, security, releases, recovery, feedback, and technical debt must use the adopted governance schemas while preserving historical records.
ACCEPTANCE CRITERIA:
- AC-012A GIVEN the canonical control files WHEN reviewed THEN each adopted schema or coverage rule is documented.
- AC-012B GIVEN historical records WHEN schema expansion occurs THEN IDs/history are preserved and unknown fields are not fabricated.
- AC-012C GIVEN a Master Hub defect WHEN identified THEN DEF-### remains the canonical identifier convention.
DEPENDENCIES: 09–20 control files; DEC-006
IMPLEMENTATION STATUS: IMPLEMENTED ON ADOPTION BRANCH
TEST STATUS: PASS
VERIFICATION STATUS: VERIFIED ON ADOPTION BRANCH
FINAL STATUS: VERIFIED
