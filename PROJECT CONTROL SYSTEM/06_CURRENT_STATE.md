# 06 — Current State

DATE: 2026-10-02
STATUS: REMEDIATION WAVE 1 FINALIZED / SCOPE ISOLATION VERIFIED & FINALIZED / SECURITY CONTAINMENT PREPARATION FINALIZED / VERCEL FAN-OUT AUDIT FINALIZED / STANDALONE SOURCE OWNERSHIP FINALIZED / PRIVATE PRESERVATION STORE VERIFIED / SOURCE COPY INCOMPLETE

## Authority
- Canonical repository: `ssalem9580/master-hub`
- Canonical branch: `main`
- Governance baseline: `CONTROL-BASELINE-1.0` — FINALIZED
- Project Operations: `PROJECT-OPS-1.0` — FINALIZED / OWNER ACCEPTED
- Security/quality baseline: `SECURITY-QUALITY-1.0` — VERIFIED / OWNER ACCEPTED / RELEASED
- Restricted-content classification: `SECURITY-BOUNDARY-1.0` — FINALIZED CLASSIFICATION / PHYSICAL CONTAINMENT OPEN
- Security containment preparation: `SECURITY-CONTAINMENT-PREP-1.0` — FINALIZED / OWNER ACCEPTED
- Scope isolation release: `SCOPE-ISOLATION-1.0` — VERIFIED / FINALIZED / OWNER ACCEPTED
- BW Lead Scope release: `BW-LEAD-SCOPE-1.0` — OWNER FINALIZED / SOURCE+PREVIEW VERIFIED / PRODUCTION PROMOTION BLOCKED
- Vercel fan-out audit: `VERCEL-FANOUT-AUDIT-1.0` — VERIFIED / FINALIZED / OWNER ACCEPTED
- Standalone source ownership: `STANDALONE-SOURCE-OWNERSHIP-1.0` — VERIFIED / FINALIZED / OWNER ACCEPTED

## Machine-readable operations snapshot
CURRENT_PRODUCTION_COMMIT: e6470da8e7407bc2978573eb9de6ba907767cda3
CURRENT_DEPLOYMENT: dpl_6fML2omJ4CYitTrXXVE7tp2ZTHwG
BUILD_STATUS: READY — accepted Vercel fan-out audit release is live; standalone-source finalization and later preservation-control records may be ahead of production because Vercel has rejected newer deployments at the account daily deployment limit
SECURITY_STATUS: CRITICAL — private preservation store now exists and is verified owner-only/not shared; restricted repository source lineage and Supabase recovery fingerprints are verified; exact restricted source-byte copy and operational-data backup remain incomplete, so destructive containment remains blocked
BW_LEAD_SCOPE_STATUS: OWNER FINALIZED / MAIN+CI+READY PREVIEW VERIFIED / CANONICAL PRODUCTION PROMOTION BLOCKED BY VERCEL BUILD RATE LIMIT
SCOPE_ISOLATION_STATUS: VERIFIED / FINALIZED — exact Device → SubDevice → Scope selection, manual filtering, compatible-lead filtering and cross-group attachment blocking are present in verified production
REPAIR_PACKAGE_STATUS: VERIFIED — DEF-010 automated Part # → Name → Cost → Add → Total → Save → persistence regression is complete; owner finalization remains separate
PROJECT_CONTROL_STATUS: SOURCE-BOUND / CI VERIFIED / OWNER ACCEPTED / PRODUCTION VERIFIED
VERCEL_FANOUT_STATUS: AUDIT VERIFIED / FINALIZED — actual Git-integration cleanup remains separately approval-gated
STANDALONE_SOURCE_STATUS: VERIFIED / FINALIZED / OWNER ACCEPTED — Recovery Value + Field Diagnostic ownership established; Recovery Value canonicalization/restoration and Vercel cleanup remain open
WAVE1_STATUS: FINALIZED

## Production reality
- Canonical Vercel project: `master-hub`
- Canonical alias: `https://master-hub-sigma.vercel.app`
- Verified READY deployment for the accepted fan-out audit release: `dpl_6fML2omJ4CYitTrXXVE7tp2ZTHwG`.
- Verified production commit: `e6470da8e7407bc2978573eb9de6ba907767cda3`.
- Standalone source-ownership finalization is merged to `main` and ahead of production.
- `/project-control`: HTTP 200 on the verified production release.
- `/scope-templates`: HTTP 200 reverified 2026-10-02.
- `/bw-dashboard.html`: HTTP 200 reverified 2026-10-02.
- `/field-resource-hub`: HTTP 200 reverified 2026-10-02.
- Live Scope Templates client artifact contains exact Device/SubDevice hierarchy generation, exact template compatibility checks, manual scope filtering, compatible-lead attachment filtering, and explicit cross-group attachment blocking.
- Scope isolation CI evidence: GitHub Actions `36949404777` PASS.
- Wave-1 source-binding CI evidence: GitHub Actions `36951330664` PASS.
- Security-containment preparation CI evidence: GitHub Actions `36958317975` PASS.
- Vercel fan-out audit CI evidence: GitHub Actions `36964223310` PASS.
- Vercel fan-out audit finalization CI evidence: GitHub Actions `36967327012` PASS.
- Standalone source-ownership validation CI evidence: GitHub Actions `36968603081` PASS.
- Vercel checks for the source-ownership validation/finalization were blocked by `api-deployments-free-per-day`; no deployment claim is made for those later commits.
- Safe prior scope rollback: `dpl_2Mtpv99iSHbBfPtNsUFU43Z1R59z` at `965a2b2e6ea15b053e2d60ca4c76802bcd3d5755`.

