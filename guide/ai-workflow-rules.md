# Development Workflow

## Approach

Build Fellowship incrementally using a spec-driven workflow. Context files define what to build, how to build it, and the current state of progress. Always implement against these specs — never invent behaviour from scratch.

---

## Critical First Step — Audit the Existing Demo

Before writing a single line of code, read and document the existing Refine + GraphQL demo:

1. `src/App.tsx` — resources list, data provider config, auth provider, router, layout.
2. `src/providers/data/` — how the GraphQL data provider is configured. What is the current endpoint? What Apollo Client options are set?
3. `src/providers/auth/` — what auth provider exists? Is Clerk already wired or is it mock auth?
4. `src/pages/kanban/` or `src/routes/kanban/` — the Kanban page. What drag-drop library? How are columns and cards structured? How does it fetch and update data?
5. `src/graphql/` — what queries, mutations, fragments already exist?
6. Existing `ConfigProvider` theme setup — what tokens are already overridden?
7. Existing i18n setup — is there `i18next`, `react-i18next`, or nothing?

Document findings in `progress-tracker.md` before proceeding to Step 1.

---

## Recommended Build Order

### Phase 1 — Foundation
1. **Codebase audit** — document what exists in the demo vs what needs to change.
2. **Neon database** — create project on Neon, get `DATABASE_URL`.
3. **Prisma setup** — add Prisma, write `schema.prisma` with all Fellowship models, run first migration against Neon.
4. **GraphQL Yoga** — create `app/api/graphql/route.ts` with GraphQL Yoga. Define schema `typeDefs` + stub resolvers. Verify `/api/graphql` responds to introspection.
5. **Update data provider** — point Refine's GraphQL data provider endpoint to `/api/graphql`.
6. **Clerk auth** — wire Clerk to Refine's `authProvider`. Verify Clerk token is passed in every Apollo request header. Verify GraphQL context receives `userId` and `role`.

### Phase 2 — Core Resources
7. **Igihande resource** — GraphQL resolvers + Refine list/create/edit pages. Required before Members.
8. **Member resource** — resolvers + enrollment form (Ant Design Steps) + member list + photo upload to Vercel Blob.
9. **Attendance resource** — service creation + attendance marking per member.
10. **Dedication resource** — record and view per-member dedications.

### Phase 3 — Dashboard & Kanban
11. **Dashboard** — `dashboardStats` query + Ant Design Statistic cards + Igihande breakdown + inactive member list.
12. **Kanban adaptation** — wire existing demo Kanban to `Task` GraphQL resource. Replace demo column labels and card fields with Fellowship equivalents. Persist stage changes via `updateTaskStage` mutation.

### Phase 4 — Polish
13. **Access control** — configure Refine `accessControlProvider` with role-based rules for all resources.
14. **i18n** — apply translation keys to all UI strings. Add EN/RW language toggle to Header.
15. **Mobile pass** — verify all pages are fully usable at 375px width.
16. **Ant Design theme** — apply Fellowship token overrides. Verify Kanban and all pages match the theme.

---

## Scoping Rules

- One resource or subsystem at a time.
- Schema changes (Prisma + GraphQL typeDefs) always happen before UI changes.
- Never combine unrelated resources in a single implementation step.

## When To Split Work

Split if a step combines:
- Prisma schema changes and UI work
- Multiple unrelated GraphQL resolvers
- Behaviour not clearly defined in the context files

## Handling Missing Requirements

- Do not invent behaviour not defined in the context files.
- Resolve ambiguity in the relevant context file before implementing.
- Add unresolved questions to `progress-tracker.md` as open questions.

## Protected Foundation

Never modify or rewrite:
- The existing Kanban drag-drop logic — adapt it, never replace it.
- Refine core provider setup unless explicitly required.
- Ant Design component internals.
- Clerk authentication UI.
- Prisma generated client output (`src/generated/`).
- GraphQL Codegen output (`src/graphql/generated/`).

## Keeping Docs In Sync

Update context files when implementation changes:
- Architecture, data model, GraphQL schema → `architecture-context.md`
- UI patterns, tokens, translation strings → `ui-context.md`
- Code conventions, file structure → `code-standards.md`
- Feature scope → `project-overview.md`

`progress-tracker.md` always reflects **actual** state — not intended state.

## Before Moving To The Next Step

1. Current step works end to end within its defined scope.
2. No invariant from `architecture-context.md` was violated.
3. `progress-tracker.md` is updated with completed work and new open questions.
