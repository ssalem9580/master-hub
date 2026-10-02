# 11 — Defect Register

| Defect ID | Title | Severity | Status | Evidence | Resolution |
|---|---|---|---|---|---|
| DEF-001 | Historical Master Hub Vercel deployment failures | High | RESOLVED | Prior ERROR history; current canonical production has repeated READY releases | Build bridge/config and subsequent production verification |
| DEF-002 | Project governance previously existed only in conversation/history | High | CLOSED | Canonical `PROJECT CONTROL SYSTEM/` exists on main and is source-bound to Project Control Center | Added permanent control system |
| DEF-003 | AI Idea Master Template source is incomplete at end of Part 29 | Medium | OPEN / SOURCE BLOCKED | Supplied source ends after `Field definitions` | Preserve source exactly; do not fabricate missing continuation |
| DEF-004 | Recovery Value Calculator configured root URL returns HTTP 404 | High | OPEN / SOURCE VALIDATED | Root target 404; exact recovered nested artifact returns HTTP 200; source/project ownership finalized | Canonical/private source preservation and controlled root restoration still required before production promotion |
| DEF-005 | Project Control Center displays static state that can drift | Medium | CLOSED | `PROJECT-CONTROL-LIVE-TRUTH-1.0`; dynamic record discovery; live repository-head comparison; production route verified | Source-bound UI now separates repository head, served revision and last verified production evidence |
| DEF-006 | Current MasterHub UI tests targeted older interface while CI did not run tests | Medium | CLOSED | Current UI tests and canonical lint/test/build CI pass | Tests normalized and CI gate enforced |
| DEF-007 | Canonical Current State retained stale post-adoption next-action text | Medium | CLOSED | Wave-1 truth reconciliation, later live-truth release and production evidence | Canonical Current State/queue were reconciled; later changes are tracked explicitly as source vs production state |
| DEF-008 | Next.js security patch level below patched Active LTS | High | CLOSED | Next.js 16.3.8 on main; CI and production verification | `SECURITY-QUALITY-1.0` |
| DEF-009 | Restricted field-service material remains publicly exposed | Critical | OPEN / PRESERVATION IN PROGRESS | DEC-016; public restricted routes/data; owner-only Drive preservation store; records 32/35/39; exact in-project Supabase snapshots fingerprint-match live state | Private recovery layer materially improved. Independent exact-byte restricted-source archive and independent database export/recovery verification must complete before any approved public source/route removal; Git-history remediation remains separate |
| DEF-010 | Repair Package part-cost / Part # auto-fill | High | VERIFIED | Automated regression passes exact Part # → Name → Cost → Add → Total → Save → localStorage remount; CI PASS; production route HTTP 200 | Stabilized master-parts loading/indexing, totals and persistence; permanent regression coverage retained |
| DEF-011 | Direct BW Lead Scope tab did not self-load finalized scope isolation | High | CLOSED | PR #15; CI PASS; production `dpl_7x3L3kGvNn2fntDrNnzz2sFKotps` READY; `/api/scope-isolation`, `/bw-dashboard.html`, `/scope-templates` all HTTP 200 | Direct dashboard loads the same centralized strict Device → SubDevice → Scope engine; production verified |

## Canonical Defect Schema
Master Hub permanently uses **DEF-###** under DEC-006.

```text
DEFECT ID:
TITLE:
SEVERITY: Critical / High / Medium / Low
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
STATUS: OPEN / FIXING / READY FOR RETEST / VERIFIED / CLOSED
```

Rules:
- Never erase defect history.
- Never rename existing DEF-### identifiers solely to match a generic template.
- Unknown historical fields remain UNKNOWN rather than invented.
