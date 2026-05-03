# UI Context

## UI Framework

Fellowship is built on **Ant Design (antd)** via the existing Refine demo codebase.

> **Read the existing codebase first.**
> Before writing any component or applying any styling:
> - Check `src/App.tsx` or theme config for existing Ant Design token overrides.
> - Check existing layout components (Sider, Header, Content) — extend them, do not replace.
> - Check how the existing Kanban applies card and column styles — follow the same pattern.
> - All new components must visually match the existing UI. Do not introduce a second design system.

## Theme

Light and clean. Fellowship is used daily by a church secretary and leaders, often on a phone or a low-end laptop. The visual language prioritises clarity, legibility, and ease of data entry over decorative complexity.

Ant Design's theming system is configured via `ConfigProvider` with a custom token object. All color and spacing decisions below are applied as Ant Design design tokens — not as inline styles or CSS classes.

### Ant Design Token Overrides for Fellowship

```ts
// Apply inside <ConfigProvider theme={{ token: { ... } }}>
{
  colorPrimary: '#1B6B3A',         // ADEPR brand green
  colorSuccess: '#1B6B3A',
  colorWarning: '#92610A',
  colorError: '#C0392B',
  colorInfo: '#185FA5',
  colorBgBase: '#F7F7F5',
  colorBgContainer: '#FFFFFF',
  colorBgElevated: '#F0EEE9',
  colorBorder: '#D9D6CE',
  colorText: '#1A1A18',
  colorTextSecondary: '#4A4A44',
  colorTextTertiary: '#7A7A72',
  borderRadius: 8,                 // rounded-lg equivalent
  borderRadiusLG: 12,              // cards, inputs
  borderRadiusXL: 16,              // modals
  fontFamily: 'Geist Sans, sans-serif',
  fontFamilyCode: 'Geist Mono, monospace',
}
```

The brand green (`#1B6B3A`) reflects ADEPR's identity — grounded, trustworthy, life-giving.

## Typography

| Role                | Font        | Notes                                      |
|---------------------|-------------|--------------------------------------------|
| UI text             | Geist Sans  | Applied via `fontFamily` token             |
| Membership No / IDs | Geist Mono  | Applied via `fontFamilyCode` token; use `<Typography.Text code>` for these fields |

Both fonts loaded via `next/font/google` or as `@import` in the global stylesheet.

## Layout Patterns

The layout uses the **existing Refine demo layout structure** — do not replace it.

- **Sider**: left sidebar with nav items per resource. On mobile: collapses to a drawer.
- **Header**: top bar with app name, language toggle (EN / RW), and user avatar + sign out.
- **Content**: main area — breadcrumb at top, page content below.
- **Mobile**: fully usable at 375px. Ant Design's responsive grid (`Col xs={24} md={12}`) is used throughout. This is a primary use case — the secretary and leaders are often on a phone.

### Page Layout Patterns by Feature

| Feature | Layout |
|---------|--------|
| Member list | `<Table>` with search bar + Igihande filter above. Card view on mobile. |
| Enrollment form | `<Steps>` (3 steps: Identity → Address → Church info). `<Form>` with two-column `<Row/Col>` grid on desktop, single column on mobile. |
| Igihande list | Ant Design `<Card>` grid — 2 columns desktop, 1 column mobile. |
| Attendance | `<Table>` with checkbox column per member. Date picker + service type selector above. |
| Dashboard | Ant Design `<Statistic>` cards in a responsive grid. Charts using `@ant-design/charts` or `@ant-design/plots`. |
| Kanban | Existing demo Kanban structure — adapted column labels and card fields. |

## Component Conventions

- Use Ant Design components as the base — `Form`, `Input`, `Select`, `Table`, `Modal`, `Drawer`, `Tag`, `Badge`, `Avatar`, `Card`, `Statistic`, `Steps`, `Upload`.
- Build Fellowship-specific wrappers on top: `MemberAvatar`, `IgihandeTag`, `AttendanceBadge`, `TaskCard`, `MemberSearchSelect`.
- Never modify Refine internal components or Ant Design source.
- All forms use Ant Design `<Form>` with `<Form.Item>` — never custom label/input pairs outside this pattern.
- Form validation messages must be in the active language (English or Kinyarwanda).

## Member Avatar

