# 03 — Decision Log

## DEC-001
DATE: 2026-09-30
TITLE: Adopt permanent Project Control System
STATUS: APPROVED
QUESTION: Should Master Hub use a canonical, documented control system instead of relying on conversation memory?
DECISION: Yes. The repository-level Project Control System becomes the canonical project-state layer.
WHY: The owner explicitly requested incorporation around the current Master Hub.
ALTERNATIVES CONSIDERED: Continue using conversation history only.
EVIDENCE: Owner instruction and supplied Project Control prompt.
AFFECTED AREAS: Governance, requirements, releases, testing, recovery, AI workflow.
SUPERSEDES: Informal conversation-only project tracking.
SUPERSEDED BY:
REVIEW REQUIRED: NO
APPROVED BY: Project Owner

## DEC-002
DATE: 2026-09-30
TITLE: Keep private personal finance values out of the public repository
STATUS: APPROVED
QUESTION: How should personal finance values be stored?
DECISION: Do not hard-code sensitive personal finance values into public source.
WHY: Privacy boundary already established during Finances Command Center implementation.
AFFECTED AREAS: Finances, data, security/privacy.
APPROVED BY: Project Owner

## DEC-003
DATE: 2026-09-30
TITLE: Expose Project Control Center from Master Hub
STATUS: APPROVED
QUESTION: Should project governance be directly accessible from the hub?
DECISION: Add an internal Project Control Center route and registry entry.
WHY: Project control is now part of the Master Hub operating system.
AFFECTED AREAS: Navigation, governance, current-state visibility.
APPROVED BY: Project Owner


## DEC-004
DATE: 2026-09-30
TITLE: Begin controlled adoption of AI Idea Master Template
STATUS: APPROVED
QUESTION: Should the AI Idea Master Template be incorporated into Master Hub as its project-management and governance operating system through a protected, non-destructive adoption process?
DECISION: Yes. Begin controlled adoption on the dedicated adoption branch. Preserve existing Master Hub product content and canonical state. Template adoption governs project control and may not silently overwrite approved product decisions.
WHY: Project Owner explicitly directed that the entire AI Idea Master Template be incorporated into MasterHub as its project-management/governance operating system and issued BEGIN CONTROLLED TEMPLATE ADOPTION.
ALTERNATIVES CONSIDERED: Replace the current control system wholesale; continue without template adoption.
EVIDENCE: Project Owner instruction and 00_AI_IDEA_MASTER_TEMPLATE.md.
AFFECTED AREAS: Governance, control documents, requirements, testing, release, recovery, finalization.
SUPERSEDES:
SUPERSEDED BY:
REVIEW REQUIRED: YES — final activation/merge requires owner review after reconciliation and verification.
APPROVED BY: Project Owner
