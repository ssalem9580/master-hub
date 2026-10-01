# 12 — Risk Register

| Risk ID | Risk | Likelihood | Impact | Mitigation | Status |
|---|---|---:|---:|---|---|
| RISK-001 | Cross-linked/duplicate Vercel projects cause deployment confusion | High | High | Nine projects inventoried; define canonical project/alias and disconnect unintended links only with owner approval | OPEN |
| RISK-002 | AI silently expands scope or rewrites history | Medium | High | Constitution + decision log + classifications | MITIGATED |
| RISK-003 | Private data enters public repo | Low-Medium | Critical | Public-source privacy rule, source scans, secure/local storage | OPEN |
| RISK-004 | "Live" labels become stale | High | Medium | Runtime verification tied to registry/release checks; Recovery Value Calculator is a confirmed example | OPEN |
| RISK-005 | Legacy decisions remain unrecorded | High | Medium | Controlled reconstruction from git/source/user evidence | OPEN |
| RISK-006 | Reorganization removes useful behavior | Medium | High | Preserve functionality; require test evidence before acceptance | OPEN |


## Canonical Risk Schema
New or normalized risks use:

```text
RISK ID:
TITLE:

CATEGORY:
Product / Technical / Data / AI / Security / Legal / Business / Vendor / Operational

DESCRIPTION:

PROBABILITY:
Low / Medium / High

IMPACT:
Low / Medium / High / Critical

TRIGGER:
MITIGATION:
CONTINGENCY:
OWNER:

STATUS:
OPEN / MITIGATED / ACCEPTED / CLOSED
```

Rule:
No unmitigated Critical risk may remain at final release.
Existing risk records remain authoritative historical entries and may be expanded when revisited.

| RISK-007 | Public repository/deployment exposes field-service material now classified RESTRICTED under DEC-016 | High / CONFIRMED | Critical | Quarantine restricted content into a private canonical store; remove public serving/source exposure with recovery safeguards | OPEN — CRITICAL |
| RISK-008 | Build-only CI can mask broken/stale test coverage | High | High | Canonical CI requires lint/test/build; post-merge run 36811990043 passed | MITIGATED |
| RISK-009 | Static governance UI can diverge from canonical source-of-truth documents | High | Medium | Generate/read controlled canonical status rather than duplicating state text | OPEN |

| RISK-010 | Public unauthenticated access may conflict with intended private-use boundary | High | High | DEC-015 explicitly defines public/no-login access as intended; preserve local/private sensitive-data rules | ACCEPTED / RESOLVED |
| RISK-011 | Outdated Next.js patch level leaves known security fixes unapplied | High | High | Next.js 16.3.8 released to production and post-release verified | MITIGATED |

| RISK-012 | Standalone active tools lack established canonical source/backup ownership | High | Critical | Recover and version source before destructive cleanup; document canonical repo/deployment/backup per tool | OPEN |
| RISK-013 | Recovery Value Calculator recovered source is not canonicalized and current Vercel linkage/root config is drifted | High | High | Validate recovered branch source, canonicalize it, correct Root Directory, and verify before promotion | OPEN |

| RISK-014 | Canonical main/baseline branches are mutable because GitHub protection is not enabled | Medium-High | Critical | Add ruleset/branch protection and preserve exact release SHAs/tags | OPEN |

| RISK-015 | Previously public Git history may retain restricted field-service material even after removal from current HEAD | High | Critical | Inventory affected history; preserve private backup; choose controlled history-remediation strategy before claiming containment complete | OPEN — CRITICAL |
