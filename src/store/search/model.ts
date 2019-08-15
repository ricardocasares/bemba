import { Action } from "redux";
import { Stations, SearchFilterParam } from "@/models/state";

export enum ActionType {
  INPUT = "@bemba/search/input",
  HISTORY_ADD = "@bemba/search/history/add",
  FETCH_REQUEST = "@bemba/search/fetch/request",
  FETCH_RECEIVE = "@bemba/search/fetch/receive",
  FETCH_ERRORED = "@bemba/search/fetch/errored"
}

export interface SearchInput extends Action<ActionType.INPUT> {
  payload: { query: string; filter: SearchFilterParam };
}

export interface SearchAddToHistory extends Action<ActionType.HISTORY_ADD> {
  readonly payload: Stations;
}

export interface SearchFetchRequest extends Action<ActionType.FETCH_REQUEST> {
  payload: { filter: string; query: string };
}

export interface SearchFetchReceive extends Action<ActionType.FETCH_RECEIVE> {
  readonly payload: Stations;
}

export interface SearchFetchErrored extends Action<ActionType.FETCH_ERRORED> {
  readonly payload: Error;
}

export type Actions =
  | SearchInput
  | SearchAddToHistory
  | SearchFetchRequest
  | SearchFetchReceive
  | SearchFetchErrored;
