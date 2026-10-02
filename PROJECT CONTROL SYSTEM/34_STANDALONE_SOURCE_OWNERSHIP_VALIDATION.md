# 34 — Standalone Source Ownership Validation

DATE: 2026-10-02 UTC / 2026-10-02 CDT
STATUS: VALIDATED / READY FOR OWNER REVIEW
AUTHORITY: Project Owner command `next`
RELATED: QUEUE-004 / QUEUE-005 / QUEUE-007 / ISSUE-008 / ISSUE-011 / ISSUE-012 / RISK-012 / RISK-013

## Purpose
Validate the recovered source, deployment mapping, and current canonical ownership of the Recovery Value Calculator and Field Diagnostic Hub before any Vercel Git-integration cleanup or production-source migration.

## Recovery branch evidence
Branch `codex/recovered-standalone-apps` exists and currently points to commit `ea79f6c843be5b47f756d5389b798337b75aaa44`.

That branch contains:
- `standalone-apps/recovery-value-calculator/index.html`
- `standalone-apps/field-diagnostic-hub/index.html`
- `standalone-apps/README.md`

The branch README states that each directory is a complete static Vercel application and maps the directories to the corresponding standalone Vercel projects.

## Recovery Value Calculator
### Source
- Recovery source commit: `751a73b17bef47c47a2a0b9467560a197fef8f0f` — `Recover Recovery Value Calculator source`.
- Source path: `standalone-apps/recovery-value-calculator/index.html`.
- Source blob: `c92b27a42c50f56190ce8ae06246a4b794f11a60`.
- Source identity: `BenchTested — Resale/Scrap Decision Tool`.

### Deployment validation
Vercel project `recovery-value-calculator` (`prj_942h8vKuDMyde0K6iu5GF34hfByM`) successfully built the recovered branch source:
- `dpl_GqUtL7rAeTVtF92do5hYknWiNS6A` — READY — commit `751a73b17bef47c47a2a0b9467560a197fef8f0f`.
- `dpl_ARDHGmgp38HhZkEdPr1MmP1NRNuq` — READY — branch head `ea79f6c843be5b47f756d5389b798337b75aaa44`.

This proves the recovered source is buildable in the intended Recovery Value Vercel project.

### Current ownership conclusion
- Recovered source: VALIDATED.
- Matching Vercel project: VALIDATED.
- Current `main`: recovered standalone source is NOT present.
- Current configured public target: remains unresolved/broken under the existing Recovery Value remediation records.
- Canonicalization: NOT COMPLETE.
- Production restoration: NOT COMPLETE.

The safest next implementation path is to preserve/canonicalize this recovered source first, then configure a controlled Recovery Value deployment from that exact source and verify preview before production promotion. Do not use ordinary Master Hub commits as the Recovery Value source root.

## Field Diagnostic Hub
### Recovered standalone source
- Recovery source commit: `3c8ea7cafe958ff46effb4c6b4fcbc38717f5bbb` — `Recover Field Diagnostic Hub source`.
- Recovery path: `standalone-apps/field-diagnostic-hub/index.html`.
- Recovery blob: `60a0a1867801b63e162f2e4ef90f12ecc9ff4c27`.
- Source identity: `Field Diagnostic Hub`.

### Deployment validation
Vercel project `field-diagnostic-hub` (`prj_2zVf2Yk9BiaXvDb2W3OcyewIsfhx`) successfully built the recovered source:
- `dpl_HK3qUCKd6AuRN4H8unHLfaeuszas` — READY — commit `3c8ea7cafe958ff46effb4c6b4fcbc38717f5bbb`.
- `dpl_8WFZm9oyrDvtAzmsw1P4bRvFtuWn` — READY — branch head `ea79f6c843be5b47f756d5389b798337b75aaa44`.

### Current canonical source
Current Master Hub `main` contains an integrated Field Diagnostic Hub:
- route: `master-hub-app/src/app/field-diagnostic-hub/page.tsx`
- current static source: `master-hub-app/public/field-diagnostic-hub.html`
- current route loads `/field-diagnostic-hub.html` inside the canonical Master Hub application.

The current static source blob is `c6c8fa3489b0fc70b4e79dd4f8b411c7e263e39f`, which differs from the recovered standalone blob, showing that the integrated source has evolved since the recovered snapshot.

### Current ownership conclusion
- Historical recovered standalone source: VALIDATED recovery artifact.
- Current canonical active source: Master Hub `main` integrated Field Diagnostic Hub.
- Standalone Vercel `field-diagnostic-hub` project: legacy/recovery deployment candidate, not the canonical current source of the live integrated Master Hub route.
- Do not copy the standalone recovered Field Diagnostic source back into public `main`; that would duplicate restricted field-service material and conflict with the existing security-containment gate.

## Vercel fan-out implication
The ownership validation supports separating the two cases:

1. `field-diagnostic-hub` should no longer receive ordinary Master Hub commits once the required restricted-source preservation gate and owner-approved Vercel configuration change are satisfied.
2. `recovery-value-calculator` should be restored only from its validated recovered source (or an explicitly approved canonical successor), not from the generic Master Hub application root.

Neither Git-integration disconnect nor project retirement is authorized by this validation alone.

## Safe next actions
1. Recovery Value: establish a canonical preserved source location for the validated Recovery Value source.
2. Recovery Value: create a preview deployment from that exact source and verify calculator behavior.
3. Field Diagnostic: retain Master Hub `main` as the canonical active source while restricted-data preservation remains open.
4. After preservation/source validation gates are complete, present the exact reversible Vercel Git-integration changes for owner approval.
5. Project deletion/retirement remains a separate destructive gate.

## Result
- Recovery Value recovered source ownership: VALIDATED / NOT YET CANONICALIZED.
- Recovery Value Vercel project mapping: VALIDATED.
- Field Diagnostic recovered standalone source: VALIDATED AS RECOVERY ARTIFACT.
- Field Diagnostic current canonical active source: MASTER HUB `main` INTEGRATED ROUTE.
- Vercel Git cleanup: NOT PERFORMED.
- Destructive cleanup: NOT AUTHORIZED.
