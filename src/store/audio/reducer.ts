import { Reducer } from "redux";
import { Audio } from "@/store/state";
import { Actions, ActionType } from "./model";

export const initial: Audio = {
  ready: false,
  loading: false,
  playing: false
};

export const reducer: Reducer<Audio, Actions> = (
  state = initial,
  action
): Audio => {
  switch (action.type) {
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
