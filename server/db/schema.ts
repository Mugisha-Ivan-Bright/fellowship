import {
  pgTable,
  text,
  timestamp,
  boolean,
  pgEnum,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { createId } from '@paralleldrive/cuid2';

export const roleEnum = pgEnum('role', [
  'SECRETARY',
  'IGIHANDE_LEADER',
  'COMMITTEE',
  'PASTOR',
]);

export const genderEnum = pgEnum('gender', ['MALE', 'FEMALE']);

export const maritalStatusEnum = pgEnum('marital_status', [
  'SINGLE',
  'MARRIED',
  'WIDOWED',
  'DIVORCED',
]);

export const memberStatusEnum = pgEnum('member_status', ['ACTIVE', 'INACTIVE']);

export const serviceTypeEnum = pgEnum('service_type', [
  'SUNDAY',
  'MIDWEEK',
  'SPECIAL',
]);

export const dedicationTypeEnum = pgEnum('dedication_type', [
  'TITHE',
  'OFFERING',
  'VOLUNTEERING',
  'SERVICE_ROLE',
  'OTHER',
]);

export const taskStageEnum = pgEnum('task_stage', [
  'TODO',
  'IN_PROGRESS',
  'DONE',
  'ON_HOLD',
]);

export const taskPriorityEnum = pgEnum('task_priority', [
  'LOW',
  'MEDIUM',
  'HIGH',
]);

export const users = pgTable('users', {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  clerkId: text('clerk_id').notNull().unique(),
  email: text('email').notNull().unique(),
  name: text('name'),
  role: roleEnum('role').default('SECRETARY').notNull(),
  igihandeId: text('igihande_id').unique(), // For foreign key later
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const members = pgTable('members', {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  membershipNo: text('membership_no').notNull().unique(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  nationalId: text('national_id').notNull().unique(),
  phone: text('phone'),
  dateOfBirth: timestamp('date_of_birth'),
  gender: genderEnum('gender').notNull(),
  maritalStatus: maritalStatusEnum('marital_status').notNull(),
  baptismDate: timestamp('baptism_date'),
  photoUrl: text('photo_url'),
  province: text('province').notNull(),
  district: text('district').notNull(),
  sector: text('sector').notNull(),
  cell: text('cell').notNull(),
  village: text('village').notNull(),
  igihandeId: text('igihande_id').notNull(),
  status: memberStatusEnum('status').default('ACTIVE').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(), // Can use trigger or manual updates
});

export const igihandes = pgTable('igihandes', {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  name: text('name').notNull(),
  leaderId: text('leader_id'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const services = pgTable('services', {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  type: serviceTypeEnum('type').notNull(),
  title: text('title'),
  date: timestamp('date').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const attendances = pgTable('attendances', {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  memberId: text('member_id').notNull(),
  serviceId: text('service_id').notNull(),
  present: boolean('present').default(false).notNull(),
  notes: text('notes'),
  recordedById: text('recorded_by_id').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const dedications = pgTable('dedications', {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  memberId: text('member_id').notNull(),
  type: dedicationTypeEnum('type').notNull(),
  description: text('description'),
  date: timestamp('date').notNull(),
  recordedById: text('recorded_by_id').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const tasks = pgTable('tasks', {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  title: text('title').notNull(),
  description: text('description'),
  stage: taskStageEnum('stage').default('TODO').notNull(),
  priority: taskPriorityEnum('priority').default('MEDIUM').notNull(),
  dueDate: timestamp('due_date'),
  assignedToId: text('assigned_to_id'),
  relatedMemberId: text('related_member_id'),
  createdById: text('created_by_id').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// ─── Relations ──────────────────────────────────────────

export const usersRelations = relations(users, ({ one, many }) => ({
  igihande: one(igihandes, {
    fields: [users.igihandeId],
    references: [igihandes.id],
    relationName: 'IgihandeLeader',
  }),
  tasksCreated: many(tasks, { relationName: 'TaskCreator' }),
  tasksAssigned: many(tasks, { relationName: 'TaskAssignee' }),
  attendanceRecorded: many(attendances),
  dedicationsRecorded: many(dedications),
}));

export const membersRelations = relations(members, ({ one, many }) => ({
  igihande: one(igihandes, {
    fields: [members.igihandeId],
    references: [igihandes.id],
  }),
  attendances: many(attendances),
  dedications: many(dedications),
  relatedTasks: many(tasks),
}));

export const igihandesRelations = relations(igihandes, ({ one, many }) => ({
  leader: one(users, {
    fields: [igihandes.leaderId],
    references: [users.id],
    relationName: 'IgihandeLeader',
  }),
  members: many(members),
}));

export const servicesRelations = relations(services, ({ many }) => ({
  attendances: many(attendances),
}));

export const attendancesRelations = relations(attendances, ({ one }) => ({
  member: one(members, {
    fields: [attendances.memberId],
    references: [members.id],
  }),
  service: one(services, {
    fields: [attendances.serviceId],
    references: [services.id],
  }),
  recordedBy: one(users, {
    fields: [attendances.recordedById],
    references: [users.id],
  }),
}));

export const dedicationsRelations = relations(dedications, ({ one }) => ({
  member: one(members, {
    fields: [dedications.memberId],
    references: [members.id],
  }),
  recordedBy: one(users, {
    fields: [dedications.recordedById],
    references: [users.id],
  }),
}));

export const tasksRelations = relations(tasks, ({ one }) => ({
  assignedTo: one(users, {
    fields: [tasks.assignedToId],
    references: [users.id],
    relationName: 'TaskAssignee',
  }),
  relatedMember: one(members, {
    fields: [tasks.relatedMemberId],
    references: [members.id],
  }),
  createdBy: one(users, {
    fields: [tasks.createdById],
    references: [users.id],
    relationName: 'TaskCreator',
  }),
}));
