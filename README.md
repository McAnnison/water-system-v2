# SDK Alkaline Water Digital Operations Platform

A role-aware operations platform for production, inventory, dispatch, finance, and management reporting at SDK Alkaline Water Limited.

> Delivery status: engineering foundation and authentication interface scaffold. Authentication is currently frontend-only; production sign-in, invitation validation, persistence, and operational APIs are not implemented.

## Architecture

The repository is organized as a modular monolith with a separate React web client, Node.js/TypeScript API, and shared-contracts package.

- Web: React, TypeScript, Vite, Tailwind CSS
- API: Node.js and TypeScript
- Shared: transport types and validation contracts shared across the web and API
- Planned persistence: PostgreSQL with Prisma, subject to the approved data model
- API style: REST with documented contracts

## Repository layout

- `apps/web` — React/Vite web client
- `apps/api` — Node.js API scaffold
- `packages/shared` — shared transport contracts (placeholder)
- `docs/product` — charter, vision, scope
- `docs/requirements` — SRS, workflows, rules, permissions
- `docs/architecture` — system design and ADRs
- `docs/database` — ERD and data dictionary
- `docs/api` — API conventions and OpenAPI
- `docs/delivery` — roadmap and quality plan
- `infrastructure` — local and deployment configuration

## Prerequisites

- Node.js 22.12 or newer
- npm 10 or newer

## Getting started

Install dependencies at the repository root with `npm install`.

Run the web client with `npm run dev:web` and the API in a separate terminal with `npm run dev:api`.

The API exposes `GET http://localhost:4000/health`.

Build both workspaces with `npm run build`; use `npm run build:web` or `npm run build:api` for individual builds.

## Engineering principles

- Requirements and acceptance criteria precede implementation.
- Every change is linked to an issue and delivered through a pull request.
- Protect `main`; no direct feature commits.
- Enforce authentication and authorization on the server.
- Use explicit database migrations and test critical workflows.
- Never commit credentials or real customer/employee data.