- Photo uploaded → circular `<Avatar src={photoUrl} />`.
- No photo → `<Avatar>` with initials (first letter of first + last name), background color derived deterministically from the member's name.
- Sizes: `size={32}` table rows, `size={48}` cards, `size={80}` profile view.

## Status Tags

Use Ant Design `<Tag>` with color props:

| Status   | Ant Design color | Label (EN) | Label (RW) |
|----------|-----------------|------------|------------|
| Active   | `green`         | Active     | Bakora |
| Inactive | `default`       | Inactive   | Batagikora |
| New      | `blue`          | New        | Bashya |
| Leader   | `purple`        | Leader     | Umuyobozi |

## Kanban Card Styling

Adapt the existing demo Kanban card style. Each Task card shows:
- Title (bold, truncated at 2 lines)
- Priority badge: `<Tag color="red">` High / `<Tag color="orange">` Medium / `<Tag color="default">` Low
- Due date (if set): small text below title, red if overdue
- Related member chip (if set): `<Avatar size={20} />` + member name, links to member profile
- Assignee avatar (if set): bottom-right corner

Column header shows stage label + task count badge.

## Attendance Cell Colors

Used in the per-member attendance calendar view (custom component):

| State   | Color     |
|---------|-----------|
| Present | `#C0DD97` |
| Absent  | `#E8E6E1` |
| Sunday  | `#B5D4F4` |
| No data | transparent |

## Icons

Ant Design Icons (`@ant-design/icons`). Use outlined variants by default.
Common icons:
- Members: `<UserOutlined />`
- Igihande: `<TeamOutlined />`
- Attendance: `<CheckSquareOutlined />`
- Dedications: `<GiftOutlined />`
- Tasks/Kanban: `<ProjectOutlined />`
- Dashboard: `<DashboardOutlined />`
- Settings: `<SettingOutlined />`
- Save: `<SaveOutlined />`
- Add: `<PlusOutlined />`

## Internationalisation (i18n)

Fellowship supports **English (en)** and **Kinyarwanda (rw)**. The language toggle sits in the Header navbar.

### Implementation

- Use `next-intl` (or `i18next` if already configured in the demo — check the existing codebase first).
- Translation files: `messages/en.json` and `messages/rw.json` (or `locales/en.json` / `locales/rw.json` — match the existing project convention).
- Ant Design's own component text (table empty state, pagination labels, date picker, etc.) is localised via `<ConfigProvider locale={...}>` — use `en_US` or a Kinyarwanda locale object.
- Every visible UI string must come from a translation key — no hardcoded English strings in components.
- ADEPR proper nouns (Igihande, Komite Nyobozi, Abanyetorero, Pasiteri, Umunyamabanga) are identical in both language files.
- Language preference is persisted in localStorage under `fellowship-lang`.
- Date format: `DD/MM/YYYY` in both languages (Rwandan convention). Apply via `dayjs` locale.

### Kinyarwanda Grammar Rules

Kinyarwanda is a Bantu language with 16 noun classes. Prefixes affect nouns, adjectives, and verbs.

**Key noun class pairs for Fellowship UI:**

| Class | Singular prefix | Plural prefix | Examples |
|-------|----------------|---------------|---------|
| 1/2   | `umu-`         | `aba-`        | umunyetorero → abanyetorero (member → members) |
| 7/8   | `iki-`         | `ibi-`        | igihande → ibihande (cell group → cell groups) |
| 5/6   | `i-`/`iri-`    | `ama-`        | itorero → amatorero (church → churches) |
| 15    | `uku-`/`ku-`   | —             | kwandikisha (to enroll), kwinjira (to enter) |

**Adjective agreement:** follows the noun and takes the noun's class prefix.
- `umunyetorero mushya` (new member) → `abanyetorero bashya` (new members)

**Verb structure:** subject prefix + tense marker + verb root.
- `arakora` (he/she works), `barakora` (they work)
- Infinitive: `kwandika` (to write), `gusoma` (to read), `kwinjira` (to enter)

**Connective:** `na` (and) → elides to `n'` before vowels: `amazina n'inomero`.

### Translation String Reference

#### Navigation

