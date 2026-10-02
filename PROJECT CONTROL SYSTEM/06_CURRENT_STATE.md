# 06 — Current State

DATE: 2026-10-02
STATUS: CORE OPERATIONS FINALIZED / BW LEAD SCOPE PRODUCTION VERIFIED / ALL-ISSUES SAFE REPAIR PASS IN DEVELOPMENT / RESTRICTED PHYSICAL CONTAINMENT OPEN

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
CURRENT_PRODUCTION_COMMIT: b6d075ed9656d52bec59059b3cf8e076933d8f7f
CURRENT_DEPLOYMENT: dpl_7x3L3kGvNn2fntDrNnzz2sFKotps
BUILD_STATUS: READY — canonical production is healthy; documentation/security-repair commits after the BW Lead release may be ahead of production and must not be described as deployed until a later READY build is verified
SECURITY_STATUS: CRITICAL / PRESERVATION ADVANCED — restricted public exposure remains; owner-only Drive store verified; exact in-project Supabase recovery snapshots created and fingerprint-verified; independent exact-byte source archive and independent DB export/recovery test remain incomplete
BW_LEAD_SCOPE_STATUS: VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED
SCOPE_ISOLATION_STATUS: VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED
REPAIR_PACKAGE_STATUS: VERIFIED / READY FOR OWNER FINALIZATION
PROJECT_CONTROL_STATUS: SOURCE-BOUND / LIVE-TRUTH SYNC FINALIZED / PRODUCTION VERIFIED
INTEGRATION_INVENTORY_STATUS: BASELINE COMPLETE — record 38
PUBLIC_SOURCE_SAFETY_STATUS: SECRET-PATTERN GUARD ADDED / CI VERIFICATION REQUIRED FOR CURRENT REPAIR HEAD
VERCEL_FANOUT_STATUS: AUDIT FINALIZED / CLEANUP OPEN AND APPROVAL-GATED
STANDALONE_SOURCE_STATUS: PARTIAL — Recovery Value + Field Diagnostic established; NTE Quote / standalone Billed Work / Sam Hub original source ownership still unknown
BRANCH_PROTECTION_STATUS: OPEN / BLOCKED — GitHub rulesets inventory is empty and current connector exposes no admin ruleset-write action

## Production reality
- Canonical production deployment `dpl_7x3L3kGvNn2fntDrNnzz2sFKotps` is READY at `b6d075ed9656d52bec59059b3cf8e076933d8f7f`.
- `/project-control` — HTTP 200.
- `/scope-templates` — HTTP 200.
- `/bw-dashboard.html` — HTTP 200 and loads `/api/scope-isolation`.
- `/api/scope-isolation` — HTTP 200 and serves the centralized strict Device → SubDevice → Scope engine.
- `BW-LEAD-SCOPE-1.0` is VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED.
- DEF-011 is CLOSED.
- DEF-010 Repair Package exact Part # → Name → Cost → Add → Total → Save → persistence regression remains VERIFIED.

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
- Public-source secret-pattern CI guard added.
- Open Issues, Defect Register, Risk Register and Technical Debt Register reconciled against current evidence.

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
7. **Static workspace health:** Master Hub directory still uses static `Live` metadata; runtime health-backed registry remains open.
8. **AI Idea template tail:** source is incomplete; no repair can be fabricated without owner-supplied source.

## Current controlled next action
Run CI for the safe all-issues repair head, verify the public-source safety job plus canonical lint/test/build, then verify whether a new Vercel production deployment reaches READY. Keep all approval-gated destructive/configuration items open rather than silently changing them.

KNOWN DEFECTS: See `11_DEFECT_REGISTER.md`.
KNOWN RISKS: See `12_RISK_REGISTER.md`.
OPEN ISSUES: See `07_OPEN_ISSUES.md`.
TECHNICAL DEBT: See `20_TECHNICAL_DEBT_REGISTER.md`.
OPERATIONAL QUEUE: See `22_PROJECT_OPERATIONS_QUEUE.md`.
