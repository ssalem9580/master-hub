# 10 — Test Register

| Test ID | Requirement | Test | Status | Evidence | Last Run |
|---|---|---|---|---|---|
| TEST-001 | REQ-001 | Next.js production build/typecheck | HISTORICALLY PASSING; fresh run needed after this change | Vercel/GitHub build history | Before 2026-09-30 control change |
| TEST-002 | REQ-002 | Field diagnostic route loads and approved hierarchy works | PARTIAL PASS | /field-diagnostic-hub and static diagnostic asset HTTP 200; hierarchy interaction not fully exercised | 2026-09-30 |
| TEST-003 | REQ-003 | Repair Packages compiles and core package workflow works | PARTIAL | Latest READY deployment followed typecheck fix | 2026-09-28 |
| TEST-004 | REQ-004 | Scan public source for embedded private finance values/secrets | OPEN | — | — |
| TEST-005 | REQ-005 | Verify every registry "Live" URL/route | OPEN | — | — |
| TEST-006 | REQ-006 | Confirm all canonical control files are present | IMPLEMENTED; repository verification required after commit | Git tree | 2026-09-30 |
| TEST-007 | REQ-007 | /project-control builds and renders | PASS | GitHub build success + live HTTP 200 | 2026-09-30 |
| TEST-008 | REQ-008 | Every approved MVP requirement has traceability row | PARTIAL | 21_REQUIREMENTS_TRACEABILITY_MATRIX.md | 2026-09-30 |


## Canonical Test Schema
New or normalized tests use:

```text
TEST ID:
RELATED REQUIREMENT:
RELATED FEATURE:

TYPE:
Unit / Integration / End-to-End / Regression / Security / UX / Performance / Recovery

PURPOSE:
PRECONDITIONS:
INPUT:
STEPS:
EXPECTED RESULT:
ACTUAL RESULT:

STATUS:
PASS / FAIL / BLOCKED / NOT RUN

EVIDENCE:
DATE:
NOTES:
```

Rules:
- Never mark PASS because code merely appears logically correct.
- Test actual behavior whenever possible.
- Existing TEST-### identifiers and historical summaries are preserved.
- Historical tests may be expanded to this schema when revisited; unknown historical fields remain UNKNOWN rather than fabricated.

| TEST-009 | REQ-009 | Verify Constitution contains full lifecycle and information classifications | PASS | Repository content verified on adoption branch | 2026-09-30 |
| TEST-010 | REQ-010 | Verify Definition of Ready, Definition of Done, and AC-### GIVEN/WHEN/THEN rules exist | PASS | Constitution + Requirements Register verified | 2026-09-30 |
| TEST-011 | REQ-011 | Verify 13-level Authority Order and supplied-only Source-of-Truth mappings exist | PASS | Constitution verified; incomplete Part 29 explicitly preserved | 2026-09-30 |
| TEST-012 | REQ-012 | Verify canonical governance schemas exist across registers and DEF-### lock is preserved | PASS | 09–20 control files + Data Dictionary verified | 2026-09-30 |
| TEST-013 | REQ-009–REQ-012 | Verify adoption branch contains no product-code/config changes versus main | PASS | GitHub compare shows changes only under PROJECT CONTROL SYSTEM/ | 2026-09-30 |


| TEST-014 | REQ-001 | Verify current main GitHub Actions production build | PASS | Master Hub CI run 36806742233 succeeded for e8ca3dac4825cd8af0b3427678cd67b4854b61 | 2026-09-30 |
| TEST-015 | REQ-005 | Verify registry Live URLs against actual HTTP/deployment evidence | FAIL / PARTIAL | Recovery Value Calculator returns HTTP 404; several others return 200; two chatgpt.site targets remain unverified | 2026-09-30 |
| TEST-016 | REQ-001 | Verify canonical MasterHub production root | PASS | master-hub-sigma.vercel.app HTTP 200; dpl_EJF5Hh9sswrUTMKiPGcjy8fDdH3n READY | 2026-09-30 |
| TEST-017 | REQ-001 | Compare current UI tests against current MasterHub component surface | FAIL | Test expects Quick Capture/Capture action/older controls absent from current component source | 2026-09-30 |
| TEST-018 | REQ-007 | Verify Project Control Center displays canonical dynamic state | FAIL | page.tsx contains static phase/current-task text and does not read canonical control records | 2026-09-30 |
| TEST-019 | REQ-004 / REQ-005 | Review public repository for unresolved field-service distribution classification | BLOCKED | Public repo contains field diagnostic/repair material; allowed distribution classification not yet established | 2026-09-30 |

| TEST-020 | REQ-001 / REQ-002 / REQ-003 / REQ-004 / REQ-007 | Verify all internal canonical routes return HTTP 200 | PASS | /, /project-control, /field-resource-hub, /field-diagnostic-hub, /finances-command-center, /repair-packages all returned 200 | 2026-09-30 |
| TEST-021 | Security | Query Vercel runtime error clusters for canonical MasterHub | PASS | No runtime errors found in selected 7-day range | 2026-09-30 |
| TEST-022 | Security | Compare installed Next.js against current official security patch baseline | FAIL | Installed 16.3.4; current security guidance requires 16.3.8 and critical upstream fix was 16.3.6 | 2026-09-30 |
| TEST-023 | Security / Product Boundary | Verify canonical MasterHub requires authentication | FAIL / REQUIREMENT BOUNDARY OPEN | Public routes return HTTP 200; no application auth layer found | 2026-09-30 |

| TEST-024 | REQ-013 | Verify Next.js and eslint-config-next are pinned to 16.3.8 in package metadata/lockfile | PASS | package.json + regenerated package-lock.json | 2026-09-30 |
| TEST-025 | REQ-013 / REQ-014 | Verify clean npm ci install from regenerated lockfile | PASS | GitHub Actions run 36810355612 | 2026-09-30 |
| TEST-026 | REQ-014 | Run ESLint across MasterHub | PASS | GitHub Actions run 36810355612 | 2026-09-30 |
| TEST-027 | REQ-014 | Run current Vitest suite | PASS | GitHub Actions run 36810355612; 5 tests passed | 2026-09-30 |
| TEST-028 | REQ-013 / REQ-014 | Run Next.js production build under 16.3.8 | PASS | GitHub Actions run 36810355612 | 2026-09-30 |
