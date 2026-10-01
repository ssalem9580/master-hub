# 00 — Restricted Field-Service Exposure Inventory

Status: VERIFIED INVENTORY — CONTAINMENT PENDING
Date: 2026-09-30
Authority: DEC-016
Classification: RESTRICTED

## Purpose
Identify current public source, public routes, registry links, and deployment surfaces that fall within the restricted field-service boundary before any removal, migration, history rewrite, or deployment retirement.

## Public MasterHub Source / Routes

### Confirmed restricted-content source
1. `master-hub-app/public/field-diagnostic-hub.html`
   - large static diagnostic asset
   - contains field diagnostic/troubleshooting operational material
   - publicly reachable through MasterHub

2. `master-hub-app/src/app/field-diagnostic-hub/page.tsx`
   - public route wrapper for restricted diagnostic asset

3. `master-hub-app/src/app/field-resource-hub/page.tsx`
   - public field-service navigation/resource surface
   - links to diagnostic and repair-package functions

4. `master-hub-app/src/app/repair-packages/page.tsx`
   - repair package / parts operational logic and data handling
   - classified RESTRICTED under DEC-016

### Public registry/navigation exposure
5. `master-hub-app/src/components/master-hub.tsx`
   - exposes Field Diagnostic Hub navigation
   - exposes NTE Exceed/Quote Generator
   - exposes Billed Work Tracker

The registry/navigation file itself is not automatically restricted in full, but entries that expose restricted field-service tools must be handled as part of containment.

## Public MasterHub Routes in Restricted Scope
- `/field-resource-hub`
- `/field-diagnostic-hub`
- `/field-diagnostic-hub.html`
- `/repair-packages`

## Related Public Vercel Surfaces

### MasterHub
- project: master-hub
- canonical alias: master-hub-sigma.vercel.app
- restricted field-service routes currently served publicly

### Field Diagnostic
- project: field-diagnostic-hub
- current observed project state includes failed/duplicate deployment activity
- ownership/role remains ambiguous

- project: field-diagnostic-hub-live
- public production deployment exists
- classified within restricted field-service containment scope

### NTE / Job Quote
- project: job-quote-calculator
- public production deployment exists

- project: job-quote-calculator-live
- duplicate public production deployment exists

These quoting tools are treated as restricted field-service operational tools under DEC-016 unless explicitly reclassified.

### Billed Work Tracker
- project: billed-work-tracker-live
- public production deployment exists
- treated as restricted field-service operational material under DEC-016 unless explicitly reclassified

## Registry Links
Current MasterHub registry contains:
- Field Diagnostic Hub → internal field-resource route
- NTE Exceed/Quote Generator → public Vercel URL
- Billed Work Tracker → public Vercel URL

## Classification Result
All items above are RESTRICTED by default until the Project Owner explicitly reclassifies a specific item.

## Current Containment State
- Classification: FINALIZED
- New-publication freeze: ACTIVE
- Existing public exposure: CONFIRMED
- Private canonical destination: NOT YET ESTABLISHED
- Verified private preservation copy: NOT COMPLETE
- Public route removal: NOT COMPLETE
- Public repository HEAD cleanup: NOT COMPLETE
- Public Git-history remediation: NOT STARTED
- Vercel restricted-deployment retirement: NOT STARTED

## Non-Destructive Rule
Do not delete, rewrite, retire, or remove a restricted source/deployment until a verified recoverable private copy exists.

## Required Next Gate
Establish a private canonical destination for restricted field-service material, verify preservation completeness, then execute public-surface containment.
