# 06 — Current State

DATE: 2026-10-02
STATUS: CORE OPERATIONS FINALIZED / BW LEAD SCOPE PRODUCTION VERIFIED / ALL-ISSUES SAFE REPAIR PASS TESTING / RESTRICTED PHYSICAL CONTAINMENT OPEN

## Authority
- Canonical repository: `ssalem9580/master-hub`
- Canonical branch: `main`
- Canonical Vercel project: `master-hub`
- Canonical production alias: `https://master-hub-sigma.vercel.app`
- Governance baseline: `CONTROL-BASELINE-1.0` — FINALIZED
- Project Operations: `PROJECT-OPS-1.0` — FINALIZED / OWNER ACCEPTED
- Security/quality baseline: `SECURITY-QUALITY-1.0` — VERIFIED / RELEASED
- Restricted-data classification: `SECURITY-BOUNDARY-1.0` — FINALIZED CLASSIFICATION / PHYSICAL CONTAINMENT OPEN

## Machine-readable operations snapshot
CURRENT_PRODUCTION_COMMIT: 5cbf758430d7b4ab5b15af210e6c698cd0e20e8f
CURRENT_DEPLOYMENT: dpl_21gm6tzoRrSibaVgUm14yF7Xcf5d
BUILD_STATUS: READY — canonical production is healthy at the normalized app-documentation commit; later all-issues repair and runtime-health source is ahead of production because Vercel rate-limited the linked deployments
SECURITY_STATUS: CRITICAL / PRESERVATION ADVANCED — restricted public exposure remains; owner-only Drive store verified; exact in-project Supabase recovery snapshots created and fingerprint-verified; independent exact-byte source archive and independent DB export/recovery test remain incomplete
BW_LEAD_SCOPE_STATUS: VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED
SCOPE_ISOLATION_STATUS: VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED
REPAIR_PACKAGE_STATUS: VERIFIED / READY FOR OWNER FINALIZATION
PROJECT_CONTROL_STATUS: SOURCE-BOUND / LIVE-TRUTH SYNC FINALIZED / PRODUCTION VERIFIED
INTEGRATION_INVENTORY_STATUS: BASELINE COMPLETE — record 38
PUBLIC_SOURCE_SAFETY_STATUS: VERIFIED — Public Source Safety passed on runtime-health source head `1cfb1479`
WORKSPACE_HEALTH_STATUS: BUILT / CI VERIFIED / PRODUCTION PENDING — `/api/hub-health` and dashboard runtime status merging passed canonical CI but are not yet on canonical production
VERCEL_FANOUT_STATUS: AUDIT FINALIZED / CLEANUP OPEN AND APPROVAL-GATED
STANDALONE_SOURCE_STATUS: PARTIAL — Recovery Value + Field Diagnostic established; NTE Quote / standalone Billed Work / Sam Hub original source ownership still unknown
BRANCH_PROTECTION_STATUS: OPEN / BLOCKED — GitHub rulesets inventory is empty and current connector exposes no admin ruleset-write action

## Production reality
- Canonical production deployment `dpl_21gm6tzoRrSibaVgUm14yF7Xcf5d` is READY at `5cbf758430d7b4ab5b15af210e6c698cd0e20e8f`.
- That production includes the previously verified BW Lead / Scope behavior plus normalized app documentation.
- `/project-control` — HTTP 200 on canonical production.
- `/scope-templates` — HTTP 200 on the verified production lineage.
- `/bw-dashboard.html` — HTTP 200 and loads `/api/scope-isolation` on the verified production lineage.
- `/api/scope-isolation` — HTTP 200 and serves the centralized strict Device → SubDevice → Scope engine.
- `/api/hub-health` — HTTP 404 on current production because the runtime-health source has not deployed yet; this is an expected source-ahead-of-production condition, not a source build failure.
- `BW-LEAD-SCOPE-1.0` is VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED.
- DEF-011 is CLOSED.
- DEF-010 Repair Package exact Part # → Name → Cost → Add → Total → Save → persistence regression remains VERIFIED.

## Runtime workspace health repair
- Source adds `master-hub-app/src/app/api/hub-health/route.ts` with fixed workspace targets, no-store checks and bounded timeouts.
- Master Hub dashboard source fetches `/api/hub-health` after mount and uses returned Live/Offline results for workspace grouping and counts.
- Recovery Value fallback is `Offline`, matching the known broken root target rather than falsely presenting it as Live.
- Canonical Master Hub CI run `36985345154` completed SUCCESS for source commit `1cfb14792c6bce7bf6133d9f9e6bb2d58ace6041`.
- Public Source Safety run `36985345296` completed SUCCESS for the same commit.
- Vercel checks for `master-hub`, `field-diagnostic-hub` and `recovery-value-calculator` were rejected by the deployment rate limit; therefore runtime health is not yet production verified.

## Project Control
- `/project-control` discovers canonical Project Control Markdown records rather than owning duplicated status text.
- It separately reports current repository head, served revision and last verified production evidence.
- `PROJECT-CONTROL-LIVE-TRUTH-1.0` is FINALIZED / OWNER ACCEPTED.
- Stale static Project Control drift defects/risk are closed/mitigated in the canonical defect/risk registers.

