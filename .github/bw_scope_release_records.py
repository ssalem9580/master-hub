from pathlib import Path

ROOT = Path('.')

def read(path):
    return (ROOT / path).read_text(encoding='utf-8')

def write(path, text):
    (ROOT / path).write_text(text, encoding='utf-8')

def append_once(path, marker, block):
    text = read(path)
    if marker not in text:
        write(path, text.rstrip() + '\n\n' + block.strip() + '\n')

append_once('PROJECT CONTROL SYSTEM/03_DECISION_LOG.md', '## DEC-018', '''
## DEC-018
DATE: 2026-10-02
TITLE: Finalize Scope workflow within the BW Lead tool
STATUS: APPROVED
QUESTION: Should the Scope workflow inside the direct BW Lead dashboard be owner-finalized using the already-finalized SCOPE-ISOLATION-1.0 rules?
DECISION: Yes. BW-LEAD-SCOPE-1.0 is owner-finalized as the direct BW Lead application of SCOPE-ISOLATION-1.0. The direct dashboard must load the same centralized Device → SubDevice → Scope isolation engine used by `/scope-templates`; no second matching system is created. Source, automated regression and a READY live preview are verified. Canonical production promotion remains BLOCKED by the Vercel account build-rate limit and must not be represented as production-verified until the canonical alias serves this release.
WHY: Owner explicitly requested `finilize scope within BW Lead tool` and then gave final approval. Finalization review found a real surface gap: `/scope-templates` injected the central isolation layer, but direct `/bw-dashboard.html` did not self-load it. The gap was repaired centrally and verified before acceptance.
ALTERNATIVES CONSIDERED: Falsely finalize without fixing the direct dashboard; duplicate the scope-isolation logic inside the static dashboard; redesign the BW tool.
EVIDENCE: PR #15; product commit `3e58cd05cc5c401b7599a7bec190366c80585ed1`; merge commit `1af17aae26d43309fbf913c6878b0fc52278295b`; PR CI `36981871706` PASS; post-merge CI `36981972545` PASS; READY preview `dpl_F1GwuqFCS28xQTVkryZ8CmDiAZhP`; preview `/api/scope-isolation`, `/bw-dashboard.html`, `/scope-templates` HTTP 200; canonical production deployment remains on earlier commit because Vercel rejected production builds at build-rate limit.
AFFECTED AREAS: BW Lead Scope tab, Scope Templates, Manual Entry template picker, Attach to BW Lead, scope records, direct BW dashboard bootstrap.
SUPERSEDES: Direct-BW-dashboard activation gap only. Does NOT supersede SCOPE-ISOLATION-1.0.
SUPERSEDED BY:
REVIEW REQUIRED: NO for owner acceptance/finalized behavior. YES only for future behavior changes. Production promotion remains an operational deployment task, not a new product decision.
APPROVED BY: Project Owner
''')

append_once('PROJECT CONTROL SYSTEM/09_REQUIREMENTS_REGISTER.md', '## REQ-019 — Direct BW Lead Scope isolation activation', '''
## REQ-019 — Direct BW Lead Scope isolation activation
SOURCE: Project Owner / DEC-018 / SCOPE-ISOLATION-1.0
TYPE: Functional / Data Integrity / Integration
PRIORITY: High
MVP: YES
DESCRIPTION: The direct BW Lead dashboard Scope workflow must load and enforce the same centralized Device → SubDevice → Scope isolation engine as the dedicated `/scope-templates` route.
ACCEPTANCE CRITERIA:
- AC-019A GIVEN direct `/bw-dashboard.html` WHEN it loads THEN the centralized `scopeIsolationScript` is loaded without duplicating its matching logic.
- AC-019B GIVEN the direct BW Scope tab WHEN Device/SubDevice/Scope workflows are used THEN finalized REQ-018 selection, manual-picker and attachment isolation rules remain active.
- AC-019C GIVEN a future change to SCOPE-ISOLATION-1.0 logic WHEN either BW Scope surface loads THEN both consume the same centralized implementation rather than divergent copies.
- AC-019D GIVEN release verification WHEN owner finalization is recorded THEN source/CI/preview verification and canonical-production status are reported separately.
DEPENDENCIES: REQ-018; `scope-isolation-script.ts`; BW dashboard; Next.js API route; Vercel.
IMPLEMENTATION STATUS: IMPLEMENTED ON MAIN
TEST STATUS: PASS — source/CI/READY preview
VERIFICATION STATUS: VERIFIED SOURCE + AUTOMATED + LIVE PREVIEW; CANONICAL PRODUCTION PROMOTION BLOCKED
FINAL STATUS: OWNER ACCEPTED / FINALIZED BEHAVIOR — BW-LEAD-SCOPE-1.0; PRODUCTION ACTIVATION PENDING
''')

append_once('PROJECT CONTROL SYSTEM/10_TEST_REGISTER.md', '| TEST-038 | REQ-019 |', '''
| TEST-038 | REQ-019 | Verify direct BW dashboard loads the centralized finalized scope-isolation engine | PASS | `bw-dashboard.html` loads `/api/scope-isolation`; API returns `scopeIsolationScript`; regression asserts `importedHierarchy`, `scopeCompatible`, incompatible-attachment guard; PR CI `36981871706` PASS | 2026-10-02 |
| TEST-039 | REQ-018 / REQ-019 | Verify merged main passes install, lint, full Vitest suite and production build | PASS | GitHub Actions `36981972545` on merge `1af17aae26d43309fbf913c6878b0fc52278295b` | 2026-10-02 |
| TEST-040 | REQ-019 | Verify exact release artifact live on Vercel preview | PASS | READY preview `dpl_F1GwuqFCS28xQTVkryZ8CmDiAZhP`; `/api/scope-isolation`, `/bw-dashboard.html`, `/scope-templates` HTTP 200; dashboard response contains centralized loader | 2026-10-02 |
| TEST-041 | REQ-019 | Verify canonical production alias serves direct BW scope loader release | BLOCKED | `master-hub` production is still on earlier commit; merge/retry production checks rejected by Vercel build-rate limit; promotion workflow could not run because repo has no `VERCEL_TOKEN` secret | 2026-10-02 |
''')

append_once('PROJECT CONTROL SYSTEM/11_DEFECT_REGISTER.md', '| DEF-011 | Direct BW Lead Scope tab did not self-load finalized scope isolation', '''
| DEF-011 | Direct BW Lead Scope tab did not self-load finalized scope isolation | High | VERIFIED FIX / PRODUCTION PROMOTION BLOCKED | Finalization audit found `/scope-templates` injected the centralized isolation script while direct `/bw-dashboard.html` did not; PR #15 adds one centralized loader line + API endpoint + regression; CI and READY preview PASS | Main now loads the existing `scopeIsolationScript` directly in BW dashboard. No isolation rules/data/schema changed. Canonical production deployment remains pending because Vercel rejects new production builds at build-rate limit. |
''')

append_once('PROJECT CONTROL SYSTEM/13_CHANGELOG.md', '## CHANGE-022 — BW Lead Scope workflow owner-finalized', '''
## CHANGE-022 — BW Lead Scope workflow owner-finalized
DATE: 2026-10-02
VERSION: BW-LEAD-SCOPE-1.0
AUTHORIZED BY: Project Owner explicit `final`
RELATED DECISION: DEC-018
RELATED REQUIREMENT: REQ-018 / REQ-019
RELATED DEFECT: DEF-011
FILES AFFECTED: `master-hub-app/public/bw-dashboard.html`, `master-hub-app/src/app/api/scope-isolation/route.ts`, `master-hub-app/tests/bw-dashboard-scope-isolation.test.ts`, release/control records.
REASON: Finalize Scope inside the BW Lead tool without weakening or duplicating SCOPE-ISOLATION-1.0.
RESULT: Direct BW dashboard now consumes the same centralized finalized isolation engine as `/scope-templates`. PR #15 and post-merge CI passed install/lint/tests/build; READY preview live verification passed. Owner accepted/finalized the behavior. Canonical production promotion remains explicitly BLOCKED by Vercel build-rate limit; no false production-verification claim is made.
''')

