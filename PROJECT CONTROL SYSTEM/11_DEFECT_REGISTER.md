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
| DEF-006 | Current MasterHub UI tests target older interface while CI does not run tests | Medium | CLOSED | Current-UI tests + post-merge CI run 36947000535 PASS | Tests normalized and canonical CI requires lint/test/build |
| DEF-007 | Canonical Current State retained stale post-adoption next-action text | Medium | FIXING IN AUDIT | 06_CURRENT_STATE.md contradicted completed Stage H baseline freeze | Correct Current State on audit branch and preserve audit evidence |

| DEF-008 | Next.js security patch level below current patched Active LTS | High | CLOSED | main/package lock use 16.3.8; CI 36811990043 PASS; production dpl_3Veoi3hAuDV6hLcbvWM7GqaNoYJ5 READY | SECURITY-QUALITY-1.0 released and verified |

| DEF-009 | Restricted field-service material remains publicly exposed | Critical | OPEN / PRESERVATION IN PROGRESS | DEC-016 classification; `/field-resource-hub`, `/scope-templates`, `/bw-dashboard.html` still HTTP 200; private Drive preservation store verified owner-only; restricted repo lineage and Supabase recovery fingerprints recorded in `35_RESTRICTED_PRIVATE_PRESERVATION_CHECKPOINT.md` | Exact restricted source-byte copy, Supabase operational backup/recovery verification and remaining restricted standalone source preservation must complete before any approved public source/route/deployment removal |

| DEF-010 | Repair Package part-cost / Part # auto-fill | High | VERIFIED | Automated interactive regression test passes Part # 11066404000A → Spherical Block Tape → $102.74 → Add → $102.74 total → Save → localStorage persistence → remount restore; Master Hub CI run 36947000535 passed lint/test/build; production deployment dpl_FQ56GB4NKryTiPUQQj1kSdEb35qg contains the stabilized Repair Package component and canonical /repair-packages returned HTTP 200 with the exact lookup UI; production master data contains the tested part row | Stabilized large master-parts loading, exact Part # index, package addition/total behavior, draft + saved-package persistence, and added permanent DEF-010 regression coverage. Automated production-code verification complete; no claim of a separate manual human browser click-through. |