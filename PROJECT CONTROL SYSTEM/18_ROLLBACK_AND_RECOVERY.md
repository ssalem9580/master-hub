# 18 — Rollback and Recovery

## Recovery Sources
1. GitHub main branch and commit history.
2. Vercel deployment history/rollback candidates.
3. RELEASES records.
4. BACKUPS artifacts when created.
5. 08_CHECKPOINT.md for restart context.

## Rollback Rule
Do not overwrite history to hide a failed approach. Revert or deploy a known-good commit/deployment and record the reason.

## Current Known Good Deployment Evidence
Current verified production release:
- Release: SECURITY-QUALITY-1.0
- Deployment: dpl_3Veoi3hAuDV6hLcbvWM7GqaNoYJ5
- Commit: f81fd436a8df50ac0da93ec3c93ec26d09e0badf
- Canonical alias: master-hub-sigma.vercel.app
- State: READY
- Route verification: six canonical routes HTTP 200
- Runtime error scan: clean in selected one-hour post-release window

Previous verified production evidence remains available in Vercel/Git history for rollback.

## Recovery Procedure
1. Identify failing requirement/route and evidence.
2. Select last verified good commit/deployment.
3. Roll back or revert only the affected scope.
4. Retest.
5. Update defect, changelog, current state, and checkpoint.
6. Obtain owner acceptance if release boundary changed.


## Canonical Rollback Coverage
Before production release, identify as applicable:
- previous stable release
- source rollback
- deployment rollback
- configuration rollback
- database rollback
- migration limitations
- backup location
- restore procedure
- recovery testing
- recovery dependencies

Rule:
Never perform destructive production changes without a recovery strategy.


## SECURITY-QUALITY-1.0 Rollback Plan
PRIMARY ROLLBACK OPTIONS:
1. Vercel: roll back production to the immediately preceding known-good deployment if the new release causes runtime regression.
2. Git: revert PR #2 merge commit f81fd436a8df50ac0da93ec3c93ec26d09e0badf if source-level rollback is required.
3. Re-run canonical CI after rollback/revert.
4. Re-fetch all six canonical routes and run runtime-error scan.
5. Record any rollback in Defect Register, Changelog, Current State, and Checkpoint.

DATA / MIGRATION IMPACT:
- No database migration was introduced by SECURITY-QUALITY-1.0.
- Existing browser-local persistence format was not intentionally changed.
- Therefore no database rollback is required for this release.

RECOVERY DEPENDENCIES:
- GitHub repository history
- Vercel deployment history
- RELEASES/SECURITY-QUALITY-1.0.md
- BACKUPS/SECURITY-QUALITY-1.0.md
