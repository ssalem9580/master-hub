# 00 — Restricted Field-Service Quarantine Plan

Status: PROPOSED — SECURITY CONTAINMENT
Date: 2026-09-30
Authority: DEC-016

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

## Current Conflict
Restricted material is currently present in:
- public GitHub source/history
- public MasterHub field-service routes/assets
- potentially related public Vercel projects

## Containment Principles
1. Preserve a recoverable private copy before removal.
2. Do not rebuild from memory if source exists.
3. Do not destroy Git history until a verified private backup exists.
4. Keep public MasterHub available with no login.
5. Remove restricted operational content from the public surface.
6. Do not claim containment complete while restricted material remains recoverable from public Git history.
7. Do not reclassify material as public without explicit Project Owner approval.

## Recommended Architecture

### Public MasterHub
Keep:
- public/no-login shell
- non-sensitive navigation
- Project Control
- non-sensitive public utilities
- generic Field Service placeholder/status only

Do not keep publicly:
- diagnostic procedures
- repair steps
- restricted parts/operational datasets
- field decision trees
- equipment-specific technical content

### Restricted Field-Service Source
Recommended:
- separate PRIVATE GitHub repository
- private canonical source for restricted field-service material
- explicit backup/recovery record
- separate deployment only if future access-control method is approved

## Controlled Sequence

### Stage 1 — Inventory
- identify every restricted file/path in current main
- identify restricted content in historical branches
- identify Vercel projects serving restricted content
- record exact source ownership

### Stage 2 — Private Preservation
- create private canonical repository/store
- copy restricted source with history/evidence where practical
- verify private copy byte/content completeness
- create recovery checkpoint

### Stage 3 — Public Surface Containment
- remove restricted content from current public MasterHub routes/assets
- replace with non-sensitive placeholder or remove registry entries
- verify public routes no longer expose restricted material
- keep MasterHub itself public/no-login

### Stage 4 — Public Repository HEAD Cleanup
- remove restricted source files from current public main
- update imports/routes/tests
- verify build, lint, tests
- deploy clean public version

### Stage 5 — Historical Exposure Review
- identify restricted material still accessible through public Git history
- decide whether history rewrite is necessary
- if approved, perform controlled history rewrite only after private backup verification
- rotate any secrets if discovered

### Stage 6 — Vercel Cleanup
- disable or retire public deployments that continue to expose restricted content
- do not delete source/deployments until private recovery is verified
- retain only documented canonical deployments

## Owner-Approval Gates
Explicit approval is required before:
- creating/migrating to a private canonical repository if it changes source ownership
- changing repository visibility
- rewriting public Git history
- deleting/retiring Vercel projects
- deploying restricted material behind any new access-control system

## Immediate Safe Actions
Already authorized:
- classify material as RESTRICTED
- stop treating prior public availability as approval
- block new publication of restricted field-service material
- prepare inventory and migration plan

## Recommended Next Decision
Approve this containment architecture:
1. keep MasterHub public/no-login,
2. move restricted field-service content to a separate private canonical repo,
3. remove restricted field-service content from public MasterHub,
4. preserve a verified private backup before any history cleanup,
5. review public Git history separately before rewrite/deletion.
