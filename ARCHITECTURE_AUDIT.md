# Fellowship Architecture Audit Summary

## Overview

Existing Refine + GraphQL demo successfully cloned. Foundation is solid but requires key infrastructure changes to support Fellowship requirements.

## Current Demo State

| Aspect             | Status             | Details                                          |
| ------------------ | ------------------ | ------------------------------------------------ |
| Frontend Framework | ✅ Ready           | Refine + Ant Design, React Router v7             |
| Build Tool         | ⚠️ Needs Migration | Vite → Next.js (for `/api/graphql` routes)       |
| Hosting            | ⚠️ Needs Migration | Netlify → Vercel (to support next.js API routes) |
| Data Layer         | ✅ Ready           | GraphQL with @refinedev/nestjs-query provider    |
| Auth               | ❌ Needs Reconfig  | Custom login → Clerk                             |
| Kanban             | ✅ Ready           | @dnd-kit drag-drop, fully adaptable              |
| i18n               | ❌ Missing         | Need to add next-intl with EN/RW translations    |
| Database           | ⏳ Not Set Up      | Neon PostgreSQL connection pending               |
| ORM                | ⏳ Not Set Up      | Prisma schema pending                            |
| GraphQL Server     | ⏳ Not Set Up      | GraphQL Yoga at `/api/graphql` pending           |

---

## Architecture Changes Required

### 1. **Build System: Vite → Next.js Migration** (BLOCKING)

**Why**: Architecture spec requires `/api/graphql` route (Next.js API Routes pattern).

**Current**: Vite frontend at `src/`, Netlify hosting
**Target**: Next.js fullstack with `src/app` and `src/app/api/graphql/route.ts`

**Action**:

- Migrate Vite project to Next.js App Router
- Move frontend code to `src/app`
- All Refine routes become Next.js App Router routes
- This enables GraphQL Yoga to run as `/api/graphql` handler

---

### 2. **Auth: Custom Login → Clerk**

**Current**: Custom GraphQL mutation `login(email)` + localStorage token
**Target**: Clerk session + token passed in Apollo headers + GraphQL context verification

**Changes**:

- Replace custom auth provider with Clerk provider
- Update `authProvider` in `src/providers/auth.ts` to use Clerk SDK
- Clerk token auto-injected in fetch wrapper (already structured for this)
- GraphQL resolvers receive `userId` and `role` from Clerk context

---

### 3. **Resources: Demo → Fellowship**

**Replace all demo resources**:

- `companies` → `members`
- Keep `tasks` (Kanban) with stage labels adapted to Fellowship
- Add: `igihande`, `attendance`, `dedications`, `services`

**Mapping**:

```ts
// Current resources (src/config/resources.tsx)
- dashboard → ✓ keep, new stats
- companies → ✗ remove, replace with members
- tasks → ✓ keep, adapt card fields + stage labels

// Add new resources
+ members (list, create, edit, show)
+ igihande (list, create, edit)
+ attendance (list, create)
+ dedications (list, create)
+ services (list, create)
```

---

### 4. **GraphQL Endpoint Update**

**Current**:

```ts
export const API_URL = `${API_BASE_URL}/graphql`;
// Points to https://api.crm.refine.dev/graphql
```

**After Phase 1**:

```ts
export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "/api/graphql";
// Points to local `/api/graphql` (GraphQL Yoga handler)
```

---

### 5. **i18n Addition**

**Current**: None
**Action**: Add `next-intl` to the stack

- Translation files: `messages/en.json`, `messages/rw.json`
- Language toggle in Header component
- Preference stored in localStorage under `fellowship-lang`
- **All UI strings must use translation keys** — no hardcoded English

---

### 6. **Theme Customization**

**Current**: `RefineThemes.Blue` applied globally
**Target**: Fellowship Ant Design tokens via ConfigProvider

```ts
const fellowshipTheme = {
  token: {
    colorPrimary: "#1B6B3A", // ADEPR green
    colorSuccess: "#1B6B3A",
    colorWarning: "#92610A",
    colorError: "#C0392B",
    colorInfo: "#185FA5",
    colorBgBase: "#F7F7F5",
    colorBgContainer: "#FFFFFF",
    borderRadius: 8,
    fontFamily: "Geist Sans, sans-serif",
    fontFamilyCode: "Geist Mono, monospace",
    // ... others from ui-context.md
  },
};
```

---

## Technical Debt & Protected Code

### ✅ Existing Code To Keep/Extend

