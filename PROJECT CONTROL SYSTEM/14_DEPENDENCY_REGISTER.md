# 14 — Dependency Register

| Dependency ID | Dependency | Type | Used By | Status | Risk |
|---|---|---|---|---|---|
| DEP-001 | GitHub repository ssalem9580/master-hub | Source control | Entire project | ACTIVE | Repository integrity/access |
| DEP-002 | Vercel project master-hub | Deployment | Master Hub | ACTIVE | Misconfiguration/alias drift |
| DEP-003 | Next.js / React / TypeScript dependencies | Runtime/build | master-hub-app | ACTIVE | Version/build compatibility |
| DEP-004 | Browser localStorage | Client storage | Hub state / some local tools | ACTIVE | Device/browser-local only |
| DEP-005 | External standalone app URLs | Integration | App registry | ACTIVE, per-link verification needed | URL/deployment drift |
| DEP-006 | Imported parts/source documents | Data | Repair Packages / diagnostics | ACTIVE when provided | Data completeness/accuracy |


## Canonical Dependency Schema
New or normalized dependencies should document:

```text
DEPENDENCY:
PURPOSE:
CRITICALITY:
CURRENT VERSION:
OWNER / PROVIDER:
WHAT BREAKS IF UNAVAILABLE:
FAILURE MODE:
USER EXPERIENCE:
FALLBACK:
RECOVERY:
ALTERNATIVE:
LAST REVIEWED:
```

Unknown fields remain UNKNOWN / NEEDS CONFIRMATION rather than inferred.
