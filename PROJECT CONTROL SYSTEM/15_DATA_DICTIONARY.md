# 15 — Data Dictionary

## HubItem
- name: human-readable app name
- url: internal or external route
- internal: whether navigation stays within Master Hub
- status: Setup needed / Live / Development / Offline / Archived
- area: organizational area
- purpose: concise operational purpose

## HubTask
- id: unique task identifier
- title: action description
- lane: task lane
- important: priority marker
- complete: completion flag
- due: due-date field

## Parts/Repair Data
Exact fields vary by imported source. Known supported concepts include part name, part number, compatibility/model, GLS identifiers, costs/prices, and source. Imported source data is authoritative; missing fields must not be invented.

## Personal Finance Data
Sensitive account, credit, savings, debt, and personal financial values are private data. They are not canonical public-repository constants.

## Project Control Data
Decision IDs: DEC-###
Feature IDs: FEAT-###
Requirement IDs: REQ-###
Test IDs: TEST-###
Defect IDs: DEF-###
Risk IDs: RISK-###
Issue IDs: ISSUE-###
Dependency IDs: DEP-###


## Governance Identifier Lock
- Defect identifier convention: DEF-###
- Status: APPROVED by DEC-006
- BUG-### from the generic AI Idea Master Template is not used in Master Hub.
- Existing and future Master Hub defects retain DEF-### identifiers unless a later explicit Project Owner decision supersedes DEC-006.


## Canonical Data Dictionary Requirements
Document, where applicable:
- tables
- fields
- record types
- IDs
- statuses
- allowed values
- data sources
- units
- ownership
- retention
- sensitivity
- authoritative source

Rule:
Database schema and data structures must not become undocumented project logic.
