# 36 — Project Control Live Truth Sync

DATE: 2026-10-02
STATUS: IN DEVELOPMENT / SOURCE IMPLEMENTED / PRODUCTION VERIFICATION PENDING
VERSION: PROJECT-CONTROL-LIVE-TRUTH-RC1
AUTHORITY: Project Owner explicit `yes` after review of Project Control Center staleness
RELATED: QUEUE-006 / CHANGE-022

## Purpose
Prevent `/project-control` from presenting repository source, the build currently serving the page, and the last verified production record as though they are always identical.

## Problem confirmed
The live Project Control Center was healthy (HTTP 200) but its build-time snapshot lagged newer canonical records. The page also displayed a historical deployment ID next to the Vercel-served commit revision, which could be interpreted as one current deployment identity even when those values came from different evidence points.

The page also hard-coded only records 01 through 22 even though later canonical Project Control evidence/checkpoint records exist.

## Source implementation
The Project Control Center now:
- discovers all Markdown records in `PROJECT CONTROL SYSTEM` at build time instead of hard-coding only records 01–22;
- groups core records, later evidence/checkpoints, and 00-series supporting evidence/plans separately;
- checks public GitHub `main` at runtime in the browser;
- distinguishes current repository head from the revision serving the page;
- labels `CURRENT_DEPLOYMENT` / `CURRENT_PRODUCTION_COMMIT` as the last verified production record rather than silently combining them with the served build revision;
- displays an explicit warning when source is ahead of the served deployment;
- displays a separate warning when the served build is ahead of the last verified production record;
- keeps build-time canonical Current State, Operations Queue, Defect Register, security status, repair status, and scope-isolation status visible even if the live GitHub check is unavailable.

## Runtime dependency
The live repository-head check uses GitHub's public commit API for `ssalem9580/master-hub/main`. If that request is unavailable or rate-limited, the page reports `CURRENT MAIN CHECK UNAVAILABLE` instead of inventing a source status. Build-time canonical records remain visible.

## Safety boundary
This change does not:
- change finalized product workflows;
- alter restricted field-service data;
- remove or expose additional restricted source;
- change Vercel project ownership or Git integration;
- promote Recovery Value Calculator to production;
- rewrite Git history or retire deployments.

## Verification gate
Required before finalization:
1. GitHub lint/test/build passes on the implementation commit.
2. A Vercel production deployment containing this change reaches READY.
3. `/project-control` returns HTTP 200 from the canonical alias.
4. The live page reports the correct relationship among GitHub main, served revision, and last verified production record.
5. The page shows later control records, including 28, 29, 31, 32, 33, 34, 35, and this record 36.

## Current result
SOURCE IMPLEMENTED. Production verification is pending and must not be claimed until a new production build succeeds. The known Vercel daily deployment-rate limit may delay that verification.
