import { Action } from 'redux';
import { User } from '@/models/state';
import { NextPageContext } from 'next';

export enum ActionType {
  CLIENT_READY = '@bemba/app/client/ready',
  SERVER_READY = '@bemba/app/server/ready',
  GEO_REQUEST = '@bemba/app/fetch/geo/request',
  GEO_RECEIVE = '@bemba/app/fetch/geo/receive',
  GEO_ERRORED = '@bemba/app/fetch/geo/errored',
}

export interface BembaClientReady extends Action<ActionType.CLIENT_READY> {}
export interface BembaServerReady extends Action<ActionType.SERVER_READY> {
  readonly payload: NextPageContext;
}

export interface BembaGeoRequest extends Action<ActionType.GEO_REQUEST> {
  readonly payload: string;
}

export interface BembaGeoReceive extends Action<ActionType.GEO_RECEIVE> {
  readonly payload: User;
}

export interface BembaGeoErrored extends Action<ActionType.GEO_ERRORED> {
  readonly payload: Error;
}

export type Actions =
  | BembaServerReady
  | BembaClientReady
  | BembaGeoRequest
  | BembaGeoReceive
  | BembaGeoErrored;
