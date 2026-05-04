import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema";
import { prisma } from "./lib/prisma";

const yoga = createYoga({
  schema,
  context: async ({ request }) => {
    // We will extract Clerk token from authorization header here
    const authHeader = request.headers.get("authorization");
    let userId = null;
    let role = "SECRETARY"; // Default role for now until Clerk is fully connected
    
    // Stub auth context for now
    if (authHeader) {
      // Decode Clerk token later
      userId = "stub-user-id";
    }

    return {
      prisma,
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
