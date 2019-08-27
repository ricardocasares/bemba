import { Action } from 'redux';
import { Station } from '@/models/state';

export enum ActionType {
  LOAD = '@bemba/shared/player/load',
  PLAY = '@bemba/shared/player/play',
  PAUSE = '@bemba/shared/player/pause',
  READY = '@bemba/shared/player/ready',
}

export interface PlayerLoad extends Action<ActionType.LOAD> {
  payload: Station;
}

export interface PlayerPlay extends Action<ActionType.PLAY> {}
export interface PlayerPause extends Action<ActionType.PAUSE> {}
export interface PlayerReady extends Action<ActionType.READY> {}

export type Actions = PlayerLoad | PlayerPlay | PlayerPause | PlayerReady;
