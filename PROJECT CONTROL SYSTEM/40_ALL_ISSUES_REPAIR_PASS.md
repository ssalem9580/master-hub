# 40 — All Issues Repair Pass

DATE: 2026-10-02
STATUS: TESTING / SAFE REPAIRS + RUNTIME HEALTH BUILT / APPROVAL-GATED AND SOURCE-BLOCKED ITEMS REMAIN OPEN
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
- Public Source Safety run `36985345296` completed SUCCESS on runtime-health source `1cfb14792c6bce7bf6133d9f9e6bb2d58ace6041`.
- This is a prevention layer only and does not falsely declare existing restricted operational exposure resolved.

### Runtime workspace health
- Added `master-hub-app/src/app/api/hub-health/route.ts` with fixed workspace targets, no-store checks and bounded timeouts.
- Updated the Master Hub directory/dashboard to merge runtime Live/Offline results into workspace status, grouping and live counts.
- Changed Recovery Value fallback from false `Live` to `Offline`, matching its known root 404.
- Master Hub CI run `36985345154` completed SUCCESS on source commit `1cfb14792c6bce7bf6133d9f9e6bb2d58ace6041`.
- Current production still returns 404 for `/api/hub-health`, confirming the runtime-health source is not deployed yet. Vercel rejected the newer `master-hub`, `field-diagnostic-hub`, and `recovery-value-calculator` builds at the deployment-rate limit.

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

## Current production vs source
- Canonical production: `dpl_21gm6tzoRrSibaVgUm14yF7Xcf5d` READY at `5cbf758430d7b4ab5b15af210e6c698cd0e20e8f`.
- Current runtime-health repair source is ahead of production.
- Do not describe `/api/hub-health` or runtime directory health as live until a READY production deployment includes that source and is verified.

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
5. **Runtime workspace health:** source and CI verification are complete, but production verification is blocked by Vercel deployment quota.
6. **Missing supplied template tail:** cannot be reconstructed without source evidence.
7. **Mixed legacy UI architecture:** remains managed maintenance debt; no behavior-risking rewrite is justified solely to close the label.

## Verification evidence
- Safe repair head before runtime health: Master Hub CI `36985034112` SUCCESS; Public Source Safety `36985034195` SUCCESS.
- Runtime-health source: Master Hub CI `36985345154` SUCCESS; Public Source Safety `36985345296` SUCCESS.
- Canonical production remains READY but predates runtime health.
- Vercel status on runtime-health source: rate-limited for all three linked Vercel projects, not a code/build failure.

## Final verification gate
Before owner finalization of this repair pass:
1. Vercel accepts a production deployment containing the current runtime-health source.
2. `/api/hub-health` returns HTTP 200 from the canonical alias.
3. Health response correctly identifies the known broken Recovery Value root as Offline and reachable workspaces as Live.
4. Dashboard/Directory status/count behavior is verified against runtime results.
5. Canonical Current State and queue are updated with the final production evidence.

## Finalization boundary
Finalizing `ALL-ISSUES-REPAIR-1.0` will accept the safe repairs and blocker classification. It will not authorize any separately gated destructive/configuration action listed above.
