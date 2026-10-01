# 10 — Test Register

| Test ID | Requirement | Test | Status | Evidence | Last Run |
|---|---|---|---|---|---|
| TEST-001 | REQ-001 | Next.js production build/typecheck | HISTORICALLY PASSING; fresh run needed after this change | Vercel/GitHub build history | Before 2026-09-30 control change |
| TEST-002 | REQ-002 | Field diagnostic route loads and approved hierarchy works | OPEN | — | — |
| TEST-003 | REQ-003 | Repair Packages compiles and core package workflow works | PARTIAL | Latest READY deployment followed typecheck fix | 2026-09-28 |
| TEST-004 | REQ-004 | Scan public source for embedded private finance values/secrets | OPEN | — | — |
| TEST-005 | REQ-005 | Verify every registry "Live" URL/route | OPEN | — | — |
| TEST-006 | REQ-006 | Confirm all canonical control files are present | IMPLEMENTED; repository verification required after commit | Git tree | 2026-09-30 |
| TEST-007 | REQ-007 | /project-control builds and renders | OPEN | — | — |
| TEST-008 | REQ-008 | Every approved MVP requirement has traceability row | PARTIAL | 21_REQUIREMENTS_TRACEABILITY_MATRIX.md | 2026-09-30 |


## Canonical Test Schema
New or normalized tests use:

```text
TEST ID:
RELATED REQUIREMENT:
RELATED FEATURE:

TYPE:
Unit / Integration / End-to-End / Regression / Security / UX / Performance / Recovery

PURPOSE:
PRECONDITIONS:
INPUT:
STEPS:
EXPECTED RESULT:
ACTUAL RESULT:

STATUS:
PASS / FAIL / BLOCKED / NOT RUN

EVIDENCE:
DATE:
NOTES:
```

Rules:
- Never mark PASS because code merely appears logically correct.
- Test actual behavior whenever possible.
- Existing TEST-### identifiers and historical summaries are preserved.
- Historical tests may be expanded to this schema when revisited; unknown historical fields remain UNKNOWN rather than fabricated.
