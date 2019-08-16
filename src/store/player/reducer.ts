import { Reducer } from "redux";
import { Player } from "@/models/state";
import { Actions, ActionType } from "./model";

export const initial: Player = {
  ready: false,
  playing: false
};

export const reducer: Reducer<Player, Actions> = (
  state = initial,
  action
): Player => {
  switch (action.type) {
    case ActionType.PLAY:
      return { ...state, playing: true };
    case ActionType.READY:
      return { ...state, ready: true };
    case ActionType.PAUSE:
      return { ...state, playing: false };
    default:
      return state;
  }
};
