import { Reducer } from "redux";
import { Station } from "../state";
import { Type, Actions } from "./actions";

export const init: Station[] = [];

export const reducer: Reducer<Station[], Actions> = (
  state = init,
  action
): Station[] => {
  switch (action.type) {
    case Type.LOAD:
      return state;
    case Type.LIKE:
      return state;
    default:
      return state;
  }
};
