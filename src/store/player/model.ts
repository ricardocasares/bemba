import { Action } from 'redux';
import { Station } from '@/models/state';

export enum ActionType {
  LOAD = '@bemba/player/load',
  PLAY = '@bemba/player/play',
  PAUSE = '@bemba/player/pause',
  READY = '@bemba/player/ready',
}

export interface PlayerLoad extends Action<ActionType.LOAD> {
  payload: Station;
}

export interface PlayerPlay extends Action<ActionType.PLAY> {}
export interface PlayerPause extends Action<ActionType.PAUSE> {}
export interface PlayerReady extends Action<ActionType.READY> {}

export type Actions = PlayerLoad | PlayerPlay | PlayerPause | PlayerReady;
