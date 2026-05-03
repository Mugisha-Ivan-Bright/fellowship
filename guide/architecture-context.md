# Architecture Context

## Stack

| Layer        | Technology                          | Role                                                                 |
|--------------|-------------------------------------|----------------------------------------------------------------------|
| Frontend     | Refine + Ant Design                 | CRUD framework + UI — adapted from existing demo                     |
| Data Layer   | Refine GraphQL data provider        | Connects Refine to the GraphQL API via Apollo Client                 |
| API          | GraphQL Yoga                        | GraphQL server running inside Next.js at `/api/graphql`              |
| ORM          | Prisma                              | Type-safe database access and schema management                      |
| Database     | Neon (serverless PostgreSQL)        | All relational data — members, igihande, attendance, tasks, etc.     |
| Auth         | Clerk                               | User identity, session management, role syncing                      |
| File Storage | Vercel Blob                         | Member profile photos                                                |
| Hosting      | Vercel                              | Frontend + API routes deployment                                     |

---

## Critical — Read the Existing Codebase First

Before writing any code, read and understand the existing Refine + GraphQL demo:

- `src/App.tsx` — Refine resources, data provider, auth provider, router, layout config
- `src/providers/data/` — GraphQL data provider setup, Apollo Client config, endpoint
- `src/providers/auth/` — auth provider wiring (adapt to Clerk)
- `src/pages/kanban/` or `src/routes/kanban/` — existing Kanban implementation
- Any existing GraphQL queries/mutations/fragments in `src/graphql/`
- Existing Ant Design `ConfigProvider` theme setup

**The rule:** extend and adapt what exists. Never rewrite working foundation code.

---

## How GraphQL Yoga Fits In

```
Refine (frontend)
  └── @refinedev/graphql (data provider)
        └── Apollo Client
              └── POST /api/graphql
                    └── GraphQL Yoga (Next.js API route)
                          └── Prisma Client
                                └── Neon PostgreSQL
```

- GraphQL Yoga runs as a single Next.js API route handler at `app/api/graphql/route.ts`.
- The schema is defined with type definitions (`typeDefs`) + resolvers.
- Prisma is the only layer that touches the database.
- Clerk session is verified inside the GraphQL context — every resolver has access to the authenticated user and their role.
- The existing Refine demo's GraphQL data provider endpoint is updated to point to `/api/graphql`.

---

## GraphQL Schema (Fellowship)

