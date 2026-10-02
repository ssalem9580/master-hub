# 06 — Current State

DATE: 2026-10-02
STATUS: REMEDIATION WAVE 1 FINALIZED / SCOPE ISOLATION VERIFIED & FINALIZED / SECURITY CONTAINMENT PREPARATION FINALIZED / PRIVATE PRESERVATION STORE VERIFIED / SOURCE COPY INCOMPLETE

## Authority
- Canonical repository: `ssalem9580/master-hub`
- Canonical branch: `main`
- Governance baseline: `CONTROL-BASELINE-1.0` — FINALIZED
- Project Operations: `PROJECT-OPS-1.0` — FINALIZED / OWNER ACCEPTED
- Security/quality baseline: `SECURITY-QUALITY-1.0` — VERIFIED / OWNER ACCEPTED / RELEASED
- Restricted-content classification: `SECURITY-BOUNDARY-1.0` — FINALIZED CLASSIFICATION / PHYSICAL CONTAINMENT OPEN
- Security containment preparation: `SECURITY-CONTAINMENT-PREP-1.0` — FINALIZED / OWNER ACCEPTED
- Scope isolation release: `SCOPE-ISOLATION-1.0` — VERIFIED / FINALIZED / OWNER ACCEPTED

## Machine-readable operations snapshot
CURRENT_PRODUCTION_COMMIT: 1b5d4e78f164fc4c68f9322aa6348d90cca2c7c5
CURRENT_DEPLOYMENT: dpl_9k5EKov9oJM7jKwvEFgmeNUjPtjf
BUILD_STATUS: READY — verified production contains Wave-1 source-binding and strict scope isolation; later control/preparation commits may be ahead of production
SECURITY_STATUS: CRITICAL — private preservation store now exists and is verified owner-only/not shared; repository source lineage and Supabase recovery fingerprints are verified; exact restricted source-byte copy and operational-data backup remain incomplete, so destructive containment remains blocked
SCOPE_ISOLATION_STATUS: VERIFIED / FINALIZED — exact Device → SubDevice → Scope selection, manual filtering, compatible-lead filtering and cross-group attachment blocking are present in verified production
REPAIR_PACKAGE_STATUS: VERIFIED — DEF-010 automated Part # → Name → Cost → Add → Total → Save → persistence regression is complete; owner finalization remains separate
PROJECT_CONTROL_STATUS: SOURCE-BOUND / CI VERIFIED / OWNER ACCEPTED / PRODUCTION VERIFIED
WAVE1_STATUS: FINALIZED

## Production reality
- Canonical Vercel project: `master-hub`
- Canonical alias: `https://master-hub-sigma.vercel.app`
- Verified READY deployment: `dpl_9k5EKov9oJM7jKwvEFgmeNUjPtjf`
- Verified production commit: `1b5d4e78f164fc4c68f9322aa6348d90cca2c7c5`
- `/project-control`: HTTP 200.
- `/scope-templates`: HTTP 200.
- `/bw-dashboard.html`: HTTP 200.
- Live Scope Templates client artifact contains exact Device/SubDevice hierarchy generation, exact template compatibility checks, manual scope filtering, compatible-lead attachment filtering, and explicit cross-group attachment blocking.
- Scope isolation CI evidence: GitHub Actions `36949404777` PASS.
- Wave-1 source-binding CI evidence: GitHub Actions `36951330664` PASS.
- Security-containment preparation CI evidence: GitHub Actions `36958317975` PASS (install / lint / test / build).
- Safe prior scope rollback: `dpl_2Mtpv99iSHbBfPtNsUFU43Z1R59z` at `965a2b2e6ea15b053e2d60ca4c76802bcd3d5755`.

## Scope Templates / Device → SubDevice isolation
- Centralized hierarchy is derived from imported work orders, reconciled records and saved templates.
- Device selection exposes only SubDevices observed under that Device.
- Scope selection exposes only scopes saved/found under the exact normalized Device → SubDevice pair.
- Manual template selection is filtered to the exact Device/SubDevice pair.
- Attach-to-lead candidates are filtered to matching Device/SubDevice.
- Direct incompatible cross-group attachment attempts are blocked.
- Status: VERIFIED / FINALIZED / OWNER ACCEPTED.
- Release: `RELEASES/SCOPE-ISOLATION-1.0.md`.

## Repair Packages / DEF-010
- DEF-010 is `VERIFIED`.
- Automated regression covers exact Part # `11066404000A` → expected name/cost → add → total → save → localStorage persistence/remount restore.
- Owner finalization of the broader Repair Package update remains separate.

## Project Control source-binding
- `/project-control` reads canonical Current State, Operations Queue and Defect Register records at build time.
- Operational status is no longer owned by duplicated hard-coded status text.
- Status: BUILT / CI VERIFIED / OWNER ACCEPTED / PRODUCTION VERIFIED.

