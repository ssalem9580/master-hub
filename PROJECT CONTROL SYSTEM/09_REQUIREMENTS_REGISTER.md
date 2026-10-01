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
