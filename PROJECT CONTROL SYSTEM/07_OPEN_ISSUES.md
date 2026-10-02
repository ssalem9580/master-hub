# 07 — Open Issues

DATE: 2026-10-02
STATUS: RECONCILED AFTER ALL-ISSUES REPAIR PASS

Historical issue IDs are preserved. Resolved items remain in this register for traceability.

## ISSUE-001 — Historical reconstruction incomplete
TYPE: Product / Governance
STATUS: OPEN / PARTIAL
DESCRIPTION: Existing repository/project history predates the canonical control system, so some historical decisions and requirements may still be absent from normalized registers.
EVIDENCE: Reconstruction evidence ledger and repository history.
REPAIR TO DATE: Controlled reconstruction passes completed; current operational truth is source-bound and reconciled.
REMAINING: Continue evidence-backed reconstruction only when older decisions materially affect current work. Unknowns remain `UNKNOWN / NEEDS CONFIRMATION`.
DECISION REQUIRED: NO

## ISSUE-002 — Multiple related Vercel projects
TYPE: Technical
STATUS: OPEN / AUDIT FINALIZED / CLEANUP GATED
DESCRIPTION: Multiple Vercel projects remain related to Master Hub and several standalone tools, including cross-linked Git deployments.
EVIDENCE: `33_VERCEL_BUILD_FANOUT_AUDIT.md`; Vercel project/deployment inventory.
REPAIR TO DATE: Canonical project/alias and source ownership for Master Hub, Recovery Value, and Field Diagnostic are established; fan-out audit is finalized.
REMAINING: Actual Git-integration disconnect/retirement remains separately approval-gated and is not exposed by the current Vercel connector.
DECISION REQUIRED: YES for disconnect/retire actions.

## ISSUE-003 — Supplied AI Idea Master Template is incomplete at end of Part 29
TYPE: Product / Governance
STATUS: OPEN / SOURCE BLOCKED
DESCRIPTION: The supplied source ends in PART 29 after `Field definitions`.
EVIDENCE: `00_AI_IDEA_MASTER_TEMPLATE.md`.
REPAIR TO DATE: Incompleteness is explicitly preserved and no continuation has been fabricated.
REMAINING: Append only if the Project Owner supplies or explicitly approves missing source content.
DECISION REQUIRED: NO

## ISSUE-004 — Defect identifier convention conflict
TYPE: Product / Governance
STATUS: RESOLVED
DESCRIPTION: Generic template uses BUG-### while Master Hub historically uses DEF-###.
RESOLUTION: Owner approved permanent DEF-### convention; historical IDs preserved.

## ISSUE-005 — Restricted field-service material is present in public repository/deployment
TYPE: Security / Data Governance
STATUS: OPEN — CRITICAL / PRESERVATION ADVANCED
DESCRIPTION: Field-service diagnostics, repair, parts, scope, billed-work and related operational material classified RESTRICTED remains publicly exposed.
EVIDENCE: DEC-016; DEF-009; exposure inventory; records 32, 35 and 39.
REPAIR TO DATE: Private Drive preservation store verified owner-only; current restricted source lineage refreshed; exact in-project Supabase recovery snapshots created and fingerprint-verified; recovery metadata stored privately; public-source secret guard added.
REMAINING: Independent exact-byte restricted-source archive, independent database export/recovery verification, remaining standalone-source preservation, then explicit approval for public removal. Git-history remediation remains a separate gate.
DECISION REQUIRED: YES for destructive containment/history/visibility changes.

## ISSUE-006 — CI does not execute tests or lint
TYPE: Technical / Quality
STATUS: RESOLVED
RESOLUTION: Canonical CI runs lint, Vitest and build; verified releases use those gates.

## ISSUE-007 — Project Control Center is not source-bound
TYPE: Product / Governance
STATUS: RESOLVED — PROJECT-CONTROL-LIVE-TRUTH-1.0
DESCRIPTION: Historical UI duplicated project status and could drift.
RESOLUTION: `/project-control` now discovers canonical control records at build time and separately reports repository head, served revision and last verified production evidence. Release is owner-finalized and production-verified.

## ISSUE-008 — Recovery Value Calculator registry target is broken
TYPE: Product / Integration
STATUS: OPEN / SOURCE VALIDATED
DESCRIPTION: Configured public root remains unavailable while a validated recovered source serves successfully at its nested recovered path.
EVIDENCE: `34_STANDALONE_SOURCE_OWNERSHIP_VALIDATION.md`; recovered commit `751a73b17bef47c47a2a0b9467560a197fef8f0f`; READY recovered deployment; fresh root 404 / nested-path 200 verification.
REPAIR TO DATE: Recovered source and matching Vercel project ownership validated/finalized.
REMAINING: Canonical private preservation and controlled root/deployment restoration; production promotion remains approval-gated because recovered content includes restricted field-service knowledge.
DECISION REQUIRED: YES before production promotion/configuration that changes the canonical target.

## ISSUE-009 — Next.js security patch level is outdated
TYPE: Security / Dependency
STATUS: RESOLVED
RESOLUTION: Next.js and eslint-config-next 16.3.8 released; CI and production verification passed.

## ISSUE-010 — "Private" positioning is not backed by application access control
TYPE: Security / Product Boundary
STATUS: RESOLVED / ACCEPTED
RESOLUTION: DEC-015 explicitly defines public/no-login Master Hub access as intended. Restricted/sensitive data boundaries remain separate requirements.

## ISSUE-011 — Standalone tool source ownership and recovery are incomplete
TYPE: Architecture / Recovery
STATUS: OPEN — PARTIAL
DESCRIPTION: Some standalone Vercel apps still lack verified canonical source repositories/backups.
EVIDENCE: `34_STANDALONE_SOURCE_OWNERSHIP_VALIDATION.md`; `38_INTEGRATION_AND_DATA_SOURCE_REGISTER.md`; Vercel deployment metadata.
REPAIR TO DATE: Recovery Value and Field Diagnostic ownership finalized; active Billed Work source is integrated in Master Hub; NTE Quote, standalone Billed Work deployment history, and Sam Hub were inventoried, but their observed Vercel deployments expose no Git source metadata.
REMAINING: Locate/archive original source where available before any retirement.
DECISION REQUIRED: YES before deleting/retiring unrecovered deployments.

## ISSUE-012 — Recovery Value Calculator recovered source is stranded outside main
TYPE: Product / Deployment / Recovery
STATUS: OPEN — CONTROLLED RESTORE PENDING
DESCRIPTION: Validated recovered source remains outside current public `main`, intentionally avoiding new public duplication while restricted-data containment is open.
EVIDENCE: recovered commit/path and `34_STANDALONE_SOURCE_OWNERSHIP_VALIDATION.md`.
REPAIR TO DATE: Exact recovery source/project mapping validated; nested recovered artifact returns HTTP 200.
REMAINING: Preserve source privately/canonically, verify calculator workflow, then request production-promotion approval.
DECISION REQUIRED: YES before production promotion.

## ISSUE-013 — Canonical branches are not GitHub-protected
TYPE: Governance / Repository Control
STATUS: OPEN — BLOCKED BY ADMIN CAPABILITY / OWNER WORKFLOW DECISION
DESCRIPTION: GitHub ruleset inventory remains empty; documented PR/change control is not technically enforced.
EVIDENCE: current GitHub rulesets query returned `[]`.
REPAIR TO DATE: Exact release SHAs and recovery records are preserved; CI gates exist.
REMAINING: Enable a ruleset requiring appropriate CI/PR controls when repository administration capability and owner workflow approval are available.
DECISION REQUIRED: YES
