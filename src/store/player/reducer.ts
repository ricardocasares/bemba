import { Reducer } from "redux";
import { Player } from "@/store/state";
import { Actions, ActionType } from "./actions";

export const init: Player = {
  error: undefined,
  ready: false,
  station: undefined,
  loading: false,
  playing: false
};

export const reducer: Reducer<Player, Actions> = (
  state = init,
  action
): Player => {
  console.log(action);
  switch (action.type) {
    case ActionType.LOAD:
      return {
        ...state,
        error: undefined,
        ready: false,
        loading: true,
        playing: false,
        ...action.payload
      };
    case ActionType.LOADING:
      return { ...state, loading: true };
    case ActionType.READY:
      return { ...state, ready: true, loading: false };
    case ActionType.PLAYING:
      return { ...state, playing: true };
    case ActionType.PAUSED:
      return { ...state, playing: false };
    case ActionType.ERRORED:
      return {
        ...state,
        loading: false,
        playing: false,
        ...action.payload
      };
    default:
      return state;
  }
};
