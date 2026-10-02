# 06 — Current State

DATE: 2026-10-02
STATUS: REMEDIATION WAVE 1 FINALIZED / SCOPE ISOLATION VERIFIED & FINALIZED / SECURITY CONTAINMENT PREPARATION FINALIZED / PRIVATE DESTINATION APPROVED

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
SECURITY_STATUS: CRITICAL — preparation finalized and private canonical destination establishment approved; destination is not yet created/verified and destructive cleanup remains blocked until verified private preservation
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
- Project Owner has approved establishment/migration of a separate private canonical destination for restricted field-service source.
- The connected GitHub control surface currently exposes only the public `ssalem9580/master-hub` repository and does not provide repository creation; therefore the approved private destination is NOT YET CREATED or verified private.
- Exact current-main repository paths, blob IDs and byte counts for the restricted repository-backed preservation set are recorded in `PROJECT CONTROL SYSTEM/32_SECURITY_PRESERVATION_SOURCE_HASHES.md`.
- Verified private preservation copy is NOT COMPLETE.
- No public route/source removal, Git-history rewrite, repository visibility change, project disconnection, deployment retirement, or deletion is authorized by preparation finalization.

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

## Finalized releases preserved
- `CONTROL-BASELINE-1.0`
- `SECURITY-QUALITY-1.0`
- `SECURITY-BOUNDARY-1.0` classification baseline; physical containment remains open
- `PROJECT-OPS-1.0`
- `REMEDIATION-WAVE1-1.0`
- `SCOPE-ISOLATION-1.0`
- `SECURITY-CONTAINMENT-PREP-1.0`

## Current controlled next action
1. Create the approved private canonical restricted field-service destination through an authorized GitHub/admin path.
2. Verify that destination is private before copying restricted content.
3. Preserve restricted source/data dependencies using the Preservation Manifest and exact source-hash record, then verify completeness/recovery.
4. Only after verified preservation, request approval for public-surface/source containment.
5. Treat Git-history rewrite and Vercel retirement/disconnection as separate explicit approval gates.

KNOWN DEFECTS: See `11_DEFECT_REGISTER.md`.
KNOWN RISKS: See `12_RISK_REGISTER.md`.
OPERATIONAL QUEUE: See `22_PROJECT_OPERATIONS_QUEUE.md`.