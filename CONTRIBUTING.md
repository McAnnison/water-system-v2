# Contributing

## Workflow
1. Create or select an issue describing the problem and expected outcome.
2. Confirm scope, acceptance criteria, and dependencies.
3. Create a focused branch from the agreed integration branch.
4. Make small, reviewable commits.
5. Run formatting, linting, type checks, and tests.
6. Open a pull request, link the issue, and describe verification.
7. Address review feedback; merge only when required checks pass.

## Branch naming
- `feat/<description>` — capability
- `fix/<description>` — defect
- `docs/<description>` — documentation
- `chore/<description>` — maintenance
- `refactor/<description>` — restructuring
- `test/<description>` — tests

## Commit messages
Use Conventional Commits: `type(scope): imperative summary`.

Examples: `docs(requirements): define production discovery questions`; `feat(inventory): record stock adjustment`.

## Engineering standards
- TypeScript strict mode for application code.
- Keep domain rules out of controllers and UI components.
- Validate external input and enforce authorization server-side.
- Use explicit, reviewed database migrations.
- Do not commit secrets or sensitive business data.
- Prefer focused abstractions and readable code.

## Current phase
This repository is in requirements discovery. Do not begin feature implementation until workflows, business rules, and acceptance criteria are reviewed.
