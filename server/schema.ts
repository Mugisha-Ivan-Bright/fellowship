import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = `
  enum Role { SECRETARY IGIHANDE_LEADER COMMITTEE PASTOR }
  enum Gender { MALE FEMALE }
  enum MaritalStatus { SINGLE MARRIED WIDOWED DIVORCED }
  enum MemberStatus { ACTIVE INACTIVE }
  enum ServiceType { SUNDAY MIDWEEK SPECIAL }
  enum DedicationType { TITHE OFFERING VOLUNTEERING SERVICE_ROLE OTHER }
  enum TaskStage { TODO IN_PROGRESS DONE ON_HOLD }
  enum TaskPriority { LOW MEDIUM HIGH }

  type User {
    id: ID!
    clerkId: String!
    email: String!
    name: String
    phone: String
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

  # Input Types for Mutations
  input CreateMemberInput {
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

  input UpdateMemberInput {
    firstName: String
    lastName: String
    phone: String
    igihandeId: ID
  }

  input CreateServiceInput {
    type: ServiceType!
    title: String
    date: String!
  }

  input AttendanceRecord {
    memberId: ID!
    present: Boolean!
    notes: String
  }

  input CreateDedicationInput {
    memberId: ID!
    type: DedicationType!
    description: String
    date: String!
  }

  input CreateTaskInput {
    title: String!
    description: String
    priority: TaskPriority
    dueDate: String
    assignedToId: ID
    relatedMemberId: ID
  }

  input UpdateTaskInput {
    title: String
    description: String
    stage: TaskStage
    priority: TaskPriority
    dueDate: String
    assignedToId: ID
    relatedMemberId: ID
  }

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
`;

// Basic stub resolvers to allow introspection and start building out the real queries
const resolvers = {
  Query: {
    me: (_parent: any, _args: any, { prisma, userId }: any) => {
      if (!userId) return null;
      return prisma.user.findUnique({ where: { clerkId: userId } });
    },
    members: (_parent: any, { igihandeId, status, search }: any, { prisma }: any) => {
      const where: any = {};
      if (igihandeId) where.igihandeId = igihandeId;
      if (status) where.status = status;
      if (search) {
        where.OR = [
          { firstName: { contains: search, mode: "insensitive" } },
          { lastName: { contains: search, mode: "insensitive" } },
          { membershipNo: { contains: search, mode: "insensitive" } },
        ];
      }
      return prisma.member.findMany({ where, orderBy: { createdAt: "desc" } });
    },
    member: (_parent: any, { id }: any, { prisma }: any) => {
      return prisma.member.findUnique({ where: { id } });
    },
    igihande: (_parent: any, _args: any, { prisma }: any) => {
      return prisma.igihande.findMany({ orderBy: { name: "asc" } });
    },
    igihandeById: (_parent: any, { id }: any, { prisma }: any) => {
      return prisma.igihande.findUnique({ where: { id } });
    },
    services: (_parent: any, _args: any, { prisma }: any) => {
      return prisma.service.findMany({ orderBy: { date: "desc" } });
    },
    service: (_parent: any, { id }: any, { prisma }: any) => {
      return prisma.service.findUnique({ where: { id } });
    },
    attendance: (_parent: any, { serviceId }: any, { prisma }: any) => {
      return prisma.attendance.findMany({ where: { serviceId } });
    },
    memberAttendance: (_parent: any, { memberId }: any, { prisma }: any) => {
      return prisma.attendance.findMany({ where: { memberId } });
    },
    dedications: (_parent: any, { memberId }: any, { prisma }: any) => {
      return prisma.dedication.findMany({ where: { memberId }, orderBy: { date: "desc" } });
    },
    tasks: (_parent: any, { stage }: any, { prisma }: any) => {
      return prisma.task.findMany({ 
        where: stage ? { stage } : {}, 
        orderBy: { createdAt: "desc" } 
      });
    },
    task: (_parent: any, { id }: any, { prisma }: any) => {
      return prisma.task.findUnique({ where: { id } });
    },
    dashboardStats: async (_parent: any, _args: any, { prisma }: any) => {
      const [totalMembers, activeMembers, totalIgihande] = await Promise.all([
        prisma.member.count(),
        prisma.member.count({ where: { status: "ACTIVE" } }),
        prisma.igihande.count(),
      ]);
      
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      
      const newThisMonth = await prisma.member.count({
        where: { createdAt: { gte: oneMonthAgo } }
      });
      
      return {
        totalMembers,
        activeMembers,
        inactiveMembers: totalMembers - activeMembers,
        newThisMonth,
        totalIgihande,
        attendanceRate: 0.0, // Placeholder for complex calc
      };
    },
  },
  Mutation: {
    createMember: (_parent: any, { input }: any, { prisma }: any) => {
      return prisma.member.create({ data: input });
    },
    updateMember: (_parent: any, { id, input }: any, { prisma }: any) => {
      return prisma.member.update({ where: { id }, data: input });
    },
    updateMemberStatus: (_parent: any, { id, status }: any, { prisma }: any) => {
      return prisma.member.update({ where: { id }, data: { status } });
    },
    uploadMemberPhoto: (_parent: any, { memberId, photoUrl }: any, { prisma }: any) => {
      return prisma.member.update({ where: { id: memberId }, data: { photoUrl } });
    },
    createIgihande: (_parent: any, { name, leaderId }: any, { prisma }: any) => {
      return prisma.igihande.create({ data: { name, leaderId } });
    },
    updateIgihande: (_parent: any, { id, name, leaderId }: any, { prisma }: any) => {
      return prisma.igihande.update({ where: { id }, data: { name, leaderId } });
    },
    createService: (_parent: any, { input }: any, { prisma }: any) => {
      return prisma.service.create({ data: input });
    },
    recordAttendance: async (_parent: any, { serviceId, records }: any, { prisma, userId }: any) => {
      const user = await prisma.user.findUnique({ where: { clerkId: userId } });
      if (!user) throw new Error("Unauthorized");

      const createdRecords = await Promise.all(
        records.map((record: any) => 
          prisma.attendance.upsert({
            where: { memberId_serviceId: { memberId: record.memberId, serviceId } },
            update: { present: record.present, notes: record.notes, recordedById: user.id },
            create: { ...record, serviceId, recordedById: user.id }
          })
        )
      );
      return createdRecords;
    },
    createDedication: async (_parent: any, { input }: any, { prisma, userId }: any) => {
      const user = await prisma.user.findUnique({ where: { clerkId: userId } });
      if (!user) throw new Error("Unauthorized");
      return prisma.dedication.create({ data: { ...input, recordedById: user.id } });
    },
    createTask: async (_parent: any, { input }: any, { prisma, userId }: any) => {
      const user = await prisma.user.findUnique({ where: { clerkId: userId } });
      if (!user) throw new Error("Unauthorized");
      return prisma.task.create({ data: { ...input, createdById: user.id } });
    },
    updateTask: (_parent: any, { id, input }: any, { prisma }: any) => {
      return prisma.task.update({ where: { id }, data: input });
    },
    updateTaskStage: (_parent: any, { id, stage }: any, { prisma }: any) => {
      return prisma.task.update({ where: { id }, data: { stage } });
    },
    deleteTask: async (_parent: any, { id }: any, { prisma }: any) => {
      await prisma.task.delete({ where: { id } });
      return true;
    },
  },
  // Field Resolvers for Relations
  User: {
    igihande: (parent: any, _args: any, { prisma }: any) => {
      return prisma.igihande.findUnique({ where: { id: parent.igihandeId } });
    },
    tasks: (parent: any, _args: any, { prisma }: any) => {
      return prisma.task.findMany({ where: { assignedToId: parent.id } });
    },
  },
  Member: {
    igihande: (parent: any, _args: any, { prisma }: any) => {
      return prisma.igihande.findUnique({ where: { id: parent.igihandeId } });
    },
    attendances: (parent: any, _args: any, { prisma }: any) => {
      return prisma.attendance.findMany({ where: { memberId: parent.id } });
    },
    dedications: (parent: any, _args: any, { prisma }: any) => {
      return prisma.dedication.findMany({ where: { memberId: parent.id } });
    },
  },
  Igihande: {
    leader: (parent: any, _args: any, { prisma }: any) => {
      return prisma.user.findFirst({ where: { igihandeId: parent.id } });
    },
    members: (parent: any, _args: any, { prisma }: any) => {
      return prisma.member.findMany({ where: { igihandeId: parent.id } });
    },
  },
  Service: {
    attendances: (parent: any, _args: any, { prisma }: any) => {
      return prisma.attendance.findMany({ where: { serviceId: parent.id } });
    },
  },
  Attendance: {
    member: (parent: any, _args: any, { prisma }: any) => {
      return prisma.member.findUnique({ where: { id: parent.memberId } });
    },
    service: (parent: any, _args: any, { prisma }: any) => {
      return prisma.service.findUnique({ where: { id: parent.serviceId } });
    },
    recordedBy: (parent: any, _args: any, { prisma }: any) => {
      return prisma.user.findUnique({ where: { id: parent.recordedById } });
    },
  },
  Dedication: {
    member: (parent: any, _args: any, { prisma }: any) => {
      return prisma.member.findUnique({ where: { id: parent.memberId } });
    },
    recordedBy: (parent: any, _args: any, { prisma }: any) => {
      return prisma.user.findUnique({ where: { id: parent.recordedById } });
    },
  },
  Task: {
    assignedTo: (parent: any, _args: any, { prisma }: any) => {
      return prisma.user.findUnique({ where: { id: parent.assignedToId } });
    },
    relatedMember: (parent: any, _args: any, { prisma }: any) => {
      return prisma.member.findUnique({ where: { id: parent.relatedMemberId } });
    },
    createdBy: (parent: any, _args: any, { prisma }: any) => {
      return prisma.user.findUnique({ where: { id: parent.createdById } });
    },
  },
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