```graphql
# Enums
enum Role { SECRETARY IGIHANDE_LEADER COMMITTEE PASTOR }
enum Gender { MALE FEMALE }
enum MaritalStatus { SINGLE MARRIED WIDOWED DIVORCED }
enum MemberStatus { ACTIVE INACTIVE }
enum ServiceType { SUNDAY MIDWEEK SPECIAL }
enum DedicationType { TITHE OFFERING VOLUNTEERING SERVICE_ROLE OTHER }
enum TaskStage { TODO IN_PROGRESS DONE ON_HOLD }
enum TaskPriority { LOW MEDIUM HIGH }

# Types
type User {
  id: ID!
  clerkId: String!
  email: String!
  name: String
  role: Role!
  igihande: Igihande
  tasks: [Task!]!
}

type Member {
  id: ID!
  membershipNo: String!
  firstName: String!
  lastName: String!
  nationalId: String!
  phone: String!
  dateOfBirth: String
  gender: Gender!
  maritalStatus: MaritalStatus!
  baptismDate: String
  photoUrl: String
  province: String!
  district: String!
  sector: String!
  cell: String!
  village: String!
  igihande: Igihande!
  status: MemberStatus!
  attendances: [Attendance!]!
  dedications: [Dedication!]!
  createdAt: String!
  updatedAt: String!
}

type Igihande {
  id: ID!
  name: String!
  leader: User
  members: [Member!]!
  createdAt: String!
}

type Service {
  id: ID!
  type: ServiceType!
  title: String
  date: String!
  attendances: [Attendance!]!
}

type Attendance {
  id: ID!
  member: Member!
  service: Service!
  present: Boolean!
  notes: String
  recordedBy: User!
  createdAt: String!
}

type Dedication {
  id: ID!
  member: Member!
  type: DedicationType!
  description: String
  date: String!
  recordedBy: User!
  createdAt: String!
}

type Task {
  id: ID!
  title: String!
  description: String
  stage: TaskStage!
  priority: TaskPriority!
  dueDate: String
  assignedTo: User
  relatedMember: Member
  createdBy: User!
  createdAt: String!
  updatedAt: String!
}

# Queries
type Query {
  me: User
  members(igihandeId: ID, status: MemberStatus, search: String): [Member!]!
  member(id: ID!): Member
  igihande: [Igihande!]!
  igihandeById(id: ID!): Igihande
  services: [Service!]!
  service(id: ID!): Service
  attendance(serviceId: ID!): [Attendance!]!
  memberAttendance(memberId: ID!): [Attendance!]!
  dedications(memberId: ID!): [Dedication!]!
  tasks(stage: TaskStage): [Task!]!
  task(id: ID!): Task
  dashboardStats: DashboardStats!
}

type DashboardStats {
  totalMembers: Int!
  activeMembers: Int!
  inactiveMembers: Int!
  newThisMonth: Int!
  totalIgihande: Int!
  attendanceRate: Float!
}

# Mutations
type Mutation {
  # Members
  createMember(input: CreateMemberInput!): Member!
  updateMember(id: ID!, input: UpdateMemberInput!): Member!
  updateMemberStatus(id: ID!, status: MemberStatus!): Member!
  uploadMemberPhoto(memberId: ID!, photoUrl: String!): Member!

  # Igihande
  createIgihande(name: String!, leaderId: ID): Igihande!
  updateIgihande(id: ID!, name: String, leaderId: ID): Igihande!

  # Services & Attendance
  createService(input: CreateServiceInput!): Service!
  recordAttendance(serviceId: ID!, records: [AttendanceRecord!]!): [Attendance!]!

  # Dedications
  createDedication(input: CreateDedicationInput!): Dedication!

  # Tasks
  createTask(input: CreateTaskInput!): Task!
  updateTask(id: ID!, input: UpdateTaskInput!): Task!
  updateTaskStage(id: ID!, stage: TaskStage!): Task!
  deleteTask(id: ID!): Boolean!
}
```

---

## Prisma Data Model

```prisma
model User {
  id          String   @id @default(cuid())
  clerkId     String   @unique
  email       String   @unique
  name        String?
  role        Role     @default(SECRETARY)
  igihandeId  String?
  igihande    Igihande? @relation("IgihandeLeader", fields: [igihandeId], references: [id])
  tasksCreated Task[]  @relation("TaskCreator")
  tasksAssigned Task[] @relation("TaskAssignee")
  attendanceRecorded Attendance[]
  dedicationsRecorded Dedication[]
  createdAt   DateTime @default(now())
}

model Member {
  id            String        @id @default(cuid())
  membershipNo  String        @unique
  firstName     String
  lastName      String
  nationalId    String        @unique
  phone         String
  dateOfBirth   DateTime?
  gender        Gender
  maritalStatus MaritalStatus
  baptismDate   DateTime?
  photoUrl      String?
  province      String
  district      String
  sector        String
  cell          String
  village       String
  igihandeId    String
  igihande      Igihande      @relation(fields: [igihandeId], references: [id])
  status        MemberStatus  @default(ACTIVE)
  attendances   Attendance[]
  dedications   Dedication[]
  relatedTasks  Task[]
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt
}

model Igihande {
  id        String   @id @default(cuid())
  name      String
  leaderId  String?
  leader    User?    @relation("IgihandeLeader")
  members   Member[]
  createdAt DateTime @default(now())
}

model Service {
  id          String      @id @default(cuid())
  type        ServiceType
  title       String?
  date        DateTime
  attendances Attendance[]
  createdAt   DateTime    @default(now())
}

model Attendance {
  id           String   @id @default(cuid())
  memberId     String
  member       Member   @relation(fields: [memberId], references: [id])
  serviceId    String
  service      Service  @relation(fields: [serviceId], references: [id])
  present      Boolean  @default(false)
  notes        String?
  recordedById String
  recordedBy   User     @relation(fields: [recordedById], references: [id])
  createdAt    DateTime @default(now())
  @@unique([memberId, serviceId])
}

model Dedication {
  id           String         @id @default(cuid())
  memberId     String
  member       Member         @relation(fields: [memberId], references: [id])
  type         DedicationType
  description  String?
  date         DateTime
  recordedById String
  recordedBy   User           @relation(fields: [recordedById], references: [id])
  createdAt    DateTime       @default(now())
}

model Task {
  id              String       @id @default(cuid())
  title           String
  description     String?
  stage           TaskStage    @default(TODO)
  priority        TaskPriority @default(MEDIUM)
  dueDate         DateTime?
  assignedToId    String?
  assignedTo      User?        @relation("TaskAssignee", fields: [assignedToId], references: [id])
  relatedMemberId String?
  relatedMember   Member?      @relation(fields: [relatedMemberId], references: [id])
  createdById     String
  createdBy       User         @relation("TaskCreator", fields: [createdById], references: [id])
  createdAt       DateTime     @default(now())
  updatedAt       DateTime     @updatedAt
}

enum Role          { SECRETARY IGIHANDE_LEADER COMMITTEE PASTOR }
enum Gender        { MALE FEMALE }
enum MaritalStatus { SINGLE MARRIED WIDOWED DIVORCED }
enum MemberStatus  { ACTIVE INACTIVE }
enum ServiceType   { SUNDAY MIDWEEK SPECIAL }
enum DedicationType { TITHE OFFERING VOLUNTEERING SERVICE_ROLE OTHER }
enum TaskStage     { TODO IN_PROGRESS DONE ON_HOLD }
enum TaskPriority  { LOW MEDIUM HIGH }
```

