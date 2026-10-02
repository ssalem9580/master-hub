from pathlib import Path

DEPLOY='dpl_7x3L3kGvNn2fntDrNnzz2sFKotps'
COMMIT='b6d075ed9656d52bec59059b3cf8e076933d8f7f'
CI='36983083671'

def read(p): return Path(p).read_text(encoding='utf-8')
def write(p,s): Path(p).write_text(s,encoding='utf-8')
def replace_req(p, old, new):
    s=read(p)
    if old not in s: raise SystemExit(f'missing expected text in {p}: {old[:80]}')
    write(p,s.replace(old,new))
def append_once(p, marker, block):
    s=read(p)
    if marker not in s: write(p,s.rstrip()+'\n\n'+block.strip()+'\n')

# Current State
p='PROJECT CONTROL SYSTEM/06_CURRENT_STATE.md'; s=read(p)
s=s.replace('BW_LEAD_SCOPE_STATUS: OWNER FINALIZED / MAIN+CI+READY PREVIEW VERIFIED / CANONICAL PRODUCTION PROMOTION BLOCKED BY VERCEL BUILD RATE LIMIT','BW_LEAD_SCOPE_STATUS: VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED')
s=s.replace('- BW Lead Scope release: `BW-LEAD-SCOPE-1.0` — OWNER FINALIZED / SOURCE+PREVIEW VERIFIED / PRODUCTION PROMOTION BLOCKED','- BW Lead Scope release: `BW-LEAD-SCOPE-1.0` — VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED')
s=s.replace('- Canonical production activation: BLOCKED by Vercel account build-rate limit; do not call this release production-verified until the canonical alias serves the loader.','- Canonical production activation: VERIFIED. Production deployment `'+DEPLOY+'` is READY at `'+COMMIT+'`; canonical `/api/scope-isolation`, `/bw-dashboard.html`, and `/scope-templates` are HTTP 200; runtime error scan is clean.')
s=s.replace('- `BW-LEAD-SCOPE-1.0` — OWNER FINALIZED / SOURCE+PREVIEW VERIFIED / PRODUCTION ACTIVATION PENDING','- `BW-LEAD-SCOPE-1.0` — VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED')
prod='''\n## BW Lead Scope 1.0 production verification\n- Canonical production deployment: `'''+DEPLOY+'''` — READY.\n- Canonical production commit: `'''+COMMIT+'''`.\n- Final main CI: `'''+CI+'''` — install/lint/tests/build PASS.\n- `/api/scope-isolation`: HTTP 200, serves centralized isolation engine.\n- `/bw-dashboard.html`: HTTP 200, contains `<script src="/api/scope-isolation"></script>`.\n- `/scope-templates`: HTTP 200.\n- One-hour runtime error scan for these routes: CLEAN.\n- Status: VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED.\n'''
if '## BW Lead Scope 1.0 production verification' not in s:
    s=s.replace('\n## Repair Packages / DEF-010',prod+'\n## Repair Packages / DEF-010')
write(p,s)

# Requirement
p='PROJECT CONTROL SYSTEM/09_REQUIREMENTS_REGISTER.md'; s=read(p)
s=s.replace('VERIFICATION STATUS: VERIFIED SOURCE + AUTOMATED + LIVE PREVIEW; CANONICAL PRODUCTION PROMOTION BLOCKED\nFINAL STATUS: OWNER ACCEPTED / FINALIZED BEHAVIOR — BW-LEAD-SCOPE-1.0; PRODUCTION ACTIVATION PENDING','VERIFICATION STATUS: VERIFIED IN CANONICAL PRODUCTION — `'+DEPLOY+'` / `'+COMMIT+'`\nFINAL STATUS: VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED — BW-LEAD-SCOPE-1.0')
write(p,s)

# Tests
p='PROJECT CONTROL SYSTEM/10_TEST_REGISTER.md'; s=read(p)
old='| TEST-041 | REQ-019 | Verify canonical production alias serves direct BW scope loader release | BLOCKED | `master-hub` production is still on earlier commit; merge/retry production checks rejected by Vercel build-rate limit; promotion workflow could not run because repo has no `VERCEL_TOKEN` secret | 2026-10-02 |'
new='| TEST-041 | REQ-019 | Verify canonical production alias serves direct BW scope loader release | PASS | `'+DEPLOY+'` READY at `'+COMMIT+'`; canonical `/api/scope-isolation`, `/bw-dashboard.html`, `/scope-templates` HTTP 200; direct dashboard contains central loader; runtime error scan clean | 2026-10-02 |'
if old in s: s=s.replace(old,new)
elif new not in s: raise SystemExit('TEST-041 expected row missing')
write(p,s)

