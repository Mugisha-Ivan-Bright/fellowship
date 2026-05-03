# Fellowship Implementation Roadmap

## Codebase Audit: COMPLETE ✅

All guide documents reviewed. Existing Refine + GraphQL demo successfully audited. See detailed findings in [ARCHITECTURE_AUDIT.md](./ARCHITECTURE_AUDIT.md).

---

## Architecture Summary

**Fellowship** is a digital member management system for ADEPR (Pentecostal church in Rwanda) built on:

- **Frontend**: Refine + Ant Design (React framework for rapid CRM development)
- **Backend**: GraphQL Yoga (running as Next.js API route at `/api/graphql`)
- **Database**: Neon (serverless PostgreSQL)
- **Auth**: Clerk (user identity + role-based access)
- **Storage**: Vercel Blob (member photos)
- **Hosting**: Vercel (fullstack Next.js + API)
- **i18n**: next-intl (English + Kinyarwanda)

---

## Key Finding: Build System Migration Required

The existing demo runs on **Vite** (frontend-only). Fellowship architecture requires **Next.js** because:

1. GraphQL Yoga needs to run as `/api/graphql` route (Next.js API Routes feature)
2. Vercel deployment assumes Next.js fullstack structure
3. next-intl integrates seamlessly with Next.js App Router
4. Zero downtime — same Refine code runs under Next.js

---

## Implementation Phases (Revised)

### Phase 1: Foundation (6 tasks)

| #   | Task                    | Status   | Dep |
| --- | ----------------------- | -------- | --- |
| 1.1 | ✅ Codebase audit       | Complete | —   |
| 1.2 | ⏳ Next.js migration    | TODO     | 1.1 |
| 1.3 | ⏳ Neon + Prisma schema | TODO     | 1.2 |
| 1.4 | ⏳ GraphQL Yoga route   | TODO     | 1.3 |
| 1.5 | ⏳ Clerk auth wiring    | TODO     | 1.4 |
| 1.6 | ⏳ Data provider update | TODO     | 1.4 |

### Phase 2: Core Resources (4 tasks)

- Create Igihande resource
- Create Member resource + enrollment form
- Create Attendance resource
- Create Dedication resource

### Phase 3: Dashboard & Kanban (2 tasks)

- Build dashboard with Fellowship stats
- Adapt Kanban board (stage labels + card fields)

### Phase 4: Polish (4 tasks)

- Add access control provider
- Add i18n (EN + RW translations)
- Mobile responsiveness audit (375px)
- Ant Design theme customization

---

## Task 1.2: Next.js Migration (Immediate Next Step)

### Prerequisites

- Node.js ≥ 20
- No Clerk or Neon setup needed yet (those are later)

### Steps

1. **Install Next.js dependencies**

   ```bash
   npm install next@latest
   ```

2. **Create Next.js config**

   - Replace `vite.config.ts` with `next.config.js`
   - Keep existing Refine dependencies

3. **Restructure source**

   - Rename: `src/` → `src/app/`
   - Create: `src/app/layout.tsx` (Refine root layout)
   - Move all routes into `src/app/` with Next.js conventions
   - Update all import paths to use `@/` alias

4. **Update tsconfig.json**

   - Add Next.js template config
   - Keep existing `@/` path alias

5. **Test**

   - Run `npm run dev`
   - Verify Refine still initializes
   - Verify routes work (dashboard, tasks, companies)
   - Verify login page redirects correctly

6. **Remove Vite**
   - Delete `vite.config.ts`
   - Remove `@vitejs/plugin-react` from package.json
   - Clean up `index.html` (Next.js auto-generates)

### Success Criteria

- App runs on `http://localhost:3000`
- No TypeScript errors
- Navigation between pages works
- Layout renders correctly
- All Refine hooks work as before

---

## Task 1.3: Neon + Prisma (After 1.2)

### Prerequisites

- Neon account created (free tier)
- Neon project created, DATABASE_URL copied

### Steps

1. **Install Prisma**

   ```bash
   npm install @prisma/client
   npm install -D prisma
   ```

2. **Initialize Prisma**

   ```bash
   npx prisma init
   ```

   Creates `prisma/schema.prisma` and `.env.local`

3. **Add DATABASE_URL**

   ```env
   DATABASE_URL="postgresql://user:password@...neon.tech/dbname"
   ```

4. **Define schema** (from architecture-context.md)

   - User, Member, Igihande, Service, Attendance, Dedication, Task

5. **Run migration**

   ```bash
   npx prisma migrate dev --name init
   ```

6. **Seed data** (optional)
   Create sample Igihande groups, users, members

### Success Criteria

- `npx prisma studio` shows all tables created
- No migration errors
- DATABASE_URL validated

---

## Task 1.4: GraphQL Yoga Route (After 1.3)

### Prerequisites

- Next.js running
- Prisma connected to Neon
- GraphQL dependencies installed (already in package.json)

### Steps

1. **Install GraphQL Yoga**

   ```bash
   npm install graphql-yoga
   ```

2. **Create route file**: `src/app/api/graphql/route.ts`

   - Import Prisma client
   - Define GraphQL schema typeDefs (from architecture-context.md)
   - Define context function (return `{ prisma }` for now)
   - Stub all resolvers with `throw new Error("not implemented")`
   - Export GraphQL Yoga handler

