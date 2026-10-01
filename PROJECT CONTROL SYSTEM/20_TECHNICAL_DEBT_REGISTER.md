# 20 — Technical Debt Register

| Debt ID | Item | Impact | Priority | Status |
|---|---|---|---|---|
| TD-001 | Historical requirements/decisions are not fully reconstructed into canonical registers | Traceability gaps | High | OPEN |
| TD-002 | Multiple Vercel projects tied to related codebases | Deployment confusion | High | OPEN |
| TD-003 | Mixed inline-page styling and component architecture across older routes | Maintenance inconsistency | Medium | OPEN |
| TD-004 | App-status verification is not automatically enforced before registry labels change | Stale status risk | Medium | OPEN |
| TD-005 | Project-wide database/integration inventory is incomplete | Recovery/security gaps | Medium | OPEN |


## Canonical Technical Debt Schema
New or normalized debt records use:

```text
DEBT ID:
TITLE:
WHY IT EXISTS:
TEMPORARY IMPLEMENTATION:
DESIRED IMPLEMENTATION:
RISK:
IMPACT:
TRIGGER FOR REPAIR:
STATUS:
OPEN / PLANNED / RESOLVED / ACCEPTED
```

Temporary architecture must not silently become permanent architecture.

| TD-006 | CI build does not run existing tests or lint | False confidence in green build status | High | VERIFIED FIX ON HARDENING BRANCH — MERGE PENDING |
| TD-007 | UI test suite and README describe older MasterHub behavior | Verification/documentation drift | High | PARTIAL — TEST SUITE FIXED; README NORMALIZATION STILL OPEN |
| TD-008 | Project Control Center duplicates canonical state as static text | Governance UI drift | High | OPEN |
| TD-009 | Multiple Git-linked Vercel projects trigger build/deployment fan-out | Rate-limit waste and confusing status checks | High | OPEN |
| TD-010 | Current Next.js dependency is behind security-patched Active LTS | Security exposure | Critical | VERIFIED PATCH ON HARDENING BRANCH — MERGE/RELEASE PENDING |

| TD-011 | Standalone app source ownership is undocumented/incomplete | Recovery and maintenance risk | Critical | OPEN |
| TD-012 | Recovery Value recovered source remains stranded on a non-main branch and Vercel root mapping drifted | Broken deployment / source drift | Critical | OPEN |

| TD-013 | Governance baseline is frozen by convention but not GitHub enforcement | Baseline can be mutated accidentally | Critical | OPEN |
