# Code Standards

## General

- Keep modules small and single-purpose.
- Fix root causes — do not layer workarounds.
- Do not mix unrelated concerns in one component, resolver, or route.
- Respect system boundaries defined in `architecture-context.md`.
- **Read the existing codebase before writing anything.** The Refine + GraphQL demo has established patterns — follow them.

---

## TypeScript

- Strict mode required throughout.
- Avoid `any` — use explicit interfaces or generated types.
- Use `interface` for object contracts, `type` for unions and aliases.
- All Prisma model types are generated — import from `@prisma/client`, never redefine them.
- Use GraphQL code generator (`@graphql-codegen`) to generate TypeScript types from the schema — never write GraphQL response types by hand.

---

## Refine Patterns

- Define all data entities as Refine **resources** in `App.tsx` with `list`, `create`, `edit`, `show` actions.
- Use Refine hooks for all data operations: `useList`, `useOne`, `useCreate`, `useUpdate`, `useDelete`.
- Never call GraphQL directly from a component — always go through Refine's data provider hooks.
- Use `useGetIdentity` and `useCan` for auth/role checks in components.
- Access control is declared once in `accessControlProvider` — never duplicate permission logic in components.
- Use Refine's `useNotification` (wired to Ant Design) for all user feedback.

---

## GraphQL Patterns

### Schema

- Schema is defined with `typeDefs` (SDL string or `.graphql` files) + resolvers.
- Keep type definitions in `src/graphql/schema/` organised by domain: `member.graphql`, `igihande.graphql`, `task.graphql`, etc.
- Keep resolvers in `src/graphql/resolvers/` with one file per domain.
- Use a `context` object in every resolver that contains `{ userId, role, prisma }`.

### Queries & Mutations on the Frontend

- GraphQL queries and mutations live in `src/graphql/queries/` and `src/graphql/mutations/`.
- Use **fragments** for reusable field sets — e.g. `MEMBER_FIELDS_FRAGMENT`.
- Match the existing demo's pattern for how it organises its own queries/mutations/fragments.
- Use `@graphql-codegen` to keep TypeScript types in sync with the schema.

### Resolvers

- Every resolver that mutates data checks `context.userId` and `context.role` first.
- Resolvers are thin — push complex queries into dedicated `lib/` service functions.
- Never expose internal Prisma errors to the client — catch and return clean GraphQL errors.

---

## Ant Design Patterns

- Use `<Form>` and `<Form.Item>` for all forms — never custom label/input pairs.
- Use `<Table>` for all list views.
- Use `<Modal>` or `<Drawer>` for create/edit overlays.
- Apply Fellowship token overrides via `<ConfigProvider theme={...}>` at the app root.
- Never use inline `style={{color: ...}}` — use design tokens or Ant Design color utilities.
- Never import raw CSS for Ant Design — antd v5 uses CSS-in-JS.

---

## Kanban

- Keep the existing demo's drag-drop logic intact — do not rewrite it.
- Wire the Kanban to the `Task` resource using `useList` (fetch tasks by stage) and `useUpdate` (stage change on drag).
- Stage changes call `updateTaskStage` mutation via `useUpdate`.
- Column labels use Fellowship stage labels from the i18n translation keys.
- Task cards with `relatedMember` render `<MemberAvatar />` + member name as a chip.

---

## Naming Conventions

- Files: `kebab-case`.
- Components: `PascalCase` matching the filename.
- GraphQL types: `PascalCase` (e.g. `Member`, `Igihande`, `TaskStage`).
- Resolvers: camelCase matching the operation name (e.g. `createMember`, `updateTaskStage`).
- ADEPR proper nouns in code: use their natural form — `igihande`, not `cellGroup`.
- Refine resource names: `members`, `igihande`, `attendance`, `dedications`, `tasks`, `services`.

---

## Styling

- Apply Fellowship Ant Design token overrides via `ConfigProvider` — see `ui-context.md`.
- No Tailwind in this project — Ant Design tokens are the styling layer.
- No hardcoded hex values or inline style colors.
- All layouts use Ant Design `<Row>` / `<Col>` with `xs`, `sm`, `md` breakpoints — mobile-first.

---

## Forms

- All forms use Ant Design `<Form>` with Refine's `useForm` hook.
- Validation rules go in `<Form.Item rules={[...]}>`.
- File uploads use Ant Design `<Upload>` with `beforeUpload` for type + size validation (JPEG/PNG, max 5MB).
- All form labels and validation messages come from i18n translation keys — never hardcoded strings.

---

## Auth (Clerk + GraphQL Context)

- Clerk session token is attached to every Apollo request via the auth header.
- GraphQL Yoga context function verifies the Clerk token on every request.
- Context provides `{ userId, role, prisma }` to all resolvers.
- Refine `authProvider` handles sign-in/sign-out and token passing to Apollo Client.

---

## Database

- All database access goes through Prisma in `lib/prisma.ts` (singleton).
- Prisma is only called from GraphQL resolvers or server-side utilities — never from client components.
- Use Prisma transactions for multi-table operations.
- Soft-delete members: set `status: INACTIVE` — never hard delete.

---

## File Storage

- Member photos upload to Vercel Blob at `members/photos/{memberId}.{ext}`.
- Upload from client using a Vercel Blob signed URL — save the resulting URL via `uploadMemberPhoto` mutation.
- Validate file type (JPEG/PNG) and size (max 5MB) before uploading.

---

## Internationalisation

- Check the existing demo for any i18n setup first — extend it rather than adding a new library.
- If no i18n exists in the demo: add `next-intl`.
- Translation files: `messages/en.json` and `messages/rw.json`.
- Ant Design component locale set via `<ConfigProvider locale={...}>`.
- Language preference stored in `localStorage` under `fellowship-lang`.
- Every visible UI string comes from a translation key — no hardcoded English in components.
- ADEPR proper nouns are identical in both language files.

---

## File Organisation

```
src/
  graphql/
    schema/          — typeDefs per domain (member.graphql, igihande.graphql, task.graphql…)
    resolvers/       — resolver functions per domain
    queries/         — frontend GraphQL query documents
    mutations/       — frontend GraphQL mutation documents
    fragments/       — reusable GraphQL fragments
    generated/       — @graphql-codegen output (do not edit manually)
  providers/
    dataProvider.ts  — Refine GraphQL data provider (update endpoint to /api/graphql)
    authProvider.ts  — Clerk → Refine auth provider
    accessControlProvider.ts
  resources/
    members/         — list, create, edit, show pages
    igihande/        — list, create, edit pages
    attendance/      — list, create pages
    dedications/     — list, create pages
    tasks/           — Kanban board (adapted from demo)
    dashboard/       — stats and overview
  components/
    members/         — MemberAvatar, MemberCard, MemberSearchSelect
    igihande/        — IgihandeTag, IgihandeCard
    attendance/      — AttendanceBadge, AttendanceCalendar
    tasks/           — TaskCard (adapted from demo)
    layout/          — Header (with language toggle), Sider
  lib/
    prisma.ts        — Prisma client singleton
    auth.ts          — Clerk token verification for GraphQL context
    utils.ts         — avatar color, date formatting
  messages/
    en.json
    rw.json
  app/
    api/
      graphql/
        route.ts     — GraphQL Yoga handler
prisma/
  schema.prisma
```
