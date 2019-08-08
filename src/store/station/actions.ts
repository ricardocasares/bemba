import { Station } from "@/store/state";
import { ActionType, Load } from "./model";

export const load = (payload: Station): Load => ({
  type: ActionType.LOAD,
  payload
});