| Key | English | Kinyarwanda |
|-----|---------|-------------|
| `nav.dashboard` | Dashboard | Incamake |
| `nav.members` | Members | Abanyetorero |
| `nav.igihande` | Igihande | Amahande |
| `nav.attendance` | Attendance | Ibitabamo |
| `nav.dedications` | Dedications | Ibitangwa |
| `nav.tasks` | My Tasks | Imirimo yanjye |
| `nav.settings` | Settings | Igenamiterere |
| `nav.signOut` | Sign out | Sohoka |

#### Dashboard

| Key | English | Kinyarwanda |
|-----|---------|-------------|
| `dashboard.title` | Dashboard | Incamake |
| `dashboard.welcome` | Welcome back | Murakaza neza |
| `dashboard.totalMembers` | Total members | Abanyetorero bose |
| `dashboard.activeMembers` | Active members | Abanyetorero bakora |
| `dashboard.inactiveMembers` | Inactive members | Abanyetorero batagikora |
| `dashboard.newThisMonth` | New this month | Bashya uku kwezi |
| `dashboard.attendanceRate` | Attendance rate | Igipimo cy'ibitabamo |
| `dashboard.totalIgihande` | Igihande groups | Amahande yose |
| `dashboard.recentEnrollments` | Recent enrollments | Iyandikisho rya vuba |
| `dashboard.noInactive` | No inactive members found | Nta manyetorero batagikora babonetse |

#### Member Enrollment & Management

| Key | English | Kinyarwanda |
|-----|---------|-------------|
| `members.title` | Members | Abanyetorero |
| `members.enroll` | Enroll new member | Andikisha umunyetorero mushya |
| `members.search` | Search members… | Shakisha umunyetorero… |
| `members.filterByIgihande` | Filter by Igihande | Shungura ukurikije Igihande |
| `members.filterByStatus` | Filter by status | Shungura ukurikije imiterere |
| `members.active` | Active | Bakora |
| `members.inactive` | Inactive | Batagikora |
| `members.noResults` | No members found | Nta manyetorero yabonetse |
| `members.profile` | Member profile | Umwirondoro w'umunyetorero |
| `members.editProfile` | Edit profile | Hindura umwirondoro |
| `members.deactivate` | Mark as inactive | Shyira mu batagikora |
| `members.activate` | Mark as active | Shyira mu bakora |

#### Enrollment Form

| Key | English | Kinyarwanda |
|-----|---------|-------------|
| `enroll.title` | Enroll new member | Andikisha umunyetorero mushya |
| `enroll.subtitle` | Transfer paper records to the digital registry | Hindura impapuro z'inyandiko mu bubiko bwa digital |
| `enroll.section.identity` | Identity & Name | Indangamuntu n'amazina |
| `enroll.section.contact` | Address & Contact | Aho atuye no gutumanahana |
| `enroll.section.church` | Church information | Amakuru y'itorero |
| `enroll.section.photo` | Photo | Ifoto |
| `field.membershipNo` | Membership number | Inomero y'ubwanditsi |
| `field.membershipNo_hint` | Number from existing paper records | Inomero iri ku mpapuro za kera |
| `field.nationalId` | National ID | Indangamuntu |
| `field.firstName` | First name | Izina bita |
| `field.lastName` | Last name | Izina ry'umuryango |
| `field.gender` | Gender | Igitsina |
| `field.gender_male` | Male | Gabo |
| `field.gender_female` | Female | Gore |
| `field.dateOfBirth` | Date of birth | Itariki y'amavuko |
| `field.phone` | Phone number | Numero ya telefone |
| `field.province` | Province | Intara |
| `field.district` | District | Akarere |
| `field.sector` | Sector | Segiteri |
| `field.cell` | Cell | Akagari |
| `field.village` | Village | Umudugudu |
| `field.baptismDate` | Baptism date | Itariki y'ibatisimu |
| `field.maritalStatus` | Marital status | Imiterere y'ubukwe |
| `field.maritalStatus_single` | Single | Ingaragu |
| `field.maritalStatus_married` | Married | Bashakanye |
| `field.maritalStatus_widowed` | Widowed | Umupfakazi |
| `field.maritalStatus_divorced` | Divorced | Batandukanye |
| `field.igihande` | Igihande | Igihande |
| `field.igihande_hint` | Nearest Igihande to their home | Igihande hafi y'iwabo |
| `field.role` | Role in church | Inshingano mu itorero |
| `field.notes` | Additional notes | Ibindi bisobanuro |
| `field.photo` | Upload photo | Shyiramo ifoto |
| `field.photo_hint` | JPEG or PNG, maximum 5MB | JPEG cyangwa PNG, ntarengwa MB 5 |