---

## Auth Model

- Every user authenticates via **Clerk**.
- On first sign-in, a `User` record is created in the database (Clerk webhook or GraphQL context bootstrap).
- The Clerk session token is passed in the `Authorization` header to every GraphQL request.
- GraphQL Yoga context verifies the Clerk token and attaches `{ userId, role }` to the context.
- Every resolver that mutates data checks `context.role` before proceeding.
- Refine's `authProvider` handles Clerk sign-in/sign-out and passes the token to Apollo.

### Role Permissions

| Role | Permissions |
|------|------------|
| `SECRETARY` | Full CRUD on Members, Igihande, Services, Attendance, Dedications. Own Tasks. |
| `IGIHANDE_LEADER` | Read own Igihande members. Record attendance for own group. Full CRUD own Tasks. |
| `COMMITTEE` | Read-only on all Members, Igihande, Attendance. Full CRUD own Tasks. |
| `PASTOR` | Full access to all resources including User role management. |

---

## Storage Model

- **Neon PostgreSQL**: all relational data via Prisma.
- **Vercel Blob**: member photos at `members/photos/{memberId}.{ext}`. URL stored in `Member.photoUrl`.
- Photos are uploaded directly to Vercel Blob from the client via a signed URL — the blob URL is then saved via the `uploadMemberPhoto` mutation.

---

## Kanban — Task Resource

The Kanban is adapted from the existing demo. It is wired to the `Task` GraphQL resource.

| Stage | Kinyarwanda | Purpose |
|-------|-------------|---------|
| `TODO` | Ibikwiriye gukorwa | Not started |
| `IN_PROGRESS` | Bikorwa | Currently active |
| `DONE` | Byarangiye | Completed |
| `ON_HOLD` | Bihagaritswe | Blocked or paused |

- Drag between columns calls `updateTaskStage` mutation.
- Cards with a `relatedMember` show a member avatar chip linking to the member profile.
- The existing demo's drag-drop logic (`@hello-pangea/dnd` or similar) is kept as-is.

---

## Invariants

1. Every member must belong to exactly one Igihande.
2. Membership numbers from paper records are preserved exactly as entered.
3. National ID is unique across all members.
4. Every GraphQL mutation verifies auth and role in the resolver context — never skipped.
5. Photos go to Vercel Blob — never stored as base64 in the database.
6. Attendance is always recorded per Service — never as a freeform field.
7. Members are soft-deleted (`status: INACTIVE`) — never hard deleted.
8. The existing Refine demo foundation is extended, not rewritten.
9. Kanban task state is persisted via GraphQL — never stored only in component state.
