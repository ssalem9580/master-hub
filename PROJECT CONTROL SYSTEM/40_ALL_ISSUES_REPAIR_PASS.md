# 40 — All Issues Repair Pass

DATE: 2026-10-02
STATUS: TESTING / SAFE REPAIRS IMPLEMENTED / APPROVAL-GATED AND SOURCE-BLOCKED ITEMS REMAIN OPEN
VERSION: ALL-ISSUES-REPAIR-RC1
AUTHORITY: Project Owner instruction `repair all issues`
RELATED: QUEUE-013

## Scope
Repair every currently identified issue that can be repaired safely with available evidence and connected capabilities, while preserving explicit gates for destructive actions, restricted-data publication/removal, repository administration, Vercel retirement/disconnection, and missing-source reconstruction.

## Repairs implemented
### Canonical truth
- Reconciled Open Issues, Defect Register, Risk Register, Technical Debt Register, Current State and Operations Queue.
- Closed stale Project Control drift records now superseded by `PROJECT-CONTROL-LIVE-TRUTH-1.0`.
- Closed DEF-011 consistently with `BW-LEAD-SCOPE-1.0` production verification.

### Documentation / recovery
- Added normalized root `README.md`.
- Replaced stale Phase-1 `master-hub-app/README.md` with current canonical deployment/security guidance.
- Added `38_INTEGRATION_AND_DATA_SOURCE_REGISTER.md`.
- Added `39_SECURITY_PRESERVATION_REFRESH.md`.

### Security prevention
- Added `master-hub-app/scripts/check-public-source-secrets.mjs`.
- Added `.github/workflows/public-source-safety.yml` to scan public application source on push/PR for high-risk secret patterns.
- This is a prevention layer only and does not falsely declare existing restricted operational exposure resolved.

### Billed Work / Scope recovery
Created a non-destructive Supabase recovery layer before any physical containment:
- `recovery.billed_work_state_20261002`
- `recovery.billed_work_scope_state_20261002`

Recovery schema/table privileges were revoked from `anon` and `authenticated`.

Exact snapshot verification at creation time:
- `billed_work_state`: 1 live row, 1 snapshot row, 1,402,774 serialized characters on each, exact content fingerprint match TRUE.
- `billed_work_scope_state`: 1 live row, 1 snapshot row, 23,676 serialized characters on each, exact content fingerprint match TRUE.

A metadata-only recovery checkpoint was stored in the owner-only Drive folder `Master Hub Restricted Field Service — Private Preservation`; folder and document were verified `shared=false`.

### Standalone ownership investigation
- Recovery Value recovered source/project mapping remains validated; fresh checks confirm root 404 and recovered nested artifact 200.
- NTE Quote, standalone Billed Work Tracker and Sam Hub production deployments were inventoried. Their observed deployment metadata exposes no Git-source mapping, so original canonical source remains `UNKNOWN / NEEDS CONFIRMATION` rather than invented.

### Repository governance evidence
- Fresh GitHub ruleset inventory returned `[]`.
- Branch-protection debt remains open because current connected GitHub capability does not expose an admin ruleset-write action and owner workflow impact remains approval-sensitive.

## Intentionally not performed
This pass does not silently perform any of the following:
- delete restricted public routes/source;
- rewrite Git history;
- change repository visibility;
- disconnect or retire Vercel projects;
- promote Recovery Value to production;
- fabricate missing AI Idea Master Template content;
- invent missing standalone source ownership;
- redesign stable legacy routes solely to eliminate stylistic debt.

## Remaining blockers after safe repairs
1. **Restricted physical containment / DEF-009:** independent exact-byte source archive plus independent database export/recovery verification are still required before removal. Public deletion/history rewrite require separate explicit approval.
2. **Recovery Value / DEF-004:** root is still broken; recovered source is restricted and production restoration/configuration remains separately gated.
3. **Standalone source ownership:** NTE Quote, standalone Billed Work and Sam Hub original source repositories/backups are still unknown.
4. **Branch protection:** ruleset write requires repository admin capability not exposed by current connector.
5. **Static workspace health:** Master Hub workspace statuses are still static metadata; current source architecture requires a controlled runtime-health implementation rather than claiming a false fix.
6. **Missing supplied template tail:** cannot be reconstructed without source evidence.
7. **Mixed legacy UI architecture:** remains managed maintenance debt; no behavior-risking rewrite is justified solely to close the label.

## Verification gate
Before owner finalization of this repair pass:
1. Public Source Safety workflow succeeds.
2. Master Hub lint/test/build CI succeeds on the repair head.
3. Current `main` SHA is captured.
4. Vercel current production state is checked and distinguished from source head.
5. If the repair head reaches production, canonical routes are live-verified; otherwise deployment remains explicitly source-ahead-of-production.

## Finalization boundary
Finalizing `ALL-ISSUES-REPAIR-1.0` will accept the safe repairs and blocker classification. It will not authorize any separately gated destructive/configuration action listed above.
