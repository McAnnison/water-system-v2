# Architecture Overview

**Status:** Proposed direction; validate after requirements discovery.

## Architectural style
Start with a modular monolith: one backend deployment organized around business capabilities, one relational database, and a separately developed web client. Avoid microservices until independently deployable scaling or ownership needs are demonstrated.

## Proposed technology baseline
| Concern | Proposed choice | Validation |
|---|---|---|
| Web client | React + TypeScript | Confirm device/browser needs |
| API | Node.js + TypeScript + Express | Confirm team and operational fit |
| Database | PostgreSQL | Confirm hosting and data needs |
| Data access | Prisma | Validate migration/query requirements |
| API contract | REST + OpenAPI | Confirm integrations |
| Tests | Vitest/Jest, Supertest, Playwright | Select with app foundation |
| Delivery | GitHub Actions, Docker | Validate deployment environment |

## Logical layers
- Presentation: routes, screens, forms, client state.
- Transport: API routes, request parsing, authentication middleware, response mapping.
- Application: use cases, transaction orchestration, authorization decisions.
- Domain: business entities, invariants, policies, domain services.
- Infrastructure: database repositories, integrations, logging, file storage.

Keep domain rules independent of HTTP and UI concerns.

## Candidate modules
Identity and access; production; inventory; dispatch; finance; notifications; reporting; audit. Boundaries must follow validated workflows.

## Security baseline
Server-side authorization on every protected operation; least privilege; secure password hashing; deliberate session design; CSRF protection where cookie sessions are used; input validation; rate limiting; security headers; managed secrets; and audit events that exclude credentials and unnecessary personal data.

## Data integrity
Use database constraints for invariants, model business dates/time zones deliberately, use transactions for multi-record operations, migrate schema changes explicitly, define correction/reversal policies, and test backup restoration.

## Quality attributes to specify
Availability, performance, usability, accessibility, security, maintainability, auditability, recoverability, and retention. Numeric targets require stakeholder agreement.
