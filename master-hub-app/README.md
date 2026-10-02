# Master Hub application

This directory contains the Next.js application for the canonical Master Hub repository.

## Verify locally

```bash
npm ci
npm run lint
npm test -- --run
npm run build
```

## Production
- Canonical Vercel project: `master-hub`
- Canonical alias: `https://master-hub-sigma.vercel.app`
- Project operations: `/project-control`

## Source ownership
Project state and release truth are maintained in the repository-root `PROJECT CONTROL SYSTEM/`. Do not duplicate authoritative project status in this README or UI code.

## Security boundary
The repository is public. Do not add credentials, service-role keys, customer payloads, private finance values, or new restricted field-service/parts/scope/quote content. Existing restricted public material is under active containment and must not be expanded.

See the root `README.md`, `PROJECT CONTROL SYSTEM/16_SECURITY_AND_PRIVACY.md`, `PROJECT CONTROL SYSTEM/18_ROLLBACK_AND_RECOVERY.md`, and `PROJECT CONTROL SYSTEM/38_INTEGRATION_AND_DATA_SOURCE_REGISTER.md`.
