// IMPORTANT: dotenv must be loaded before importing prisma/config
// because prisma's env() reads process.env at call time
import { config } from "dotenv";
config({ path: ".env.local", override: true });

import { defineConfig } from "prisma/config";

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error("DATABASE_URL is not set in .env.local");
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: dbUrl,
  },
});
