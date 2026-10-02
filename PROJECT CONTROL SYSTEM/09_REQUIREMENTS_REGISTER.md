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
IMPLEMENTATION STATUS: IMPLEMENTED / SOURCE-BOUND
TEST STATUS: PASS
VERIFICATION STATUS: VERIFIED IN PRODUCTION
FINAL STATUS: FINALIZED / OWNER ACCEPTED

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


## REQ-013 — Security-patched Next.js baseline
SOURCE: User / DEC-013 / Official Next.js security release
TYPE: Security / Technical
PRIORITY: Critical
MVP: YES
DESCRIPTION: MasterHub must use the current approved Next.js security patch baseline rather than a known superseded patch level.
ACCEPTANCE CRITERIA:
- AC-013A GIVEN the hardening branch WHEN package metadata is inspected THEN next and eslint-config-next are both 16.3.8.
- AC-013B GIVEN package.json and package-lock.json WHEN npm ci runs THEN dependency installation succeeds without lockfile mismatch.
- AC-013C GIVEN the patched dependency set WHEN verification runs THEN lint, tests, and production build pass.
DEPENDENCIES: package.json; package-lock.json; CI
IMPLEMENTATION STATUS: IMPLEMENTED ON HARDENING BRANCH
TEST STATUS: PASS
VERIFICATION STATUS: VERIFIED ON HARDENING BRANCH
FINAL STATUS: ACCEPTED — SECURITY-QUALITY-1.0

## REQ-014 — Enforced lint, test, and build quality gates
SOURCE: User / DEC-013 / Audit finding
TYPE: Technical / Quality
PRIORITY: High
MVP: YES
DESCRIPTION: Pull requests and main builds must not rely on build-only verification; the CI pipeline must run lint, automated tests, and production build.
ACCEPTANCE CRITERIA:
- AC-014A GIVEN a pull request to main WHEN Master Hub CI runs THEN npm ci, lint, tests, and build execute in sequence.
- AC-014B GIVEN the current approved MasterHub UI WHEN Vitest runs THEN tests target current controls and pass.
- AC-014C GIVEN a lint/test failure WHEN CI runs THEN later gates are blocked and the PR is not treated as verified.
DEPENDENCIES: GitHub Actions; Vitest; ESLint
IMPLEMENTATION STATUS: IMPLEMENTED ON HARDENING BRANCH
TEST STATUS: PASS
VERIFICATION STATUS: VERIFIED ON HARDENING BRANCH
FINAL STATUS: ACCEPTED — SECURITY-QUALITY-1.0


## REQ-015 — Restricted field-service content boundary
SOURCE: Project Owner / DEC-016 / DEC-017
TYPE: Security / Data / Business
PRIORITY: Critical
MVP: YES
DESCRIPTION: All field-service diagnostic, repair, parts, procedural, quoting/billing operational, and related source material must be treated as RESTRICTED unless explicitly reclassified by the Project Owner.
ACCEPTANCE CRITERIA:
- AC-015A GIVEN field-service operational content WHEN distribution status is evaluated THEN default classification is RESTRICTED.
- AC-015B GIVEN a public repo/route/deployment WHEN restricted material is present THEN the state is an OPEN containment defect, not implicit approval.
- AC-015C GIVEN removal/migration/history-cleanup work WHEN no verified private preservation copy exists THEN destructive containment must not proceed.
- AC-015D GIVEN future restricted content WHEN no explicit public reclassification exists THEN it must not be newly published to public source/routes/deployments.
DEPENDENCIES: DEC-016; Security & Privacy; Data Dictionary; Quarantine Plan; Exposure Inventory; private preservation destination.
IMPLEMENTATION STATUS: CLASSIFICATION IMPLEMENTED
TEST STATUS: EXPOSURE VERIFIED
VERIFICATION STATUS: SECURITY BOUNDARY VERIFIED
FINAL STATUS: ACCEPTED — SECURITY-BOUNDARY-1.0 / CONTAINMENT OPEN

