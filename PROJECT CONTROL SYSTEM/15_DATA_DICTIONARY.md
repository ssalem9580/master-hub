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
