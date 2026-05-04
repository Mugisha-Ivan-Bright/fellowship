# Progress Tracker

Update this file after each meaningful implementation change.

---

## Current Phase

**Phase 1 — Foundation: Real Backend Setup** ✅ Complete

**Current Status**: Real backend successfully setup with Prisma 6, local GraphQL Yoga server, and `@clerk/react` authentication! The frontend's Refine `dataProvider` and `authProvider` now consume our local server instead of the external CRM API. The Members UI uses the new native data model. Remaining: Update the other Refine routes (Igihande, Attendance, Dedications) to native models.

---

## Current Goal

**Complete Phase 1 Foundation** — implement Fellowship GraphQL schema and resolvers, then build core resources.

---

## Completed

- [x] Defined product scope, church structure, goals, features (`project-overview.md`)
- [x] Defined full stack: Refine + GraphQL Yoga + Prisma + Neon + Clerk + Vercel Blob (`architecture-context.md`)
- [x] Defined complete GraphQL schema (typeDefs + Prisma model) for all entities including Task/Kanban
- [x] Defined Ant Design token overrides, layout patterns, component conventions (`ui-context.md`)
- [x] Defined full i18n string reference — English + Kinyarwanda with grammar rules (`ui-context.md`)
- [x] Defined Refine + GraphQL patterns, file organisation (`code-standards.md`)
- [x] Defined phased build order starting with codebase audit (`ai-workflow-rules.md`)
- [x] Kanban adapted: Task resource, 4 stages (TODO/IN_PROGRESS/DONE/ON_HOLD), church-context card fields
- [x] Codebase audit — Refine + Vite demo fully documented
- [x] **Reshaped codebase for Fellowship**:
  - [x] Replaced companies resource → members resource
  - [x] Added igihande resource (cell groups)
  - [x] Added attendance resource (service tracking)
  - [x] Added dedications resource (tithing, offerings, volunteering)
  - [x] Updated app branding: "Taxpay" → "Fellowship"
  - [x] Applied Fellowship Ant Design theme (ADEPR green #1B6B3A)
  - [x] Created stub route pages for all resources
  - [x] App compiles and runs successfully on Vite
- [x] **Members UI Implementation** (BLOCKED - needs GraphQL schema first):
  - [x] Members list page with table, search, filters
  - [x] Members create page with 3-step enrollment form
  - [x] Members edit page with form validation
  - [x] Members show page with member details

---

## In Progress

- [ ] **Phase 1 Completion**: Real Backend Setup
  - [x] Obtain Neon DB connection string and Clerk keys
  - [x] Create Prisma schema (`schema.prisma`)
  - [x] Run Prisma migration / generated Prisma Client 6
  - [x] Set up GraphQL Yoga server
  - [x] Implement Fellowship GraphQL schema and resolvers
  - [x] Update frontend to use real API & Clerk Auth
  - [x] Replace demo API mapping with real data points for Members
  - [x] Replace demo API mapping with real data points for Igihande, Attendance, Dedications, Tasks

**Current Status**: The backend server is actively running alongside Vite. Clerk is connected to `main.tsx`. Currently refactoring the remaining frontend pages to utilize the native schema fields instead of demo mapped properties.

---

## Next Up

1. ✅ Codebase audit → COMPLETE
2. ✅ Codebase restructuring → COMPLETE (Refine + Vite, not Next.js)
3. ✅ Implement Members resource (list, create, edit, show pages with forms) → **COMPLETE**
4. ✅ Implement Igihande resource (list, create, edit pages) → **COMPLETE**
5. ✅ Implement Attendance resource (record attendance UI) → **COMPLETE**
6. ✅ Implement Dedications resource (record dedications UI) → **COMPLETE**
7. ✅ Implement Dashboard with Fellowship stats → **COMPLETE**
8. ✅ Adapt Kanban for tasks → **COMPLETE**
9. ✅ Add i18n (EN + RW translations) → **COMPLETE**
10. ✅ Add mobile responsiveness (375px) → **COMPLETE**
11. ✅ Add access control based on roles → **COMPLETE**

---

## Open Questions

- **GraphQL API**: ✅ Set up locally using GraphQL Yoga.
- **Authentication**: ✅ Clerk integration is active! We use `@clerk/react`.
- **Database**: ✅ Neon + Prisma 6.3.0 is configured.
- **Member enrollment form**: Should it be a multi-step form (Steps component) or single form? (Guide suggests 3-step Steps component)
- **Photo upload**: Should member photos be implemented now or deferred to Phase 4 polish?
- **Igihande count**: How many Igihande groups to seed for testing?
- **i18n**: Start with EN only, add RW later? (Guide requires both)
- **Mobile testing**: Test on 375px at each phase or wait until Phase 4 polish?

---

## Architecture Decisions

| Decision           | Choice                          | Reason                                         | Status       |
| ------------------ | ------------------------------- | ---------------------------------------------- | ------------ |
| Frontend framework | Refine + Ant Design             | Existing demo — extend, not rewrite            | ✅ Confirmed |
| Build system       | Vite (keep)                     | Refine + Vite works great; no Next.js needed   | ✅ Confirmed |
| Hosting            | Netlify (keep for now)          | Supports Vite deployment; GraphQL TBD          | ✅ For MVP   |
| Data layer         | GraphQL (end to end)            | Matches existing demo's data provider          | ✅ Ready     |
| GraphQL server     | GraphQL Yoga                    | Real local backend server configured           | ✅ Ready     |
| ORM                | Prisma 6.3.0                    | Type-safe DB access configured                 | ✅ Ready     |
| Database           | Neon                            | Serverless PostgreSQL                          | ✅ Ready     |
| Auth               | Clerk (`@clerk/react`)          | Replaced demo login, integrated securely       | ✅ Ready     |
| Auth transport     | Bearer token in headers         | Custom fetch wrapper already structured        | ✅ Ready     |
| Kanban drag-drop   | @dnd-kit                        | Already in dependencies, working in demo       | ✅ Ready     |
| File storage       | Vercel Blob (Phase 2+)          | Member photos — URL stored in Member data      | ⏳ Phase 2   |
| i18n               | i18next (Phase 4)               | English + Kinyarwanda, add after core features | ⏳ Phase 4   |
| Soft delete        | status: INACTIVE                | Never lose a member's history                  | ✅ Designed  |

---

## Session Notes

- **App name**: Fellowship
- **Church**: ADEPR local congregation, Rwanda
- **Primary user**: Church Secretary (data entry from paper records)
- **Starting point**: Existing cloned Refine + GraphQL demo — adapt, do not rebuild
- **Key constraint**: Must work well on a 375px phone browser with modest Rwanda internet
- **ADEPR proper nouns** (same in EN and RW): Igihande, Komite Nyobozi, Abanyetorero, Umunyamabanga, Pasiteri
