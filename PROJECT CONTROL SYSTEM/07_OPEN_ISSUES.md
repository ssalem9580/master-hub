# 07 — Open Issues

## ISSUE-001 — Historical reconstruction incomplete
TYPE: Product / Governance
STATUS: OPEN
DESCRIPTION: Existing conversation/project history contains more decisions than are currently recorded in the canonical registers.
WHY IT MATTERS: Traceability is incomplete until reconstructed.
EVIDENCE: Existing repository history predates this control system.
POSSIBLE SOLUTIONS: Reconstruct from commits, source files, and explicit owner instructions in controlled batches.
DECISION REQUIRED: NO
DEPENDENCIES: Repository history and source evidence.
RESOLUTION:

## ISSUE-002 — Multiple related Vercel projects
TYPE: Technical
STATUS: CONFIRMED / OWNER CLEANUP DECISION PENDING
DESCRIPTION: Nine Vercel projects exist for Master Hub and related standalone apps, including overlapping master-hub, field-diagnostic, and job-quote variants.
WHY IT MATTERS: Can cause confusing ownership, aliases, and deployment state.
EVIDENCE: Connected Vercel team inventory captured in 00_MASTERHUB_RECONSTRUCTION_REALITY_AUDIT.md.
POSSIBLE SOLUTIONS: Define canonical deployment per app and disconnect/retire unintended duplicate project links.
DECISION REQUIRED: YES for destructive/disconnect actions.
DEPENDENCIES: Vercel project configuration.
RESOLUTION:

## ISSUE-003 — Supplied AI Idea Master Template is incomplete at end of Part 29
TYPE: Product / Governance
STATUS: OPEN
DESCRIPTION: The latest supplied source supersedes the earlier truncated copy and now extends through PART 29 — SOURCE-OF-TRUTH OWNERSHIP, but ends after "Field definitions".
WHY IT MATTERS: The missing remainder cannot be invented or silently reconstructed.
EVIDENCE: 00_AI_IDEA_MASTER_TEMPLATE.md captured from the latest Project Owner-supplied source.
POSSIBLE SOLUTIONS: Adopt only the supplied content; append the missing remainder later if the Project Owner supplies or explicitly approves it.
DECISION REQUIRED: NO
DEPENDENCIES: Additional owner-provided source if desired.
RESOLUTION: Earlier Part-15 truncation concern is superseded; current incompleteness is at Part 29.


## ISSUE-004 — Defect identifier convention conflict
TYPE: Product / Governance
STATUS: RESOLVED
DESCRIPTION: The AI Idea Master Template specifies BUG-### defect IDs, while the established Master Hub Data Dictionary and Defect Register use DEF-###.
WHY IT MATTERS: Silent renaming would break historical traceability and alter an established project convention.
EVIDENCE: 00_AI_IDEA_MASTER_TEMPLATE.md; 11_DEFECT_REGISTER.md; 15_DATA_DICTIONARY.md; DEC-006.
POSSIBLE SOLUTIONS: Preserve DEF-### as a Master Hub local convention, or explicitly authorize BUG-### for future records with a compatibility rule.
DECISION REQUIRED: NO
DEPENDENCIES:
RESOLUTION: Project Owner approved permanent retention of DEF-### as the Master Hub canonical defect-ID convention. Adopt template defect schema without renaming historical IDs.


## ISSUE-005 — Public field-service material classification unresolved
TYPE: Security / Data Governance
STATUS: OPEN
DESCRIPTION: The GitHub repository is public and contains field-service diagnostic and repair-package material. The audit has not established whether all such material is approved for public distribution.
WHY IT MATTERS: If any content is restricted, public repository visibility would create an unacceptable exposure boundary.
EVIDENCE: Repository visibility + source inspection recorded in 00_MASTERHUB_RECONSTRUCTION_REALITY_AUDIT.md.
POSSIBLE SOLUTIONS: Classify source content; separate public/private data; change visibility only after explicit owner approval and recovery planning.
DECISION REQUIRED: YES before repository visibility change or destructive content removal.
DEPENDENCIES: Content classification / owner decision.
RESOLUTION:

## ISSUE-006 — CI does not execute tests or lint
TYPE: Technical / Quality
STATUS: OPEN
DESCRIPTION: GitHub Actions builds the app but does not run npm test or npm run lint.
WHY IT MATTERS: A green CI build can coexist with stale or failing tests and lint defects.
EVIDENCE: .github/workflows/master-hub-ci.yml.
POSSIBLE SOLUTIONS: Repair current tests, then add test and lint gates to CI.
DECISION REQUIRED: NO for proposal; implementation follows normal change control.
DEPENDENCIES: Current test-suite normalization.
RESOLUTION:

