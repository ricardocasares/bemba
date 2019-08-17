import { Reducer } from "redux";
import { App } from "@/models/state";
import { Actions, ActionType } from "./model";

export const initial: App = {
  user: {
    ip: "",
    language: "English",
    state: "",
    country: "",
  },
  serverReady: false,
  clientReady: false,
};

export const reducer: Reducer<App, Actions> = (
  state = initial,
  action
): App => {
  switch (action.type) {
    case ActionType.SERVER_READY:
      return { ...state, serverReady: true };
    case ActionType.CLIENT_READY:
      return { ...state, clientReady: true };
    case ActionType.GEO_RECEIVE:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