- BW Lead Scope finalization source is merged at `1af17aae26d43309fbf913c6878b0fc52278295b`; controlled redeploy trigger `ad01245bb5864eec6869d7028e5f9ab6056e524a` is also on `main`, but Vercel rejected production attempts at the account build-rate limit.
- Exact fixed artifact is READY on preview `dpl_F1GwuqFCS28xQTVkryZ8CmDiAZhP`; its `/api/scope-isolation`, `/bw-dashboard.html` and `/scope-templates` all returned HTTP 200 and the dashboard contains the centralized loader.

## Scope Templates / Device → SubDevice isolation
- Centralized hierarchy is derived from imported work orders, reconciled records and saved templates.
- Device selection exposes only SubDevices observed under that Device.
- Scope selection exposes only scopes saved/found under the exact normalized Device → SubDevice pair.
- Manual template selection is filtered to the exact Device/SubDevice pair.
- Attach-to-lead candidates are filtered to matching Device/SubDevice.
- Direct incompatible cross-group attachment attempts are blocked.
- Status: VERIFIED / FINALIZED / OWNER ACCEPTED.
- Release: `RELEASES/SCOPE-ISOLATION-1.0.md`.

## BW Lead direct Scope finalization
- Release: `BW-LEAD-SCOPE-1.0`.
- Owner acceptance/finalization: RECORDED under DEC-018.
- Direct `bw-dashboard.html` now loads `/api/scope-isolation`, which returns the existing centralized `scopeIsolationScript`.
- No Device/SubDevice matching rules, Scope Template data, lead associations, localStorage schema, Supabase schema or operational rows were migrated or replaced.
- PR CI `36981871706`: PASS.
- Post-merge main CI `36981972545`: PASS.
- READY preview `dpl_F1GwuqFCS28xQTVkryZ8CmDiAZhP`: live verification PASS.
- Canonical production activation: BLOCKED by Vercel account build-rate limit; do not call this release production-verified until the canonical alias serves the loader.

## Repair Packages / DEF-010
- DEF-010 is `VERIFIED`.
- Automated regression covers exact Part # `11066404000A` → expected name/cost → add → total → save → localStorage persistence/remount restore.
- Owner finalization of the broader Repair Package update remains separate.

## Project Control source-binding
- `/project-control` reads canonical Current State, Operations Queue and Defect Register records at build time.
- Operational status is no longer owned by duplicated hard-coded status text.
- Status: BUILT / CI VERIFIED / OWNER ACCEPTED / PRODUCTION VERIFIED.

## Standalone source ownership validation
Validation record: `PROJECT CONTROL SYSTEM/34_STANDALONE_SOURCE_OWNERSHIP_VALIDATION.md`.
Release: `RELEASES/STANDALONE-SOURCE-OWNERSHIP-1.0.md`.
Status: VERIFIED / FINALIZED / OWNER ACCEPTED.

### Recovery Value Calculator
- Recovery branch: `codex/recovered-standalone-apps`.
- Exact recovery commit: `751a73b17bef47c47a2a0b9467560a197fef8f0f`.
- Recovered path: `standalone-apps/recovery-value-calculator/index.html`.
- Blob: `c92b27a42c50f56190ce8ae06246a4b794f11a60`.
- Vercel project mapping: `recovery-value-calculator` / `prj_942h8vKuDMyde0K6iu5GF34hfByM`.
- READY recovered-source deployment evidence: `dpl_GqUtL7rAeTVtF92do5hYknWiNS6A` at the exact recovery commit.
- READY branch-head deployment evidence: `dpl_ARDHGmgp38HhZkEdPr1MmP1NRNuq` at `ea79f6c843be5b47f756d5389b798337b75aaa44`.
- Conclusion: recovered source and matching Vercel project are VALIDATED / OWNER ACCEPTED; source is not present on current `main`, canonicalization is incomplete, and production restoration remains open.

