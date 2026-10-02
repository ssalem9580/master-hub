# 22 — Master Hub Project Operations & Queue

DATE: 2026-10-02
STATUS: ACTIVE — ALL-ISSUES SAFE REPAIR PASS TESTING

This is the canonical operational queue for the existing Master Hub. It does not create a second project-management system.

## State Rules
Queue: `QUEUED / APPROVED / IN DEVELOPMENT / TESTING / READY FOR REVIEW / WAITING / BLOCKED / FINALIZED / REJECTED / DEFERRED`

Priority: `CRITICAL / HIGH / NORMAL / LOW / SOMEDAY`

Built is not deployed. Deployed is not verified. Verified is not finalized until explicit Project Owner approval.

## Current Build & Deployment Snapshot
- Canonical production alias: `https://master-hub-sigma.vercel.app`
- Canonical production deployment: `dpl_21gm6tzoRrSibaVgUm14yF7Xcf5d` — READY
- Canonical production commit: `5cbf758430d7b4ab5b15af210e6c698cd0e20e8f`
- Verified BW Lead / Scope routes remain healthy on the production lineage.
- Runtime workspace-health source at `1cfb14792c6bce7bf6133d9f9e6bb2d58ace6041` passed Master Hub CI `36985345154` and Public Source Safety `36985345296`.
- `/api/hub-health` is not yet in canonical production and currently returns 404 there; Vercel rejected the newer linked deployments at the deployment-rate limit.

## Operational Queue
| Queue ID | Title | Area / Tool | Priority | Status | Approval / Boundary | Next Action | Finalization |
|---|---|---|---|---|---|---|---|
| QUEUE-001 | Contain restricted field-service material | Security & Restricted Data | CRITICAL | IN DEVELOPMENT | Preparation finalized; private preservation approved; public deletion/history rewrite/visibility change not authorized | Complete independent exact-byte source archive and independent database export/recovery test; then request physical-containment approval | PREPARATION FINALIZED / PHYSICAL CONTAINMENT OPEN |
| QUEUE-002 | Repair Package Part # auto-fill source | Repair Packages | HIGH | READY FOR REVIEW | Built/deployed/verified; owner finalization separate | Present verified behavior for owner acceptance | NOT FINALIZED |
| QUEUE-003 | Repair Package cost-update regression verification | Bugs & Testing | HIGH | READY FOR REVIEW | DEF-010 VERIFIED | Retain regression; owner finalization only | NOT FINALIZED |
| QUEUE-004 | Reduce duplicate Vercel project build fan-out | Build & Deployment | HIGH | WAITING / BLOCKED | Audit/ownership finalized; disconnect/retire is separately approval-gated and current connector exposes no integration-write action | Apply reversible Git-integration cleanup only when explicitly approved and technically available | CLEANUP NOT FINALIZED |
| QUEUE-005 | Restore Recovery Value Calculator root target | Integration | HIGH | WAITING / BLOCKED | Recovered source/project validated; promotion/configuration change remains approval-gated because recovered content is restricted | Preserve canonically/private, verify workflow, then request production-promotion/root-config approval | RESTORATION NOT FINALIZED |
| QUEUE-006 | Source-bind Project Control Center status | Project Control | NORMAL | FINALIZED | OWNER ACCEPTED / PRODUCTION VERIFIED | Maintain dynamic record discovery/live truth checks | FINALIZED |
| QUEUE-007 | Recover canonical source for standalone tools | Recovery / Integrations | HIGH | IN DEVELOPMENT | Recovery Value + Field Diagnostic ownership finalized; destructive cleanup gated | Continue source/backup discovery for NTE Quote, standalone Billed Work, Sam Hub; current Vercel metadata exposes no Git source | PARTIAL |
| QUEUE-008 | Enforce main/baseline repository protection | Governance / GitHub | HIGH | WAITING / BLOCKED | Owner workflow decision/admin capability required; rulesets currently empty | Enable required ruleset when GitHub admin write capability is available | NOT FINALIZED |
| QUEUE-009 | Project Operations & Queue control layer | Project Control | HIGH | FINALIZED | OWNER ACCEPTED | Maintain as canonical operational system | FINALIZED |
| QUEUE-010 | Strict Device → SubDevice → Scope isolation | Scope Templates | HIGH | FINALIZED | OWNER ACCEPTED | Maintain regression coverage | FINALIZED — `SCOPE-ISOLATION-1.0` |
| QUEUE-011 | Controlled reconstruction / canonical truth pass | Project Control | HIGH | FINALIZED | OWNER ACCEPTED | Continue only evidence-backed legacy reconstruction as needed | FINALIZED |
| QUEUE-012 | Finalize Scope inside direct BW Lead tool | Billed Work / Scope Templates | HIGH | FINALIZED | OWNER ACCEPTED / PRODUCTION VERIFIED | Maintain centralized isolation regression coverage | FINALIZED — `BW-LEAD-SCOPE-1.0` |
| QUEUE-013 | Repair all safely repairable open issues | Cross-project remediation | CRITICAL | TESTING | User instruction `repair all issues`; destructive/configuration approval gates remain intact | Live-verify runtime workspace health after Vercel capacity clears; then move the safe repair pass to owner review | NOT FINALIZED |

