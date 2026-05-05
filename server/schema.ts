import { makeExecutableSchema } from "@graphql-tools/schema";
import { eq, ilike, or, and, desc, asc, count, sql as dSql, gte, inArray, not } from "drizzle-orm";
import * as dbSchema from "./db/schema";

const typeDefs = `
  enum Role { SECRETARY IGIHANDE_LEADER COMMITTEE PASTOR }
  enum Gender { MALE FEMALE }
  enum MaritalStatus { SINGLE MARRIED WIDOWED DIVORCED }
  enum MemberStatus { ACTIVE INACTIVE }
  enum ServiceType { SUNDAY MIDWEEK SPECIAL }
  enum DedicationType { TITHE OFFERING VOLUNTEERING SERVICE_ROLE OTHER }
  enum TaskStageEnum { TODO IN_PROGRESS DONE ON_HOLD }
  enum TaskPriority { LOW MEDIUM HIGH }

  type TaskStage {
    id: ID!
    title: String!
  }

  type User {
    id: ID!
    clerkId: String!
    email: String!
    name: String
    phone: String
    avatarUrl: String
    jobTitle: String
    timezone: String
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
    leaderId: ID
    leader: User
    members: [Member!]!
    memberCount: Int!
    createdAt: String!
    updatedAt: String!
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
    stage: TaskStage
    stageId: String
    priority: TaskPriority!
    dueDate: String
    completed: Boolean
    assignedTo: User
    users: [User!]!
    relatedMember: Member
    createdBy: User!
    createdAt: String!
    updatedAt: String!
  }



  type DashboardStats {
    totalMembers: Int!
    activeMembers: Int!
    inactiveMembers: Int!
    newThisMonth: Int!
    totalIgihande: Int!
    attendanceRate: Float!
  }

  type Query {
    me: User
    members(filter: MemberFilter, sorting: [MemberSort!], paging: OffsetPaging): MemberConnection!
    member(id: ID!): Member
    igihandes(filter: IgihandeFilter, sorting: [IgihandeSort!], paging: OffsetPaging): IgihandeConnection!
    igihande(id: ID!): Igihande
    services(filter: ServiceFilter, sorting: [ServiceSort!], paging: OffsetPaging): ServiceConnection!
    service(id: ID!): Service
    attendances(filter: AttendanceFilter, sorting: [AttendanceSort!], paging: OffsetPaging): AttendanceConnection!
    memberAttendance(memberId: ID!): [Attendance!]!
    dedications(filter: DedicationFilter, sorting: [DedicationSort!], paging: OffsetPaging): DedicationConnection!
    tasks(filter: TaskFilter, sorting: [TaskSort!], paging: OffsetPaging): TaskConnection!
    task(id: ID!): Task
    taskStages(filter: TaskStageFilter, sorting: [TaskStageSort!], paging: OffsetPaging): TaskStageConnection!
    dashboardStats: DashboardStats!

    # Sync User as a Query (for easier frontend integration)
    syncUser(clerkId: String!, email: String!, name: String): User!

    # CRM Stubs with NestjsQuery patterns
    dealStages(filter: DealStageFilter, sorting: [DealStageSort!], paging: OffsetPaging): DealStageConnection!
    deals(filter: DealFilter, sorting: [DealsSort!], paging: OffsetPaging): DealConnection!
    audits(filter: AuditFilter, sorting: [AuditSort!], paging: OffsetPaging): AuditConnection!
    events(filter: EventFilter, sorting: [EventSort!], paging: OffsetPaging): EventConnection!
    contacts(filter: ContactFilter, sorting: [ContactSort!], paging: OffsetPaging): ContactConnection!
    companies(filter: CompanyFilter, sorting: [CompanySort!], paging: OffsetPaging): CompanyConnection!
  }

  type MemberConnection { nodes: [Member!]!, totalCount: Int! }
  type IgihandeConnection { nodes: [Igihande!]!, totalCount: Int! }
  type ServiceConnection { nodes: [Service!]!, totalCount: Int! }
  type AttendanceConnection { nodes: [Attendance!]!, totalCount: Int! }
  type DedicationConnection { nodes: [Dedication!]!, totalCount: Int! }
  type TaskConnection { nodes: [Task!]!, totalCount: Int! }
  type TaskStageConnection { nodes: [TaskStage!]!, totalCount: Int! }
  type DealStageConnection { nodes: [DealStage!]!, totalCount: Int! }
  type DealConnection { nodes: [Deal!]!, totalCount: Int! }
  type AuditConnection { nodes: [Audit!]!, totalCount: Int! }
  type EventConnection { nodes: [Event!]!, totalCount: Int! }
  type ContactConnection { nodes: [Contact!]!, totalCount: Int! }
  type CompanyConnection { nodes: [Company!]!, totalCount: Int! }

  type DealStage { 
    id: ID!
    title: String! 
    dealsAggregate: [DealAggregate!]!
  }
  
  type DealAggregate { 
    sum: DealAggregateSum
    groupBy: DealAggregateGroupBy
  }
  
  type DealAggregateSum {
    value: Float
  }

  type DealAggregateGroupBy {
    stageId: ID
    closeDateMonth: Int
    closeDateYear: Int
  }

  type Deal { 
    id: ID!
    title: String! 
    value: Float
    company: Company
    contact: Contact
    stage: DealStage
    createdAt: String!
  }
  
  type Audit { 
    id: ID!
    action: String!
    targetEntity: String!
    targetId: ID!
    changes: [AuditChange!]!
    createdAt: String!
    user: User
  }
  
  type AuditChange {
    field: String!
    from: String
    to: String
  }

  type Event { 
    id: ID!
    title: String!
    color: String
    startDate: String!
    endDate: String!
  }
  
  type Contact { id: ID!, name: String! }
  type Company { 
    id: ID!, 
    name: String!, 
    avatarUrl: String 
  }

  input StringFilter {
    eq: String
    neq: String
    in: [String!]
    notIn: [String!]
    contains: String
    startsWith: String
    endsWith: String
  }

  input IDFilter {
    eq: ID
    neq: ID
    in: [ID!]
    notIn: [ID!]
  }

  input IntFilter {
    eq: Int
    neq: Int
    gt: Int
    gte: Int
    lt: Int
    lte: Int
    in: [Int!]
    notIn: [Int!]
  }

  input BooleanFilter {
    is: Boolean
    isNot: Boolean
  }

  input DealStageFilter { 
    id: IDFilter
    title: StringFilter
  }
  input DealStageSort { field: String, order: String, direction: String }
  
  input DealFilter { 
    id: IDFilter
    title: StringFilter
    stageId: IDFilter
  }
  input DealsSort { field: String, order: String, direction: String }
  
  input OffsetPaging { limit: Int, offset: Int }
  
  input AuditFilter { 
    id: IDFilter
    action: StringFilter
    targetEntity: StringFilter
  }
  
  input AuditActionFilter { in: [String!] }
  input AuditTargetEntityFilter { eq: String }

  input AuditSort { field: String, order: String, direction: String }
  
  input EventFilter { 
    id: IDFilter
    startDate: EventDateFilter
  }
  
  input EventDateFilter { gte: String, lte: String }

  input EventSort { field: String, order: String, direction: String }
  
  input MemberFilter {
    id: IDFilter
    status: StringFilter
    igihandeId: IDFilter
    q: String
  }
  input MemberSort { field: String, order: String, direction: String }

  input IgihandeFilter {
    id: IDFilter
    name: StringFilter
  }
  input IgihandeSort { field: String, order: String, direction: String }

  input ServiceFilter {
    id: IDFilter
    type: StringFilter
    date: EventDateFilter
  }
  input ServiceSort { field: String, order: String, direction: String }

  input AttendanceFilter {
    id: IDFilter
    serviceId: IDFilter
    memberId: IDFilter
  }
  input AttendanceSort { field: String, order: String, direction: String }

  input DedicationFilter {
    id: IDFilter
    memberId: IDFilter
    type: StringFilter
  }
  input DedicationSort { field: String, order: String, direction: String }

  input TaskFilter {
    id: IDFilter
    title: StringFilter
    stageId: IDFilter
    completed: BooleanFilter
  }
  input TaskSort { field: String, order: String, direction: String }

  input TaskStageFilter {
    id: IDFilter
    title: StringFilter
  }
  input TaskStageSort { field: String, order: String, direction: String }



  input ContactFilter { id: IDFilter, name: StringFilter }
  input ContactSort { field: String, order: String, direction: String }
  
  input CompanyFilter { id: IDFilter, name: StringFilter }
  input CompanySort { field: String, order: String, direction: String }

  # Input Types for Mutations
  input CreateOneMemberInput {
    membershipNo: String!
    firstName: String!
    lastName: String!
    nationalId: String!
    phone: String!
    gender: Gender!
    maritalStatus: MaritalStatus!
    province: String!
    district: String!
    sector: String!
    cell: String!
    village: String!
    igihandeId: ID!
  }

  input UpdateOneMemberInput {
    firstName: String
    lastName: String
    phone: String
    igihandeId: ID
  }

  input CreateOneServiceInput {
    type: ServiceType!
    title: String
    date: String!
  }

  input AttendanceRecord {
    memberId: ID!
    present: Boolean!
    notes: String
  }

  input CreateOneDedicationInput {
    memberId: ID!
    type: DedicationType!
    description: String
    date: String!
  }

  input TaskCreateInput {
    title: String!
    description: String
    priority: TaskPriority
    dueDate: String
    assignedToId: ID
    relatedMemberId: ID
  }

  input CreateOneTaskInput {
    task: TaskCreateInput
  }

  input UpdateTaskInput {
    title: String
    description: String
    stage: TaskStageEnum
    stageId: String
    priority: TaskPriority
    dueDate: String
    assignedToId: ID
    relatedMemberId: ID
  }

  type Mutation {
    # Sync Clerk User
    syncUser(clerkId: String!, email: String!, name: String): User!

    # Members
    # Members
    createOneMember(input: CreateOneMemberInput!): Member!
    updateOneMember(id: ID!, input: UpdateOneMemberInput!): Member!
    updateMemberStatus(id: ID!, status: MemberStatus!): Member!
    uploadMemberPhoto(memberId: ID!, photoUrl: String!): Member!

    # Igihande
    createOneIgihande(name: String!, leaderId: ID): Igihande!
    updateOneIgihande(id: ID!, name: String, leaderId: ID): Igihande!

    # Services & Attendance
    createOneService(input: CreateOneServiceInput!): Service!
    recordAttendance(serviceId: ID!, records: [AttendanceRecord!]!): [Attendance!]!

    # Dedications
    createOneDedication(input: CreateOneDedicationInput!): Dedication!

    # Tasks
    createOneTask(input: CreateOneTaskInput!): Task!
    updateOneTask(input: UpdateOneTaskInput!): Task!
    updateTaskStage(id: ID!, stage: TaskStageEnum!): Task!
    deleteTask(id: ID!): Boolean!
  }

  input UpdateOneTaskInput {
    id: ID!
    update: UpdateTaskInput!
  }
`;