## ISSUE-007 — Project Control Center is not source-bound
TYPE: Product / Governance
STATUS: OPEN
DESCRIPTION: /project-control renders static control-state text instead of reading or generating from canonical project-control records.
WHY IT MATTERS: The visible governance UI can drift from the repository source of truth.
EVIDENCE: master-hub-app/src/app/project-control/page.tsx and audit comparison.
POSSIBLE SOLUTIONS: Generate a machine-readable governance snapshot during build or load a controlled generated status artifact.
DECISION REQUIRED: NO for analysis; architecture choice required before implementation.
DEPENDENCIES: Governance source ownership and build architecture.
RESOLUTION:

## ISSUE-008 — Recovery Value Calculator registry target is broken
TYPE: Product / Integration
STATUS: OPEN
DESCRIPTION: MasterHub labels Recovery Value Calculator as Live, but the configured public root returns HTTP 404.
WHY IT MATTERS: Registry status is incorrect and the tool is unavailable from MasterHub as configured.
EVIDENCE: Live HTTP verification during reconstruction audit.
POSSIBLE SOLUTIONS: Identify correct route/alias, repair deployment, or change registry status until restored.
DECISION REQUIRED: NO to correct false status; deployment repair may require implementation.
DEPENDENCIES: Recovery Value Calculator deployment ownership.
RESOLUTION:


## ISSUE-009 — Next.js security patch level is outdated
TYPE: Security / Dependency
STATUS: OPEN — HIGH PRIORITY
DESCRIPTION: MasterHub uses Next.js 16.3.4. Official Next.js security guidance on 2026-09-30 recommends 16.3.8, and the 2026-09-22 critical upstream security fix required at least 16.3.6.
WHY IT MATTERS: The application is below the current patched security baseline.
EVIDENCE: master-hub-app/package.json; official Next.js September 2026 security guidance.
POSSIBLE SOLUTIONS: Upgrade Next.js to 16.3.8, run build/test/lint and route verification, then deploy.
DECISION REQUIRED: NO for patch proposal; implementation follows controlled change process.
DEPENDENCIES: Test-suite repair/verification recommended before release.
RESOLUTION:

## ISSUE-010 — "Private" positioning is not backed by application access control
TYPE: Security / Product Boundary
STATUS: OPEN
DESCRIPTION: Canonical MasterHub production routes are publicly reachable without login, and repository inspection found no application auth middleware/proxy/session layer.
WHY IT MATTERS: If "private command center" is intended to mean access-controlled, current implementation does not satisfy that meaning. Public field-service content increases the importance of resolving this boundary.
EVIDENCE: public HTTP 200 on canonical routes; repository tree/package inspection.
POSSIBLE SOLUTIONS: Clarify product privacy requirement; if access control is required, add authentication/authorization and separate public/private assets.
DECISION REQUIRED: YES for the intended privacy/access-control boundary.
DEPENDENCIES: Owner/product decision; field-service content classification.
RESOLUTION:


## ISSUE-011 — Standalone tool source ownership and recovery are incomplete
TYPE: Architecture / Recovery
STATUS: OPEN — HIGH PRIORITY
DESCRIPTION: Active registry tools including NTE Quote, Billed Work Tracker, Recovery Value Calculator, and Sam Hub do not have source code in the current MasterHub repository, and no matching installed GitHub repositories were found by name. Some observed Vercel deployments were CLI-deployed or lacked Git source metadata.
WHY IT MATTERS: A live deployment without a known canonical source/backup cannot be safely maintained, rebuilt, migrated, or recovered.
EVIDENCE: MasterHub tree inventory, installed-repository search, Vercel deployment metadata.
POSSIBLE SOLUTIONS: Locate original source archives/repositories; create canonical repositories/backups; document owner/version/deployment for each standalone tool.
DECISION REQUIRED: YES before deleting/retiring deployments if source is not recovered.
DEPENDENCIES: Historical source recovery.
RESOLUTION:

## ISSUE-012 — Recovery Value Calculator source not found in linked repository
TYPE: Product / Deployment / Recovery
STATUS: OPEN — HIGH PRIORITY
DESCRIPTION: Vercel recovery-value-calculator is Git-linked to master-hub, but the current master-hub tree contains no Recovery Value Calculator source. Its configured public URL returns HTTP 404.
WHY IT MATTERS: The current deployment cannot be confidently repaired from the linked repository as-is.
EVIDENCE: Repository tree, Vercel project/deployment metadata, live HTTP 404.
POSSIBLE SOLUTIONS: Recover original source from an external/local backup or prior deployment artifact; relink Vercel to the correct source; or formally rebuild after requirements reconstruction.
DECISION REQUIRED: YES if source cannot be recovered and a rebuild is proposed.
DEPENDENCIES: Source recovery / deployment ownership.
RESOLUTION:
