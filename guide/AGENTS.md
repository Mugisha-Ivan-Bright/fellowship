<!-- BEGIN:refine-graphql-agent-rules -->

# This project uses Refine + GraphQL Yoga + Prisma + Neon

This is NOT a plain Next.js app or plain React app.
It is built on top of a cloned Refine + GraphQL demo (Ant Design UI).

## Stack at a glance
- Frontend: Refine + Ant Design (existing demo — extend, do not rewrite)
- Data layer: GraphQL end to end
- GraphQL server: GraphQL Yoga at `/api/graphql` (Next.js API route)
- ORM: Prisma
- Database: Neon (serverless PostgreSQL)
- Auth: Clerk via Refine authProvider
- Storage: Vercel Blob (member photos)

## Before writing any code
1. Read `src/App.tsx` — resources, providers, router
2. Read `src/providers/` — data provider (note the current GraphQL endpoint), auth provider
3. Read the existing Kanban page — understand drag-drop library and data fetching before touching it
4. Read existing `ConfigProvider` theme setup
5. Check for any existing i18n setup
6. Document findings in `context/progress-tracker.md`

## Golden rules
- Extend the existing demo — never rewrite working foundation code
- Schema (Prisma + GraphQL typeDefs) always comes before UI
- Every mutation resolver verifies auth and role — never skipped
- Members are soft-deleted (INACTIVE) — never hard deleted
- All UI strings come from i18n translation keys — no hardcoded English

<!-- END:refine-graphql-agent-rules -->

---

## Fellowship — Application Building Context

Read in order before any implementation decision:

1. `context/project-overview.md` — product definition, church structure, goals, features, scope
2. `context/architecture-context.md` — full stack, GraphQL schema, Prisma model, Kanban Task resource, auth/role model, invariants
3. `context/ui-context.md` — Ant Design tokens, layout patterns, component conventions, full EN + RW i18n string reference
4. `context/code-standards.md` — Refine patterns, GraphQL patterns, Kanban wiring, naming conventions, file organisation
5. `context/ai-workflow-rules.md` — codebase-first audit, phased build order, scoping rules
6. `context/progress-tracker.md` — current phase, completed work, open questions, architecture decisions

Update `context/progress-tracker.md` after each meaningful implementation change.
Update the relevant context file if implementation changes architecture, scope, or standards.

---

## Key Facts

| | |
|---|---|
| App name | Fellowship |
| Purpose | Digital member management for a local ADEPR church in Rwanda |
| Starting point | Existing cloned Refine + GraphQL (Ant Design) demo |
| GraphQL server | GraphQL Yoga at `/api/graphql` |
| Database | Neon (serverless PostgreSQL) via Prisma |
| Auth | Clerk |
| Kanban | Adapted from demo → personal task manager for church leaders |
| i18n | English + Kinyarwanda (noun class grammar rules in `ui-context.md`) |
| Primary user | Church Secretary — enrolling members from paper records |
| Phone constraint | Must work on 375px screen with modest internet (Rwanda) |
