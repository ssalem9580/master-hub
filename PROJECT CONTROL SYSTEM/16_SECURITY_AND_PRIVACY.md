# 16 — Security and Privacy

## Approved Rules
- Never commit credentials, API keys, passwords, tokens, or private account identifiers.
- Never hard-code sensitive personal finance values into the public repository.
- Treat imported documents and private user data according to their actual access boundary.
- Public deployment must not expose data merely because the UI can render it.
- External integrations should use least privilege.

## AI Boundary
AI may summarize and implement using supplied/connected data only for the approved task. It may not invent missing private values or silently broaden data sharing.

## Retention
Project-document retention policy: canonical project-control records remain in Git history unless superseded by an approved change.
Private-data retention policy: UNKNOWN / NEEDS CONFIRMATION per tool/integration.

## Security Review Status
Foundation established; full dependency/secret/security audit is OPEN.


## Canonical Security and Privacy Coverage
Document, where applicable:
- authentication
- authorization
- user roles
- permission boundaries
- sensitive data classes
- secrets handling
- environment variables
- encryption expectations
- data retention
- deletion behavior
- audit/logging behavior
- external AI-provider exposure
- third-party data sharing
- compliance obligations
- incident response considerations

Never expose secrets or credentials in documentation intended for broad distribution.
Unknown controls remain UNKNOWN / NEEDS CONFIRMATION until verified.


## Reconstruction Audit Security Findings — 2026-09-30
- Repository visibility: PUBLIC.
- Canonical MasterHub production routes are publicly reachable without application authentication.
- No auth middleware/proxy/session/API layer was found in the current application tree.
- Core personal-entry data in inspected routes is stored in browser localStorage rather than a server database.
- Field-service diagnostic and repair-package material is publicly reachable; allowed distribution classification is still UNKNOWN / NEEDS CONFIRMATION.
- Historical audit finding: Next.js was 16.3.4 during initial reconstruction. SECURITY-QUALITY-1.0 subsequently upgraded canonical main/production to 16.3.8 and verified the release.
- Vercel runtime error query found no runtime error clusters in the selected 7-day window.

Do not change repository visibility or remove historical content without explicit owner authorization and a recovery plan.


## Approved Access Boundary — DEC-015
MasterHub is intentionally public and does **not** require application login.

For this project:
- "Private" means private-use and local/private handling of sensitive data.
- "Private" does not mean the website itself is access-controlled.
- Public reachability is an approved product property, not a defect.
- Sensitive personal finance values, credentials, passwords, tokens, secrets, private account identifiers, or other restricted data must not be hard-coded into the public repository or exposed by public routes.
- Current inspected personal-entry data remains browser-local through localStorage unless a later approved architecture changes that boundary.
- Any future feature that stores sensitive/personal data server-side, syncs it across devices/accounts, or shares it with a third party requires a new explicit security/privacy review before implementation.
- Field-service diagnostic/repair content has a separate unresolved distribution-classification issue. No-login approval does not classify that material as safe for public distribution.


## Restricted Field-Service Boundary — DEC-016
Default classification: **RESTRICTED**.

Applies to all field-service operational material unless the Project Owner explicitly reclassifies a specific item, including:
- diagnostic workflows
- repair procedures
- repair packages
- part numbers and operational parts data
- equipment-specific troubleshooting
- harness, terminal, board, component, and wiring references
- field-service decision trees
- related source documents
- derived operational guidance

### Distribution Rules
- Do not publish restricted material to public repositories, public routes, or public artifacts.
- Do not send restricted field-service material to external AI providers unless explicitly authorized for that specific use.
- Previously public availability does not equal approval for continued public distribution.
- Public MasterHub may remain no-login under DEC-015, but restricted field-service content must be separated from that public surface.
- Removal from current HEAD alone does not remediate Git history; history exposure must be assessed separately.
- Before deletion/migration, preserve a recoverable private copy and document source ownership.

### Current Security State
NONCOMPLIANT WITH DEC-016 UNTIL CONTAINMENT:
- public repository contains restricted material
- public MasterHub routes/assets expose restricted field-service material

Containment is now the highest-priority open security task.
