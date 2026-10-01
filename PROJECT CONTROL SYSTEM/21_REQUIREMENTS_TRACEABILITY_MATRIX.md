# 21 — Requirements Traceability Matrix

| Requirement | Source | Decision | Feature | Implementation | Test | Evidence | Final Status |
|---|---|---|---|---|---|---|---|
| REQ-001 | Owner / existing product | Historical + DEC-001 context | FEAT-001 | master-hub-app dashboard/components | TEST-001 | Source + build history | IMPLEMENTED |
| REQ-002 | Owner | Historical | FEAT-002 | field-resource/diagnostic routes | TEST-002 | Source | PARTIAL VERIFICATION |
| REQ-003 | Owner | Historical | FEAT-003 | repair-packages route | TEST-003 | Source + latest typecheck fix | IMPLEMENTED |
| REQ-004 | Owner | DEC-002 | FEAT-004 | private/local finance handling | TEST-004 | Source review pending | OPEN |
| REQ-005 | Constitution | DEC-001 | FEAT-005 | Hub registry status fields | TEST-005 | Deployment/link checks | OPEN |
| REQ-006 | Owner supplied control framework | DEC-001 | FEAT-006 | PROJECT CONTROL SYSTEM/* | TEST-006 | Repository tree | IMPLEMENTED |
| REQ-007 | Owner supplied framework / incorporation request | DEC-003 | FEAT-007 | /project-control + registry entry | TEST-007 | Build/deploy pending | OPEN |
| REQ-008 | Owner supplied control framework | DEC-001 | FEAT-008 | This matrix + linked registers | TEST-008 | Repository documents | PARTIAL |

Traceability must work both directions: every feature should answer why it exists, and every requirement should identify what breaks if removed.
