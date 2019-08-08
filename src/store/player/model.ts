import { Action } from "redux";

export enum ActionType {
  PLAY = "@bemba/player/play",
  PAUSE = "@bemba/player/pause"
}

export interface Play extends Action<ActionType.PLAY> {}
export interface Pause extends Action<ActionType.PAUSE> {}
export type Actions = Play | Pause;
