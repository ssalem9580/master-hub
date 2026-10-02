# 36 — Project Control Live Truth Sync

DATE: 2026-10-02
STATUS: VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED
VERSION: PROJECT-CONTROL-LIVE-TRUTH-1.0
AUTHORITY: Project Owner explicit `yes` in response to `Finalize this update?`
RELATED: QUEUE-006 / CHANGE-022

## Purpose
Prevent `/project-control` from presenting repository source, the build currently serving the page, and the last verified production record as though they are always identical.

## Problem confirmed
The live Project Control Center was healthy (HTTP 200) but its build-time snapshot lagged newer canonical records. The page also displayed a historical deployment ID next to the Vercel-served commit revision, which could be interpreted as one current deployment identity even when those values came from different evidence points.

The page also hard-coded only records 01 through 22 even though later canonical Project Control evidence/checkpoint records exist.

## Implemented behavior
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

## Verification evidence
- Implementation commit: `6223f506eea66c8a01a4ada2ab29d07270492d18`.
- GitHub Actions: `36975666263` — completed successfully.
- Vercel production deployment: `dpl_9TqmftuuGbn1d6cQq5P1Kj162rv2` — READY at the exact implementation commit.
- Canonical alias: `https://master-hub-sigma.vercel.app`.
- `/project-control`: HTTP 200 on the canonical alias.
- Production output shows 40 discovered Project Control records and includes later evidence/checkpoint records 28, 29, 31, 32, 33, 34, 35 and this record 36.
- Production JavaScript contains the runtime GitHub-main check and all three relationship states: source ahead, served build ahead of the last verified record, and fully aligned.
- At verification time, current GitHub `main` and the served production revision matched `6223f506...`, while the build-time canonical snapshot still identified `e6470da8...` / `dpl_6fML...` as the last verified production record; the live checker correctly represents that distinction instead of collapsing the values.

## Safety boundary
This finalization does not:
- change finalized product workflows;
- alter restricted field-service data;
- remove or expose additional restricted source;
- change Vercel project ownership or Git integration;
- promote Recovery Value Calculator to production;
- rewrite Git history or retire deployments.

## Final result
`PROJECT-CONTROL-LIVE-TRUTH-1.0` is VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED. Independent security, restricted-data preservation, Recovery Value restoration, standalone-source recovery and Vercel cleanup work remain open under their own gates.