### Field Diagnostic Hub
- Historical recovery commit: `3c8ea7cafe958ff46effb4c6b4fcbc38717f5bbb`.
- Historical recovered path: `standalone-apps/field-diagnostic-hub/index.html`.
- Historical blob: `60a0a1867801b63e162f2e4ef90f12ecc9ff4c27`.
- READY recovered-source deployment evidence: `dpl_HK3qUCKd6AuRN4H8unHLfaeuszas`.
- READY branch-head deployment evidence: `dpl_8WFZm9oyrDvtAzmsw1P4bRvFtuWn`.
- Current canonical active source is now integrated into Master Hub `main`: `master-hub-app/src/app/field-diagnostic-hub/page.tsx` loads `master-hub-app/public/field-diagnostic-hub.html`.
- Current static blob `c6c8fa3489b0fc70b4e79dd4f8b411c7e263e39f` differs from the recovered standalone blob, so the integrated source has evolved beyond the recovery snapshot.
- Conclusion: standalone Field Diagnostic source is a VALIDATED RECOVERY ARTIFACT; current canonical active source is the Master Hub `main` integrated route/static asset.
- Do not copy the recovered standalone Field Diagnostic source back into public `main` while restricted-data containment remains open.

## Security / restricted data
- Master Hub remains public/no-login under the established decision record.
- Field-service operational material remains RESTRICTED by default.
- Existing restricted public exposure remains `OPEN / CRITICAL` under DEF-009.
- Controlled containment preparation is FINALIZED / OWNER ACCEPTED as `SECURITY-CONTAINMENT-PREP-1.0`.
- Project Owner approved establishment/migration of a separate private canonical destination/store for restricted field-service source.
- A Google Drive preservation store named `Master Hub Restricted Field Service — Private Preservation` now exists and was verified `shared=false` with owner-only permission metadata before preservation use.
- Private checkpoint/evidence metadata has been stored there and independently verified not shared.
- Exact repository-backed restricted source blob IDs and byte counts from `PROJECT CONTROL SYSTEM/32_SECURITY_PRESERVATION_SOURCE_HASHES.md` still match the restricted source lineage after `SCOPE-ISOLATION-1.0`, including finalized Scope Isolation source.
- Supabase Billed Work persistence was verified as ACTIVE_HEALTHY; `billed_work_state` and `billed_work_scope_state` have RLS enabled with owner-scoped authenticated CRUD policies. Non-content row counts, payload sizes and fingerprints were recorded without retrieving customer/ledger payload contents.
- Verified private preservation COPY is NOT COMPLETE: exact restricted source bytes and Supabase operational payload backup have not yet been transferred/recovery-tested in the private store.
- `PROJECT CONTROL SYSTEM/35_RESTRICTED_PRIVATE_PRESERVATION_CHECKPOINT.md` records the current evidence and gate state.
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
- Duplicate/cross-linked Vercel project fan-out is VERIFIED; actual Git-integration cleanup remains unresolved and approval-gated.
- Recovery Value recovered source/project mapping is validated and owner-accepted, but canonicalization and production restoration remain open.
- Field Diagnostic current canonical source is the integrated Master Hub route; standalone project cleanup remains approval-gated and must respect restricted-source preservation.
- Standalone source/backup ownership remains incomplete for NTE Quote, Billed Work Tracker, Sam Hub and any other unresolved external tools.
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
- `BW-LEAD-SCOPE-1.0` — OWNER FINALIZED / SOURCE+PREVIEW VERIFIED / PRODUCTION ACTIVATION PENDING
- `SECURITY-CONTAINMENT-PREP-1.0`
- `VERCEL-FANOUT-AUDIT-1.0`
- `STANDALONE-SOURCE-OWNERSHIP-1.0`

## Current controlled next action
1. Transfer the exact current restricted source bytes into the verified private preservation store through a supported secure transfer path.
2. Verify file completeness against the recorded Git blob IDs/byte counts or equivalent cryptographic evidence.
3. Preserve/export the Supabase Billed Work operational payload through an approved recovery-safe method and verify recovery completeness without overwriting live data.
4. Continue source/backup preservation for NTE Quote, Billed Work Tracker, Sam Hub and any remaining restricted standalone tools, using `STANDALONE-SOURCE-OWNERSHIP-1.0` where applicable.
5. Recovery Value: use the validated recovered source as the recovery input; do not promote to production until its separate controlled restore gate is satisfied.
6. Only after verified preservation is complete, request approval for public-surface/source containment.
7. Treat Git-history rewrite and Vercel retirement/disconnection as separate explicit approval gates.

KNOWN DEFECTS: See `11_DEFECT_REGISTER.md`.
KNOWN RISKS: See `12_RISK_REGISTER.md`.
OPERATIONAL QUEUE: See `22_PROJECT_OPERATIONS_QUEUE.md`.
