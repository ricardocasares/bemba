import { Suggestions } from "@/models/state";
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

export const request = (...payload: string[]): SuggestionsFetchRequest => ({
  type: ActionType.FETCH_REQUEST,
  payload,
});

export const receive = (payload: Suggestions): SuggestionsFetchReceive => ({
  type: ActionType.FETCH_RECEIVE,
  payload,
});

export const errored = (payload: Error): SuggestionsFetchErrored => ({
  type: ActionType.FETCH_ERRORED,
  payload,
});