rtm_path = 'PROJECT CONTROL SYSTEM/21_REQUIREMENTS_TRACEABILITY_MATRIX.md'
rtm = read(rtm_path)
rtm_row = '| REQ-019 | Project Owner BW Lead Scope finalization | DEC-018 + SCOPE-ISOLATION-1.0 | FEAT-012 / direct BW Scope surface | direct BW dashboard loads centralized `/api/scope-isolation` engine | TEST-038/039/040 PASS; TEST-041 BLOCKED | PR #15; `1af17aa`; CI `36981871706` + `36981972545`; READY preview `dpl_F1GwuqFCS28xQTVkryZ8CmDiAZhP` | OWNER FINALIZED / SOURCE+PREVIEW VERIFIED / PRODUCTION PROMOTION BLOCKED |'
if rtm_row not in rtm:
    rtm = rtm.replace('\n## Canonical Traceability Chain', '\n' + rtm_row + '\n\n## Canonical Traceability Chain')
    write(rtm_path, rtm)

queue_path = 'PROJECT CONTROL SYSTEM/22_PROJECT_OPERATIONS_QUEUE.md'
queue = read(queue_path)
queue_row = '| QUEUE-012 | Finalize Scope inside direct BW Lead tool | Billed Work / Scope Templates | HIGH | WAITING / BLOCKED | OWNER FINALIZED / SOURCE+PREVIEW VERIFIED | Canonical production promotion blocked by Vercel account build-rate limit | DEC-018; REQ-019; DEF-011; PR #15; CI `36981871706` / `36981972545`; preview `dpl_F1GwuqFCS28xQTVkryZ8CmDiAZhP` | Promote the already-verified artifact when Vercel production capacity is available, then verify canonical `/api/scope-isolation`, `/bw-dashboard.html`, `/scope-templates` | OWNER FINALIZED / PRODUCTION ACTIVATION PENDING — `BW-LEAD-SCOPE-1.0` |'
if queue_row not in queue:
    anchor = '| QUEUE-011 | Controlled reconstruction / canonical truth pass'
    pos = queue.find(anchor)
    if pos >= 0:
        end = queue.find('\n', pos)
        queue = queue[:end+1] + queue_row + '\n' + queue[end+1:]
    else:
        queue += '\n' + queue_row + '\n'
note = '- BW Lead direct Scope surface: owner-finalized as `BW-LEAD-SCOPE-1.0`; source/CI/READY-preview verified; canonical production promotion blocked by Vercel build-rate limit.'
if note not in queue:
    queue = queue.replace('## Bugs & Testing\n', '## Bugs & Testing\n' + note + '\n')
release_note = '- BW-LEAD-SCOPE-1.0 — owner-finalized behavior; production activation pending due Vercel build-rate limit'
if release_note not in queue:
    queue = queue.replace('- SCOPE-ISOLATION-1.0\n', '- SCOPE-ISOLATION-1.0\n' + release_note + '\n')
write(queue_path, queue)

state_path = 'PROJECT CONTROL SYSTEM/06_CURRENT_STATE.md'
state = read(state_path)
auth = '- BW Lead Scope release: `BW-LEAD-SCOPE-1.0` — OWNER FINALIZED / SOURCE+PREVIEW VERIFIED / PRODUCTION PROMOTION BLOCKED\n'
if auth not in state:
    state = state.replace('- Scope isolation release: `SCOPE-ISOLATION-1.0` — VERIFIED / FINALIZED / OWNER ACCEPTED\n', '- Scope isolation release: `SCOPE-ISOLATION-1.0` — VERIFIED / FINALIZED / OWNER ACCEPTED\n' + auth)
