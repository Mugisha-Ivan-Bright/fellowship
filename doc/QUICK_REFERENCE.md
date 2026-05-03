# Fellowship Architecture Quick Reference

## Current State

- **Demo**: Vite frontend + external GraphQL API (api.crm.refine.dev)
- **Target**: Next.js fullstack + local GraphQL Yoga at `/api/graphql`
- **Status**: Codebase audit complete ✅, ready for Phase 1.2

---

## Tech Stack

| Component | Technology                                   | Status     |
| --------- | -------------------------------------------- | ---------- |
| Frontend  | React 19 + Refine 5 + Ant Design 5           | ✅ Ready   |
| Router    | React Router 7 (→ Next.js App Router in 1.2) | ⏳ Migrate |
| Drag-drop | @dnd-kit                                     | ✅ Ready   |
| GraphQL   | graphql-yoga + @refinedev/nestjs-query       | ⏳ Setup   |
| ORM       | Prisma                                       | ⏳ Setup   |
| Database  | Neon (PostgreSQL)                            | ⏳ Setup   |
| Auth      | Clerk                                        | ⏳ Setup   |
| Build     | Vite (→ Next.js)                             | ⏳ Migrate |
| Hosting   | Netlify (→ Vercel)                           | ⏳ Migrate |
| i18n      | ~~None~~ → next-intl                         | ⏳ Add     |

---

## Key Facts at a Glance

**Fellowship**: Digital member management for ADEPR church (Rwanda)

- **Users**: Secretary (data entry), Igihande leaders, Committee, Pastor
- **Core features**: Member enrollment, attendance tracking, Igihande groups, task Kanban, dashboard
- **Primary constraint**: Mobile-first (375px), modest internet connection
- **Languages**: English + Kinyarwanda (noun class grammar)

---

## Phase 1: Foundation (6 Steps)

| Step | Task              | Est. Time | Blocked By | Blocks  |
| ---- | ----------------- | --------- | ---------- | ------- |
| 1.1  | Codebase audit    | ✅ Done   | —          | 1.2     |
| 1.2  | Next.js migration | 2-3h      | —          | 1.3-1.6 |
| 1.3  | Neon + Prisma     | 1-2h      | 1.2        | 1.4     |
| 1.4  | GraphQL Yoga      | 2-3h      | 1.3        | 1.5-1.6 |
| 1.5  | Clerk auth        | 1-2h      | 1.4        | Phase 2 |
| 1.6  | Data provider     | 30m       | 1.4        | Phase 2 |

**Total Phase 1**: ~7-11 hours

---

## Critical Files (Current)

| File                          | Purpose              | Status                       |
| ----------------------------- | -------------------- | ---------------------------- |
| `src/App.tsx`                 | Refine core setup    | ✅ Keep + adapt              |
| `src/providers/data/index.ts` | GraphQL endpoint     | ⏳ Change to `/api/graphql`  |
| `src/providers/auth.ts`       | Login/logout         | ⚠️ Replace with Clerk        |
| `src/routes/tasks/list/`      | Kanban board         | ✅ Adapt labels only         |
| `src/config/resources.tsx`    | Resource definitions | ⚠️ Replace all 3 resources   |
| `vite.config.ts`              | Build config         | ❌ Remove (→ next.config.js) |

---

## Critical Files (To Create)

| File                           | Purpose                  | Phase |
| ------------------------------ | ------------------------ | ----- |
| `src/app/layout.tsx`           | Next.js root layout      | 1.2   |
| `src/app/api/graphql/route.ts` | GraphQL Yoga handler     | 1.4   |
| `prisma/schema.prisma`         | Prisma data model        | 1.3   |
| `src/graphql/schema/`          | GraphQL typeDefs         | 1.4   |
| `src/graphql/resolvers/`       | GraphQL resolvers        | 2.x   |
| `messages/en.json`             | English translations     | 4.1   |
| `messages/rw.json`             | Kinyarwanda translations | 4.1   |

---

## Refine Patterns (Existing, Keep!)

✅ Resource-based routing
✅ useList, useCreate, useUpdate, useDelete hooks
✅ dataProvider abstraction (GraphQL)
✅ authProvider for auth flow
✅ Ant Design Form + Table + Modal
✅ useNotification for feedback

