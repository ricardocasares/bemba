import { Reducer } from "redux";
import { Player } from "@/store/state";
import { Types, Actions } from "./actions";

export const init: Player = {
  error: null,
  ready: false,
  station: null,
  loading: false,
  playing: false
};

export const reducer: Reducer<Player, Actions> = (
  state = init,
  action
): Player => {
  console.log(action);
  switch (action.type) {
    case Types.LOAD:
      return { ...state, ready: false, ...action.payload };
    case Types.LOADING:
      return { ...state, loading: true };
    case Types.READY:
      return { ...state, ready: true, loading: false };
    case Types.PLAY:
      return { ...state, error: null, loading: false };
    case Types.PLAYING:
      return { ...state, playing: true };
    case Types.PAUSED:
      return { ...state, playing: false };
    case Types.ERRORED:
      return {
        ...state,
        ready: false,
        loading: false,
        playing: false,
        ...action.payload
      };
    default:
      return state;
  }
};
