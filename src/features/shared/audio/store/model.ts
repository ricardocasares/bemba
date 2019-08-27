import { Action } from 'redux';

export enum ActionType {
  INIT = '@bemba/shared/audio/init',
  LOAD = '@bemba/shared/audio/load',
  LOADING = '@bemba/shared/audio/loading',
  READY = '@bemba/shared/audio/ready',
  PLAY = '@bemba/shared/audio/play',
  PLAYING = '@bemba/shared/audio/playing',
  PAUSE = '@bemba/shared/audio/pause',
  PAUSED = '@bemba/shared/audio/paused',
  ERRORED = '@bemba/shared/audio/errored',
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
