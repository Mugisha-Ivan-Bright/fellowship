import { PrismaClient } from "../../src/generated/prisma";
import dotenv from "dotenv";

// Load .env.local for the DATABASE_URL
dotenv.config({ path: ".env.local", override: true });

// Prisma client singleton — reuse across hot reloads in development
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({});

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