- Refine resource setup pattern
- Ant Design form/table/modal usage
- useList/useUpdate/useCreate/useDelete hooks
- Kanban drag-drop logic (@dnd-kit)
- GraphQL code generator setup

### ❌ Existing Code To Replace

- Auth provider (custom → Clerk)
- Data provider endpoint (external API → `/api/graphql`)
- Resources (demo companies/dashboard → Fellowship members/igihande/etc.)
- Theme (Blue → Fellowship custom tokens)

### ⏳ Existing Code To Ignore (For Now)

- `src/routes/companies/` — will be removed
- `src/routes/dashboard/` — will be gutted and rewritten with Fellowship stats
- Demo GraphQL queries — will be replaced with Fellowship schema

---

## Phase 1 Build Order (Revised for Next.js)

### Step 1: Codebase Audit ✅ COMPLETE

### Step 2: Next.js Migration

- Install Next.js and dependencies
- Convert `vite.config.ts` → `next.config.js`
- Move `src/` to `src/app` structure
- Update imports and route definitions
- Verify Refine still works under Next.js

### Step 3: Neon + Prisma Setup

- Create Neon project, get DATABASE_URL
- Add Prisma to project
- Write `prisma/schema.prisma` with Fellowship models (from architecture-context.md)
- Run `prisma migrate dev`

### Step 4: GraphQL Yoga at `/api/graphql`

- Create `src/app/api/graphql/route.ts`
- Define typeDefs (Fellowship schema from architecture-context.md)
- Stub out all resolvers
- Wire Prisma Client into resolver context
- Verify GraphQL introspection at `GET /api/graphql`

### Step 5: Clerk Auth Wiring

- Install Clerk SDK for Next.js
- Update `authProvider` to use Clerk
- Verify Clerk token in Apollo request headers
- Verify GraphQL context extracts userId + role from Clerk

### Step 6: Update Data Provider Endpoint

- Change API_URL in `src/providers/data/index.ts` to `/api/graphql`
- Test existing demo queries against new local endpoint

---

## Data Model (From architecture-context.md)

```graphql
# Core entities (Prisma models)
- User (Clerk identity + role)
- Member (church member record)
- Igihande (cell group)
- Service (Sunday/midweek/special)
- Attendance (member + service + present boolean)
- Dedication (member + type + date)
- Task (personal task Kanban)
```

---

## i18n Scope (Full Translation Keys)

**Navigation**: `nav.dashboard`, `nav.members`, `nav.igihande`, `nav.attendance`, `nav.dedications`, `nav.tasks`, `nav.settings`, `nav.signOut`

**Dashboard**: `dashboard.title`, `dashboard.welcome`, `dashboard.totalMembers`, `dashboard.activeMembers`, `dashboard.inactiveMembers`, `dashboard.newThisMonth`, `dashboard.attendanceRate`, `dashboard.totalIgihande`

**Members**: `members.enrollment`, `members.list`, `members.search`, `members.status`, `members.active`, `members.inactive`, `members.new`

**Igihande**: `igihande.name`, `igihande.leader`, `igihande.members`, `igihande.create`, `igihande.edit`

**Attendance**: `attendance.service`, `attendance.date`, `attendance.present`, `attendance.absent`, `attendance.sunday`, `attendance.midweek`, `attendance.special`

**Tasks**: `tasks.title`, `tasks.description`, `tasks.stage`, `tasks.priority`, `tasks.dueDate`, `tasks.assignee`, `tasks.todo`, `tasks.inProgress`, `tasks.done`, `tasks.onHold`

---

## Open Questions Resolved by Audit

| Question               | Answer                                                      |
| ---------------------- | ----------------------------------------------------------- |
| Demo auth setup?       | Custom mutation + localStorage. Need to replace with Clerk. |
| Demo i18n?             | None. Need to add next-intl.                                |
| Demo Kanban drag-drop? | @dnd-kit ✓ (already in dependencies)                        |
| GraphQL endpoint?      | External demo API. Will move to `/api/graphql`.             |
| Demo theme?            | RefineThemes.Blue. Will customize with Fellowship tokens.   |
| Demo file structure?   | Vite frontend. Will migrate to Next.js.                     |

---

## Next Immediate Action

**Decision Required**: Proceed with Next.js migration in Phase 1 Step 2, or start with schema/database setup first?

**Recommendation**: Next.js migration first (Step 2) because:

1. It's the blocking dependency for all subsequent steps
2. Everything downstream assumes `/api/graphql` route exists
3. Cleaner to set up build environment before database/ORM setup
