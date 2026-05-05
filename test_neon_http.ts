
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });
const dbUrl = process.env.DATABASE_URL;

console.log("Testing HTTP connection to:", dbUrl);

const sql = neon(dbUrl);

async function test() {
  try {
    const result = await sql`SELECT NOW()`;
    console.log("Success:", result);
  } catch (err) {
    console.error("HTTP Connection failed:", err);
  }
}

test();
