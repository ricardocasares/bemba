import { Reducer } from "redux";
import { Player } from "../state";
import { Types, Actions } from "./actions";

export const init: Player = {
  ready: false,
  loading: false,
  playing: false
};

export const reducer: Reducer<Player, Actions> = (
  state = init,
  action
): Player => {
  switch (action.type) {
    case Types.LOAD:
      return { ...state, ready: false, loading: true, ...action.payload };
    case Types.READY:
      return { ...state, ready: true, loading: false };
    case Types.PLAY:
      return { ...state, playing: true };
    case Types.PAUSE:
      return { ...state, playing: false };
    default:
      return state;
  }
};