3. **Test GraphQL endpoint**

   ```bash
   POST http://localhost:3000/api/graphql
   {"query": "{__schema{types{name}}}"}
   ```

4. **Verify introspection**
   GraphQL schema introspection should return all types

### Success Criteria

- POST `/api/graphql` responds
- GraphQL introspection works
- No 404 errors
- TypeScript has no errors

---

## Task 1.5: Clerk Auth Wiring (After 1.4)

### Prerequisites

- Clerk account + project created
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY env var set
- CLERK_SECRET_KEY env var set

### Steps

1. **Install Clerk SDK**

   ```bash
   npm install @clerk/nextjs
   ```

2. **Update authProvider** (src/providers/auth.ts)

   - Replace custom login mutation with Clerk sign-in
   - Use Clerk's `useUser()` hook to check auth
   - Verify Clerk token is passed in Apollo headers (fetch wrapper)

3. **Update GraphQL context** (src/app/api/graphql/route.ts)

   - Extract Clerk token from request headers
   - Verify token using Clerk SDK
   - Return `{ userId, role, prisma }` to resolvers

4. **Test**
   - Navigate to `/login`
   - Verify Clerk sign-in UI appears
   - Sign in with test account
   - Verify redirect to dashboard
   - Verify token passed in GraphQL requests

### Success Criteria

- Clerk sign-in works
- Authenticated requests include valid token
- GraphQL context receives userId
- Logout clears session

---

## Task 1.6: Data Provider Update (After 1.4)

### Prerequisites

- GraphQL Yoga running
- All previous tasks complete

### Steps

1. **Update endpoint** (src/providers/data/index.ts)

   ```ts
   export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "/api/graphql";
   ```

2. **Test with demo queries**

   - Run existing demo queries against `/api/graphql`
   - Stub resolvers will return errors, but endpoint should respond
   - Verify Apollo Client connects

3. **Remove external demo API reference**
   - Delete old references to `api.crm.refine.dev`
   - Update any hardcoded URLs

### Success Criteria

- Apollo Client connects to `/api/graphql`
- No CORS errors
- Demo pages attempt to load (may show errors due to stub resolvers)

---

## Phase 2 Preview: Core Resources

After Phase 1 is complete, Phase 2 will:

1. **Write resolvers** for all GraphQL operations
2. **Create Refine resources** (list, create, edit, show pages)
3. **Build UI components** (forms, tables, cards)
4. **Add role-based access** via accessControlProvider

Example: Members resource

- Resolver: `Query.members`, `Mutation.createMember`, etc.
- Pages: `/members` (list), `/members/new` (create), `/members/[id]/edit`
- Components: MemberAvatar, MemberSearchSelect, MemberEnrollmentForm

---

## Storage & Environment

### Required Environment Variables (by Phase)

**Phase 1.2** (Next.js)

- None (optional: NEXT_PUBLIC_API_URL)

**Phase 1.3** (Neon)

- DATABASE_URL

**Phase 1.4** (GraphQL Yoga)

- None (Prisma uses DATABASE_URL)

**Phase 1.5** (Clerk)

- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
- CLERK_SECRET_KEY

**Phase 2** (File Storage)

- BLOB_READ_WRITE_TOKEN (Vercel Blob)

---

## Resource Mapping: Demo → Fellowship

| Demo      | Fellowship  | Status             |
| --------- | ----------- | ------------------ |
| dashboard | dashboard   | Rewrite stats      |
| companies | members     | Replace entirely   |
| tasks     | tasks       | Keep, adapt labels |
| —         | igihande    | Add new            |
| —         | attendance  | Add new            |
| —         | dedications | Add new            |
| —         | services    | Add new            |

---

## Final Architecture (After All Phases)

```
Fellowship
├── src/
│   ├── app/                              # Next.js App Router
│   │   ├── layout.tsx                   # Root layout (Refine init)
│   │   ├── page.tsx                     # Dashboard
│   │   ├── (members)/                   # Members routes
│   │   ├── (igihande)/                  # Igihande routes
│   │   ├── (attendance)/                # Attendance routes
│   │   ├── (dedications)/               # Dedication routes
│   │   ├── (tasks)/                     # Tasks/Kanban routes
│   │   ├── (auth)/                      # Clerk auth routes
│   │   └── api/
│   │       └── graphql/
│   │           └── route.ts             # GraphQL Yoga handler
│   ├── components/                      # Refine + custom components
│   ├── providers/                       # Refine providers
│   ├── graphql/                         # GraphQL schema + generated types
│   ├── lib/                             # Utilities
│   └── messages/                        # i18n translations
├── prisma/
│   └── schema.prisma                    # Data model
├── next.config.js
└── package.json
```

---

## Success Criteria for This Audit

✅ All guide documents reviewed and understood
✅ Demo codebase fully audited
✅ Architecture decisions documented
✅ Build order established
✅ Task 1.2 (Next.js migration) clearly scoped
✅ Implementation roadmap created

**Next action**: Begin Task 1.2 (Next.js migration)
