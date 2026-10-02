# 20 — Technical Debt Register

| Debt ID | Item | Impact | Priority | Status |
|---|---|---|---|---|
| TD-001 | Historical requirements/decisions are not fully reconstructed into canonical registers | Traceability gaps | High | OPEN / PARTIAL — current operational truth reconstructed; legacy evidence remains incremental |
| TD-002 | Multiple Vercel projects tied to related codebases | Deployment confusion | High | OPEN — canonical ownership mapped; retirement/disconnect remains gated |
| TD-003 | Mixed inline-page styling and component architecture across older routes | Maintenance inconsistency | Medium | OPEN — migrate incrementally when routes are touched; no rewrite for appearance alone |
| TD-004 | App-status verification is not automatically enforced before registry labels change | Stale status risk | Medium | RESOLVED — runtime `/api/hub-health` drives dashboard/directory Live/Offline status; CI passed and production `dpl_8j889ueH7LAqQqU5TFQEef68uQLR` returned health HTTP 200 with Recovery Value correctly Offline at its broken 404 root |
| TD-005 | Project-wide database/integration inventory is incomplete | Recovery/security gaps | Medium | RESOLVED — baseline inventory established in `38_INTEGRATION_AND_DATA_SOURCE_REGISTER.md`; future discoveries are maintenance updates |
| TD-006 | CI build did not run existing tests or lint | False confidence in green build status | High | RESOLVED — canonical lint/test/build CI |
| TD-007 | UI test suite and README described older MasterHub behavior | Verification/documentation drift | High | RESOLVED — test suite normalized; root and app README normalized 2026-10-02 |
| TD-008 | Project Control Center duplicated canonical state as static text | Governance UI drift | High | RESOLVED — `PROJECT-CONTROL-LIVE-TRUTH-1.0` source-binds/discovers records and distinguishes source/served/verified states |
| TD-009 | Multiple Git-linked Vercel projects trigger build/deployment fan-out | Rate-limit waste and confusing status checks | High | OPEN — audit/ownership complete; integration cleanup requires separate configuration approval/capability |
| TD-010 | Next.js dependency was behind security-patched Active LTS | Security exposure | Critical | RESOLVED — `SECURITY-QUALITY-1.0` |
| TD-011 | Standalone app source ownership is undocumented/incomplete | Recovery and maintenance risk | Critical | OPEN / PARTIAL — Recovery Value + Field Diagnostic established; NTE Quote, standalone Billed Work and Sam Hub source repositories remain unknown |
| TD-012 | Recovery Value recovered source remains stranded and Vercel root mapping drifted | Broken deployment / source drift | Critical | OPEN — recovered source/project validated; root restore/canonical private preservation pending |
| TD-013 | Governance baseline is frozen by convention but not GitHub enforcement | Baseline can be mutated accidentally | Critical | OPEN / BLOCKED — GitHub rulesets query is empty and current connector lacks admin ruleset-write capability |

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
STATUS: OPEN / PLANNED / RESOLVED / ACCEPTED
```

Temporary architecture must not silently become permanent architecture. Resolved debt remains listed for traceability.
