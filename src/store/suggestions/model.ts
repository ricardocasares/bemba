import { Action } from "redux";
import { Stations, SearchFilterParam } from "@/models/state";

export enum ActionType {
  PREPARE = "@bemba/suggestions/prepare",
  FETCH_REQUEST = "@bemba/suggestions/fetch/request",
  FETCH_RECEIVE = "@bemba/suggestions/fetch/receive",
  FETCH_ERRORED = "@bemba/suggestions/fetch/errored"
}

export interface SuggestionsPrepare extends Action<ActionType.PREPARE> {}

export interface SuggestionsFetchRequest
  extends Action<ActionType.FETCH_REQUEST> {
  readonly payload: { filter: SearchFilterParam; query: string };
}

export interface SuggestionsFetchReceive
  extends Action<ActionType.FETCH_RECEIVE> {
  readonly payload: {
    query: string;
    stations: Stations;
  };
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
