# 11 — Defect Register

| Defect ID | Title | Severity | Status | Evidence | Resolution |
|---|---|---|---|---|---|
| DEF-001 | Historical Master Hub Vercel deployment failures | High | RESOLVED for latest observed production build | Multiple prior ERROR deployments; latest observed deployment READY | Build bridge/config + Repair Packages typecheck fix |
| DEF-002 | Project governance previously existed only in conversation/history | High | FIXED IN THIS CHANGE | No canonical control directory previously at repo root | Added Project Control System |
| DEF-003 | AI Idea Master Template source is incomplete at end of Part 29 | Medium | OPEN | Latest user-supplied file ends during Source-of-Truth Ownership after "Field definitions" | Do not invent missing continuation; adopt only supplied content |


## Canonical Defect Schema
Master Hub uses the permanent defect identifier convention **DEF-###** under DEC-006.

New or normalized defects use:

```text
DEFECT ID:
TITLE:

SEVERITY:
Critical / High / Medium / Low

FEATURE:
REQUIREMENT:
ENVIRONMENT:
STEPS TO REPRODUCE:
EXPECTED:
ACTUAL:
EVIDENCE:
ROOT CAUSE:
FIX:
RETEST RESULT:

STATUS:
OPEN / FIXING / READY FOR RETEST / VERIFIED / CLOSED
```

Rules:
- Never erase defect history.
- Never rename existing DEF-### identifiers solely to match the generic template.
- Historical defects may be expanded when revisited; unknown fields remain UNKNOWN rather than invented.
