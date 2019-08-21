import { Reducer } from "redux";
import { Suggestions } from "@/models/state";
import { Actions, ActionType } from "./model";

export const initial: Suggestions = {
  tags: {
    stations: {},
  },
  country: {
    stations: {},
  },
};

export const reducer: Reducer<Suggestions, Actions> = (
  state = initial,
  action
): Suggestions => {
  switch (action.type) {
    case ActionType.FETCH_REQUEST:
      return state;
    case ActionType.FETCH_RECEIVE:
      return {
        ...state,
        ...action.payload,
      };
    case ActionType.FETCH_ERRORED:
      return state;
    default:
      return state;
  }
};
