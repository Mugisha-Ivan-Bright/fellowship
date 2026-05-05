import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema";
import { db } from "./db";

const yoga = createYoga({
  schema,
  context: async ({ request }) => {
    // We will extract Clerk token from authorization header here
    const authHeader = request.headers.get("authorization");
    const clerkUserId = request.headers.get("x-clerk-user-id");
    let userId = clerkUserId;
    let role = "SECRETARY"; 
    
    // In production, you would verify the JWT here using Clerk's SDK
    // For now, we trust the header in development to get you unblocked


    return {
      db,
      userId,
      role,
    };
  },
  cors: {
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"]
  }
});

const server = createServer(yoga);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`GraphQL Yoga server is running on http://localhost:${PORT}/graphql`);
});
