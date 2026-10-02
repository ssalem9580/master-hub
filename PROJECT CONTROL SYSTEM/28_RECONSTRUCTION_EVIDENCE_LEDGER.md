# 28 — Reconstruction Evidence Ledger

DATE: 2026-10-02
STATUS: EVIDENCE SNAPSHOT — READY FOR REVIEW

## Purpose
Record the controlled reconstruction evidence used to refresh canonical Master Hub state. This ledger is descriptive evidence, not permission for destructive changes.

## Reconstruction Rule
Only evidence-backed state is promoted. Unsupported or conflicting state remains `UNKNOWN / NEEDS CONFIRMATION` or explicitly open.

## Evidence Sources Reviewed
1. GitHub `main` history and current branch state.
2. Finalized release files under `RELEASES/`.
3. Canonical Decision Log DEC-001 through DEC-017.
4. Canonical Project Operations Queue.
5. Current Next.js app route tree.
6. GitHub Actions verification for latest product source.
7. Vercel canonical project deployment history.
8. Fresh HTTP checks against canonical production routes and Recovery Value configured URL.

## Finalized / Accepted Baselines Confirmed
### CONTROL-BASELINE-1.0
- Status: FINALIZATION RECORD.
- PR #1 merge: `3a6a02446a5ff4b8a6abfe8da3f6be9c2e51d70d`.
- Frozen reference: `baseline/governance-control-1.0`.
- Governance only; did not alter product code.
- AI Idea Master Template source ends during Part 29 after `Field definitions`; remainder remains unsupported.

### SECURITY-QUALITY-1.0
- Status: VERIFIED / OWNER ACCEPTED / RELEASED.
- Merge commit: `f81fd436a8df50ac0da93ec3c93ec26d09e0badf`.
- CI `36811990043`: install/lint/test/build PASS.
- Vercel `dpl_3Veoi3hAuDV6hLcbvWM7GqaNoYJ5`: READY.
- Next.js / eslint-config-next 16.3.8 baseline accepted.

### SECURITY-BOUNDARY-1.0
- Status: FINALIZED CLASSIFICATION / CONTAINMENT OPEN.
- Master Hub remains public/no-login under DEC-015.
- Field-service operational content is RESTRICTED by default under DEC-016.
- Existing public exposure remains an OPEN CRITICAL defect.
- Private migration/history cleanup/Vercel cleanup remain pending.

### PROJECT-OPS-1.0
- Status: FINALIZED / OWNER ACCEPTED.
- Canonical production URL recorded: `https://master-hub-sigma.vercel.app`.
- Queue/build/bugs/ideas/security/data/UX/release operating model is accepted.

## Current Git Reality
- `main` product-code checkpoint: `d1b857dc5c6fb6cf9239d3d68557a43077b2c097`.
- Commit message: `Test strict scope grouping and attachment isolation`.
- Parent: `de9d82be08daa1f20f7e95ba5583a5a59977340b`.
- Centralization base: `965a2b2e6ea15b053e2d60ca4c76802bcd3d5755`.
- Compare `965a2b2...d1b857d`: source is ahead by 2 commits; changed files are `scope-templates/page.tsx` and `scope-templates.test.tsx` only.
- `main` branch protection: OFF / `protected=false` at reconstruction time.

## Current CI Reality
- GitHub Actions run: `36949404777`.
- Commit: `d1b857d`.
- Install: PASS.
- Lint: PASS.
- Tests: PASS.
- Production build: PASS.

## Current Production Reality
- Vercel project: `master-hub`.
- Canonical alias: `https://master-hub-sigma.vercel.app`.
- Observed deployment: `dpl_2Mtpv99iSHbBfPtNsUFU43Z1R59z`.
- Observed deployment commit: `965a2b2e6ea15b053e2d60ca4c76802bcd3d5755`.
- State: READY / production.
- Latest strict enforcement commits `de9d82b` + `d1b857d` are not yet evidenced in production.

## Current Route Reality
Fresh HTTP 200:
- `/`
- `/project-control`
- `/field-resource-hub`
- `/field-diagnostic-hub`
- `/finances-command-center`
- `/repair-packages`
- `/scope-templates`

This establishes seven current internal routes, superseding older six-route snapshots.

## Current Root Registry Reality
The live root renders 10 workspace entries marked `Live` and 0 `Setup needed`.

However, registry labels are not equivalent to health verification. Recovery Value Calculator is rendered `Live` but `https://recovery-value-calculator.vercel.app/` was freshly verified HTTP 404 / `NOT_FOUND` on 2026-10-02. REQ-005 therefore remains open/partial.

## Repair Packages Reality
- DEF-010 canonical status: VERIFIED.
- Current `/repair-packages` returns HTTP 200 and contains exact Part # lookup UI.
- Automated regression evidence supports Part # → Part Name → Part Cost → Add → total → save → persistence/remount restore.
- Old Project Control/Queue text that says `1 ready for retest` is stale.
- Manual human click-through record: `UNKNOWN / NEEDS CONFIRMATION`.
- Owner finalization of the newest Repair Package update: NOT ESTABLISHED.

## Scope Templates Reality
- `/scope-templates` exists and returns HTTP 200.
- Scope Templates section finalization commit: `7bf24652e55eb40b38197bc5fd87913d73e96ee2`.
- Production includes centralized Device/SubDevice isolation at `965a2b2`.
- Latest main adds stricter exact Device/SubDevice scope boundaries and attachment isolation at `de9d82b`, with regression expansion at `d1b857d`.
- Latest source CI PASS.
- Latest strict behavior live production verification: NOT YET ESTABLISHED.

## Current Open Security Reality
- DEF-009 / ISSUE-005 remains OPEN CRITICAL.
- Public repository/deployment still conflicts with the finalized restricted-data boundary.
- No verified private canonical preservation destination is recorded.
- Destructive containment remains approval-gated.

## Current Open Recovery / Ownership Reality
- Recovery Value configured URL: HTTP 404.
- Recovery source exists outside current main per canonical records, but promotion/canonical ownership is not finalized.
- Canonical source/backup ownership for every standalone external tool remains incomplete.
- Duplicate Vercel project cleanup remains decision-gated.

## Known Canonical Drift Found During Reconstruction
1. `06_CURRENT_STATE.md` had old main/production SHAs and omitted `/scope-templates`.
2. `22_PROJECT_OPERATIONS_QUEUE.md` still treated DEF-010 as TESTING although `11_DEFECT_REGISTER.md` says VERIFIED.
3. `/project-control` live UI still says Repair Package interactive retest is open and `1 ready for retest`.
4. Live root says Recovery Value Calculator is `Live` while its configured URL is HTTP 404.
5. Older route counts said six internal routes; current source/live system has seven.
6. Older root state said one Setup needed; current root renders zero.

## Unknown / Needs Confirmation
- Complete pre-Control-System historical reconstruction beyond reviewed evidence.
- Manual human-browser DEF-010 validation record.
- Full current health of every external registry target.
- Canonical source/backup ownership of all standalone tools.
- Complete project-wide Supabase/table/RLS/API ownership map.
- Whether owner wants branch protection/rulesets enabled.
- Which duplicate Vercel projects should be disconnected/retired.

## Reconstruction Outcome
Canonical Current State, Operations Queue, Feature Register, Traceability Matrix and Changelog are refreshed by this pass. No destructive action, repository visibility change, deployment retirement, history rewrite, or restricted-data migration is performed.
