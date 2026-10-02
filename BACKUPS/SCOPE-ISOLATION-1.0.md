# SCOPE-ISOLATION-1.0 Backup / Recovery Record

DATE: 2026-10-02 UTC / 2026-10-01 CDT

## Canonical source
Repository: `ssalem9580/master-hub`
Finalization-record head: `ecfeae16e9349850f3524569595b4ee70ec2ce8f`

## Verified functional production baseline
- Deployment: `dpl_9k5EKov9oJM7jKwvEFgmeNUjPtjf`
- Commit: `1b5d4e78f164fc4c68f9322aa6348d90cca2c7c5`
- URL: `https://master-hub-sigma.vercel.app`
- `/scope-templates`: HTTP 200
- `/bw-dashboard.html`: HTTP 200

## Implementation lineage
- `965a2b2e6ea15b053e2d60ca4c76802bcd3d5755` — centralized Device/SubDevice scope isolation.
- `de9d82be08daa1f20f7e95ba5583a5a59977340b` — strict Device/SubDevice boundary enforcement.
- `d1b857dc5c6fb6cf9239d3d68557a43077b2c097` — strict grouping and attachment regression coverage.

## Safe rollback
If the strict isolation behavior must be rolled back, the last verified pre-strict production candidate is `dpl_2Mtpv99iSHbBfPtNsUFU43Z1R59z` at `965a2b2e6ea15b053e2d60ca4c76802bcd3d5755`.

## Notes
The current public/restricted-data security issue is independent of this release and remains open. No destructive action was performed during finalization.
