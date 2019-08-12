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

export interface AudioInit extends Action<ActionType.INIT> {}
export interface AudioPlay extends Action<ActionType.PLAY> {}
export interface AudioPlaying extends Action<ActionType.PLAYING> {}
export interface AudioPause extends Action<ActionType.PAUSE> {}
export interface AudioPaused extends Action<ActionType.PAUSED> {}
export interface AudioLoading extends Action<ActionType.LOADING> {}
export interface AudioReady extends Action<ActionType.READY> {}

export interface AudioLoad extends Action<ActionType.LOAD> {
  readonly payload: string;
}

export interface AudioErrored extends Action<ActionType.ERRORED> {
  readonly payload: Error;
}

export type Actions =
  | AudioPlay
  | AudioPlaying
  | AudioPause
  | AudioPaused
  | AudioLoad
  | AudioLoading
  | AudioReady
  | AudioErrored;
