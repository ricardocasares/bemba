import path from "path";
import { makeSchema } from "nexus";
import * as types from "./types";

export const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(process.cwd(), "./schema.graphql"),
    typegen: path.join(process.cwd(), "./types/schema.d.ts"),
  },
});
