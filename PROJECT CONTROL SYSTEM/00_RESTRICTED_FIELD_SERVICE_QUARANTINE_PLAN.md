# 00 — Restricted Field-Service Quarantine Plan

Status: PREPARATION ACTIVE — PRIVATE PRESERVATION GATE
Date: 2026-10-02 UTC / 2026-10-01 CDT
Authority: DEC-016 / Project Owner instruction to move into controlled security-containment preparation

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

## Recommended Architecture

### Public MasterHub
Keep:
- public/no-login shell
- non-sensitive navigation
- Project Control
- non-sensitive public utilities
- generic Field Service placeholder/status only after containment is approved and executed

Do not keep publicly after preservation/containment approval:
- diagnostic procedures
- repair steps
- restricted parts/operational datasets
- field decision trees
- equipment-specific technical content
- restricted billed-work, scope and quoting operational content

### Restricted Field-Service Source
Recommended:
- separate PRIVATE GitHub repository/store
- private canonical source for restricted field-service material
- explicit backup/recovery record
- separate deployment only if a future access-control method is separately approved

Current status: private canonical destination is NOT YET CREATED OR APPROVED for ownership migration.

## Controlled Sequence

### Stage 1 — Inventory — ACTIVE / REFRESHED
- identify every restricted file/path in current main
- identify restricted content in historical branches
- identify Vercel projects serving restricted content
- record exact source ownership
- maintain `00_RESTRICTED_FIELD_SERVICE_EXPOSURE_INVENTORY.md`

### Stage 2 — Private Preservation — BLOCKED ON OWNER GATE
- obtain explicit approval to establish/migrate to the private canonical destination
- verify destination is private before copying restricted content
- copy restricted source from existing evidence rather than memory
- verify preservation using the Preservation Manifest
- create recovery checkpoint

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
Explicit approval is required before:
- creating/migrating to a private canonical repository/store if it changes source ownership
- changing repository visibility
- rewriting public Git history
- deleting/retiring/disconnecting Vercel projects
- deploying restricted material behind any new access-control system

## Immediate Safe Actions — ACTIVE
Already authorized and now in progress:
- classify material as RESTRICTED
- stop treating prior public availability as approval
- block intentional new publication of restricted field-service material
- maintain/refine the exposure inventory
- maintain the preservation manifest
- map source/deployment ownership
- prepare the private-preservation migration sequence

## Preservation Control
Canonical preparation checklist: `PROJECT CONTROL SYSTEM/00_RESTRICTED_FIELD_SERVICE_PRESERVATION_MANIFEST.md`.

## Next Decision
Approve establishment/migration of a separate private canonical destination for restricted field-service source. That approval permits preservation work only; destructive public cleanup remains gated until preservation is verified.