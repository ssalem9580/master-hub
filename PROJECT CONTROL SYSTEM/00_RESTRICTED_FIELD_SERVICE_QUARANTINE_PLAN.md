# 00 — Restricted Field-Service Quarantine Plan

Status: PREPARATION ARCHITECTURE FINALIZED / PRIVATE PRESERVATION APPROVED / PHYSICAL CONTAINMENT OPEN
Date: 2026-10-02 UTC / 2026-10-01 CDT
Authority: DEC-016 / Project Owner explicit `finalize and action next task`

## Objective
Bring MasterHub into compliance with DEC-016 while preserving the approved public/no-login MasterHub shell under DEC-015.

## Restricted Scope
Treat all field-service operational material as RESTRICTED by default, including:
- diagnostics
- repair procedures and repair packages
- parts and part-number operational data
- equipment-specific troubleshooting
- harness/terminal/component references
- field-service decision trees
- source documents and derived operational guidance
- billed-work operational data, scope wording and quoting workflows where applicable

## Current Conflict
Restricted material is currently present in:
- public GitHub source/history
- public MasterHub field-service routes/assets
- related public Vercel projects

## Containment Principles
1. Preserve a recoverable private copy before removal.
2. Do not rebuild from memory if source exists.
3. Do not destroy Git history until a verified private backup exists.
4. Keep public MasterHub available with no login.
5. Remove restricted operational content from the public surface only after preservation is verified.
6. Do not claim containment complete while restricted material remains recoverable from public Git history.
7. Do not reclassify material as public without explicit Project Owner approval.

## Approved Architecture

### Public MasterHub
Keep:
- public/no-login shell
- non-sensitive navigation
- Project Control
- non-sensitive public utilities
- generic Field Service placeholder/status only after containment is separately approved and executed

Do not keep publicly after preservation and separate containment approval:
- diagnostic procedures
- repair steps
- restricted parts/operational datasets
- field decision trees
- equipment-specific technical content
- restricted billed-work, scope and quoting operational content

### Restricted Field-Service Source
Approved direction:
- separate PRIVATE GitHub repository/store
- private canonical source for restricted field-service material
- explicit backup/recovery record
- separate deployment only if a future access-control method is separately approved

Current status: owner approval to establish/migrate is GRANTED. The private destination does not yet exist and therefore cannot yet be verified private.

## Controlled Sequence

### Stage 1 — Inventory — COMPLETE FOR CURRENT REPOSITORY SURFACE / ONGOING FOR EXTERNAL OWNERSHIP GAPS
- current restricted public repository paths identified
- current Vercel project map recorded
- exact current-main Git blob IDs and byte counts recorded in `32_SECURITY_PRESERVATION_SOURCE_HASHES.md`
- historical/external source ownership remains subject to evidence-based discovery

### Stage 2 — Private Preservation — APPROVED / BLOCKED ON DESTINATION CREATION
- create the approved private canonical destination through an authorized GitHub/admin path
- verify destination is private before copying restricted content
- copy restricted source from existing evidence rather than memory
- verify preservation using the Preservation Manifest and source-hash record
- create recovery checkpoint

The connected GitHub control surface currently exposes only `ssalem9580/master-hub` and does not provide a repository-creation action, so destination creation itself cannot be completed through this control path.

### Stage 3 — Public Surface Containment — NOT AUTHORIZED
- remove restricted content from current public MasterHub routes/assets
- replace with non-sensitive placeholder or remove restricted registry entries
- verify public routes no longer expose restricted material
- keep MasterHub itself public/no-login

### Stage 4 — Public Repository HEAD Cleanup — NOT AUTHORIZED
- remove restricted source files from current public main
- update imports/routes/tests
- verify build, lint and tests
- deploy clean public version

### Stage 5 — Historical Exposure Review — NOT AUTHORIZED
- identify restricted material still accessible through public Git history
- decide whether history rewrite is necessary
- if separately approved, perform controlled history rewrite only after private backup verification
- rotate actual secrets if any are discovered

### Stage 6 — Vercel Cleanup — NOT AUTHORIZED
- disable or retire public deployments that continue to expose restricted content
- do not delete source/deployments until private recovery is verified
- retain only documented canonical deployments

## Owner-Approval Gates
Current gate state:
- establish/migrate to a private canonical repository/store: APPROVED
- change public repository visibility: NOT AUTHORIZED
- rewrite public Git history: NOT AUTHORIZED
- delete/retire/disconnect Vercel projects: NOT AUTHORIZED
- deploy restricted material behind a new access-control system: NOT AUTHORIZED
- remove restricted public routes/source: NOT AUTHORIZED until private preservation is verified and a separate containment approval is given

## Preparation Finalization
`SECURITY-CONTAINMENT-PREP-1.0` is owner accepted/finalized as a preparation/control release. Finalizing preparation does not finalize physical containment and does not close DEF-009.

## Preservation Control
Canonical checklist: `PROJECT CONTROL SYSTEM/00_RESTRICTED_FIELD_SERVICE_PRESERVATION_MANIFEST.md`.
Exact repository source metadata: `PROJECT CONTROL SYSTEM/32_SECURITY_PRESERVATION_SOURCE_HASHES.md`.

## Next Action
Create the approved private canonical destination through an authorized admin path, verify privacy, then preserve and verify the restricted source/data. Only after that verification may public-surface containment be presented for approval.