if 'BW_LEAD_SCOPE_STATUS:' not in state:
    state = state.replace('SCOPE_ISOLATION_STATUS:', 'BW_LEAD_SCOPE_STATUS: OWNER FINALIZED / MAIN+CI+READY PREVIEW VERIFIED / CANONICAL PRODUCTION PROMOTION BLOCKED BY VERCEL BUILD RATE LIMIT\nSCOPE_ISOLATION_STATUS:')
prod_note = '- BW Lead Scope finalization source is merged at `1af17aae26d43309fbf913c6878b0fc52278295b`; controlled redeploy trigger `ad01245bb5864eec6869d7028e5f9ab6056e524a` is also on `main`, but Vercel rejected production attempts at the account build-rate limit.\n- Exact fixed artifact is READY on preview `dpl_F1GwuqFCS28xQTVkryZ8CmDiAZhP`; its `/api/scope-isolation`, `/bw-dashboard.html` and `/scope-templates` all returned HTTP 200 and the dashboard contains the centralized loader.\n'
if prod_note not in state:
    state = state.replace('## Scope Templates / Device → SubDevice isolation\n', prod_note + '\n## Scope Templates / Device → SubDevice isolation\n')
section = '''
## BW Lead direct Scope finalization
- Release: `BW-LEAD-SCOPE-1.0`.
- Owner acceptance/finalization: RECORDED under DEC-018.
- Direct `bw-dashboard.html` now loads `/api/scope-isolation`, which returns the existing centralized `scopeIsolationScript`.
- No Device/SubDevice matching rules, Scope Template data, lead associations, localStorage schema, Supabase schema or operational rows were migrated or replaced.
- PR CI `36981871706`: PASS.
- Post-merge main CI `36981972545`: PASS.
- READY preview `dpl_F1GwuqFCS28xQTVkryZ8CmDiAZhP`: live verification PASS.
- Canonical production activation: BLOCKED by Vercel account build-rate limit; do not call this release production-verified until the canonical alias serves the loader.
'''
if '## BW Lead direct Scope finalization' not in state:
    state = state.replace('\n## Repair Packages / DEF-010', section + '\n## Repair Packages / DEF-010')
release_line = '- `BW-LEAD-SCOPE-1.0` — OWNER FINALIZED / SOURCE+PREVIEW VERIFIED / PRODUCTION ACTIVATION PENDING\n'
if release_line not in state:
    state = state.replace('- `SCOPE-ISOLATION-1.0`\n', '- `SCOPE-ISOLATION-1.0`\n' + release_line)
write(state_path, state)

append_once('PROJECT CONTROL SYSTEM/08_CHECKPOINT.md', '## BW-LEAD-SCOPE-1.0 Owner Finalization Checkpoint', '''
## BW-LEAD-SCOPE-1.0 Owner Finalization Checkpoint — 2026-10-02
STATUS: OWNER FINALIZED / SOURCE+AUTOMATED+READY-PREVIEW VERIFIED / CANONICAL PRODUCTION PROMOTION BLOCKED
DECISION: DEC-018
REQUIREMENT: REQ-019 with REQ-018 preserved
DEFECT: DEF-011
PR: #15
SOURCE MERGE: `1af17aae26d43309fbf913c6878b0fc52278295b`
REDEPLOY TRIGGER: `ad01245bb5864eec6869d7028e5f9ab6056e524a`
PR CI: `36981871706` PASS
POST-MERGE CI: `36981972545` PASS
READY PREVIEW: `dpl_F1GwuqFCS28xQTVkryZ8CmDiAZhP`
LIVE PREVIEW VERIFIED: `/api/scope-isolation`, `/bw-dashboard.html`, `/scope-templates` HTTP 200; dashboard loads centralized isolation script.
PRODUCTION BLOCKER: Vercel `build-rate-limit`; existing production remains on prior commit. A no-rebuild promotion was attempted through GitHub Actions but no `VERCEL_TOKEN` secret is configured, so no production change occurred.
RULE: Owner acceptance/finalized behavior is complete. Production must remain labeled PENDING/BLOCKED until canonical alias verification passes.
''')