# Defect
p='PROJECT CONTROL SYSTEM/11_DEFECT_REGISTER.md'; s=read(p)
old='| DEF-011 | Direct BW Lead Scope tab did not self-load finalized scope isolation | High | VERIFIED FIX / PRODUCTION PROMOTION BLOCKED | Finalization audit found `/scope-templates` injected the centralized isolation script while direct `/bw-dashboard.html` did not; PR #15 adds one centralized loader line + API endpoint + regression; CI and READY preview PASS | Main now loads the existing `scopeIsolationScript` directly in BW dashboard. No isolation rules/data/schema changed. Canonical production deployment remains pending because Vercel rejects new production builds at build-rate limit. |'
new='| DEF-011 | Direct BW Lead Scope tab did not self-load finalized scope isolation | High | CLOSED | Finalization audit found `/scope-templates` injected the centralized isolation script while direct `/bw-dashboard.html` did not; PR #15 added the centralized loader/API/regression; CI PASS; production `'+DEPLOY+'` READY; canonical routes verified | Direct BW dashboard now loads the same centralized `scopeIsolationScript`; no isolation rules/data/schema changed; canonical production verified. |'
if old in s: s=s.replace(old,new)
elif new not in s: raise SystemExit('DEF-011 expected row missing')
write(p,s)

# Traceability
p='PROJECT CONTROL SYSTEM/21_REQUIREMENTS_TRACEABILITY_MATRIX.md'; s=read(p)
s=s.replace('TEST-038/039/040 PASS; TEST-041 BLOCKED','TEST-038/039/040/041 PASS')
s=s.replace('OWNER FINALIZED / SOURCE+PREVIEW VERIFIED / PRODUCTION PROMOTION BLOCKED |','VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED |')
write(p,s)

# Queue
p='PROJECT CONTROL SYSTEM/22_PROJECT_OPERATIONS_QUEUE.md'; s=read(p)
old='| QUEUE-012 | Finalize Scope inside direct BW Lead tool | Billed Work / Scope Templates | HIGH | WAITING / BLOCKED | OWNER FINALIZED / SOURCE+PREVIEW VERIFIED | Canonical production promotion blocked by Vercel account build-rate limit | DEC-018; REQ-019; DEF-011; PR #15; CI `36981871706` / `36981972545`; preview `dpl_F1GwuqFCS28xQTVkryZ8CmDiAZhP` | Promote the already-verified artifact when Vercel production capacity is available, then verify canonical `/api/scope-isolation`, `/bw-dashboard.html`, `/scope-templates` | OWNER FINALIZED / PRODUCTION ACTIVATION PENDING — `BW-LEAD-SCOPE-1.0` |'
new='| QUEUE-012 | Finalize Scope inside direct BW Lead tool | Billed Work / Scope Templates | HIGH | FINALIZED | OWNER ACCEPTED / PRODUCTION VERIFIED | None for this release | DEC-018; REQ-019; DEF-011 CLOSED; PR #15; CI `36981871706` / `36981972545` / `'+CI+'`; production `'+DEPLOY+'` | Maintain centralized isolation regression coverage; future behavior changes require a new queue item | VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED — `BW-LEAD-SCOPE-1.0` |'
if old in s: s=s.replace(old,new)
elif new not in s: raise SystemExit('QUEUE-012 expected row missing')
s=s.replace('- BW Lead direct Scope surface: owner-finalized as `BW-LEAD-SCOPE-1.0`; source/CI/READY-preview verified; canonical production promotion blocked by Vercel build-rate limit.','- BW Lead direct Scope surface: `BW-LEAD-SCOPE-1.0` VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED; direct dashboard and dedicated Scope Templates both use the centralized isolation engine.')
s=s.replace('- BW-LEAD-SCOPE-1.0 — owner-finalized behavior; production activation pending due Vercel build-rate limit','- BW-LEAD-SCOPE-1.0 — VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED')
write(p,s)

