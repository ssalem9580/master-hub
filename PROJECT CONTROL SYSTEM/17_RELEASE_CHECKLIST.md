# 17 — Release Checklist

A release is not final because code exists.

Before release:
- [ ] Approved requirements identified.
- [ ] Definition of Ready satisfied for changed features.
- [ ] Build/typecheck passes.
- [ ] Relevant functional tests pass.
- [ ] No known critical defects remain.
- [ ] Privacy/security impact reviewed.
- [ ] Registry URLs/status labels verified.
- [ ] Vercel deployment reaches READY.
- [ ] Production route(s) fetched/verified.
- [ ] Changelog updated.
- [ ] Current State updated.
- [ ] Checkpoint updated.
- [ ] Rollback target identified.
- [ ] Owner acceptance recorded for final release.
- [ ] Backup/baseline created if finalizing.

FINALIZED requires owner acceptance + backup + baseline freeze.


## Canonical Release Coverage
Every release review must explicitly cover, as applicable:
- product scope
- requirements
- testing
- defects
- data
- security
- UX
- integrations
- deployment
- monitoring
- recovery
- documentation
- backups
- owner acceptance

### Governance Gates
- Definition of Ready applies before implementation.
- Definition of Done applies before DONE status.
- No unmitigated Critical risk may remain at final release.
- FINALIZED requires owner acceptance, backup, and baseline freeze.