## Security / restricted data
- Master Hub remains public/no-login under the established decision record.
- Field-service operational material remains RESTRICTED by default.
- Existing restricted public exposure remains `OPEN / CRITICAL` under DEF-009.
- Controlled containment preparation is FINALIZED / OWNER ACCEPTED as `SECURITY-CONTAINMENT-PREP-1.0`.
- Project Owner approved establishment/migration of a separate private canonical destination/store for restricted field-service source.
- A Google Drive preservation store named `Master Hub Restricted Field Service — Private Preservation` now exists and was verified `shared=false` with owner-only permission metadata before preservation use.
- Private checkpoint/evidence metadata has been stored there and independently verified not shared.
- Exact repository-backed restricted source blob IDs and byte counts from `PROJECT CONTROL SYSTEM/32_SECURITY_PRESERVATION_SOURCE_HASHES.md` still match current `main` at `88419705fa4aa2a29161509683f2cf6c960ef214`, including finalized Scope Isolation source.
- Supabase Billed Work persistence dependency was verified as ACTIVE_HEALTHY; `billed_work_state` and `billed_work_scope_state` both have RLS enabled with owner-scoped authenticated CRUD policies. Non-content payload sizes/fingerprints were recorded without retrieving ledger/customer payloads.
- Verified private preservation COPY is NOT COMPLETE: exact restricted source bytes and Supabase operational payload backup have not yet been transferred/recovery-tested in the private store.
- `PROJECT CONTROL SYSTEM/34_RESTRICTED_PRIVATE_PRESERVATION_CHECKPOINT.md` records the current evidence and gate state.
- No public route/source removal, Git-history rewrite, repository visibility change, project disconnection, deployment retirement, or deletion is authorized yet.

## Current Vercel ownership map relevant to containment
- `master-hub` — `prj_TaNYVBn6sk81Q82yIJYLphj9YyZV`
- `field-diagnostic-hub` — `prj_2zVf2Yk9BiaXvDb2W3OcyewIsfhx`
- `field-diagnostic-hub-live` — `prj_mtmFlgCFytYKU4kYwFnWAbr2FAPh`
- `job-quote-calculator` — `prj_U39kxPVimHowAukErUvrMFc13RNp`
- `job-quote-calculator-live` — `prj_7q0ALfMnhpp6xGmDzLHWAgmmg5wD`
- `billed-work-tracker-live` — `prj_6mzZBKJOaYh2MJZ3QMDVOfHCFf42`
- `recovery-value-calculator` — `prj_942h8vKuDMyde0K6iu5GF34hfByM`
- `master-hub-live` — `prj_faJO9SG3vdax8edtpXaPFepLDhx8`
- `sam-hub` — `prj_S4OASJcwfx6ohACcf4pvAQFnqvxR`

This map is evidence for preparation only and does not authorize project retirement/disconnection.

## Other open deployment/source ownership gaps
- Duplicate/cross-linked Vercel projects remain unresolved.
- Recovery Value Calculator configured target remains a separate broken-target remediation item.
- Standalone-tool canonical source/backup ownership remains incomplete.
- Registry `Live` labels remain static metadata rather than runtime health checks.

## Persistence reality
- Master Hub actions: browser `localStorage`.
- Finances Command Center: browser `localStorage`.
- Repair Package drafts / local overrides / saved packages: browser `localStorage`.
- Billed Work / Scope Templates include existing local state plus existing Supabase-backed tracker behavior exposed by `bw-dashboard.html`.
- Billed Work Supabase persistence currently uses owner-scoped JSONB rows in `billed_work_state` and `billed_work_scope_state`; RLS is enabled on both.

## Finalized releases preserved
- `CONTROL-BASELINE-1.0`
- `SECURITY-QUALITY-1.0`
- `SECURITY-BOUNDARY-1.0` classification baseline; physical containment remains open
- `PROJECT-OPS-1.0`
- `REMEDIATION-WAVE1-1.0`
- `SCOPE-ISOLATION-1.0`
- `SECURITY-CONTAINMENT-PREP-1.0`

## Current controlled next action
1. Transfer the exact current restricted source bytes into the verified private preservation store through a supported secure transfer path.
2. Verify file completeness against the recorded Git blob IDs/byte counts or equivalent cryptographic evidence.
3. Preserve/export the Supabase Billed Work operational payload through an approved recovery-safe method and verify recovery completeness without overwriting live data.
4. Resolve/preserve standalone NTE/quote and related restricted tool source ownership.
5. Only after verified preservation is complete, request approval for public-surface/source containment.
6. Treat Git-history rewrite and Vercel retirement/disconnection as separate explicit approval gates.

KNOWN DEFECTS: See `11_DEFECT_REGISTER.md`.
KNOWN RISKS: See `12_RISK_REGISTER.md`.
OPERATIONAL QUEUE: See `22_PROJECT_OPERATIONS_QUEUE.md`.