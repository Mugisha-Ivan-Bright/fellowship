import { neonConfig } from '@neondatabase/serverless';
import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';
import ws from 'ws';

// Required for Node.js < v22 when using WebSocket connections.
neonConfig.webSocketConstructor = ws;

config({ path: '.env.local', override: true });

export default defineConfig({
  schema: './server/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
