# 12 — Risk Register

| Risk ID | Risk | Likelihood | Impact | Mitigation | Status |
|---|---|---:|---:|---|---|
| RISK-001 | Cross-linked/duplicate Vercel projects cause deployment confusion | Medium | High | Define canonical project/alias and disconnect unintended links only with owner approval | OPEN |
| RISK-002 | AI silently expands scope or rewrites history | Medium | High | Constitution + decision log + classifications | MITIGATED |
| RISK-003 | Private data enters public repo | Low-Medium | Critical | Public-source privacy rule, source scans, secure/local storage | OPEN |
| RISK-004 | "Live" labels become stale | Medium | Medium | Verification tests tied to release checklist | OPEN |
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
