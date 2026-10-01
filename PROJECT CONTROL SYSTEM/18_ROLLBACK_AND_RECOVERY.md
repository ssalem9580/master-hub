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
Last observed READY Master Hub deployment before this control-system change:
- Deployment: dpl_Hx5yyuZGP1oyRP1WxmvV8yYacJcg
- Commit: 1beccb95eb5caa5769f26c4a6bc85ec0cb43752a

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
