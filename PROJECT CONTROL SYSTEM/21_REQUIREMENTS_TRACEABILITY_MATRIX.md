# 21 — Requirements Traceability Matrix

| Requirement | Source | Decision / Authority | Feature | Implementation | Test / Verification | Evidence | Final Status |
|---|---|---|---|---|---|---|---|
| REQ-001 | Owner / existing product | DEC-001 context | FEAT-001 | Master Hub dashboard/components | Live root + CI history | Current production root HTTP 200 | IMPLEMENTED / LIVE |
| REQ-002 | Owner | Existing approved product + DEC-016 boundary | FEAT-002 | field-resource / field-diagnostic routes | Route verification partial interaction coverage | Live routes HTTP 200 | IMPLEMENTED / RESTRICTED-CONTENT CONTAINMENT OPEN |
| REQ-003 | Owner | Existing approved product | FEAT-003 | repair-packages route | DEF-010 automated regression + live route | DEF-010 VERIFIED; /repair-packages 200 | VERIFIED CORE / OWNER FINALIZATION OPEN |
| REQ-004 | Owner / DEC-002 | DEC-002 | FEAT-004 | browser-local finance handling | Source/live route; privacy scan still open | /finances-command-center 200 | IMPLEMENTED / VERIFICATION PARTIAL |
| REQ-005 | Constitution | Evidence-over-assumption rule | FEAT-005 | registry status fields | TEST-015 + fresh URL checks | Recovery Value configured URL 404 while root labels Live | OPEN / PARTIAL |
| REQ-006 | Owner supplied control framework | DEC-001 | FEAT-006 | PROJECT CONTROL SYSTEM/* | Repository/release evidence | CONTROL-BASELINE-1.0 | IMPLEMENTED / FINALIZED FOUNDATION |
| REQ-007 | Owner / DEC-003 | DEC-003 + Wave-1 owner acceptance | FEAT-007 | /project-control source-bound to canonical records | CI `36951330664` PASS + live HTTP 200 + live source-bound output | production `dpl_9k5EKov9oJM7jKwvEFgmeNUjPtjf` | VERIFIED / FINALIZED |
| REQ-008 | Owner supplied framework | DEC-001 | FEAT-008 | Traceability Matrix + Reconstruction Evidence Ledger | Reconstruction pass 2026-10-02 | Canonical records | PARTIAL / ACTIVE |
| REQ-009 | User / governance adoption | DEC-007 | FEAT-009 | Constitution/control lifecycle | TEST-009 | CONTROL-BASELINE-1.0 | VERIFIED / FINALIZED |
| REQ-010 | User / governance adoption | DEC-007 | FEAT-009 | Ready/Done/acceptance gates | TEST-010 | CONTROL-BASELINE-1.0 | VERIFIED / FINALIZED |
| REQ-011 | User / governance adoption | DEC-007 | FEAT-009 | Authority + source-of-truth rules | TEST-011 | CONTROL-BASELINE-1.0 | VERIFIED / FINALIZED |
| REQ-012 | User / governance adoption | DEC-006/007 | FEAT-009 | canonical register schemas | TEST-012 | CONTROL-BASELINE-1.0 | VERIFIED / FINALIZED |
| REQ-013 | Security hardening | DEC-013/014 | FEAT-001 | Next.js 16.3.8 baseline | TEST-024/025/028/030 | SECURITY-QUALITY-1.0 | ACCEPTED |
| REQ-014 | Quality hardening | DEC-013/014 | FEAT-001 | lint/test/build CI | TEST-025/026/027/029 | SECURITY-QUALITY-1.0 | ACCEPTED |
| REQ-015 | Project Owner | DEC-016/017 | FEAT-002 / FEAT-003 | restricted field-service boundary + private preservation store/checkpoint | TEST-034/035/036 PASS; TEST-037 confirms exposure still OPEN | SECURITY-BOUNDARY-1.0; SECURITY-CONTAINMENT-PREP-1.0; `34_RESTRICTED_PRIVATE_PRESERVATION_CHECKPOINT.md`; owner-only Drive preservation metadata; Supabase non-content recovery fingerprints | ACCEPTED CLASSIFICATION / PRIVATE STORE VERIFIED / SOURCE & DATA COPY INCOMPLETE / CONTAINMENT OPEN |
| REQ-016 | Project Owner Project Operations prompt | PROJECT-OPS-1.0 owner acceptance | FEAT-010 | 22_PROJECT_OPERATIONS_QUEUE.md + Project Control operations view | Finalized release evidence | PROJECT-OPS-1.0 | FINALIZED / OWNER ACCEPTED |
| REQ-017 | Project Owner Scope Templates direction | Approved implementation history | FEAT-011 | /scope-templates route reusing BW dashboard | Live HTTP 200 | 7bf2465 + current production | IMPLEMENTED / LIVE SECTION |
| REQ-018 | Project Owner exact Device/SubDevice grouping instruction | Owner explicit implementation request + explicit verified/finalized promotion | FEAT-012 | centralized scope-isolation script + strict selection/manual/attachment boundary | CI `36949404777` PASS; live `/scope-templates` and `/bw-dashboard.html` HTTP 200; production JS artifact contains exact grouping and cross-group blocking logic | `965a2b2` / `de9d82b` / `d1b857d`; production `dpl_9k5EKov9oJM7jKwvEFgmeNUjPtjf`; `RELEASES/SCOPE-ISOLATION-1.0.md` | VERIFIED / FINALIZED / OWNER ACCEPTED |

## Canonical Traceability Chain
`User Need → Decision/Authority → Requirement → Feature → Implementation → Test → Evidence → Verification → Acceptance`

## Reconstruction Rule
No missing historical link is invented. If a decision, requirement, source owner, deployment, or acceptance record is not supported by current evidence, its state remains `UNKNOWN / NEEDS CONFIRMATION` until verified.