# 04 — Feature Register

| ID | Feature | Description | User | Status | MVP? | Dependency | Requirement | Evidence | Notes |
|---|---|---|---|---|---|---|---|---|---|
| FEAT-001 | Master Hub command center | Dashboard, directory and actions | Owner | APPROVED | YES | Next.js app | REQ-001 | Existing source | Core |
| FEAT-002 | Field Diagnostic Hub | Field diagnostics and troubleshooting | Technician/Owner | APPROVED | YES | Field resource routes | REQ-002 | Existing source | Current status must be verified per release |
| FEAT-003 | Repair Packages | Parts/package workflow | Owner/Technician | APPROVED | YES | Parts data | REQ-003 | Existing source | No invented part data |
| FEAT-004 | Finances Command Center | Finance and credit-planning workspace | Owner | APPROVED | YES | Private/local data boundary | REQ-004 | Existing source | Public repo must not embed private values |
| FEAT-005 | App registry | Links/internal routes to operational apps | Owner | APPROVED | YES | Accurate URLs/status | REQ-005 | Existing source | Live status requires evidence |
| FEAT-006 | Project Control System | Canonical project documents | Owner/Developer/AI | APPROVED | YES | Repository | REQ-006 | Owner instruction | Added 2026-09-30 |
| FEAT-007 | Project Control Center UI | Visible governance/current-state route | Owner | APPROVED | YES | FEAT-006 | REQ-007 | Owner instruction | Added 2026-09-30 |
| FEAT-008 | Requirements traceability | Need→decision→requirement→feature→implementation→test→evidence→acceptance | Owner/Developer/AI | APPROVED | YES | Registers | REQ-008 | Supplied control prompt | Bidirectional traceability |

| FEAT-009 | AI Idea Master Template governance operating system | Controlled lifecycle, classifications, Ready/Done gates, authority hierarchy, canonical register schemas and recovery/finalization controls | Owner/Developer/AI | APPROVED | YES | FEAT-006 / FEAT-008 | REQ-009–REQ-012 | DEC-007 + adoption branch verification | Governance-only; no product-code change |
