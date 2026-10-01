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
