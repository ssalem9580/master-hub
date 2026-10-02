# Master Hub

Master Hub is the canonical control application and project record for the existing `ssalem9580/master-hub` system.

## Canonical production
- Repository: `ssalem9580/master-hub`
- Branch: `main`
- Application root: `master-hub-app`
- Production: `https://master-hub-sigma.vercel.app`
- Project operations: `/project-control`

## Local verification
From `master-hub-app`:

```bash
npm ci
npm run lint
npm test -- --run
npm run build
```

Canonical CI is `.github/workflows/master-hub-ci.yml` and must pass lint, tests, and build before a change is treated as verified source.

## Project control
`PROJECT CONTROL SYSTEM/` is the authoritative control layer for current state, decisions, requirements, defects, risks, tests, releases, recovery, and the operations queue. The live `/project-control` page is source-bound to those records and separately reports repository head, served revision, and last verified production evidence.

## Data and integrations
See `PROJECT CONTROL SYSTEM/38_INTEGRATION_AND_DATA_SOURCE_REGISTER.md` for the maintained integration inventory. Browser-local state is still used by several workspaces; Billed Work / Scope Templates also use owner-scoped Supabase state.

## Restricted data boundary
Field-service diagnostics, repair procedures, parts data, billed-work operational data, scope wording, quotes, customer-operational data, and proprietary workflows are RESTRICTED by default. Existing public exposure is a known critical remediation item and is not permission to add more restricted material to public source.

Do not add private credentials, service-role keys, customer payloads, personal finance values, or new restricted operational datasets to this public repository. `.github/workflows/public-source-safety.yml` provides a baseline secret-pattern guard; it does not replace the restricted-data containment program.

## Recovery and rollback
- Current recovery policy: `PROJECT CONTROL SYSTEM/18_ROLLBACK_AND_RECOVERY.md`
- Release records: `RELEASES/`
- Recovery checkpoints: `BACKUPS/`
- Restricted preservation evidence: Project Control records 32, 35, and 39

Destructive cleanup, Git-history rewriting, repository visibility changes, and Vercel project retirement/disconnection remain explicit approval-gated actions.
