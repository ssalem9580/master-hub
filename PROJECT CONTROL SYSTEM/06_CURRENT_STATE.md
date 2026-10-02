# 06 — Current State

DATE: 2026-10-02
STATUS: CONTROLLED RECONSTRUCTION SNAPSHOT — READY FOR REVIEW

## Authority
- Canonical repository: `ssalem9580/master-hub`
- Canonical branch: `main`
- Governance baseline: `CONTROL-BASELINE-1.0` — FINALIZED
- Project Operations: `PROJECT-OPS-1.0` — FINALIZED / OWNER ACCEPTED
- Security/quality baseline: `SECURITY-QUALITY-1.0` — VERIFIED / OWNER ACCEPTED / RELEASED
- Restricted-content classification: `SECURITY-BOUNDARY-1.0` — FINALIZED CLASSIFICATION / CONTAINMENT OPEN

## Reconstruction Basis
This snapshot was reconstructed only from Git history, finalized release records, approved Decision Log entries, the canonical Operations Queue, the current app route tree, current GitHub CI evidence, and current Vercel/live-route evidence. Unsupported historical detail remains `UNKNOWN / NEEDS CONFIRMATION`.

## Source Reality
- Reconstructed product-code head before this documentation commit: `d1b857dc5c6fb6cf9239d3d68557a43077b2c097` — `Test strict scope grouping and attachment isolation`.
- Parent implementation commits: `de9d82be08daa1f20f7e95ba5583a5a59977340b` — strict Device/SubDevice boundary enforcement; `965a2b2e6ea15b053e2d60ca4c76802bcd3d5755` — centralized Device/SubDevice scope isolation.
- GitHub Actions run `36949404777` for `d1b857d` passed install, lint, tests, and production build.
- `main` is currently not branch-protected; GitHub reports `protected=false` and required-status-check enforcement off.

## Production Reality
- Canonical Vercel project: `master-hub`
- Canonical alias: `https://master-hub-sigma.vercel.app`
- Observed production deployment: `dpl_2Mtpv99iSHbBfPtNsUFU43Z1R59z`
- Observed production commit: `965a2b2e6ea15b053e2d60ca4c76802bcd3d5755`
- Production state: `READY`
- Product source is ahead of observed production by 2 commits: `de9d82b`, `d1b857d`.
- Safe prior READY rollback candidate: `dpl_FQ56GB4NKryTiPUQQj1kSdEb35qg` at `7b851a60faaaf9fdfe53221f4c01d3b2da65db6c`.

## Current Internal Routes
Source-present and freshly verified HTTP 200 on the canonical production alias:
- `/`
- `/project-control`
- `/field-resource-hub`
- `/field-diagnostic-hub`
- `/finances-command-center`
- `/repair-packages`
- `/scope-templates`

This supersedes older six-route snapshots. Scope Templates is now an established Master Hub section.

## Master Hub Root Reality
The live root currently renders:
- 10 workspace cards marked `Live`
- 0 `Setup needed`
- Project Operations marked `FINALIZED`
- Field Diagnostic Hub marked `Live`
- Scope Templates marked `Live`

These UI labels are static registry metadata, not a complete health-monitoring system. Recovery Value Calculator is still displayed as `Live`, but its configured public URL was freshly verified HTTP 404 on 2026-10-02. Therefore global registry health remains PARTIAL and REQ-005 remains open.

## Repair Packages / DEF-010
- `DEF-010` is `VERIFIED` in the canonical Defect Register.
- Evidence includes automated interaction coverage for exact Part # `11066404000A` → expected name/cost → add → total → save → localStorage persistence/remount restore, CI success, a READY production deployment containing the stabilized component, and current `/repair-packages` HTTP 200 with the lookup UI.
- The old Operations Queue and Project Control UI text saying DEF-010 still needs an end-to-end retest is stale and is superseded by this reconstruction plus the Defect Register.
- Separate manual human browser click-through evidence is `UNKNOWN / NEEDS CONFIRMATION`; it is not required to downgrade the verified automated defect status.
- Owner finalization of the Repair Package update is still separate from defect verification and remains NOT FINALIZED unless explicitly approved.

## Scope Templates / Device → SubDevice Isolation
- `/scope-templates` is present in source and live HTTP 200.
- Scope Templates was finalized as a Master Hub section in commit `7bf24652e55eb40b38197bc5fd87913d73e96ee2` and later expanded with imported Device/SubDevice hierarchy behavior.
- Production currently contains the centralized isolation version at `965a2b2`.
- Latest source adds stricter exact Device → SubDevice → Scope selection and cross-group attachment blocking in `de9d82b`, with regression coverage in `d1b857d`.
- CI for latest source is PASS.
- Strictest `de9d82b`/`d1b857d` behavior is NOT YET VERIFIED IN PRODUCTION because observed production is still at `965a2b2`.

## Finalized Releases Preserved
- `CONTROL-BASELINE-1.0` — finalized governance baseline; frozen reference `baseline/governance-control-1.0`.
- `SECURITY-QUALITY-1.0` — released and owner accepted; Next.js 16.3.8 and lint/test/build CI gate activated.
- `SECURITY-BOUNDARY-1.0` — classification finalized; physical containment explicitly remains open.
- `PROJECT-OPS-1.0` — finalized / owner accepted.

## Security / Restricted Data
- Master Hub is intentionally public/no-login under DEC-015.
- All field-service operational material is RESTRICTED by default under DEC-016.
- Existing restricted content on public source/routes/deployments remains `OPEN — CRITICAL` under DEF-009 / ISSUE-005.
- Private canonical preservation has not been verified.
- Public-history cleanup has not been completed.
- No destructive containment, history rewrite, repository visibility change, or Vercel retirement is authorized by this reconstruction pass.

## Known Open Issues Preserved
- Historical reconstruction long tail remains incomplete beyond evidence reviewed in this pass.
- Duplicate/cross-linked Vercel projects remain unresolved.
- AI Idea Master Template remains incomplete at Part 29 after `Field definitions`.
- Project Control Center is not source-bound and can display stale static text.
- Recovery Value Calculator configured URL remains HTTP 404.
- Standalone-tool canonical source/backup ownership remains incomplete.
- Recovery Value recovered source remains stranded outside canonical main.
- Main/baseline GitHub protection remains absent.
- Restricted field-service public exposure remains Critical.

## Persistence Reality
Verified from current architecture/history:
- Master Hub actions: browser `localStorage`.
- Finances Command Center profile: browser `localStorage` with auto-save behavior.
- Repair Package drafts / local overrides / saved packages: browser `localStorage`.
- Cross-device synchronization for those browser-local stores: NOT ESTABLISHED.
- Project-wide database ownership for standalone/external tools: `UNKNOWN / NEEDS CONFIRMATION` unless separately documented.

## Unknown / Needs Confirmation
- Complete deep historical reconstruction before the Project Control System existed.
- Current source ownership/backup location for every standalone external tool.
- Current health of every external registry target other than those explicitly rechecked.
- Whether a manual human-browser DEF-010 click-through has been separately recorded.
- Full database/RLS/integration ownership for every standalone tool.

## Current Controlled Next Action
1. Deploy latest product-code head containing `de9d82b` + `d1b857d` through the canonical Master Hub project.
2. Verify strict Device → SubDevice → Scope and attachment isolation in production.
3. Reconcile Project Control UI from canonical source instead of static duplicated text.
4. Continue restricted-data containment only after verified private preservation and required owner approvals.
