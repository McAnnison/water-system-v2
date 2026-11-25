# Quality Plan

## Pull request quality gates
Formatting and lint checks; type checking; unit and relevant integration tests; build verification; dependency and secret scanning as the application foundation matures; and human review against acceptance criteria.

## Before release
End-to-end tests for critical workflows; role/permission tests; migration and recovery review; security review; UAT sign-off by process owners; backup restore verification; and an operational runbook.

## Test strategy
- Unit: domain rules, calculations, validators, policies.
- Integration: database constraints, transactions, repositories, API behavior.
- Contract: OpenAPI schemas and API compatibility.
- End-to-end: approved business journeys.
- Security: authentication, authorization, sessions, validation, audit controls.
- UAT: realistic normal and exception scenarios.

## Definition of done
Acceptance criteria pass, relevant tests pass, permissions are enforced server-side, errors are handled safely, documentation is updated, and the change is reviewed and merged.
