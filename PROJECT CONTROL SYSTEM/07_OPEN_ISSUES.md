# 07 — Open Issues

## ISSUE-001 — Historical reconstruction incomplete
TYPE: Product / Governance
STATUS: OPEN
DESCRIPTION: Existing conversation/project history contains more decisions than are currently recorded in the canonical registers.
WHY IT MATTERS: Traceability is incomplete until reconstructed.
EVIDENCE: Existing repository history predates this control system.
POSSIBLE SOLUTIONS: Reconstruct from commits, source files, and explicit owner instructions in controlled batches.
DECISION REQUIRED: NO
DEPENDENCIES: Repository history and source evidence.
RESOLUTION:

## ISSUE-002 — Multiple related Vercel projects
TYPE: Technical
STATUS: INVESTIGATING
DESCRIPTION: Multiple Vercel projects exist for Master Hub and related standalone apps.
WHY IT MATTERS: Can cause confusing ownership, aliases, and deployment state.
EVIDENCE: Vercel team project list.
POSSIBLE SOLUTIONS: Define canonical deployment per app and disconnect/retire unintended duplicate project links.
DECISION REQUIRED: YES for destructive/disconnect actions.
DEPENDENCIES: Vercel project configuration.
RESOLUTION:

## ISSUE-003 — Supplied AI Idea Master Template is incomplete at end of Part 29
TYPE: Product / Governance
STATUS: OPEN
DESCRIPTION: The latest supplied source supersedes the earlier truncated copy and now extends through PART 29 — SOURCE-OF-TRUTH OWNERSHIP, but ends after "Field definitions".
WHY IT MATTERS: The missing remainder cannot be invented or silently reconstructed.
EVIDENCE: 00_AI_IDEA_MASTER_TEMPLATE.md captured from the latest Project Owner-supplied source.
POSSIBLE SOLUTIONS: Adopt only the supplied content; append the missing remainder later if the Project Owner supplies or explicitly approves it.
DECISION REQUIRED: NO
DEPENDENCIES: Additional owner-provided source if desired.
RESOLUTION: Earlier Part-15 truncation concern is superseded; current incompleteness is at Part 29.


## ISSUE-004 — Defect identifier convention conflict
TYPE: Product / Governance
STATUS: OPEN
DESCRIPTION: The AI Idea Master Template specifies BUG-### defect IDs, while the established Master Hub Data Dictionary and Defect Register use DEF-###.
WHY IT MATTERS: Silent renaming would break historical traceability and alter an established project convention.
EVIDENCE: 00_AI_IDEA_MASTER_TEMPLATE.md; 11_DEFECT_REGISTER.md; 15_DATA_DICTIONARY.md.
POSSIBLE SOLUTIONS: Preserve DEF-### as a Master Hub local convention, or explicitly authorize BUG-### for future records with a compatibility rule.
DECISION REQUIRED: YES
DEPENDENCIES: Project Owner governance decision.
RESOLUTION:
