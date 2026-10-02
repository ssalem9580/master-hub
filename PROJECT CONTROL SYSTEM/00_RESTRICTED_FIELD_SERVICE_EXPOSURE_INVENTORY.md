# 00 — Restricted Field-Service Exposure Inventory

Status: VERIFIED INVENTORY — PREPARATION FINALIZED / PRIVATE DESTINATION APPROVED / CONTAINMENT PENDING
Date: 2026-10-02 UTC / 2026-10-01 CDT
Authority: DEC-016 / Project Owner explicit `finalize and action next task`
Classification: RESTRICTED

## Purpose
Identify current public source, public routes, registry links, and deployment surfaces that fall within the restricted field-service boundary before any removal, migration, history rewrite, or deployment retirement.

## Public MasterHub Source / Routes

### Confirmed restricted-content source
1. `master-hub-app/public/field-diagnostic-hub.html`
   - field diagnostic/troubleshooting operational material
   - publicly reachable through MasterHub

2. `master-hub-app/src/app/field-diagnostic-hub/page.tsx`
   - public route wrapper for restricted diagnostic asset

3. `master-hub-app/src/app/field-resource-hub/page.tsx`
   - public field-service navigation/resource surface
   - links to diagnostic and repair-package functions

4. `master-hub-app/src/app/repair-packages/page.tsx`
   - repair package / parts operational logic and data handling

5. `master-hub-app/public/data/parts-master-1.tsv`
6. `master-hub-app/public/data/parts-master-2.tsv`
7. `master-hub-app/public/data/parts-master-3.tsv`
8. `master-hub-app/public/data/parts-master-4.tsv`
   - public operational parts datasets used by Repair Packages

9. `master-hub-app/public/bw-dashboard.html`
10. `master-hub-app/src/app/scope-templates/page.tsx`
11. `master-hub-app/src/lib/scope-isolation-script.ts`
   - billed-work / Scope Templates operational source and workflow logic within the restricted field-service boundary

### Public registry/navigation exposure
12. `master-hub-app/src/components/master-hub.tsx`
   - exposes Field Diagnostic Hub navigation
   - exposes NTE Exceed/Quote Generator
   - exposes Billed Work Tracker
   - exposes other field-service workspaces

The registry/navigation file itself is not automatically restricted in full, but entries that expose restricted field-service tools must be handled as part of containment.

Exact current-main Git blob IDs and byte counts for the repository-backed set above are recorded in `PROJECT CONTROL SYSTEM/32_SECURITY_PRESERVATION_SOURCE_HASHES.md`.

## Public MasterHub Routes in Restricted Scope
- `/field-resource-hub`
- `/field-diagnostic-hub`
- `/field-diagnostic-hub.html`
- `/repair-packages`
- `/scope-templates`
- `/bw-dashboard.html`

## Related Vercel Project Map
Fresh project inventory from the current Vercel team:

### MasterHub
- `master-hub` — `prj_TaNYVBn6sk81Q82yIJYLphj9YyZV`
- `master-hub-live` — `prj_faJO9SG3vdax8edtpXaPFepLDhx8`

### Field Diagnostic
- `field-diagnostic-hub` — `prj_2zVf2Yk9BiaXvDb2W3OcyewIsfhx`
- `field-diagnostic-hub-live` — `prj_mtmFlgCFytYKU4kYwFnWAbr2FAPh`

### NTE / Job Quote
- `job-quote-calculator` — `prj_U39kxPVimHowAukErUvrMFc13RNp`
- `job-quote-calculator-live` — `prj_7q0ALfMnhpp6xGmDzLHWAgmmg5wD`

### Billed Work Tracker
- `billed-work-tracker-live` — `prj_6mzZBKJOaYh2MJZ3QMDVOfHCFf42`

### Other observed related projects
- `recovery-value-calculator` — `prj_942h8vKuDMyde0K6iu5GF34hfByM`
- `sam-hub` — `prj_S4OASJcwfx6ohACcf4pvAQFnqvxR`

The presence of a project in this map does not by itself authorize retirement or prove that every project contains restricted content. It records deployment/source surfaces that must be resolved before cleanup.

## Registry Links
Current MasterHub registry includes restricted operational destinations such as:
- Field Diagnostic Hub
- NTE Exceed/Quote Generator
- Billed Work Tracker
- Repair Packages / Field Resource workflows
- Scope Templates / billed-work workflows

## Classification Result
Field-service operational material above remains RESTRICTED by default until the Project Owner explicitly reclassifies a specific item.

## Current Containment State
- Classification: FINALIZED
- New-publication freeze: ACTIVE
- Preparation phase: FINALIZED / OWNER ACCEPTED as `SECURITY-CONTAINMENT-PREP-1.0`
- Existing public exposure: CONFIRMED
- Source/deployment inventory: REFRESHED
- Preservation manifest: CREATED / ACTIVE
- Exact repository source metadata: RECORDED
- Private canonical destination establishment/migration: APPROVED
- Private canonical destination: NOT YET CREATED / NOT YET VERIFIED PRIVATE
- Verified private preservation copy: NOT COMPLETE
- Recovery checkpoint for migrated restricted source: NOT COMPLETE
- Public route removal: NOT AUTHORIZED / NOT COMPLETE
- Public repository HEAD cleanup: NOT AUTHORIZED / NOT COMPLETE
- Public Git-history remediation: NOT STARTED
- Vercel restricted-deployment retirement: NOT AUTHORIZED / NOT STARTED

## Execution Constraint
The connected GitHub control surface currently exposes only the public `ssalem9580/master-hub` repository and does not provide a repository-creation action. The approved private destination must therefore be created through an authorized GitHub/admin path before preservation can proceed.

## Non-Destructive Rule
Do not delete, rewrite, retire, disconnect, or remove restricted source/deployments until a verified recoverable private copy exists and the applicable owner approval gate is satisfied.

## Required Next Gate
Create the approved private canonical restricted field-service destination, verify it is private, then verify preservation completeness and recovery before requesting any destructive public-surface containment.