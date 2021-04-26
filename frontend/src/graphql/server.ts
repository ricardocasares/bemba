import { createClient } from "@/genql";

export const client = createClient({
  url: process.env.GRAPHQL_ENDPOINT,
  headers: {
    "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
  },
});
