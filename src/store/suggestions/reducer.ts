import { Reducer } from "redux";
import { Suggestions } from "@/models/state";
import { Actions, ActionType } from "./model";

export const initial: Suggestions = {};

export const reducer: Reducer<Suggestions, Actions> = (
  state = initial,
  action
): Suggestions => {
  switch (action.type) {
    case ActionType.FETCH_REQUEST:
      return state;
    case ActionType.FETCH_RECEIVE:
      if (!action.payload.query.length) {
        return state;
      }

      if (!Object.keys(action.payload.stations).length) {
        return state;
      }

      return {
        ...state,
        [action.payload.query]: action.payload.stations
      };
    case ActionType.FETCH_ERRORED:
      return state;
    default:
      return state;
  }
};
