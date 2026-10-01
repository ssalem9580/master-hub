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
