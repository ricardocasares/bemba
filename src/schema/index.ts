import { makeSchema } from "nexus";
import * as station from "./station";

export const schema = makeSchema({
  types: { station },
  outputs: false,
});
