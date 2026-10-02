# 38 — Integration & Data Source Register

DATE: 2026-10-02
STATUS: ACTIVE / BASELINE INVENTORY COMPLETE FOR CURRENTLY VERIFIED MASTER HUB SOURCES

This register describes current integration ownership without publishing secrets, customer payloads, personal finance values, or restricted operational content.

| System / Source | Canonical role | Persistence / Direction | Security boundary | Recovery / ownership state |
|---|---|---|---|---|
| GitHub `ssalem9580/master-hub` | Canonical public source | Source → CI/Vercel | Public repository; restricted field-service material must not be expanded | Canonical source established; history-containment risk remains open |
| Vercel `master-hub` | Canonical Master Hub deployment | GitHub → production | Public/no-login by approved product boundary | Canonical alias `master-hub-sigma.vercel.app`; duplicate fan-out remains open |
| Supabase `master hub` | Billed Work / Scope Templates cloud state | Browser ↔ Supabase | Authenticated owner-scoped RLS on `billed_work_state` and `billed_work_scope_state` | Live tables healthy; exact in-project recovery snapshots created 2026-10-02 |
| Browser `localStorage` | Local working persistence | Browser-local | Device/browser boundary | Used by Master Hub actions, Finances, Repair Packages, Billed Work/Scope local state |
| Google Drive private preservation store | Restricted preservation evidence | Controlled backup destination | Owner-only / `shared=false` verified | Private checkpoint/evidence exists; exact external source-byte/database export still incomplete |
| Bundled parts TSV files | Repair Package master data | Static public bundle → browser | RESTRICTED content currently exposed publicly | Containment open; do not add more public parts data |
| `bw-dashboard.html` + Scope isolation API | Billed Work / Scope Templates UI | Browser ↔ localStorage/Supabase | RESTRICTED operational workflow; Billed Work sign-in uses Supabase auth | `BW-LEAD-SCOPE-1.0` production verified; preserve before containment |
| Field Diagnostic integrated route/static asset | Current Field Diagnostic source | Master Hub source → production | RESTRICTED field-service content | Current canonical source is integrated Master Hub; historical standalone is recovery artifact only |
| Recovery Value Calculator | Standalone recovery tool | Vercel static deployment | Contains restricted field-service/parts knowledge | Recovered source validated; root target still broken; production restoration not approved |
| NTE Exceed/Quote Generator | Standalone quoting tool | Vercel deployment | Quote/operational data is RESTRICTED | Vercel deployments exist but expose no Git source metadata; canonical source backup still unknown |
| Billed Work Tracker standalone | Historical/standalone billing deployment | Vercel deployment | Billed-work operational data is RESTRICTED | Vercel deployments exist but expose no Git source metadata; active Master Hub Billed Work source is integrated |
| Sam Hub | Legacy registry tool | Vercel deployment | Internal workflow references may be restricted | Vercel deployments exist but expose no Git source metadata; canonical source backup still unknown |
| Private Client / exam-prep external sites | External workspaces | Browser navigation | External service boundary | Links only; no Master Hub source ownership claim |

## Verified database details
- Supabase project is ACTIVE_HEALTHY.
- `public.billed_work_state`: RLS enabled; owner-scoped authenticated CRUD.
- `public.billed_work_scope_state`: RLS enabled; owner-scoped authenticated CRUD.
- Recovery copies created under non-exposed `recovery` schema:
  - `recovery.billed_work_state_20261002`
  - `recovery.billed_work_scope_state_20261002`
- Access to the recovery schema/tables is revoked from `anon` and `authenticated` roles.
- Row counts, serialized payload lengths, and content fingerprints matched the live rows exactly at snapshot time.

## Known gaps
1. External exact-byte/source archive for restricted public repository material is still incomplete.
2. External database export/recovery test is still incomplete; the Supabase snapshots are an in-project recovery layer, not an independent backup.
3. NTE Quote, standalone Billed Work Tracker, and Sam Hub lack verified canonical source repositories/backups.
4. Recovery Value source is validated but not canonicalized/promoted.
5. Vercel Git-integration fan-out remains unresolved.
6. Registry `Live` values are still static metadata rather than runtime health evidence.

No credentials, customer data, finance values, or restricted payload contents belong in this register.
