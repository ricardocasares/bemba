import { Station } from "@/store/state";
import { ActionType, StationLoad } from "./model";

export const load = (payload: Station): StationLoad => ({
  type: ActionType.LOAD,
  payload
});
