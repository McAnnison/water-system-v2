# SDK Alkaline Water Management System

A role-aware operations platform for production, inventory, dispatch, workforce activity, and management reporting at SDK Alkaline Water Limited.

> Status: discovery and engineering foundation. Requirements are being validated; no production functionality is implemented yet.

## Objectives
- Capture production and stock activity accurately.
- Trace stock movement through dispatch and distribution.
- Define accountable role-based workflows.
- Provide reliable operational visibility and auditability.

## Architecture direction
Start with a modular monolith: one backend organized around business modules, a separate React web client, and PostgreSQL. Proposed stack: React + TypeScript, Node.js + TypeScript + Express, PostgreSQL, Prisma, REST/OpenAPI, automated tests, GitHub Actions, and Docker. Validate choices against requirements before implementation.

## Repository layout
- `apps/api` — backend (planned)
- `apps/web` — web client (planned)
- `packages/shared` — shared contracts (planned)
- `docs/product` — charter, vision, scope
- `docs/requirements` — SRS, workflows, rules, permissions
- `docs/architecture` — system design and ADRs
- `docs/database` — ERD and data dictionary
- `docs/api` — API conventions and OpenAPI
- `docs/delivery` — roadmap and quality plan
- `infrastructure` — local and deployment configuration

## Read first
1. [Project charter](docs/product/project-charter.md)
2. [Product vision and scope](docs/product/vision-and-scope.md)
3. [Requirements discovery plan](docs/requirements/discovery-plan.md)
4. [Architecture overview](docs/architecture/overview.md)
5. [Contributing guide](CONTRIBUTING.md)

Do not implement business rules based on assumptions. Validate workflows with process owners first.

## Delivery principles
- Requirements and acceptance criteria precede implementation.
- Every change is linked to an issue and delivered through a pull request.
- Protect `main`; no direct feature commits.
- Enforce authorization on the server.
- Use explicit database migrations and test critical workflows.
- Never commit credentials or real customer/employee data.
