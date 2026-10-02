# 32 — Security Preservation Source Hashes

STATUS: VERIFIED SOURCE METADATA / PRESERVATION INPUT
DATE: 2026-10-02 UTC / 2026-10-01 CDT
AUTHORITY: DEC-016 / SECURITY-CONTAINMENT-PREP-1.0
SOURCE REF: `main` at `62fd6f1744397472362af1fe0cf7ccdd1ad67c5a`
CLASSIFICATION: CONTROL METADATA — restricted source content is not reproduced here

## Purpose
Record exact current-main repository paths, Git blob identifiers and byte counts for restricted field-service source that must be preserved before destructive containment.

## Repository-backed preservation set
| Path | Git blob SHA | Bytes |
|---|---|---:|
| `master-hub-app/public/field-diagnostic-hub.html` | `c6c8fa3489b0fc70b4e79dd4f8b411c7e263e39f` | 91328 |
| `master-hub-app/src/app/field-diagnostic-hub/page.tsx` | `017a456d0f4cff62880620259845a08f818e682d` | 310 |
| `master-hub-app/src/app/field-resource-hub/page.tsx` | `029adbeabf4db4c57b9c48b491663bec7f8dcd13` | 2237 |
| `master-hub-app/src/app/repair-packages/page.tsx` | `77d97e79c503ef5e24333e620954373ff5776d6b` | 22822 |
| `master-hub-app/public/data/parts-master-1.tsv` | `f9dc76b97925bbeecf53a87f9457b15e6fb56256` | 490139 |
| `master-hub-app/public/data/parts-master-2.tsv` | `6d8b1da0c3df00e702ab315bccd3ddc4a7f51a77` | 378592 |
| `master-hub-app/public/data/parts-master-3.tsv` | `05c85809e21db7250b4ae0e99279c694e06200d7` | 376002 |
| `master-hub-app/public/data/parts-master-4.tsv` | `c4a042eb6ef0bf67e335ac362acfe376ae7a2ef6` | 335411 |
| `master-hub-app/public/bw-dashboard.html` | `34c00e3d3d2a77830af608f45a98149cde71b151` | 63584 |
| `master-hub-app/src/app/scope-templates/page.tsx` | `17910b00853ea9ce3060612e5930b7df59ee197b` | 2098 |
| `master-hub-app/src/lib/scope-isolation-script.ts` | `603a7e291df821c3a9bca84a097c618bc71ba185` | 18055 |
| `master-hub-app/src/components/master-hub.tsx` | `f639ba2417d41864dfb563d17d8a78ad926c1f8e` | 16062 |

## External / unresolved preservation inputs
The current public repository does not establish canonical source ownership for every related standalone field-service tool. In particular, NTE / job-quote source ownership and some standalone deployment/source mappings remain unresolved. These must be preserved only from verified existing source once ownership is established; they must not be reconstructed from memory.

## Verification rule
When the private canonical destination exists, copy the exact source objects above from the verified public lineage, then compare destination content against these blob identifiers/byte counts or equivalent cryptographic evidence. Any mismatch blocks destructive containment until reconciled.

## Safety
This document is metadata only. It does not authorize deletion, route removal, Git-history rewrite, visibility changes, Vercel retirement/disconnection, or any other destructive containment action.