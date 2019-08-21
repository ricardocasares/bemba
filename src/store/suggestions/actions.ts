import { Stations } from "@/models/state";
import {
  ActionType,
  SuggestionsPrepare,
  SuggestionsFetchRequest,
  SuggestionsFetchReceive,
  SuggestionsFetchErrored,
} from "./model";

export const prepare = (): SuggestionsPrepare => ({
  type: ActionType.PREPARE,
});

export const request = (...categories: string[]): SuggestionsFetchRequest => ({
  type: ActionType.FETCH_REQUEST,
  payload: categories,
});

export const receive = (payload: Stations): SuggestionsFetchReceive => ({
  type: ActionType.FETCH_RECEIVE,
  payload,
});

export const errored = (payload: Error): SuggestionsFetchErrored => ({
  type: ActionType.FETCH_ERRORED,
  payload,
});
