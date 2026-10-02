# 33 — Vercel Build Fan-Out Audit

STATUS: AUDIT COMPLETE / CLEANUP NOT AUTHORIZED
DATE: 2026-10-02 UTC / 2026-10-01 CDT
AUTHORITY: Project Owner command `next`
RELATED: QUEUE-004 / ISSUE-002 / RISK-001 / TD-009

## Purpose
Confirm which Vercel projects are currently receiving deployments from the canonical `ssalem9580/master-hub` GitHub repository and define the safest cleanup path without disconnecting, retiring, deleting, or otherwise destructively changing any project.

## Canonical Production
- Canonical Master Hub Vercel project: `master-hub`
- Project ID: `prj_TaNYVBn6sk81Q82yIJYLphj9YyZV`
- Canonical production alias: `https://master-hub-sigma.vercel.app`
- Current verified production deployment: `dpl_8FeiJsVHQrvnxGnyHcjezRRxZtV6`
- Current verified production commit: `9143a16e9cf77693127b3c975f58b7eec514de74`
- State: `READY`

## Current Team Project Inventory
Observed Vercel projects on the current team:
1. `master-hub` — `prj_TaNYVBn6sk81Q82yIJYLphj9YyZV`
2. `field-diagnostic-hub` — `prj_2zVf2Yk9BiaXvDb2W3OcyewIsfhx`
3. `recovery-value-calculator` — `prj_942h8vKuDMyde0K6iu5GF34hfByM`
4. `master-hub-live` — `prj_faJO9SG3vdax8edtpXaPFepLDhx8`
5. `field-diagnostic-hub-live` — `prj_mtmFlgCFytYKU4kYwFnWAbr2FAPh`
6. `job-quote-calculator-live` — `prj_7q0ALfMnhpp6xGmDzLHWAgmmg5wD`
7. `billed-work-tracker-live` — `prj_6mzZBKJOaYh2MJZ3QMDVOfHCFf42`
8. `job-quote-calculator` — `prj_U39kxPVimHowAukErUvrMFc13RNp`
9. `sam-hub` — `prj_S4OASJcwfx6ohACcf4pvAQFnqvxR`

## Verified Git Fan-Out
The same Master Hub GitHub commits are repeatedly triggering deployments in more than one Vercel project.

### Latest verified example
GitHub commit `9143a16e9cf77693127b3c975f58b7eec514de74` produced these Vercel commit-status contexts:
- `Vercel – master-hub` — SUCCESS
- `Vercel – field-diagnostic-hub` — FAILURE
- `Vercel – recovery-value-calculator` — FAILURE / build-rate-limit context

The corresponding `field-diagnostic-hub` production deployment `dpl_B6GGzJpJfjsfx5CLTsjfSMShPTTf` records:
- GitHub repo: `master-hub`
- GitHub org: `ssalem9580`
- branch: `main`
- commit: `9143a16e9cf77693127b3c975f58b7eec514de74`
- state: `ERROR`

Historical deployment metadata also shows repeated `master-hub` commits triggering both `field-diagnostic-hub` and `recovery-value-calculator`, confirming persistent cross-linking rather than a one-time event.

## Operational Impact
- One Master Hub source commit can consume deployment capacity in multiple projects.
- Failing duplicate/cross-linked builds can contribute to build-rate exhaustion and obscure the actual health of the canonical Master Hub production deployment.
- Commit status can appear failed overall even when canonical `master-hub` production is READY.
- Recovery Value repair work is harder to reason about while unrelated Master Hub commits automatically deploy into its Vercel project.

## Safe Cleanup Plan
No project is changed by this audit.

### Phase A — Non-destructive verification
1. Keep `master-hub` as the canonical Master Hub production project.
2. Preserve the current project/deployment map and rollback evidence.
3. Confirm source ownership and intended canonical role for each standalone project before altering Git integration.
4. Verify any project that may contain restricted field-service content remains covered by the private-preservation gate before retirement.

### Phase B — Reversible fan-out reduction
After explicit owner approval for Vercel project configuration changes:
1. Disconnect or disable automatic Git deployment from `field-diagnostic-hub` for the `ssalem9580/master-hub` repo unless that project is proven to be the intended canonical deployment for a separately preserved source.
2. Disconnect or disable automatic Git deployment from `recovery-value-calculator` for the `ssalem9580/master-hub` repo and restore it only from its verified canonical recovered source.
3. Re-test one harmless Master Hub commit and verify that only the canonical `master-hub` project receives the deployment.

### Phase C — Retirement
Project deletion/retirement remains a separate destructive gate. Retire duplicates only after canonical source, recovery, aliases, and any restricted-data preservation are verified.

## Recommended Owner Decision
Approve the reversible Git-integration cleanup for `field-diagnostic-hub` and `recovery-value-calculator` only after their canonical source/recovery ownership is confirmed. Do not delete either project as part of the first cleanup step.

## Current Result
- Fan-out: VERIFIED.
- Canonical Master Hub project: VERIFIED.
- Cleanup: NOT PERFORMED.
- Destructive project retirement: NOT AUTHORIZED.
- Private restricted-field-service preservation: still blocked because the approved private repository/store is not yet available through the connected GitHub control surface.
