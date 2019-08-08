import { Action } from "redux";

export enum ActionType {
  INIT = "@bemba/audio/init",
  LOAD = "@bemba/audio/load",
  LOADING = "@bemba/audio/loading",
  READY = "@bemba/audio/ready",
  PLAY = "@bemba/audio/play",
  PLAYING = "@bemba/audio/playing",
  PAUSE = "@bemba/audio/pause",
  PAUSED = "@bemba/audio/paused",
  ERRORED = "@bemba/audio/errored"
}

export interface Init extends Action<ActionType.INIT> {}
export interface Play extends Action<ActionType.PLAY> {}
export interface Playing extends Action<ActionType.PLAYING> {}
export interface Pause extends Action<ActionType.PAUSE> {}
export interface Paused extends Action<ActionType.PAUSED> {}
export interface Loading extends Action<ActionType.LOADING> {}
export interface Ready extends Action<ActionType.READY> {}

export interface Load extends Action<ActionType.LOAD> {
  readonly payload: string;
}

export interface Errored extends Action<ActionType.ERRORED> {
  readonly payload: Error;
}

export type Actions =
  | Play
  | Playing
  | Pause
  | Paused
  | Load
  | Loading
  | Ready
  | Errored;
