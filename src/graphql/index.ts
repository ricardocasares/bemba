export * from "@/genql";
import { createClient } from "@/genql";
export const client = createClient({ url: "/api/graphql" });
