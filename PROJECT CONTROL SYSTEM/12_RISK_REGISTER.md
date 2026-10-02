# 12 — Risk Register

| Risk ID | Risk | Likelihood | Impact | Mitigation | Status |
|---|---|---:|---:|---|---|
| RISK-001 | Cross-linked/duplicate Vercel projects cause deployment confusion | High | High | Canonical project/alias established; fan-out and source-ownership audits finalized; disconnect/retire only with approval | OPEN / MITIGATED BY AUDIT |
| RISK-002 | AI silently expands scope or rewrites history | Medium | High | Constitution + decision log + classifications + evidence-first control records | MITIGATED |
| RISK-003 | Private/secret data enters public repo | Low-Medium | Critical | Public-source privacy rule, normalized README warnings, secure/local storage, new secret-pattern CI guard | MITIGATED / MONITOR — guard reduces new-secret risk; restricted operational exposure is separately RISK-007 |
| RISK-004 | "Live" labels become stale | Low | Medium | Runtime `/api/hub-health` checks now drive workspace Live/Offline status and directory/live counts | MITIGATED / PRODUCTION VERIFIED — canonical health endpoint returned HTTP 200; Recovery Value was correctly reported Offline with HTTP 404 while the other checked workspaces returned Live/200 |
| RISK-005 | Legacy decisions remain unrecorded | Medium | Medium | Controlled reconstruction from Git/source/user evidence; unknowns remain explicit | OPEN / REDUCED |
| RISK-006 | Reorganization removes useful behavior | Medium | High | Preserve workflows/storage, regression tests before acceptance, incremental component migration only | MITIGATED / MONITOR |
| RISK-007 | Public repository/deployment exposes field-service material classified RESTRICTED | High / CONFIRMED | Critical | Owner-only private preservation store; current-source lineage refresh; exact in-project Supabase recovery snapshots; independent backup before approved containment | OPEN — CRITICAL |
| RISK-008 | Build-only CI can mask broken/stale test coverage | Low | High | Canonical CI requires lint/test/build | MITIGATED |
| RISK-009 | Static governance UI can diverge from canonical source-of-truth documents | Low | Medium | Project Control dynamically discovers canonical records and separately reports repository head, served revision and last verified production evidence | CLOSED / PROJECT-CONTROL-LIVE-TRUTH-1.0 |
| RISK-010 | Public unauthenticated access may conflict with intended private-use boundary | High | High | DEC-015 explicitly defines public/no-login access as intended; restricted/sensitive-data controls are separate | ACCEPTED / RESOLVED |
| RISK-011 | Outdated Next.js patch level leaves known security fixes unapplied | Low | High | Next.js 16.3.8 released and verified | MITIGATED |
| RISK-012 | Standalone active tools lack established canonical source/backup ownership | High | Critical | Recover/version source before destructive cleanup; integration register now records known ownership/evidence | OPEN / PARTIAL — Recovery Value + Field Diagnostic established; NTE Quote, standalone Billed Work and Sam Hub original source still unknown |
| RISK-013 | Recovery Value recovered source is not canonicalized and root configuration is drifted | High | High | Recovered source/project validated; nested artifact verified; require private canonical preservation and controlled root restoration before promotion | OPEN |
| RISK-014 | Canonical main/baseline branches are mutable because GitHub protection is not enabled | Medium-High | Critical | Preserve exact release SHAs and CI; add ruleset when owner workflow and admin capability permit | OPEN / BLOCKED — current ruleset inventory is empty |
| RISK-015 | Previously public Git history may retain restricted field-service material after HEAD cleanup | High | Critical | Inventory history, preserve private recovery, then separately approve a history-remediation strategy | OPEN — CRITICAL |

## Canonical Risk Schema

```text
RISK ID:
TITLE:
CATEGORY: Product / Technical / Data / AI / Security / Legal / Business / Vendor / Operational
DESCRIPTION:
PROBABILITY: Low / Medium / High
IMPACT: Low / Medium / High / Critical
TRIGGER:
MITIGATION:
CONTINGENCY:
OWNER:
STATUS: OPEN / MITIGATED / ACCEPTED / CLOSED
```

Rules:
- No unmitigated Critical risk may be silently treated as release-complete.
- Historical risks remain listed for traceability even after mitigation/closure.
