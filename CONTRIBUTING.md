# Contributing

## Workflow

1. Start from the latest `main`.
2. Create a focused branch linked to a GitHub issue.
3. Keep changes small and reviewable.
4. Run relevant builds and checks before opening a pull request.
5. Describe scope, tests, risks, and follow-up work in the PR.
6. Do not merge without the required review.

## Workspace commands

Run from the repository root:

- `npm install` — install all workspace dependencies
- `npm run dev:web` — start the React web client
- `npm run dev:api` — start the API in watch mode
- `npm run build:web` — type-check and build the web client
- `npm run build:api` — compile the API
- `npm run build` — build both workspaces

## Engineering rules

- Keep business rules and authorization enforcement in the API.
- Keep shared package content limited to cross-boundary contracts.
- Validate requirements with process owners before implementing workflows.
- Never commit secrets, real customer data, or employee personal data.
- Update documentation when workspace commands or architecture change.