#### Church Roles

| Key | English | Kinyarwanda |
|-----|---------|-------------|
| `role.member` | Member | Umunyetorero |
| `role.igihandeLeader` | Igihande Leader | Umuyobozi w'Igihande |
| `role.deacon` | Deacon | Umudiyakoni |
| `role.protocol` | Protocol | Protokole |
| `role.evangelist` | Evangelist | Umuvugabutumwa |
| `role.committee` | Committee member | Uwo mu Komite Nyobozi |
| `role.operations` | Operations Leader | Umuyobozi ushinzwe Ibikorwa |
| `role.treasurer` | Treasurer | Umubitsi |
| `role.secretary` | Secretary | Umunyamabanga |
| `role.pastor` | Pastor | Pasiteri |

#### Attendance

| Key | English | Kinyarwanda |
|-----|---------|-------------|
| `attendance.title` | Attendance | Ibitabamo |
| `attendance.newService` | New service | Serivisi nshya |
| `attendance.serviceType_sunday` | Sunday service | Serivisi ya Cyumweru |
| `attendance.serviceType_midweek` | Mid-week service | Serivisi yo hagati w'icyumweru |
| `attendance.serviceType_special` | Special event | Igikorwa kidasanzwe |
| `attendance.present` | Present | Ahari |
| `attendance.absent` | Absent | Ntahari |
| `attendance.markAll` | Mark all present | Shyira bose nk'abahari |
| `attendance.save` | Save attendance | Bika ibitabamo |
| `attendance.history` | Attendance history | Amateka y'ibitabamo |

#### Kanban / Tasks

| Key | English | Kinyarwanda |
|-----|---------|-------------|
| `tasks.title` | My Tasks | Imirimo yanjye |
| `tasks.add` | Add task | Ongeraho akazi |
| `tasks.taskTitle` | Task title | Umutwe w'akazi |
| `tasks.description` | Description | Ibisobanuro |
| `tasks.priority` | Priority | Ingenzi |
| `tasks.priority_low` | Low | Yoroheje |
| `tasks.priority_medium` | Medium | Hagati |
| `tasks.priority_high` | High | Ingenzi cyane |
| `tasks.dueDate` | Due date | Itariki y'iherezo |
| `tasks.relatedMember` | Related member | Umunyetorero urebwa |
| `tasks.assignedTo` | Assigned to | Uwahawe |
| `tasks.stage_todo` | To Do | Ibikwiriye gukorwa |
| `tasks.stage_inProgress` | In Progress | Bikorwa |
| `tasks.stage_done` | Done | Byarangiye |
| `tasks.stage_onHold` | On Hold | Bihagaritswe |

#### General Actions & Feedback

| Key | English | Kinyarwanda |
|-----|---------|-------------|
| `action.save` | Save | Bika |
| `action.cancel` | Cancel | Hagarika |
| `action.edit` | Edit | Hindura |
| `action.delete` | Delete | Siba |
| `action.confirm` | Confirm | Emeza |
| `action.back` | Back | Subira inyuma |
| `action.next` | Next | Komeza |
| `action.submit` | Submit | Ohereza |
| `action.search` | Search | Shakisha |
| `action.filter` | Filter | Shungura |
| `action.clear` | Clear | Siba |
| `action.loading` | Loading… | Gutegereza… |
| `action.saving` | Saving… | Kubika… |
| `action.required` | Required | Ngombwa |
| `feedback.saved` | Saved successfully | Byabitswe neza |
| `feedback.error` | Something went wrong | Habaye ikibazo |
| `feedback.confirmDelete` | Are you sure you want to delete this? | Ese uremeza gusiba ibi? |
| `feedback.noData` | No data available | Nta makuru arabonetse |

#### Auth

| Key | English | Kinyarwanda |
|-----|---------|-------------|
| `auth.signIn` | Sign in | Injira |
| `auth.signOut` | Sign out | Sohoka |
| `auth.welcome` | Welcome to Fellowship | Murakaza neza muri Fellowship |
| `auth.subtitle` | Church member management for ADEPR | Gucunga abanyetorero b'itorero rya ADEPR |
