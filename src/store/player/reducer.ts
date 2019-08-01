import { Reducer } from "redux";
import { Player } from "../state";
import { Type, Actions } from "./actions";

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
    case Type.LOAD:
      return { ...state, ready: false, loading: true, ...action.payload };
    case Type.READY:
      return { ...state, ready: true, loading: false };
    case Type.PLAY:
      return { ...state, playing: true };
    case Type.PAUSE:
      return { ...state, playing: false };
    default:
      return state;
  }
};
