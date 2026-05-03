# Fellowship Codebase Restructuring Summary

## What Was Done

Reshaped the existing Refine + GraphQL demo codebase to match Fellowship requirements, keeping Vite as the build system and Refine as the framework.

### Files Modified

1. **src/config/resources.tsx**

   - Replaced `companies` resource → `members` resource
   - Added `igihande`, `attendance`, `dedications` resources
   - Updated icons for each resource (UserOutlined, TeamOutlined, CheckSquareOutlined, GiftOutlined)
   - Relabeled `tasks` as "My Tasks" for Kanban

2. **src/App.tsx**

   - Removed `RefineThemes.Blue` and applied Fellowship Ant Design tokens
   - Removed company page imports
   - Added imports for Members, Igihande, Attendance, Dedications pages
   - Updated route definitions to include new Fellowship resources
   - Applied Fellowship color scheme (ADEPR green #1B6B3A, plus error, warning, info colors)

3. **src/components/layout/index.tsx**
   - Updated branding from "Taxpay" to "Fellowship"

### Files Created

1. **src/routes/members/index.tsx** - Stub pages for Members resource (list, create, edit, show)
2. **src/routes/igihande/index.tsx** - Stub pages for Igihande resource (list, create, edit, show)
3. **src/routes/attendance/index.tsx** - Stub pages for Attendance resource (list, create)
4. **src/routes/dedications/index.tsx** - Stub pages for Dedications resource (list, create)

### Files Updated

- **src/routes/index.ts** - Updated exports to include new Fellowship routes

---

## Current State

✅ **App is running and compiling successfully**

- Development server at http://localhost:5173/
- Navigation bar shows: Dashboard, Members, Igihande, Attendance, Dedications, My Tasks
- Fellowship theme applied (ADEPR green color scheme)
- Stub pages in place for all resources (show "Create [Resource] Form" text)

### Refine + Ant Design Pattern

All stub pages follow the Refine + Ant Design pattern:

```tsx
const MembersListPage = () => {
  const { data, isLoading } = useList({ resource: "members" });
  return (
    <Card title="Members" loading={isLoading}>
      {/* content */}
    </Card>
  );
};
```

This ensures pages will work seamlessly with Refine's data provider once GraphQL is connected.

---

## Technology Stack (Current)

| Layer         | Tech                               | Notes                                      |
| ------------- | ---------------------------------- | ------------------------------------------ |
| Frontend      | React 19 + Refine 5 + Ant Design 5 | ✅ Ready                                   |
| Build         | Vite                               | ✅ Confirmed (no Next.js migration)        |
| Router        | React Router 7                     | ✅ Ready                                   |
| Drag-drop     | @dnd-kit                           | ✅ Ready (Kanban)                          |
| Data Provider | GraphQL via Refine                 | ⏳ Connected to demo API currently         |
| Theme         | Fellowship Custom Tokens           | ✅ Applied                                 |
| Auth          | Demo custom login                  | ✅ Works (to be replaced with Clerk later) |

---

## Fellowship Resources Structure

### Members (`/members`)

- List: View all church members
- Create: Enroll new member from paper records
- Edit: Update member details
- Show: View member profile + attendance history

### Igihande (`/igihande`)

- List: View all cell groups
- Create: Create new Igihande
- Edit: Reassign leader or rename group
- Show: View group members and participation

### Attendance (`/attendance`)

- List: View attendance records (calendar or table view)
- Create: Record attendance for a service

### Dedications (`/dedications`)

- List: View member dedications (tithing, offerings, volunteering, service roles)
- Create: Record dedication for a member

### My Tasks (Kanban - existing)

- Adapted from demo Kanban
- Stages: TODO, In Progress, Done, On Hold
- For personal task management by church leaders

### Dashboard (existing - to be updated)

- Church-wide stats: total members, active vs inactive, attendance rate
- Igihande breakdown
- Inactive member list
- New enrollments this month

---

## Next Phase: Building Core Resources

### Priority 1: Members Resource

- Implement multi-step enrollment form (Identity → Address → Church Info)
- Member list with search, filter by Igihande, filter by status
- Photo upload placeholder
- Member profile view with attendance history

### Priority 2: Igihande Management

- CRUD operations for cell groups
- Assign leader to Igihande
- View members in each group
- Igihande card grid layout

### Priority 3: Attendance Tracking

- Record attendance per service (Sunday, mid-week, special events)
- View attendance calendar for each member
- Attendance rate calculations

### Priority 4: Dashboard

- Member statistics (total, active, inactive, new this month)
- Attendance rate visualization
- Igihande breakdown
- Inactive member alerts

### Priority 5: Dedications

- Record different dedication types (tithe, offering, volunteering, service role)
- View member dedication history
- Summary reports

---

## Demo API Status

Currently using: `https://api.crm.refine.dev/graphql`

**For next phase**: Either set up local GraphQL Yoga + Neon, or keep demo API while building UI. Decide based on:

- Do we need real data with Fellowship schema?
- Or can stub pages work with demo API responses?

Recommendation: Keep demo API during core resource UI development, then integrate real GraphQL + Neon backend in Phase 2.

---

## Remaining Work (by Phase)

### Phase 2: Core Resources (Next)

- Implement full Members resource with enrollment form
- Implement Igihande management
- Implement Attendance tracking
- Implement Dedications recording
- Update Dashboard with real stats

### Phase 3: Polish & Integration

- Kanban adaptation for tasks
- Add role-based access control
- Clerk authentication setup
- Connect to real GraphQL backend (Neon + Prisma)

### Phase 4: i18n & Mobile

- Add English + Kinyarwanda translations (full i18n)
- Mobile responsiveness (375px testing)
- Ant Design theme final tuning

---

## How to Continue

1. **Verify the current structure**: Visit http://localhost:5173/ in browser

   - Click through navigation items
   - Verify theme colors (green sidebar, buttons)
   - Verify page titles match resources

2. **Pick next resource to build**:

   - Recommend: Start with Members (most complex, most used)
   - Build the enrollment form (3-step Ant Design Steps component)
   - Add search/filter to members list
   - Add member profile view

3. **GraphQL Integration Decision**:
   - Should we mock responses or use demo API?
   - Should we set up real backend now or continue with stubs?

---

## Key Decisions Made

✅ **Use Refine + Vite, not Next.js**

- Cleaner dev experience during MVP development
- No need for API routes during feature building
- Can connect to external GraphQL API or mock

✅ **Keep demo resources pattern**

- All pages use Refine hooks (useList, useCreate, useUpdate)
- All pages use Ant Design components (Card, Form, Table, Modal)
- Ensures easy data provider integration later

✅ **Apply Fellowship theme immediately**

- ADEPR green color scheme applied
- Branded as "Fellowship"
- Ready for stakeholder feedback

❌ **Did NOT migrate to Next.js**

- Unnecessary complexity during MVP
- Refine + Vite sufficient for feature development
- Can always migrate later if needed

---

## Status

**✅ Foundation complete. Ready to build core resources.**

Current: Refine + Vite app with Fellowship structure
Next: Members resource with enrollment form
