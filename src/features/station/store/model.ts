import { Action } from 'redux';
import { Station } from '@/models/state';

export enum ActionType {
  FETCH_REQUEST = '@bemba/station/fetch/request',
  FETCH_RECEIVE = '@bemba/station/fetch/receive',
  FETCH_ERRORED = '@bemba/station/fetch/errored',
}

export interface StationFetchRequest extends Action<ActionType.FETCH_REQUEST> {
  readonly payload: string;
}

export interface StationFetchReceive extends Action<ActionType.FETCH_RECEIVE> {
  readonly payload: Station;
}

export interface StationFetchErrored extends Action<ActionType.FETCH_ERRORED> {
  readonly payload: Error;
}

export type Actions =
  | StationFetchRequest
  | StationFetchReceive
  | StationFetchErrored;
