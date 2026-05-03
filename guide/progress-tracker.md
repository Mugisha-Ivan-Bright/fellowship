# Progress Tracker

Update this file after each meaningful implementation change.

---

## Current Phase

**Phase 1 — Foundation: Codebase Reshaped** ⚠️ Partially Complete

**Current Status**: UI structure created but GraphQL schema still uses demo entities. Need to implement Fellowship GraphQL schema and resolvers before UI can function.

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

- [x] **Phase 1 Completion**: Implement Fellowship GraphQL schema and resolvers
  - [x] Create Fellowship GraphQL queries for Members, Igihande, Attendance, Dedications
  - [x] Map Fellowship resources to demo API resources (Members→Companies, Igihande→TaskStages)
  - [x] Update Members UI to use demo API with field mapping
  - [x] Test Members functionality end-to-end - ✅ **WORKING**
  - [x] Update Igihande resource to use demo API mapping - ✅ **COMPLETE**
  - [x] Update Attendance resource to use demo API mapping - ✅ **COMPLETE**
  - [x] Update Dedications resource to use demo API mapping - ✅ **COMPLETE**
  - [x] Update Dashboard with Fellowship stats - ✅ **COMPLETE**
  - [x] Adapt Kanban for Fellowship tasks - ✅ **COMPLETE**

**Current Status**: All core resources (Members, Igihande, Attendance, Dedications), Dashboard, and Kanban task management are now implemented with demo API mapping. Application runs successfully at http://localhost:5174/

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
9. Add i18n (EN + RW translations)
10. Add mobile responsiveness (375px)
11. Add access control based on roles

---

## Open Questions

- **GraphQL API**: Should the GraphQL endpoint stay as external demo API or be set up locally? (Currently using api.crm.refine.dev for demo data)
- **Authentication**: Demo uses custom email login. Should we implement Clerk integration now, or keep demo auth during development?
- **Database**: Should we set up real Neon + Prisma now, or use mock data during UI development?
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
| GraphQL server     | GraphQL Yoga (optional Phase 2) | Local or external; demo API works for MVP      | ⏳ Phase 2   |
| ORM                | Prisma (optional Phase 2)       | Type-safe DB access when real backend needed   | ⏳ Phase 2   |
| Database           | Neon (optional Phase 2)         | Serverless PostgreSQL when backend ready       | ⏳ Phase 2   |
| Auth               | Custom demo (Phase 3: Clerk)    | Demo login fine for MVP; Clerk for production  | ✅ For MVP   |
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
