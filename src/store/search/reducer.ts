import { Reducer } from "redux";
import { Search, SearchFilterParam } from "@/models/state";
import { Actions, ActionType } from "./model";

export const initial: Search = {
  query: "",
  empty: true,
  dirty: false,
  loading: false,
  filter: SearchFilterParam.NAME,
  results: {},
  history: {}
};

export const reducer: Reducer<Search, Actions> = (
  state = initial,
  action
): Search => {
  switch (action.type) {
    case ActionType.INPUT:
      if (!action.payload.query.length) {
        return {
          ...state,
          dirty: false,
          empty: true,
          results: {},
          ...action.payload
        };
      }

      return {
        ...state,
        dirty: true,
        loading: true,
        empty: true,
        ...action.payload
      };
    case ActionType.FETCH_RECEIVE:
      return {
        ...state,
        dirty: true,
        loading: false,
        empty: !Object.keys(action.payload).length,
        results: action.payload
      };
    case ActionType.HISTORY_SAVE:
      return {
        ...state,
        history: {
          [action.payload.query]: action.payload.stations,
          ...state.history
        }
      };
    default:
      return state;
  }
};
