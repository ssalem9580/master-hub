# 00 — Restricted Field-Service Preservation Manifest

STATUS: PREPARATION FINALIZED / PRIVATE DESTINATION APPROVED / CREATION PENDING — NO DESTRUCTIVE ACTION AUTHORIZED
DATE: 2026-10-02 UTC / 2026-10-01 CDT
AUTHORITY: DEC-016 / Project Owner explicit `finalize and action next task`
CLASSIFICATION: RESTRICTED

## Purpose
Define the exact preservation gate that must be satisfied before any restricted field-service source, route, Git history, or Vercel deployment is removed, rewritten, disconnected, retired, or otherwise destructively contained.

## Preservation Rule
Nothing listed in the restricted exposure inventory may be destructively changed until a recoverable private canonical copy exists and is verified.

## Public Source Requiring Preservation
At minimum preserve the restricted source currently identified in public Master Hub:
- `master-hub-app/public/field-diagnostic-hub.html`
- `master-hub-app/src/app/field-diagnostic-hub/page.tsx`
- `master-hub-app/src/app/field-resource-hub/page.tsx`
- `master-hub-app/src/app/repair-packages/page.tsx`
- restricted field-service data assets under `master-hub-app/public/data/`
- applicable registry/navigation references in `master-hub-app/src/components/master-hub.tsx`
- Billed Work / Scope Templates operational source and state dependencies where classified restricted
- NTE / quote operational source where classified restricted

Exact current-main blob IDs and byte counts for repository-backed restricted source are recorded in `PROJECT CONTROL SYSTEM/32_SECURITY_PRESERVATION_SOURCE_HASHES.md`.

## Current Vercel Project Map
Observed team projects relevant to containment/recovery:
- `master-hub` — `prj_TaNYVBn6sk81Q82yIJYLphj9YyZV`
- `field-diagnostic-hub` — `prj_2zVf2Yk9BiaXvDb2W3OcyewIsfhx`
- `field-diagnostic-hub-live` — `prj_mtmFlgCFytYKU4kYwFnWAbr2FAPh`
- `job-quote-calculator` — `prj_U39kxPVimHowAukErUvrMFc13RNp`
- `job-quote-calculator-live` — `prj_7q0ALfMnhpp6xGmDzLHWAgmmg5wD`
- `billed-work-tracker-live` — `prj_6mzZBKJOaYh2MJZ3QMDVOfHCFf42`
- `recovery-value-calculator` — `prj_942h8vKuDMyde0K6iu5GF34hfByM`
- `master-hub-live` — `prj_faJO9SG3vdax8edtpXaPFepLDhx8`
- `sam-hub` — `prj_S4OASJcwfx6ohACcf4pvAQFnqvxR`

This map records observed project ownership only. It does not authorize disconnection, deletion, retirement, or migration.

## Private Canonical Destination
Architecture approval: APPROVED by Project Owner.

Required destination: a separate PRIVATE GitHub repository/store for restricted field-service material, with an explicit backup/recovery record.

Current execution state:
- Owner approval to establish/migrate: APPROVED.
- Destination repository/store: NOT YET CREATED.
- Privacy verification: NOT YET POSSIBLE because no destination exists.
- Connected GitHub control surface currently exposes only the public `ssalem9580/master-hub` repository and does not provide a repository-creation action.

No restricted content may be copied to an unverified destination. Repository/store creation must occur through an authorized GitHub/admin path; once it exists and is verified private, preservation may proceed immediately from the exact source manifest.

## Preservation Verification Checklist
Before public-surface containment:
- [x] Private destination explicitly approved.
- [ ] Private destination created through an authorized admin path.
- [ ] Destination verified private before restricted content is copied.
- [ ] Restricted source files copied from existing source rather than reconstructed from memory.
- [x] Source paths and current originating blob identifiers/byte counts recorded for repository-backed items.
- [ ] Required configuration references documented without copying secrets into public records.
- [ ] Tool-specific operational data/export dependencies identified and preserved where applicable.
- [ ] File/path manifest compared against the public-source inventory.
- [ ] Content completeness verified by hashes, blob IDs, byte counts, or equivalent evidence where practical.
- [ ] Private copy can be independently fetched/read by the authorized project owner.
- [ ] Recovery checkpoint created and recorded.
- [ ] Only after all above: request approval for public route/source removal.

## Destructive Gates Still Closed
The following are NOT authorized by this preparation/finalization step:
- deleting restricted public source
- removing public routes
- rewriting Git history
- changing repository visibility
- disconnecting or retiring Vercel projects
- deleting deployments
- deploying restricted material behind a new authentication system

## Next Gate
Create the approved private canonical destination through an authorized admin path, verify it is private, then copy and verify the restricted source/data against the exact preservation manifest. Public-surface cleanup remains separately approval-gated.