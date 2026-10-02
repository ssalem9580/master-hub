# 06 — Current State

DATE: 2026-10-02
STATUS: REMEDIATION WAVE 1 — OWNER ACCEPTED / FINALIZED; SCOPE ISOLATION VERIFIED / FINALIZED

## Authority
- Canonical repository: `ssalem9580/master-hub`
- Canonical branch: `main`
- Governance baseline: `CONTROL-BASELINE-1.0` — FINALIZED
- Project Operations: `PROJECT-OPS-1.0` — FINALIZED / OWNER ACCEPTED
- Security/quality baseline: `SECURITY-QUALITY-1.0` — VERIFIED / OWNER ACCEPTED / RELEASED
- Restricted-content classification: `SECURITY-BOUNDARY-1.0` — FINALIZED CLASSIFICATION / CONTAINMENT OPEN
- Scope isolation release: `SCOPE-ISOLATION-1.0` — VERIFIED / FINALIZED / OWNER ACCEPTED

## Machine-readable operations snapshot
CURRENT_PRODUCTION_COMMIT: 1b5d4e78f164fc4c68f9322aa6348d90cca2c7c5
CURRENT_DEPLOYMENT: dpl_9k5EKov9oJM7jKwvEFgmeNUjPtjf
BUILD_STATUS: READY — verified production deployment contains Wave-1 source-binding and strict scope enforcement; later record-only commits may be ahead of production until their own deployment completes
SECURITY_STATUS: CRITICAL — restricted field-service containment remains open; destructive cleanup is not authorized before verified private preservation
SCOPE_ISOLATION_STATUS: VERIFIED / FINALIZED — strict Device → SubDevice → Scope selection/manual/attachment isolation is present in verified production and owner accepted
REPAIR_PACKAGE_STATUS: VERIFIED — DEF-010 automated Part # → Name → Cost → Add → Total → Save → persistence regression is complete; owner finalization is separate
PROJECT_CONTROL_STATUS: SOURCE-BOUND / CI VERIFIED / OWNER ACCEPTED / PRODUCTION VERIFIED
WAVE1_STATUS: FINALIZED — canonical truth reconciliation and Project Control source-binding accepted by Project Owner and verified in production

## Source reality
- Strict scope centralization base: `965a2b2e6ea15b053e2d60ca4c76802bcd3d5755`.
- Strict Device/SubDevice boundary enforcement: `de9d82be08daa1f20f7e95ba5583a5a59977340b`.
- Strict scope grouping/attachment regression coverage: `d1b857dc5c6fb6cf9239d3d68557a43077b2c097`.
- Wave-1 source-binding/reconciliation commits: `92903383a1fb1daedab898b46663d648d8a7a24d`, `4d5eda077ce57eda164b76a5ea3e0944a40af53a`, `31e1dffc1bcf8eaae04a308798eee4c91d1ed4ef`.
- Wave-1 finalization record begins at `1b5d4e78f164fc4c68f9322aa6348d90cca2c7c5`.
- GitHub Actions run `36949404777` for strict scope source passed install, lint, tests and production build.
- GitHub Actions run `36951330664` for Wave-1 reconciliation/source-binding passed install, lint, tests and production build.
- Main/baseline branch protection remains absent and is still approval-gated.

## Production reality
- Canonical Vercel project: `master-hub`
- Canonical alias: `https://master-hub-sigma.vercel.app`
- Verified READY deployment: `dpl_9k5EKov9oJM7jKwvEFgmeNUjPtjf`
- Verified production commit: `1b5d4e78f164fc4c68f9322aa6348d90cca2c7c5`
- `/project-control`: HTTP 200 and renders source-bound canonical status.
- `/scope-templates`: HTTP 200.
- `/bw-dashboard.html`: HTTP 200.
- The production Scope Templates JavaScript artifact contains the strict Device → SubDevice hierarchy builder, exact `scopeCompatible` checks, exact manual-template filtering, compatible-lead attachment filtering, and explicit cross-group attachment blocking.
- Safe prior rollback candidate for scope behavior: `dpl_2Mtpv99iSHbBfPtNsUFU43Z1R59z` at `965a2b2e6ea15b053e2d60ca4c76802bcd3d5755`.

