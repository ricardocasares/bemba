import { Suggestions } from '@/models/state';
import {
  ActionType,
  SuggestionsPrepare,
  SuggestionsFetchRequest,
  SuggestionsFetchReceive,
  SuggestionsFetchErrored,
} from './model';

export const prepare = (payload?: string): SuggestionsPrepare => ({
  type: ActionType.PREPARE,
  payload,
});

export const request = (
  suggestions: string[],
  ip?: string
): SuggestionsFetchRequest => ({
  type: ActionType.FETCH_REQUEST,
  payload: { ip, suggestions },
});

export const receive = (payload: Suggestions): SuggestionsFetchReceive => ({
  type: ActionType.FETCH_RECEIVE,
  payload,
});

export const errored = (payload: Error): SuggestionsFetchErrored => ({
  type: ActionType.FETCH_ERRORED,
  payload,
});