## Safe repairs completed in QUEUE-013 so far
- Root README normalized.
- App README normalized.
- Integration & Data Source Register created as record 38.
- Restricted preservation refresh created as record 39.
- Exact in-project Supabase recovery snapshots created and fingerprint-verified; recovery schema/table access revoked from `anon` and `authenticated`.
- Private recovery-metadata document stored inside owner-only, `shared=false` Drive preservation folder.
- Public-source secret-pattern guard and GitHub Actions workflow added and verified.
- Open Issues, Defect Register, Risk Register, Technical Debt Register and Current State reconciled against current evidence.
- Project Control stale-drift issue/defects/risk are now consistently closed/resolved.
- Integration-inventory debt and README documentation debt are now consistently resolved.
- Runtime workspace health endpoint and dashboard Live/Offline status merging are built and CI verified.
- Recovery Value static fallback is now Offline instead of a false Live claim; runtime checks will override workspace status when available.

## Remaining genuine blockers
- **DEF-009 / RISK-007 / RISK-015:** restricted public exposure and historical exposure cannot be closed until independent preservation plus separately approved containment/history action.
- **DEF-004 / ISSUE-008 / ISSUE-012:** Recovery Value root remains broken; source is validated but restoration is gated.
- **ISSUE-011 / TD-011 / RISK-012:** original source ownership remains unknown for NTE Quote, standalone Billed Work and Sam Hub.
- **ISSUE-013 / TD-013 / RISK-014:** rulesets are absent and admin ruleset-write capability is unavailable in the current connector.
- **TD-004 / RISK-004:** runtime health mitigation is source/CI verified but production verification is blocked by Vercel deployment quota.
- **ISSUE-003 / DEF-003:** missing source tail cannot be fabricated.
- **TD-003:** mixed legacy styling/component architecture is maintenance debt, not an outage; migrate incrementally without redesign-only rewrites.

## Security & Restricted Data
Restricted field-service, parts, billed-work, scope, quote/customer-operational and proprietary workflow content remains RESTRICTED by default. No new restricted payload has been added to public source by this repair pass. No public route/source removal, Git history rewrite, repository visibility change, Vercel project disconnect/retirement or destructive cleanup has been performed.

## Data & Integrations
Canonical baseline inventory: `38_INTEGRATION_AND_DATA_SOURCE_REGISTER.md`.

Recovery checkpoint refresh: `39_SECURITY_PRESERVATION_REFRESH.md`.

## UI / UX
- Android/mobile first; desktop supported.
- Preserve existing workflows/storage keys.
- No redesign solely for appearance.
- Runtime workspace Live/Offline status is now source-backed by `/api/hub-health`; production verification remains pending.

## Next verification gate
1. Wait for Vercel deployment capacity to accept the current repair source.
2. Verify canonical production deployment commit.
3. Live-check `/api/hub-health` and confirm Recovery Value is reported Offline while reachable workspaces are reported Live.
4. Verify Dashboard/Directory counts/grouping use runtime results.
5. Move QUEUE-013 to READY FOR REVIEW after production evidence exists.