Path('RELEASES/BW-LEAD-SCOPE-1.0.md').write_text('''# BW-LEAD-SCOPE-1.0

DATE: 2026-10-02
STATUS: OWNER FINALIZED / SOURCE+AUTOMATED+READY-PREVIEW VERIFIED / CANONICAL PRODUCTION PROMOTION BLOCKED
PROJECT: Master Hub

## Purpose
Finalize the Scope workflow inside the direct BW Lead tool while preserving `SCOPE-ISOLATION-1.0` as the canonical Device → SubDevice → Scope behavior.

## Owner Acceptance
Project Owner explicitly requested finalization and then gave `final` approval. Decision: DEC-018.

## Finalized Behavior
The direct BW dashboard and dedicated Scope Templates surface consume the same centralized scope-isolation engine. Existing finalized behavior remains authoritative: exact Device → SubDevice hierarchy, exact Scope filtering, normalized grouping, manual-template filtering, compatible-lead filtering, cross-group attachment rejection, compatible attachment success, and preservation of existing scope/lead data.

## Fix Found During Finalization Review
`/scope-templates` injected the centralized isolation script, but direct `/bw-dashboard.html` did not self-load it. PR #15 repaired only this activation gap; the matching rules were not rewritten.

## Verification
- Source PR #15: `3e58cd05cc5c401b7599a7bec190366c80585ed1`
- Main merge: `1af17aae26d43309fbf913c6878b0fc52278295b`
- PR CI `36981871706`: PASS
- Post-merge CI `36981972545`: PASS
- READY preview `dpl_F1GwuqFCS28xQTVkryZ8CmDiAZhP`
- Preview `/api/scope-isolation`: HTTP 200, centralized script
- Preview `/bw-dashboard.html`: HTTP 200, centralized loader present
- Preview `/scope-templates`: HTTP 200

## Data Preservation
No scope-template migration, imported-work-order rewrite, reconciled-data rewrite, lead-association migration, localStorage schema change, Supabase schema change, or Supabase operational-row modification was introduced.

## Production Status
Canonical production is NOT yet verified on this release. Vercel rejected the merge deployment and one controlled redeploy trigger because of the account build-rate limit. A no-rebuild promotion attempt could not authenticate because the GitHub repository has no `VERCEL_TOKEN` Actions secret. No false deployment claim is made.

## Relationship to SCOPE-ISOLATION-1.0
This release does not replace, reopen, or downgrade `SCOPE-ISOLATION-1.0`; it finalizes activation of that same engine inside the direct BW Lead surface.
''', encoding='utf-8')

Path('BACKUPS/BW-LEAD-SCOPE-1.0.md').write_text('''# BW-LEAD-SCOPE-1.0 Backup / Recovery Record

DATE: 2026-10-02
STATUS: RECORDED

## Canonical Source
- Repository: `ssalem9580/master-hub`
- Product merge: `1af17aae26d43309fbf913c6878b0fc52278295b`
- Controlled redeploy trigger: `ad01245bb5864eec6869d7028e5f9ab6056e524a`
- Central isolation engine: `master-hub-app/src/lib/scope-isolation-script.ts`

## Verified Artifact
- READY preview: `dpl_F1GwuqFCS28xQTVkryZ8CmDiAZhP`
- Preview source: `3e58cd05cc5c401b7599a7bec190366c80585ed1`

## Recovery Principle
If the direct dashboard loader causes a regression, revert only the loader/API/test activation change while preserving `SCOPE-ISOLATION-1.0` and all Scope Templates, imported/reconciled records, lead associations, localStorage data, and Supabase data. No data migration was introduced.

## Production Note
The owner-finalized behavior is not yet active on the canonical production alias because Vercel production promotion is blocked by the account build-rate limit.
''', encoding='utf-8')
