# SCOPE-ISOLATION-1.0

DATE: 2026-10-02 UTC / 2026-10-01 CDT
STATUS: VERIFIED / FINALIZED / OWNER ACCEPTED

## Scope
Finalize strict Device → SubDevice → Scope isolation for Master Hub Scope Templates.

## Owner intent
Scopes must remain inside the exact Device and SubDevice grouping where they were imported or saved. A scope assigned to one grouping must not be offered, selected, manually used, or attached from another grouping.

## Implementation evidence
- Centralized hierarchy/isolation base: `965a2b2e6ea15b053e2d60ca4c76802bcd3d5755`.
- Strict grouping and attachment enforcement: `de9d82be08daa1f20f7e95ba5583a5a59977340b`.
- Regression coverage: `d1b857dc5c6fb6cf9239d3d68557a43077b2c097`.
- The live production build at `1b5d4e78f164fc4c68f9322aa6348d90cca2c7c5` includes those commits.

## Automated verification
GitHub Actions run `36949404777` passed install, lint, tests and production build for the strict scope source.

Regression coverage verifies:
- normalized duplicate Device/SubDevice names collapse to the same grouping;
- Vault exposes Vault SubDevices and excludes ATM-only SubDevices;
- Vault → Door exposes Door scopes and excludes Alarm, Time Lock, and ATM scopes;
- Vault → Time Lock exposes Time Lock scopes and excludes Door scopes;
- manual scope selection only shows templates compatible with the selected Device/SubDevice;
- attachment candidate lists only show leads matching the template Device/SubDevice;
- a direct cross-group attachment attempt is blocked;
- a compatible attachment succeeds.

## Production verification
- Vercel production deployment: `dpl_9k5EKov9oJM7jKwvEFgmeNUjPtjf`.
- Production commit: `1b5d4e78f164fc4c68f9322aa6348d90cca2c7c5`.
- Canonical URL: `https://master-hub-sigma.vercel.app`.
- `/scope-templates`: HTTP 200.
- `/bw-dashboard.html`: HTTP 200.
- The live Scope Templates JavaScript bundle contains the strict `Device → SubDevice` hierarchy builder, exact `scopeCompatible` filtering, manual-template compatibility guard, attachment-list filtering, and explicit incompatible-attachment blocking logic.

## Verification boundary
A separate human click-through session is not recorded. Final verification is based on automated interaction regression, successful production build/deployment, live route checks, and inspection of the production JavaScript artifact containing the exact enforcement logic.

## Owner acceptance
Project Owner explicitly directed: `promote to verified/finalized`.

## Final status
`VERIFIED / FINALIZED`.

## Rollback
Safe prior production rollback candidate: `dpl_2Mtpv99iSHbBfPtNsUFU43Z1R59z` at `965a2b2e6ea15b053e2d60ca4c76802bcd3d5755`.

## Independent open items
This release does not close restricted field-service containment, Recovery Value restoration, duplicate Vercel cleanup, Repair Package owner finalization, standalone-source recovery, or repository-protection decisions.