## Current internal routes
Established Master Hub routes:
- `/`
- `/project-control`
- `/field-resource-hub`
- `/field-diagnostic-hub`
- `/finances-command-center`
- `/repair-packages`
- `/scope-templates`

## Repair Packages / DEF-010
- `DEF-010` is `VERIFIED` in the canonical Defect Register.
- Automated regression covers exact Part # `11066404000A` → expected name/cost → add → total → save → `localStorage` persistence/remount restore.
- The Operations Queue is reconciled to `READY FOR REVIEW`, not `TESTING`.
- Manual human browser click-through remains separate evidence and does not downgrade the verified automated defect status.
- Owner finalization of the Repair Package update remains separate and is NOT FINALIZED unless explicitly approved.

## Scope Templates / Device → SubDevice isolation
- Centralized hierarchy/isolation is implemented from imported work orders, reconciled records and saved templates.
- Exact Device and SubDevice matching is normalized for spacing/case variants.
- Device selection only exposes SubDevices that actually exist under that Device.
- Scope selection only exposes scopes found/saved under the exact Device → SubDevice pair.
- Manual scope-template selection is filtered to the selected Device/SubDevice.
- Attach-to-lead candidates are filtered to matching Device/SubDevice.
- Direct incompatible cross-group attachment attempts are blocked.
- CI regression evidence: `36949404777` PASS.
- Production evidence: `dpl_9k5EKov9oJM7jKwvEFgmeNUjPtjf`, live route 200, and live production JavaScript contains the strict enforcement logic.
- Owner explicitly directed promotion to `VERIFIED / FINALIZED`.
- Release record: `RELEASES/SCOPE-ISOLATION-1.0.md`.

## Project Control source-binding
- `/project-control` no longer owns duplicated hard-coded operational status.
- The page reads `06_CURRENT_STATE.md`, `22_PROJECT_OPERATIONS_QUEUE.md`, and `11_DEFECT_REGISTER.md` during build and renders the operations snapshot from those canonical sources.
- Vercel deployment commit is surfaced from `VERCEL_GIT_COMMIT_SHA` where available.
- Source-binding is BUILT, CI VERIFIED, OWNER ACCEPTED / FINALIZED, and PRODUCTION VERIFIED.

## Security / restricted data
- Master Hub remains intentionally public/no-login under the established decision record.
- Field-service operational material remains RESTRICTED by default.
- Existing restricted public exposure remains `OPEN / CRITICAL` under DEF-009.
- Private canonical preservation has not been verified.
- Public-history cleanup has not been completed.
- No destructive containment, history rewrite, repository visibility change, or Vercel retirement is authorized by this scope finalization.

## Deployment/source ownership gaps
- Duplicate/cross-linked Vercel projects remain unresolved.
- Recovery Value Calculator configured target remains broken / HTTP 404 in the latest verified audit.
- Recovery Value recovered source is not yet canonicalized to production.
- Standalone-tool canonical source/backup ownership remains incomplete.
- Static `Live` registry labels are not yet backed by runtime health verification.

## Persistence reality
- Master Hub actions: browser `localStorage`.
- Finances Command Center: browser `localStorage`.
- Repair Package drafts / local overrides / saved packages: browser `localStorage`.
- Billed Work / Scope Templates include existing local state plus the existing Supabase-backed tracker behavior exposed by `bw-dashboard.html`.
- Cross-device synchronization for browser-only stores is not established unless separately documented by a tool-specific integration.

## Finalized releases preserved
- `CONTROL-BASELINE-1.0`
- `SECURITY-QUALITY-1.0`
- `SECURITY-BOUNDARY-1.0` classification baseline; containment remains open
- `PROJECT-OPS-1.0`
- `SCOPE-ISOLATION-1.0`

## Current controlled next action
1. Preserve SCOPE-ISOLATION-1.0 regression coverage during future Scope Templates changes.
2. Continue restricted-data containment only after private preservation and explicit approval gates are satisfied.
3. Restore the broken Recovery Value target and reconcile static registry health labels.
4. Resolve duplicate Vercel build fan-out only with the required owner approval for destructive project changes.
5. Recover/document canonical source ownership for remaining standalone tools.

KNOWN DEFECTS: See `11_DEFECT_REGISTER.md`.
KNOWN RISKS: See `12_RISK_REGISTER.md`.
OPERATIONAL QUEUE: See `22_PROJECT_OPERATIONS_QUEUE.md`.
