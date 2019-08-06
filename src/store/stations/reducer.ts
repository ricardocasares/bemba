import { Reducer } from "redux";
import { Station } from "@/store/state";
import { Actions, ActionType } from "./actions";

export const init: Station[] = [];

export const reducer: Reducer<Station[], Actions> = (
  state = init,
  action
): Station[] => {
  switch (action.type) {
    case ActionType.REQUEST:
      return state;
    case ActionType.RECEIVE:
      return state;
    case ActionType.LIKE:
      return state;
    default:
      return state;
  }
};
