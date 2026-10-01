# 22 — Master Hub Project Operations & Queue

DATE: 2026-10-01
STATUS: ACTIVE — READY FOR REVIEW

This file is the canonical operational queue for Master Hub. It extends the existing Project Control System; it does not create a second project-management system.

## Operating Areas

1. QUEUE
2. BUILD & DEPLOYMENT
3. BUGS & TESTING
4. IDEAS & IMPROVEMENTS
5. SECURITY & RESTRICTED DATA
6. DATA & INTEGRATIONS
7. UI / UX
8. RELEASE HISTORY

## State Rules

Queue: QUEUED / APPROVED / IN DEVELOPMENT / TESTING / READY FOR REVIEW / WAITING / BLOCKED / FINALIZED / REJECTED / DEFERRED

Priority: CRITICAL / HIGH / NORMAL / LOW / SOMEDAY

Ideas remain separate from approved work. A code change is not DEPLOYED until production is verified. A deployed change is not FINALIZED until the Project Owner explicitly approves finalization.

## Current Build & Deployment Snapshot

- Latest main commit: 83b46851f5bcd2c57f01457f5f88bb4b6ed5141c
- Latest verified production commit: 036ae44123f7f91c27fa7c01b7d0f29cbfb069aa
- Current canonical production alias: https://master-hub-sigma.vercel.app
- Current production deployment: dpl_AHvbXmgAsCqgubS51sU8UbzByFa7
- Current production state: READY
- Pending main commits after production: 753ead389696f59d480ba4f7e6cc8eef6e8ce907, 2663e74f5a8d29c97ef2ebb2bc8397ef668f48e5, 83b46851f5bcd2c57f01457f5f88bb4b6ed5141c
- Current blocker: later automatic deployments were rejected by Vercel build-rate limiting.
- Safe rollback candidates: current READY production 036ae44123f7f91c27fa7c01b7d0f29cbfb069aa and preceding READY deployment e72f3d8b83f72ece96f60b444e66031326cd1381.

## Operational Queue

| Queue ID | Title | Area / Tool | Priority | Status | Approval | Dependencies / Blockers | Related Commit | Next Action | Finalization |
|---|---|---|---|---|---|---|---|---|---|
| QUEUE-001 | Contain restricted field-service material | Security & Restricted Data | CRITICAL | WAITING / BLOCKED | APPROVED boundary; destructive containment not yet authorized | Verified private canonical destination and recovery checkpoint required | DEC-016 / DEC-017 context | Establish safe private destination, preserve, verify, then request authorization for destructive/public cleanup | NOT FINALIZED |
| QUEUE-002 | Repair Package Part # auto-fill source | Repair Packages | HIGH | WAITING / BLOCKED | APPROVED / BUILT | Vercel build-rate limit blocks newest deployment | 83b46851f5bcd2c57f01457f5f88bb4b6ed5141c | Deploy when build capacity clears, then live-retest exact Part # → name → cost | NOT FINALIZED |
| QUEUE-003 | Retest Repair Package cost update behavior | Bugs & Testing | HIGH | WAITING / BLOCKED | APPROVED | Depends on QUEUE-002 production deployment | 83b46851f5bcd2c57f01457f5f88bb4b6ed5141c | Verify source lookup, add-to-package, persistence, and total cost on live URL | NOT FINALIZED |
| QUEUE-004 | Reduce duplicate Vercel project build fanout | Build & Deployment | HIGH | WAITING / BLOCKED | OWNER DECISION REQUIRED for disconnect/retire | Multiple linked projects; destructive project changes require approval | — | Identify canonical project mapping and prepare non-destructive cleanup plan | NOT FINALIZED |
| QUEUE-005 | Restore Recovery Value Calculator live target | Integration | HIGH | QUEUED | Existing repair need | Recovered source exists but production ownership/configuration not finalized | Recovery source 751a73b17bef47c47a2a0b9467560a197fef8f0f | Validate recovered source and propose controlled restore path | NOT FINALIZED |
| QUEUE-006 | Source-bind Project Control Center status | Project Control | NORMAL | QUEUED | NOT YET APPROVED FOR IMPLEMENTATION | Architecture choice needed | — | Design smallest safe generated-status approach; do not duplicate control systems | NOT FINALIZED |
| QUEUE-007 | Recover canonical source for standalone tools | Recovery / Integrations | HIGH | QUEUED | APPROVED investigation | Historical source locations incomplete | — | Locate and document canonical source/backup for each standalone tool | NOT FINALIZED |
| QUEUE-008 | Enforce main/baseline repository protection | Governance / GitHub | HIGH | WAITING / BLOCKED | OWNER APPROVAL REQUIRED | Workflow changes are governance-sensitive | — | Present proposed ruleset and required checks before enabling | NOT FINALIZED |
| QUEUE-009 | Project Operations & Queue control layer | Project Control | HIGH | READY FOR REVIEW | APPROVED by 2026-10-01 Project Owner instruction | Live deployment still required | This update | Deploy/verify Project Control Center, then ask owner to finalize | NOT FINALIZED |

## Bugs & Testing

- DEF-009 remains the critical restricted-content exposure defect.
- DEF-010 tracks the Repair Package part-cost / lookup behavior. Code is built but cannot be called VERIFIED FIXED until production is deployed and live-retested.
- Production regression checks after the next deploy must include:
  - Master Hub root
  - /project-control
  - /repair-packages
  - exact Part # lookup
  - Part Name auto-population
  - Part Cost auto-population
  - add-to-package
  - package total
  - browser persistence

## Ideas & Improvements

No new idea is automatically approved by this queue. Existing potential improvements stay CAPTURED / UNDER REVIEW until the Project Owner approves development.

Current captured improvement:
- Source-bound Project Control Center status generation to reduce drift between visible UI and canonical Markdown.

## Security & Restricted Data

Field-service diagnostic, repair, parts, procedural, billed-work operational, scope, quote, customer-operational, and proprietary workflow material is RESTRICTED by default unless explicitly reclassified.

Current critical condition:
- Restricted operational material exists on public surfaces.
- No destructive cleanup or history rewrite is authorized before safe preservation is verified.

## Data & Integrations

Known Master Hub persistence:
- Hub actions: browser localStorage.
- Finances Command Center: browser localStorage.
- Repair Package drafts, package library, and parts library: browser localStorage.
- Repair Package master parts source added in repository static data segments; this intersects with the restricted-data containment issue and must not be treated as an approved public-distribution decision.

Known external systems:
- GitHub: canonical source control.
- Vercel: canonical Master Hub production hosting.
- Supabase: used by specific tool workflows where configured; project-wide database ownership remains tool-specific.
- Additional standalone integrations remain under reconstruction where ownership is incomplete.

## UI / UX

Current operating rule:
- Android/mobile first.
- Desktop fully supported.
- Favor fewer clicks, less scrolling, obvious saving, useful search, automatic population, and one-screen workflows where practical.
- Do not redesign solely for appearance.

Current Repair Package UX target:
Part # entry → automatic Part Name + Part Cost → Add Part → package list.

## Release History

No new release is recorded merely because source changed.

Current verified production:
- Deployment: dpl_AHvbXmgAsCqgubS51sU8UbzByFa7
- Commit: 036ae44123f7f91c27fa7c01b7d0f29cbfb069aa
- State: READY

Pending release candidate content:
- Remaining master parts source segments.
- Repair Package Part # auto-fill using preloaded master source.
- Project Operations & Queue control layer.

Finalization requires explicit Project Owner approval after live verification.
