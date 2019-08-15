import { Reducer } from "redux";
import { Search, SearchFilterParam } from "@/models/state";
import { Actions, ActionType } from "./model";

export const initial: Search = {
  query: "",
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
      return { ...state, ...action.payload };
    case ActionType.FETCH_RECEIVE:
      return {
        ...state,
        results: action.payload
      };
    case ActionType.HISTORY_ADD:
      return {
        ...state,
        history: { ...state.history, [state.query]: state.results }
      };
    default:
      return state;
  }
};