## REQ-016 — Project Operations & Queue control
SOURCE: Project Owner Project Operations prompt
TYPE: Business / Documentation / Operational Control
PRIORITY: High
MVP: YES
DESCRIPTION: Maintain one Master Hub operations-control system for queue, build/deployment, bugs/testing, ideas, security/restricted data, data/integrations, UI/UX, and release history.
ACCEPTANCE CRITERIA:
- AC-016A GIVEN active project work WHEN status is reviewed THEN one canonical operational queue distinguishes queued, active, blocked, review, finalized, rejected and deferred work.
- AC-016B GIVEN an implementation or release WHEN status is reported THEN built, deployed, verified and finalized remain distinct states.
- AC-016C GIVEN owner finalization WHEN recorded THEN the queue/release state preserves independent open issues rather than silently closing them.
DEPENDENCIES: Project Control System; Current State; Queue; Changelog; releases.
IMPLEMENTATION STATUS: IMPLEMENTED
TEST STATUS: VERIFIED BY CANONICAL OPERATIONS RECORDS
VERIFICATION STATUS: VERIFIED / OWNER ACCEPTED
FINAL STATUS: FINALIZED — PROJECT-OPS-1.0

## REQ-017 — Scope Templates as Master Hub section
SOURCE: Project Owner Scope Templates direction
TYPE: Functional / Integration / UX
PRIORITY: High
MVP: YES
DESCRIPTION: Surface reusable Scope Templates from the existing Billed Work workflow as a Master Hub section without creating a duplicate standalone tool or losing existing data behavior.
ACCEPTANCE CRITERIA:
- AC-017A GIVEN Master Hub WHEN Scope Templates is opened THEN the canonical `/scope-templates` route loads successfully.
- AC-017B GIVEN the existing Billed Work data path WHEN Scope Templates loads THEN it continues to use the existing dashboard/auth/data behavior rather than a duplicate store.
DEPENDENCIES: BW dashboard; existing Billed Work data/auth behavior.
IMPLEMENTATION STATUS: IMPLEMENTED
TEST STATUS: LIVE ROUTE VERIFIED
VERIFICATION STATUS: VERIFIED LIVE SECTION
FINAL STATUS: IMPLEMENTED / LIVE

## REQ-018 — Exact Device → SubDevice → Scope isolation
SOURCE: Project Owner exact grouping instruction and explicit `promote to verified/finalized`
TYPE: Functional / Data Integrity / UX
PRIORITY: High
MVP: YES
DESCRIPTION: Every imported or saved scope must remain inside the exact Device and SubDevice grouping where it was found; incompatible scopes must not be offered, selected, manually used, or attached across groups.
ACCEPTANCE CRITERIA:
- AC-018A GIVEN imported/saved records across multiple Devices and SubDevices WHEN a Device is selected THEN only SubDevices belonging to that Device are selectable.
- AC-018B GIVEN a Device and SubDevice selection WHEN scope choices are rendered THEN only scopes found/saved under that exact pair are offered.
- AC-018C GIVEN manual scope-template selection WHEN a Device/SubDevice is selected THEN only templates compatible with that exact pair are available.
- AC-018D GIVEN a scope template WHEN attach-to-lead candidates are shown THEN only leads with the same Device/SubDevice are offered.
- AC-018E GIVEN an incompatible direct attachment attempt WHEN attachment is executed THEN it is blocked.
- AC-018F GIVEN normalized case/spacing variants WHEN grouping is built THEN equivalent Device/SubDevice names resolve to one logical grouping.
DEPENDENCIES: FEAT-011 Scope Templates; Billed Work imported/reconciled data; scope templates; CI; canonical Vercel production.
IMPLEMENTATION STATUS: IMPLEMENTED
TEST STATUS: PASS — CI `36949404777` regression coverage
VERIFICATION STATUS: VERIFIED IN PRODUCTION — `/scope-templates` and `/bw-dashboard.html` HTTP 200; production JS artifact contains exact grouping and cross-group blocking logic
FINAL STATUS: VERIFIED / FINALIZED / OWNER ACCEPTED — SCOPE-ISOLATION-1.0
