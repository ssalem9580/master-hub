# 00 — MasterHub Audit Remediation Priority Matrix

Status: PROPOSED FROM VERIFIED AUDIT EVIDENCE
Date: 2026-09-30
Source: 00_MASTERHUB_RECONSTRUCTION_REALITY_AUDIT.md
Branch: audit/masterhub-reconstruction-reality-20260930

## Priority Rules
- P0 — security, data-boundary, or recovery risk that can materially harm the project.
- P1 — broken core behavior, verification gaps, deployment/recovery controls.
- P2 — governance/product drift that should be corrected after P0/P1.
- P3 — completeness, cleanup, and long-horizon reconstruction.

No remediation is authorized solely because it appears in this matrix.

| Priority | Item | Evidence | Proposed action | Approval gate |
|---|---|---|---|---|
| P0 | Next.js 16.3.4 below current security baseline | Official 2026-09-30 guidance says 16.3.8; 16.3.6 critical upstream fix | Upgrade to 16.3.8 on controlled branch; run build/test/lint; verify routes; then deploy | Branch work safe; production deploy requires release gate |
| P0 | Public access boundary unresolved | All six canonical routes HTTP 200 without login; no app auth layer | Decide whether "private" means access-controlled; if yes design auth/authorization before exposing restricted/private material | OWNER DECISION REQUIRED |
| P0 | Public field-service material classification unresolved | Public repo + public field diagnostic asset | Classify material; separate restricted content if needed; do not delete history without recovery | OWNER DECISION REQUIRED before visibility/removal |
| P0 | Canonical baseline/main not GitHub-enforced | main and baseline branch protected=false; no rulesets | Define PR/status-check rules and protect canonical baseline strategy | OWNER DECISION REQUIRED because workflow changes |
| P1 | Recovery Value Calculator broken | Configured Live URL HTTP 404 | Validate recovered source at 751a73b...; copy only recovery source to current controlled branch; configure recovery Vercel Root Directory; preview-test; promote | Production Vercel config/promotion requires approval |
| P1 | Recovery source stranded outside main | codex/recovered-standalone-apps survives; source path known | Canonicalize verified recovery source after review | Merge/release gate |
| P1 | CI build omits test/lint | Workflow only runs npm run build | Repair stale tests, then add npm test + npm run lint to CI | Branch work safe; merge normal release gate |
| P1 | Current UI tests are stale | Test source expects obsolete controls absent from current component | Rewrite tests against current approved behavior; preserve legacy intent only if still approved | Branch work safe |
| P1 | Vercel deployment fan-out / duplicate projects | Nine projects; same commits trigger multiple linked projects; build-rate failures | Create canonical ownership matrix; disconnect unintended Git links only after source/recovery validation | OWNER APPROVAL for disconnect/delete |
| P1 | Standalone source ownership incomplete | Job Quote/Sam Hub CLI deployments; Billed Work no Git metadata | Recover/version source or document authoritative external source + backup | No destructive cleanup until complete |
| P2 | Project Control Center is static/stale | page source duplicates state text instead of reading canonical records | Generate a machine-readable status snapshot or build-time generated source-bound view | Architecture choice then branch work |
| P2 | Registry Live statuses are hard-coded | Recovery is labeled Live but 404s | Add verification metadata / last-checked status; downgrade broken/unknown entries until verified | Status corrections safe; automation architecture later |
| P2 | Production SHA behind main | Vercel production ef13... vs main e8ca..., but code parity verified | Redeploy only when a product/security change warrants it; do not deploy docs merely for SHA parity | Release gate |
| P2 | README/documentation drift | README/tests describe older seeded/project-pulse behavior | Normalize docs after historical decision reconstruction | Branch work safe |
| P3 | Historical decisions incomplete | ISSUE-001 / TD-001 | Reconstruct from commits, surviving branches, deployment history, owner instructions | Ongoing |
| P3 | Full external-link health incomplete | Two chatgpt.site targets not independently verified | Verify through their owning platform or owner evidence | No destructive action |
| P3 | Legacy Vercel cleanup | master-hub-live, field-diagnostic variants, job-quote-live may be legacy | Retire only after source/backups and canonical ownership are explicit | OWNER APPROVAL REQUIRED |

## Recommended Execution Order

### Wave 1 — Security and Recovery Preparation
1. Patch Next.js to 16.3.8 on a controlled implementation branch.
2. Repair/normalize tests and add test + lint CI gates.
3. Validate Recovery Value recovered source without production promotion.
4. Inventory standalone source ownership/backups.
5. Prepare GitHub protection/ruleset proposal.
6. Prepare access-control/privacy-boundary options.

### Wave 2 — Owner Decisions / Production Changes
1. Decide public vs access-controlled MasterHub boundary.
2. Decide field-service distribution classification.
3. Approve GitHub enforcement rules.
4. Approve Recovery Vercel Root Directory / production restoration.
5. Approve duplicate Vercel disconnect/retirement plan.

### Wave 3 — Governance/UI Synchronization
1. Make Project Control Center source-bound.
2. Make app-status evidence visible and date-stamped.
3. Normalize README/current-state/legacy labels.

### Wave 4 — Historical Completion
1. Reconstruct legacy decisions.
2. Complete MVP requirement traceability.
3. Run finalization/owner-acceptance audit.
4. Freeze the next verified product baseline.

## Do-Not-Do List
- Do not rebuild Recovery Value from memory while recovered source exists.
- Do not delete duplicate Vercel projects before source/backup ownership is confirmed.
- Do not make the repository private/public or move restricted material without explicit owner approval.
- Do not call green build status "fully tested" until tests/lint are part of CI.
- Do not treat hard-coded "Live" labels as health evidence.
- Do not move the governance baseline reference casually; current branch freeze is not technically enforced.

## Current Recommended Next Implementation
**SECURITY + QUALITY HARDENING BRANCH**
- Next.js 16.3.8
- current-UI Vitest repair
- lint/test CI gates
- no feature expansion
- no Vercel project deletion
- no access-control architecture change yet
- no production promotion until verification
