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

| DEF-004 | Recovery Value Calculator configured Live URL returns HTTP 404 | High | OPEN | Live HTTP verification at configured registry URL | Identify correct route/deployment or downgrade status until restored |
| DEF-005 | Project Control Center displays static state that can drift from canonical records | Medium | OPEN | /project-control source contains static phase/current-task text | Bind/generate visible state from canonical source |
| DEF-006 | Current MasterHub UI tests target older interface while CI does not run tests | Medium | VERIFIED ON HARDENING BRANCH | Updated current-UI tests + CI run 36810355612 | Tests normalized; CI now requires lint/test/build; canonical closure awaits merge |
| DEF-007 | Canonical Current State retained stale post-adoption next-action text | Medium | FIXING IN AUDIT | 06_CURRENT_STATE.md contradicted completed Stage H baseline freeze | Correct Current State on audit branch and preserve audit evidence |

| DEF-008 | Next.js security patch level below current patched Active LTS | High | VERIFIED ON HARDENING BRANCH | package/lock use 16.3.8; CI run 36810355612 passes lint/test/build | Merge/release PR #2 to make fix canonical |
