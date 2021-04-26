export * from "@/genql";
import { getSession } from "next-auth/client";
import { createClient } from "@/genql";

export const client = createClient({
  url: "/api/graphql",
  headers: () =>
    getSession()
      .then(({ token }) => ({ Authorization: `Bearer ${token}` }))
      .catch(() => ({})),
});
