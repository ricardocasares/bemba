import { Stations, SearchFilterParam } from "@/models/state";
import {
  ActionType,
  SearchInput,
  SearchAddToHistory,
  SearchFetchRequest,
  SearchFetchReceive,
  SearchFetchErrored
} from "./model";

export const search = (
  query: string,
  filter: SearchFilterParam
): SearchInput => ({
  type: ActionType.INPUT,
  payload: { query, filter }
});

export const addToHistory = (payload: Stations): SearchAddToHistory => ({
  type: ActionType.HISTORY_ADD,
  payload
});

export const request = (
  query: string,
  filter: SearchFilterParam
): SearchFetchRequest => ({
  type: ActionType.FETCH_REQUEST,
  payload: { filter, query }
});

export const receive = (payload: Stations): SearchFetchReceive => ({
  type: ActionType.FETCH_RECEIVE,
  payload
});

export const errored = (payload: Error): SearchFetchErrored => ({
  type: ActionType.FETCH_ERRORED,
  payload
});
