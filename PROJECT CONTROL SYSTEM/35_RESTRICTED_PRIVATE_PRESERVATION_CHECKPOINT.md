# 35 — Restricted Private Preservation Checkpoint

DATE: 2026-10-02
STATUS: PRIVATE PRESERVATION STORE VERIFIED / SOURCE-BYTE COPY INCOMPLETE / NOT FINALIZED
QUEUE: QUEUE-001
AUTHORITY: DEC-016 / DEC-017 / SECURITY-CONTAINMENT-PREP-1.0
CLASSIFICATION: CONTROL METADATA — RESTRICTED CONTENT IS NOT REPRODUCED HERE

## Purpose
Record the real preservation state before any destructive containment of restricted field-service material.

## Canonical Public Source
- Repository: `ssalem9580/master-hub`
- Source lineage checked at main ancestor `88419705fa4aa2a29161509683f2cf6c960ef214`; latest main also preserves the validated standalone-source ownership work.
- Existing finalized `SCOPE-ISOLATION-1.0` behavior remains untouched.

## Private Preservation Store
A private preservation store has been created in the Project Owner's Google Drive:
- Folder: `Master Hub Restricted Field Service — Private Preservation`
- Folder ID: `1Ux9sHg_74cCkDiLAHxz7IfZhBCL1RVyB`
- Privacy verification: `shared=false`; permission metadata showed owner-only access at verification time.

Private evidence files created:
- `MASTER_HUB_RESTRICTED_PRESERVATION_CHECKPOINT.txt`
- `MASTER_HUB_RESTRICTED_PRESERVATION_EVIDENCE_2026-10-02.txt`

Both evidence files were verified as `shared=false` and stored under the private preservation folder.

## Repository Preservation Lineage Verification
The repository-backed restricted source set recorded in `32_SECURITY_PRESERVATION_SOURCE_HASHES.md` was compared against current source lineage after `SCOPE-ISOLATION-1.0`.

Result: recorded blob IDs and byte counts still match the restricted repository-backed objects, including:
- Field Diagnostic source/assets
- Field Resource route
- Repair Packages route
- parts-master data files
- Billed Work dashboard
- Scope Templates route
- strict Scope Isolation script
- Master Hub registry/component source

This confirms the preservation manifest still points to the exact current repository-backed lineage. It does not mean the source bytes have already been copied to the private store.

## Live Public Exposure Verification
Verified HTTP 200 on 2026-10-02:
- `/field-resource-hub`
- `/scope-templates`
- `/bw-dashboard.html`

Physical containment remains OPEN / CRITICAL under DEF-009.

## Supabase Billed Work Dependency
Project: `esykcwiulnlzjgtmixte`
Observed status: `ACTIVE_HEALTHY`

Relevant public-schema tables:
- `billed_work_state` — RLS enabled
- `billed_work_scope_state` — RLS enabled

Observed owner-scoped authenticated CRUD policies require the authenticated user ID to match the row owner. No customer/ledger payload contents were retrieved during this preservation check.

Non-content recovery fingerprints:
- `billed_work_state`: row count `1`; payload bytes `1,402,998`; fingerprint `4f31e1945d64107089518dd9fdf0fc15`
- `billed_work_scope_state`: row count `1`; payload bytes `23,676`; fingerprint `1205f7e6c43c6f184ecf44e755ebafbe`

These fingerprints support later completeness comparison but are not a data backup.

## Supabase Security Advisor Notes
Read-only security advisor review identified warnings outside the current preservation change, including a public-schema SECURITY DEFINER function exposure, mutable function search path, and leaked-password protection disabled. No database security setting or function was changed during this update.

## Preservation Gate State
- [x] Private preservation destination approved.
- [x] Private preservation store created.
- [x] Store verified owner-only / not shared before use.
- [x] Repository source lineage revalidated against the preservation manifest.
- [x] Recovery checkpoint/evidence metadata stored privately.
- [x] Supabase Billed Work tables, RLS state, row counts, payload sizes, and non-content fingerprints recorded.
- [ ] Exact restricted source bytes copied into private preservation store.
- [ ] Source-copy completeness independently verified.
- [ ] Supabase operational payload backup/export preserved and recovery-tested.
- [ ] Remaining standalone restricted-tool source preservation completed where applicable.
- [ ] Recovery checkpoint upgraded to VERIFIED PRIVATE PRESERVATION COMPLETE.

## Destructive Gates
Still NOT authorized:
- remove public routes or source
- delete/retire/disconnect Vercel projects
- rewrite public Git history
- change public repository visibility
- delete or overwrite Billed Work / Scope Templates / Repair Package / Supabase data

## Next Safe Action
Transfer the exact current restricted source bytes into the verified private store through a supported secure transfer path, verify against the recorded blob/byte manifest, then create an operational-data backup/recovery checkpoint. Only after those checks may public containment be presented for approval.
