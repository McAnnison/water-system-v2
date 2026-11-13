# ADR 0001: Start with a Modular Monolith

- Status: Proposed
- Date: 2026-11-13
- Decision owners: To be confirmed

## Context
The platform has several related business capabilities. Delivery should remain manageable while preserving maintainable boundaries.

## Decision
Begin with one backend application organized into business modules, one relational database, and a separate web frontend. Define module interfaces and avoid reaching into another module's persistence internals.

## Consequences
Benefits include simpler deployment, debugging, local development, and transactional workflows. Trade-offs include the need to prevent tight coupling and the possibility that one deployment may eventually constrain independent scaling.

## Revisit when
Measured operational or organizational needs demonstrate a clear benefit from independently deployable services.