const resolvers = {
  Query: {
    me: async (_parent: any, _args: any, { db, userId }: any) => {
      if (!userId) return null;
      return await db.query.users.findFirst({ where: eq(dbSchema.users.clerkId, userId) });
    },
    members: async (_parent: any, { filter, sorting, paging }: any, { db }: any) => {
      const conditions = [];
      if (filter?.status?.eq) conditions.push(eq(dbSchema.members.status, filter.status.eq));
      if (filter?.igihandeId?.eq) conditions.push(eq(dbSchema.members.igihandeId, filter.igihandeId.eq));
      if (filter?.q) {
        conditions.push(
          or(
            ilike(dbSchema.members.firstName, `%${filter.q}%`),
            ilike(dbSchema.members.lastName, `%${filter.q}%`),
            ilike(dbSchema.members.membershipNo, `%${filter.q}%`)
          )
        );
      }
      const where = conditions.length > 0 ? and(...conditions) : undefined;

      let orderBy: any;
      if (sorting?.[0]) {
        const field = dbSchema.members[sorting[0].field as keyof typeof dbSchema.members];
        const direction = sorting[0].order?.toLowerCase() || sorting[0].direction?.toLowerCase() || "desc";
        orderBy = direction === 'asc' ? asc(field) : desc(field);
      } else {
        orderBy = desc(dbSchema.members.createdAt);
      }

      const [nodes, totalCountResult] = await Promise.all([
        db.query.members.findMany({
          where,
          orderBy,
          offset: paging?.offset || 0,
          limit: paging?.limit || 100,
        }),
        db.select({ count: count() }).from(dbSchema.members).where(where),
      ]);
      // Batch-load igihande for returned members to avoid N+1 resolution on Member.igihande
      const igihandeIds = Array.from(new Set(nodes.map((n: any) => n.igihandeId).filter(Boolean)));
      let igihandesMap: Record<string, any> = {};
      if (igihandeIds.length > 0) {
        const igs = await db.query.igihandes.findMany({ where: inArray(dbSchema.igihandes.id, igihandeIds) });
        igihandesMap = igs.reduce((acc: any, ig: any) => ({ ...acc, [ig.id]: ig }), {});
      }
      const nodesWithRelations = nodes.map((n: any) => ({
        ...n,
        igihande: n.igihandeId ? { id: n.igihandeId, name: igihandesMap[n.igihandeId]?.name } : null,
      }));

      return { nodes: nodesWithRelations, totalCount: totalCountResult[0].count };
    },
    member: async (_parent: any, { id }: any, { db }: any) => {
      return await db.query.members.findFirst({ where: eq(dbSchema.members.id, id) });
    },
    igihandes: async (_parent: any, { filter, sorting, paging }: any, { db }: any) => {
      const conditions = [];
      if (filter?.name) conditions.push(ilike(dbSchema.igihandes.name, `%${filter.name}%`));
      const where = conditions.length > 0 ? and(...conditions) : undefined;

      let orderBy: any;
      if (sorting?.[0]) {
        const field = dbSchema.igihandes[sorting[0].field as keyof typeof dbSchema.igihandes];
        const direction = sorting[0].order?.toLowerCase() || sorting[0].direction?.toLowerCase() || "asc";
        orderBy = direction === 'desc' ? desc(field) : asc(field);
      } else {
        orderBy = asc(dbSchema.igihandes.name);
      }

      const [nodes, totalCountResult] = await Promise.all([
        db.query.igihandes.findMany({
          where,
          orderBy,
          offset: paging?.offset || 0,
          limit: paging?.limit || 100,
        }),
        db.select({ count: count() }).from(dbSchema.igihandes).where(where),
      ]);
      return { nodes, totalCount: totalCountResult[0].count };
    },
    igihande: async (_parent: any, { id }: any, { db }: any) => {
      return await db.query.igihandes.findFirst({ where: eq(dbSchema.igihandes.id, id) });
    },
    services: async (_parent: any, { filter, sorting, paging }: any, { db }: any) => {
      const conditions = [];
      if (filter?.type) conditions.push(eq(dbSchema.services.type, filter.type));
      if (filter?.date) conditions.push(eq(dbSchema.services.date, new Date(filter.date)));
      const where = conditions.length > 0 ? and(...conditions) : undefined;

      let orderBy: any;
      if (sorting?.[0]) {
        const field = dbSchema.services[sorting[0].field as keyof typeof dbSchema.services];
        const direction = sorting[0].order?.toLowerCase() || sorting[0].direction?.toLowerCase() || "desc";
        orderBy = direction === 'asc' ? asc(field) : desc(field);
      } else {
        orderBy = desc(dbSchema.services.date);
      }

      const [nodes, totalCountResult] = await Promise.all([
        db.query.services.findMany({
          where,
          orderBy,
          offset: paging?.offset || 0,
          limit: paging?.limit || 100,
        }),
        db.select({ count: count() }).from(dbSchema.services).where(where),
      ]);
      return { nodes, totalCount: totalCountResult[0].count };
    },
    service: async (_parent: any, { id }: any, { db }: any) => {
      return await db.query.services.findFirst({ where: eq(dbSchema.services.id, id) });
    },
    attendances: async (_parent: any, { filter, sorting, paging }: any, { db }: any) => {
      const conditions = [];
      if (filter?.serviceId) conditions.push(eq(dbSchema.attendances.serviceId, filter.serviceId));
      if (filter?.memberId) conditions.push(eq(dbSchema.attendances.memberId, filter.memberId));
      const where = conditions.length > 0 ? and(...conditions) : undefined;

      let orderBy: any;
      if (sorting?.[0]) {
        const field = dbSchema.attendances[sorting[0].field as keyof typeof dbSchema.attendances];
        const direction = sorting[0].order?.toLowerCase() || sorting[0].direction?.toLowerCase() || "desc";
        orderBy = direction === 'asc' ? asc(field) : desc(field);
      } else {
        orderBy = desc(dbSchema.attendances.createdAt);
      }

      const [nodes, totalCountResult] = await Promise.all([
        db.query.attendances.findMany({
          where,
          orderBy,
          offset: paging?.offset || 0,
          limit: paging?.limit || 100,
        }),
        db.select({ count: count() }).from(dbSchema.attendances).where(where),
      ]);
      // Batch-load members and services for attendances to avoid N+1
      const memberIds = Array.from(new Set(nodes.map((n: any) => n.memberId).filter(Boolean)));
      const serviceIds = Array.from(new Set(nodes.map((n: any) => n.serviceId).filter(Boolean)));
      let membersMap: Record<string, any> = {};
      let servicesMap: Record<string, any> = {};
      if (memberIds.length > 0) {
        const m = await db.query.members.findMany({ where: inArray(dbSchema.members.id, memberIds) });
        membersMap = m.reduce((acc: any, it: any) => ({ ...acc, [it.id]: it }), {});
      }
      if (serviceIds.length > 0) {
        const s = await db.query.services.findMany({ where: inArray(dbSchema.services.id, serviceIds) });
        servicesMap = s.reduce((acc: any, it: any) => ({ ...acc, [it.id]: it }), {});
      }
      const nodesWithRelations = nodes.map((n: any) => ({
        ...n,
        member: membersMap[n.memberId] ?? null,
        service: servicesMap[n.serviceId] ?? null,
      }));

      return { nodes: nodesWithRelations, totalCount: totalCountResult[0].count };
    },
    memberAttendance: async (_parent: any, { memberId }: any, { db }: any) => {
      return await db.query.attendances.findMany({ where: eq(dbSchema.attendances.memberId, memberId) });
    },
    dedications: async (_parent: any, { filter, sorting, paging }: any, { db }: any) => {
      const conditions = [];
      if (filter?.memberId) conditions.push(eq(dbSchema.dedications.memberId, filter.memberId));
      if (filter?.type) conditions.push(eq(dbSchema.dedications.type, filter.type));
      const where = conditions.length > 0 ? and(...conditions) : undefined;

      let orderBy: any;
      if (sorting?.[0]) {
        const field = dbSchema.dedications[sorting[0].field as keyof typeof dbSchema.dedications];
        const direction = sorting[0].order?.toLowerCase() || sorting[0].direction?.toLowerCase() || "desc";
        orderBy = direction === 'asc' ? asc(field) : desc(field);
      } else {
        orderBy = desc(dbSchema.dedications.date);
      }

      const [nodes, totalCountResult] = await Promise.all([
        db.query.dedications.findMany({
          where,
          orderBy,
          offset: paging?.offset || 0,
          limit: paging?.limit || 100,
        }),
        db.select({ count: count() }).from(dbSchema.dedications).where(where),
      ]);
      return { nodes, totalCount: totalCountResult[0].count };
    },
    taskStages: (_parent: any, { filter }: any, _context: any) => {
      const allStages = [
        { id: "TODO", title: "TODO" },
        { id: "IN_PROGRESS", title: "IN_PROGRESS" },
        { id: "DONE", title: "DONE" },
        { id: "ON_HOLD", title: "ON_HOLD" },
      ];
      let nodes = allStages;
      if (filter?.title?.eq) {
        nodes = allStages.filter(s => s.title === filter.title.eq);
      } else if (filter?.title?.in) {
        nodes = allStages.filter(s => filter.title.in.includes(s.title));
      }
      return {
        nodes,
        totalCount: nodes.length,
      };
    },
    tasks: async (_parent: any, { filter, sorting, paging }: any, { db }: any) => {
      const conditions = [];
      if (filter?.stageId?.eq) conditions.push(eq(dbSchema.tasks.stage, filter.stageId.eq));
      if (filter?.stageId?.in) conditions.push(inArray(dbSchema.tasks.stage, filter.stageId.in));
      if (filter?.completed?.is !== undefined) {
        if (filter.completed.is) {
          conditions.push(eq(dbSchema.tasks.stage, "DONE"));
        } else {
          conditions.push(not(eq(dbSchema.tasks.stage, "DONE")));
        }
      }
      if (filter?.title?.contains) conditions.push(ilike(dbSchema.tasks.title, `%${filter.title.contains}%`));
      
      const where = conditions.length > 0 ? and(...conditions) : undefined;

      let orderBy: any;
      if (sorting && sorting.length > 0) {
        const s = sorting[0];
        const field = dbSchema.tasks[s.field as keyof typeof dbSchema.tasks];
        if (field) {
          const direction = s.order?.toLowerCase() || s.direction?.toLowerCase() || "asc";
          orderBy = direction === 'desc' ? desc(field) : asc(field);
        }
      } else {
        orderBy = desc(dbSchema.tasks.createdAt);
      }

      const [nodes, totalCountResult] = await Promise.all([
        db.query.tasks.findMany({
          where,
          orderBy,
          offset: paging?.offset || 0,
          limit: paging?.limit || 100,
        }),
        db.select({ count: count() }).from(dbSchema.tasks).where(where),
      ]);

      // Batch-load users and related members to avoid N+1 for Task.assignedTo, Task.createdBy, Task.relatedMember
      const assignedToIds = Array.from(new Set(nodes.map((n: any) => n.assignedToId).filter(Boolean)));
      const createdByIds = Array.from(new Set(nodes.map((n: any) => n.createdById).filter(Boolean)));
      const relatedMemberIds = Array.from(new Set(nodes.map((n: any) => n.relatedMemberId).filter(Boolean)));

      const userIds = Array.from(new Set([...assignedToIds, ...createdByIds]));
      let usersMap: Record<string, any> = {};
      if (userIds.length > 0) {
        const users = await db.query.users.findMany({ where: inArray(dbSchema.users.id, userIds) });
        usersMap = users.reduce((acc: any, u: any) => ({ ...acc, [u.id]: u }), {});
      }

      let membersMap: Record<string, any> = {};
      if (relatedMemberIds.length > 0) {
        const members = await db.query.members.findMany({ where: inArray(dbSchema.members.id, relatedMemberIds) });
        membersMap = members.reduce((acc: any, m: any) => ({ ...acc, [m.id]: m }), {});
      }

      const nodesWithRelations = nodes.map((n: any) => ({
        ...n,
        assignedTo: n.assignedToId ? {
          id: n.assignedToId,
          name: usersMap[n.assignedToId]?.name,
          avatarUrl: usersMap[n.assignedToId]?.avatarUrl,
        } : null,
        createdBy: n.createdById ? { id: n.createdById, name: usersMap[n.createdById]?.name } : null,
        relatedMember: n.relatedMemberId ? { id: n.relatedMemberId, firstName: membersMap[n.relatedMemberId]?.firstName, lastName: membersMap[n.relatedMemberId]?.lastName } : null,
      }));

      return { nodes: nodesWithRelations, totalCount: totalCountResult[0].count };
    },
    dashboardStats: async (_parent: any, _args: any, { db }: any) => {
      const now = new Date();
      const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

      const [
        totalMembersRes,
        activeMembersRes,
        newThisMonthRes,
        totalIgihandeRes,
        totalAttendanceRes,
        presentCountRes
      ] = await Promise.all([
        db.select({ count: count() }).from(dbSchema.members),
        db.select({ count: count() }).from(dbSchema.members).where(eq(dbSchema.members.status, "ACTIVE")),
        db.select({ count: count() }).from(dbSchema.members).where(gte(dbSchema.members.createdAt, firstDayOfMonth)),
        db.select({ count: count() }).from(dbSchema.igihandes),
        db.select({ count: count() }).from(dbSchema.attendances),
        db.select({ count: count() }).from(dbSchema.attendances).where(eq(dbSchema.attendances.present, true)),
      ]);

      const totalMembers = totalMembersRes[0].count;
      const activeMembers = activeMembersRes[0].count;
      const newThisMonth = newThisMonthRes[0].count;
      const totalIgihande = totalIgihandeRes[0].count;
      const totalAttendance = totalAttendanceRes[0].count;
      const presentCount = presentCountRes[0].count;

      const attendanceRate = totalAttendance > 0 ? (presentCount / totalAttendance) * 100 : 0;

      return {
        totalMembers,
        activeMembers,
        inactiveMembers: totalMembers - activeMembers,
        newThisMonth,
        totalIgihande,
        attendanceRate,
      };
    },
    task: async (_parent: any, { id }: any, { db }: any) => {
      return await db.query.tasks.findFirst({ where: eq(dbSchema.tasks.id, id) });
    },
    dealStages: (_parent: any, { filter }: any) => {
      const now = new Date();
      const mockData = (state: string) => {
        return Array.from({ length: 6 }).map((_, i) => {
          const date = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1);
          return {
            groupBy: {
              closeDateMonth: (date.getMonth() + 1).toString(),
              closeDateYear: date.getFullYear().toString(),
            },
            sum: {
              value: Math.floor(Math.random() * 500000) + 200000,
            },
          };
        });
      };

      const all = [
        { id: "WON", title: "WON", dealsAggregate: mockData("WON") },
        { id: "LOST", title: "LOST", dealsAggregate: mockData("LOST") },
      ];
      let nodes = all;
      if (filter?.title?.in) {
        nodes = all.filter(s => filter.title.in.includes(s.title));
      }
      return { nodes, totalCount: nodes.length };
    },
    deals: () => ({ nodes: [], totalCount: 0 }),
    audits: () => ({ nodes: [], totalCount: 0 }),
    events: () => ({ nodes: [], totalCount: 0 }),
    contacts: () => ({ nodes: [], totalCount: 0 }),
    companies: () => ({ nodes: [], totalCount: 0 }),
  },
  Mutation: {
    syncUser: async (_parent: any, { clerkId, email, name }: any, { db }: any) => {
      const existing = await db.query.users.findFirst({ where: eq(dbSchema.users.clerkId, clerkId) });
      if (existing) {
        const updated = await db.update(dbSchema.users)
          .set({ email, name })
          .where(eq(dbSchema.users.clerkId, clerkId))
          .returning();
        return updated[0];
      }
      const created = await db.insert(dbSchema.users)
        .values({ clerkId, email, name, role: "SECRETARY" })
        .returning();
      return created[0];
    },
    createOneMember: async (_parent: any, { input }: any, { db }: any) => {
      const result = await db.insert(dbSchema.members).values(input).returning();
      return result[0];
    },
    updateOneMember: async (_parent: any, { id, input }: any, { db }: any) => {
      const result = await db.update(dbSchema.members).set(input).where(eq(dbSchema.members.id, id)).returning();
      return result[0];
    },
    updateMemberStatus: async (_parent: any, { id, status }: any, { db }: any) => {
      const result = await db.update(dbSchema.members).set({ status }).where(eq(dbSchema.members.id, id)).returning();
      return result[0];
    },
    uploadMemberPhoto: async (_parent: any, { memberId, photoUrl }: any, { db }: any) => {
      const result = await db.update(dbSchema.members).set({ photoUrl }).where(eq(dbSchema.members.id, memberId)).returning();
      return result[0];
    },
    createOneIgihande: async (_parent: any, { name, leaderId }: any, { db }: any) => {
      const result = await db.insert(dbSchema.igihandes).values({ name, leaderId }).returning();
      return result[0];
    },
    updateOneIgihande: async (_parent: any, { id, name, leaderId }: any, { db }: any) => {
      const result = await db.update(dbSchema.igihandes).set({ name, leaderId }).where(eq(dbSchema.igihandes.id, id)).returning();
      return result[0];
    },
    createOneService: async (_parent: any, { input }: any, { db }: any) => {
      const result = await db.insert(dbSchema.services).values({ ...input, date: new Date(input.date) }).returning();
      return result[0];
    },
    recordAttendance: async (_parent: any, { serviceId, records }: any, { db, userId }: any) => {
      const user = await db.query.users.findFirst({ where: eq(dbSchema.users.clerkId, userId) });
      if (!user) throw new Error("Unauthorized");
      const data = records.map((r: any) => ({ ...r, serviceId, recordedById: user.id }));
      await db.insert(dbSchema.attendances).values(data);
      return await db.query.attendances.findMany({ where: eq(dbSchema.attendances.serviceId, serviceId) });
    },
    createOneDedication: async (_parent: any, { input }: any, { db, userId }: any) => {
      const user = await db.query.users.findFirst({ where: eq(dbSchema.users.clerkId, userId) });
      if (!user) throw new Error("Unauthorized");
      const result = await db.insert(dbSchema.dedications).values({ ...input, date: new Date(input.date), recordedById: user.id }).returning();
      return result[0];
    },
    createOneTask: async (_parent: any, { input }: any, { db, userId }: any) => {
      const user = await db.query.users.findFirst({ where: eq(dbSchema.users.clerkId, userId) });
      if (!user) throw new Error("Unauthorized");

      // Support multiple frontend payload shapes:
      // - flat: { title, description, ... }
      // - nested: { task: { ... } }
      // - nested with input: { task: { input: { ... } } } or { input: { ... } }
      let payload: any = input;
      if (payload?.task) {
        // If `task` contains an `input` wrapper, unwrap it
        payload = payload.task.input ?? payload.task;
      } else if (payload?.input) {
        payload = payload.input;
      }

      const { assignedToId, relatedMemberId, dueDate, ...rest } = payload;
      const values: any = {
        ...rest,
        createdById: user.id,
        assignedToId: assignedToId || undefined,
        relatedMemberId: relatedMemberId || undefined,
      };
      if (dueDate) {
        values.dueDate = new Date(dueDate);
      }

      const result = await db.insert(dbSchema.tasks).values(values).returning();
      return result[0];
    },
    updateOneTask: async (_parent: any, { input }: any, { db }: any) => {
      const { id, update } = input;
      const { stageId, ...rest } = update;
      const data: any = { ...rest };
      if (stageId !== undefined) data.stage = stageId;
      const result = await db.update(dbSchema.tasks).set(data).where(eq(dbSchema.tasks.id, id)).returning();
      return result[0];
    },
    updateTaskStage: async (_parent: any, { id, stage }: any, { db }: any) => {
      const result = await db.update(dbSchema.tasks).set({ stage }).where(eq(dbSchema.tasks.id, id)).returning();
      return result[0];
    },
    deleteTask: async (_parent: any, { id }: any, { db }: any) => {
      await db.delete(dbSchema.tasks).where(eq(dbSchema.tasks.id, id));
      return true;
    },
  },
  User: {
    igihande: async (parent: any, _args: any, { db }: any) => {
      if (!parent.igihandeId) return null;
      return await db.query.igihandes.findFirst({ where: eq(dbSchema.igihandes.id, parent.igihandeId) });
    },
    tasks: async (parent: any, _args: any, { db }: any) => {
      return await db.query.tasks.findMany({ where: eq(dbSchema.tasks.assignedToId, parent.id) });
    },
  },
  Member: {
    igihande: async (parent: any, _args: any, { db }: any) => {
      if (!parent.igihandeId) return null;
      return await db.query.igihandes.findFirst({ where: eq(dbSchema.igihandes.id, parent.igihandeId) });
    },
    attendances: async (parent: any, _args: any, { db }: any) => {
      return await db.query.attendances.findMany({ where: eq(dbSchema.attendances.memberId, parent.id) });
    },
    dedications: async (parent: any, _args: any, { db }: any) => {
      return await db.query.dedications.findMany({ where: eq(dbSchema.dedications.memberId, parent.id) });
    },
  },
  Igihande: {
    leader: async (parent: any, _args: any, { db }: any) => {
      if (!parent.leaderId) return null;
      return await db.query.users.findFirst({ where: eq(dbSchema.users.id, parent.leaderId) });
    },
    members: async (parent: any, _args: any, { db }: any) => {
      return await db.query.members.findMany({ where: eq(dbSchema.members.igihandeId, parent.id) });
    },
    memberCount: async (parent: any, _args: any, { db }: any) => {
      const res = await db.select({ count: count() }).from(dbSchema.members).where(eq(dbSchema.members.igihandeId, parent.id));
      return res[0].count;
    },
  },
  Service: {
    attendances: async (parent: any, _args: any, { db }: any) => {
      return await db.query.attendances.findMany({ where: eq(dbSchema.attendances.serviceId, parent.id) });
    },
  },
  Attendance: {
    member: async (parent: any, _args: any, { db }: any) => {
      return await db.query.members.findFirst({ where: eq(dbSchema.members.id, parent.memberId) });
    },
    service: async (parent: any, _args: any, { db }: any) => {
      return await db.query.services.findFirst({ where: eq(dbSchema.services.id, parent.serviceId) });
    },
    recordedBy: async (parent: any, _args: any, { db }: any) => {
      return await db.query.users.findFirst({ where: eq(dbSchema.users.id, parent.recordedById) });
    },
  },
  Dedication: {
    member: async (parent: any, _args: any, { db }: any) => {
      return await db.query.members.findFirst({ where: eq(dbSchema.members.id, parent.memberId) });
    },
    recordedBy: async (parent: any, _args: any, { db }: any) => {
      return await db.query.users.findFirst({ where: eq(dbSchema.users.id, parent.recordedById) });
    },
  },
  Task: {
    stageId: (parent: any) => parent.stage,
    stage: (parent: any) => {
      if (!parent.stage) return null;
      return { id: parent.stage, title: parent.stage };
    },
    completed: (parent: any) => parent.stage === "DONE",
    assignedTo: async (parent: any, _args: any, { db }: any) => {
      if (!parent.assignedToId) return null;
      return await db.query.users.findFirst({ where: eq(dbSchema.users.id, parent.assignedToId) });
    },
    users: async (parent: any, _args: any, { db }: any) => {
      if (!parent.assignedToId) return [];
      const user = await db.query.users.findFirst({ where: eq(dbSchema.users.id, parent.assignedToId) });
      return user ? [user] : [];
    },
    relatedMember: async (parent: any, _args: any, { db }: any) => {
      if (!parent.relatedMemberId) return null;
      return await db.query.members.findFirst({ where: eq(dbSchema.members.id, parent.relatedMemberId) });
    },
    createdBy: async (parent: any, _args: any, { db }: any) => {
      return await db.query.users.findFirst({ where: eq(dbSchema.users.id, parent.createdById) });
    },
  },
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