---

## Breaking Changes in Next.js Migration

| Old (Vite)    | New (Next.js)   | Impact                  |
| ------------- | --------------- | ----------------------- |
| `index.html`  | Auto-generated  | Delete index.html       |
| `src/` folder | `src/app/`      | Restructure routes      |
| Vite imports  | Next.js imports | Import paths may change |
| Process env   | `NEXT_PUBLIC_*` | Prefix public vars      |
| Build command | `npm run build` | Same for both           |

---

## API Design Preview (Phase 1.4+)

```graphql
# Example queries (to be implemented in Phase 2)
query GetMembers {
  members(igihandeId: "x", search: "john") {
    id
    name
    phone
    photoUrl
    status
    igihande {
      id
      name
    }
  }
}

# Example mutations
mutation CreateMember($input: CreateMemberInput!) {
  createMember(input: $input) {
    id
    membershipNo
    firstName
  }
}

mutation UpdateTaskStage($id: ID!, $stage: TaskStage!) {
  updateTaskStage(id: $id, stage: $stage) {
    id
    stage
  }
}
```

---

## Environment Variables Checklist

**Phase 1.2**: None needed
**Phase 1.3**:

- [ ] DATABASE_URL (from Neon)

**Phase 1.4**: None (Prisma uses DATABASE_URL)

**Phase 1.5**:

- [ ] NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
- [ ] CLERK_SECRET_KEY

**Phase 2+**:

- [ ] BLOB_READ_WRITE_TOKEN (Vercel Blob)

---

## Development Commands (After Next.js Migration)

```bash
# Development
npm run dev                     # Start on localhost:3000

# Database
npx prisma studio             # Inspect Neon database
npx prisma migrate dev        # Create new migration

# GraphQL
npm run codegen              # Generate TypeScript types from schema

# Deployment to Vercel
vercel deploy

# Type checking
npm run build                # Full TypeScript check + Next.js build
```

---

## Deployment Checklist (Future)

- [ ] Vercel project created
- [ ] DATABASE_URL set in Vercel env vars
- [ ] CLERK_SECRET_KEY set in Vercel env vars
- [ ] NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY set in Vercel env vars
- [ ] BLOB_READ_WRITE_TOKEN set in Vercel env vars
- [ ] Prisma migrations run on production (careful!)
- [ ] Clerk configured for production domain
- [ ] DNS pointing to Vercel

---

## Common Gotchas to Avoid

⚠️ **Don't rewrite demo Kanban logic** — only adapt labels and card fields
⚠️ **Don't invent GraphQL mutations** — follow architecture-context.md schema exactly
⚠️ **Don't use hardcoded strings** — all UI text must use i18n keys
⚠️ **Don't hard delete members** — use `status: INACTIVE`
⚠️ **Don't skip auth checks in resolvers** — every mutation checks `context.userId`
⚠️ **Don't mix Vite and Next.js configs** — fully migrate, don't try hybrid
⚠️ **Don't forget path alias** — keep `@/` imports working in Next.js

---

## Documentation Index

1. **[guide/project-overview.md](../guide/project-overview.md)** — Product definition, users, features
2. **[guide/architecture-context.md](../guide/architecture-context.md)** — Full stack, GraphQL schema, patterns
3. **[guide/ui-context.md](../guide/ui-context.md)** — Ant Design tokens, layouts, i18n strings
4. **[guide/code-standards.md](../guide/code-standards.md)** — Code conventions, file org, best practices
5. **[guide/ai-workflow-rules.md](../guide/ai-workflow-rules.md)** — Development workflow, protected code
6. **[ARCHITECTURE_AUDIT.md](./ARCHITECTURE_AUDIT.md)** — Detailed audit findings
7. **[IMPLEMENTATION_ROADMAP.md](./IMPLEMENTATION_ROADMAP.md)** — Step-by-step build plan

---

## Status: Ready for Phase 1.2

**✅ Audit complete**
**✅ Architecture documented**
**✅ Build order confirmed**
**✅ Next task**: Next.js migration (Phase 1.2)

See [IMPLEMENTATION_ROADMAP.md](./IMPLEMENTATION_ROADMAP.md) for detailed Phase 1.2 steps.
