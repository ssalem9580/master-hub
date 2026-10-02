# 39 — Security Preservation Refresh

DATE: 2026-10-02
STATUS: IN DEVELOPMENT / RECOVERY LAYER IMPROVED / EXTERNAL EXACT-BYTE COPY STILL OPEN
RELATED: QUEUE-001 / DEF-009 / RISK-007 / RISK-015

## Purpose
Refresh preservation evidence after later BW Lead Scope changes and add a verified database recovery layer before any destructive public containment.

## Repository lineage refresh
The prior restricted-source hash baseline is `PROJECT CONTROL SYSTEM/32_SECURITY_PRESERVATION_SOURCE_HASHES.md`, anchored at `62fd6f1744397472362af1fe0cf7ccdd1ad67c5a`.

A compare from that anchor to `90c2a7059a086d468ce239629c7819cf6e7ecbc9` shows only two restricted runtime-source changes after the baseline:
1. `master-hub-app/public/bw-dashboard.html` — modified to load the finalized centralized scope-isolation engine.
2. `master-hub-app/src/app/api/scope-isolation/route.ts` — added as the controlled JavaScript delivery endpoint.

The existing Scope isolation library source itself was not modified in that comparison. Other preservation-manifest runtime paths were not changed by the later Project Control/release bookkeeping work.

Current verified restricted artifacts include:
- `master-hub-app/public/bw-dashboard.html` — current blob `f9dc76b97925bbeecf53a87f9457b15e6fb56256` at the production lineage containing `BW-LEAD-SCOPE-1.0`.
- `master-hub-app/src/app/api/scope-isolation/route.ts` — blob `fdef7e932990366a695426232615cc6fb6e8daac`.

The old BW Dashboard blob recorded in record 32 must therefore not be used as the final containment checkpoint.

## Database recovery checkpoint
A non-destructive exact snapshot layer was created in the existing Supabase project before containment:
- `recovery.billed_work_state_20261002`
- `recovery.billed_work_scope_state_20261002`

Security:
- `recovery` schema privileges revoked from `anon` and `authenticated`.
- snapshot table privileges revoked from `anon` and `authenticated`.

Verification at snapshot time:
- `billed_work_state`: 1 live row = 1 snapshot row; serialized payload length 1,402,774 characters on both; content fingerprint exact match = TRUE.
- `billed_work_scope_state`: 1 live row = 1 snapshot row; serialized payload length 23,676 characters on both; content fingerprint exact match = TRUE.

No customer/ledger/scope payload content is reproduced in this public record.

## Private preservation evidence
The Google Drive folder `Master Hub Restricted Field Service — Private Preservation` was re-found and verified `shared=false` with owner-only permission metadata. A private document named `Master Hub — Supabase Recovery Snapshot 2026-10-02` was stored in that folder and separately verified `shared=false`. It contains recovery metadata only, not operational payload contents.

## Remaining gate
This refresh does NOT authorize public removal. The following remain required before physical containment:
1. exact current restricted repository source bytes copied to an independent private store and verified;
2. independent external database export/recovery copy verified; the in-project Supabase snapshot is an additional recovery layer, not a substitute for independent backup;
3. remaining restricted standalone source preservation where source can be located;
4. explicit approval for public route/source removal;
5. separate explicit decision for Git-history remediation and Vercel project retirement/disconnection.
