CREATE TYPE "public"."dedication_type" AS ENUM('TITHE', 'OFFERING', 'VOLUNTEERING', 'SERVICE_ROLE', 'OTHER');--> statement-breakpoint
CREATE TYPE "public"."gender" AS ENUM('MALE', 'FEMALE');--> statement-breakpoint
CREATE TYPE "public"."marital_status" AS ENUM('SINGLE', 'MARRIED', 'WIDOWED', 'DIVORCED');--> statement-breakpoint
CREATE TYPE "public"."member_status" AS ENUM('ACTIVE', 'INACTIVE');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('SECRETARY', 'IGIHANDE_LEADER', 'COMMITTEE', 'PASTOR');--> statement-breakpoint
CREATE TYPE "public"."service_type" AS ENUM('SUNDAY', 'MIDWEEK', 'SPECIAL');--> statement-breakpoint
CREATE TYPE "public"."task_priority" AS ENUM('LOW', 'MEDIUM', 'HIGH');--> statement-breakpoint
CREATE TYPE "public"."task_stage" AS ENUM('TODO', 'IN_PROGRESS', 'DONE', 'ON_HOLD');--> statement-breakpoint
CREATE TABLE "attendances" (
	"id" text PRIMARY KEY NOT NULL,
	"member_id" text NOT NULL,
	"service_id" text NOT NULL,
	"present" boolean DEFAULT false NOT NULL,
	"notes" text,
	"recorded_by_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "dedications" (
	"id" text PRIMARY KEY NOT NULL,
	"member_id" text NOT NULL,
	"type" "dedication_type" NOT NULL,
	"description" text,
	"date" timestamp NOT NULL,
	"recorded_by_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "igihandes" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"leader_id" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "members" (
	"id" text PRIMARY KEY NOT NULL,
	"membership_no" text NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"national_id" text NOT NULL,
	"phone" text,
	"date_of_birth" timestamp,
	"gender" "gender" NOT NULL,
	"marital_status" "marital_status" NOT NULL,
	"baptism_date" timestamp,
	"photo_url" text,
	"province" text NOT NULL,
	"district" text NOT NULL,
	"sector" text NOT NULL,
	"cell" text NOT NULL,
	"village" text NOT NULL,
	"igihande_id" text NOT NULL,
	"status" "member_status" DEFAULT 'ACTIVE' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "members_membership_no_unique" UNIQUE("membership_no"),
	CONSTRAINT "members_national_id_unique" UNIQUE("national_id")
);
--> statement-breakpoint
CREATE TABLE "services" (
	"id" text PRIMARY KEY NOT NULL,
	"type" "service_type" NOT NULL,
	"title" text,
	"date" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tasks" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"stage" "task_stage" DEFAULT 'TODO' NOT NULL,
	"priority" "task_priority" DEFAULT 'MEDIUM' NOT NULL,
	"due_date" timestamp,
	"assigned_to_id" text,
	"related_member_id" text,
	"created_by_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"clerk_id" text NOT NULL,
	"email" text NOT NULL,
	"name" text,
	"role" "role" DEFAULT 'SECRETARY' NOT NULL,
	"igihande_id" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_clerk_id_unique" UNIQUE("clerk_id"),
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_igihande_id_unique" UNIQUE("igihande_id")
);
