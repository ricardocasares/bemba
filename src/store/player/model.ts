import { Action } from "redux";

export enum ActionType {
  PLAY = "@bemba/player/play",
  PAUSE = "@bemba/player/pause"
}

export interface PlayerPlay extends Action<ActionType.PLAY> {}
export interface PlayerPause extends Action<ActionType.PAUSE> {}
export type Actions = PlayerPlay | PlayerPause;
