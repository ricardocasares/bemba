import { makeSchema } from "nexus";
import * as types from "./schema";

export const schema = makeSchema({
  types,
  outputs: false,
});
