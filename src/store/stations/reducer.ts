import { Reducer } from "redux";
import { Stations } from "@/store/state";
import { Actions, ActionType } from "./model";

export const initial: Stations = {};

export const reducer: Reducer<Stations, Actions> = (
  state = initial,
  action
): Stations => {
  switch (action.type) {
    case ActionType.FETCH_RECEIVE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
