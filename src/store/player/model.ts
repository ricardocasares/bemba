import { Action } from "redux";

export enum ActionType {
  PLAY = "@bemba/player/play",
  PAUSE = "@bemba/player/pause",
  READY = "@bemba/player/ready"
}

export interface PlayerPlay extends Action<ActionType.PLAY> {}
export interface PlayerPause extends Action<ActionType.PAUSE> {}
export interface PlayerReady extends Action<ActionType.READY> {}
export type Actions = PlayerPlay | PlayerPause | PlayerReady;