# Checkpoint
p='PROJECT CONTROL SYSTEM/08_CHECKPOINT.md'; s=read(p)
s=s.replace('STATUS: OWNER FINALIZED / SOURCE+AUTOMATED+READY-PREVIEW VERIFIED / CANONICAL PRODUCTION PROMOTION BLOCKED\nDECISION: DEC-018','STATUS: VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED\nDECISION: DEC-018')
s=s.replace('PRODUCTION BLOCKER: Vercel `build-rate-limit`; existing production remains on prior commit. A no-rebuild promotion was attempted through GitHub Actions but no `VERCEL_TOKEN` secret is configured, so no production change occurred.\nRULE: Owner acceptance/finalized behavior is complete. Production must remain labeled PENDING/BLOCKED until canonical alias verification passes.','PRODUCTION: `'+DEPLOY+'` READY at `'+COMMIT+'`. Canonical `/api/scope-isolation`, `/bw-dashboard.html`, `/scope-templates` verified HTTP 200; runtime errors none in the selected post-release window.\nRULE: `BW-LEAD-SCOPE-1.0` is fully production verified and finalized. Future behavior changes require a new controlled change.')
write(p,s)

# Release
p='RELEASES/BW-LEAD-SCOPE-1.0.md'; s=read(p)
s=s.replace('STATUS: OWNER FINALIZED / SOURCE+AUTOMATED+READY-PREVIEW VERIFIED / CANONICAL PRODUCTION PROMOTION BLOCKED','STATUS: VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED')
start='## Production Status\nCanonical production is NOT yet verified on this release. Vercel rejected the merge deployment and one controlled redeploy trigger because of the account build-rate limit. A no-rebuild promotion attempt could not authenticate because the GitHub repository has no `VERCEL_TOKEN` Actions secret. No false deployment claim is made.'
end='## Production Status\n- Deployment: `'+DEPLOY+'`\n- Commit: `'+COMMIT+'`\n- Target: production\n- State: READY\n- Canonical `/api/scope-isolation`: HTTP 200\n- Canonical `/bw-dashboard.html`: HTTP 200 with centralized loader present\n- Canonical `/scope-templates`: HTTP 200\n- Post-release runtime error scan: clean\n- Final main CI `'+CI+'`: PASS\n\nProduction verification is complete.'
if start in s: s=s.replace(start,end)
elif 'Production verification is complete.' not in s: raise SystemExit('release production section missing')
write(p,s)

# Backup
p='BACKUPS/BW-LEAD-SCOPE-1.0.md'; s=read(p)
s=s.replace('## Production Note\nThe owner-finalized behavior is not yet active on the canonical production alias because Vercel production promotion is blocked by the account build-rate limit.','## Production Verification\n- Deployment: `'+DEPLOY+'` — READY\n- Commit: `'+COMMIT+'`\n- Canonical alias verification: PASS\n- `/api/scope-isolation`, `/bw-dashboard.html`, `/scope-templates`: HTTP 200\n- Final main CI: `'+CI+'` PASS\n- Runtime error scan: clean')
write(p,s)

# Changelog
append_once('PROJECT CONTROL SYSTEM/13_CHANGELOG.md','## CHANGE-023 — BW-LEAD-SCOPE-1.0 production verified',f'''
## CHANGE-023 — BW-LEAD-SCOPE-1.0 production verified
DATE: 2026-10-02
VERSION: BW-LEAD-SCOPE-1.0
AUTHORIZED BY: Project Owner final approval / DEC-018
RELATED REQUIREMENT: REQ-018 / REQ-019
RELATED DEFECT: DEF-011
RESULT: Canonical Master Hub deployment `{DEPLOY}` reached READY at `{COMMIT}`. Canonical `/api/scope-isolation`, `/bw-dashboard.html`, and `/scope-templates` returned HTTP 200; the direct dashboard contains the centralized scope-isolation loader and the API serves the finalized engine. Post-release runtime error scan was clean. Final main CI `{CI}` passed install/lint/tests/build. `BW-LEAD-SCOPE-1.0` is VERIFIED / FINALIZED / OWNER ACCEPTED / PRODUCTION VERIFIED.
''')
