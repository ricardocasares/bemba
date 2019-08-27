import { Action } from 'redux';
import { Suggestions } from '@/models/state';

export enum ActionType {
  PREPARE = '@bemba/home/suggestions/prepare',
  FETCH_REQUEST = '@bemba/home/suggestions/fetch/request',
  FETCH_RECEIVE = '@bemba/home/suggestions/fetch/receive',
  FETCH_ERRORED = '@bemba/home/suggestions/fetch/errored',
}

export interface SuggestionsPrepare extends Action<ActionType.PREPARE> {
  payload?: string;
}

export interface SuggestionsFetchRequest
  extends Action<ActionType.FETCH_REQUEST> {
  readonly payload: { ip?: string; suggestions: string[] };
}

export interface SuggestionsFetchReceive
  extends Action<ActionType.FETCH_RECEIVE> {
  readonly payload: Suggestions;
}

export interface SuggestionsFetchErrored
  extends Action<ActionType.FETCH_ERRORED> {
  readonly payload: Error;
}

export type Actions =
  | SuggestionsPrepare
  | SuggestionsFetchRequest
  | SuggestionsFetchReceive
  | SuggestionsFetchErrored;