## Data & integrations
Canonical inventory: `PROJECT CONTROL SYSTEM/38_INTEGRATION_AND_DATA_SOURCE_REGISTER.md`.

Current persistence:
- Master Hub actions: browser `localStorage`.
- Finances Command Center: browser `localStorage`.
- Repair Packages: browser `localStorage` plus bundled parts source.
- Billed Work / Scope Templates: local browser state plus owner-scoped Supabase `billed_work_state` and `billed_work_scope_state`.
- Relevant Supabase tables have RLS enabled with owner-scoped authenticated CRUD policies.

## Restricted-data preservation
- Field-service diagnostics, procedures, parts, Billed Work data, scope wording, quote/customer operational information and proprietary workflows remain RESTRICTED by default.
- Existing public exposure remains OPEN / CRITICAL under DEF-009.
- Private Google Drive preservation folder is verified `shared=false` with owner-only permission metadata.
- Record 39 refreshes the current restricted-source lineage after `BW-LEAD-SCOPE-1.0`.
- New private Supabase recovery layer created 2026-10-02:
  - `recovery.billed_work_state_20261002`
  - `recovery.billed_work_scope_state_20261002`
- Recovery schema/table access is revoked from `anon` and `authenticated`.
- At snapshot time both recovery tables exactly matched live row counts, serialized payload lengths and content fingerprints.
- Private Drive document `Master Hub — Supabase Recovery Snapshot 2026-10-02` stores recovery metadata only and is verified not shared.
- This is not yet an independent external database export. Exact current restricted source bytes also have not yet been copied to an independent private byte archive.
- No public restricted source/route has been deleted. No Git history has been rewritten. No repository visibility has changed. No Vercel project has been disconnected/retired.

## Standalone tools
### Recovery Value Calculator
- Recovered source commit: `751a73b17bef47c47a2a0b9467560a197fef8f0f`.
- Matching Vercel project: `prj_942h8vKuDMyde0K6iu5GF34hfByM`.
- Root target remains HTTP 404.
- Exact recovered nested deployment path returns HTTP 200.
- Source/project ownership is validated/finalized; canonical private preservation and controlled root restoration remain open and production promotion is approval-gated.

### Field Diagnostic Hub
- Current canonical source is the evolved integrated Master Hub route/static asset.
- Historical standalone source is a recovery artifact only and must not be copied back into public `main` while containment is open.

### NTE Quote / standalone Billed Work / Sam Hub
- Vercel production deployments exist and are READY.
- Observed deployment metadata does not expose original Git/source ownership.
- Source/backup ownership therefore remains `UNKNOWN / NEEDS CONFIRMATION` rather than being invented.

## Repository/documentation repairs in current safe repair pass
- Root README normalized with canonical build/deploy/security/recovery instructions.
- `master-hub-app/README.md` normalized to current architecture.
- Integration/source inventory established as record 38.
- Restricted preservation lineage/recovery refresh established as record 39.
- Public-source secret-pattern CI guard added and verified.
- Open Issues, Defect Register, Risk Register and Technical Debt Register reconciled against current evidence.
- Runtime workspace-health status implementation is built and CI verified; production verification remains pending.

## Finalized releases preserved
- `CONTROL-BASELINE-1.0`
- `SECURITY-QUALITY-1.0`
- `SECURITY-BOUNDARY-1.0` classification baseline
- `PROJECT-OPS-1.0`
- `REMEDIATION-WAVE1-1.0`
- `SCOPE-ISOLATION-1.0`
- `BW-LEAD-SCOPE-1.0`
- `SECURITY-CONTAINMENT-PREP-1.0`
- `VERCEL-FANOUT-AUDIT-1.0`
- `STANDALONE-SOURCE-OWNERSHIP-1.0`
- `PROJECT-CONTROL-LIVE-TRUTH-1.0`

## Open blockers / decisions
1. **Restricted containment:** independent exact-byte source preservation and independent database export/recovery verification before public removal; destructive steps require explicit approval.
2. **Git history:** RISK-015 remains Critical and requires a separate history-remediation decision after preservation.
3. **Vercel fan-out:** audit complete; actual integration disconnect/retirement remains approval-gated and unavailable in current connector surface.
4. **Recovery Value:** source is validated but root restoration/promotion remains controlled and approval-gated.
5. **Standalone source recovery:** NTE Quote, standalone Billed Work and Sam Hub original source ownership remains unknown.
6. **Branch protection:** current rulesets inventory is empty; admin write capability is unavailable through the current connector.
7. **Workspace runtime health:** source/CI repair is complete; production verification is blocked only by Vercel deployment quota.
8. **AI Idea template tail:** source is incomplete; no repair can be fabricated without owner-supplied source.

## Current controlled next action
When Vercel deployment capacity becomes available, deploy the current runtime-health/all-issues repair source and live-verify `/api/hub-health` plus directory status behavior. Keep all approval-gated destructive/configuration items open rather than silently changing them.

KNOWN DEFECTS: See `11_DEFECT_REGISTER.md`.
KNOWN RISKS: See `12_RISK_REGISTER.md`.
OPEN ISSUES: See `07_OPEN_ISSUES.md`.
TECHNICAL DEBT: See `20_TECHNICAL_DEBT_REGISTER.md`.
OPERATIONAL QUEUE: See `22_PROJECT_OPERATIONS_QUEUE.md`.
