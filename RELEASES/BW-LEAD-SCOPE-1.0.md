# BW-LEAD-SCOPE-1.0

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
