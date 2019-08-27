import { put, call, fork, debounce, takeLatest } from 'redux-saga/effects';
import { searchStations } from '@/api/graphql';
import { request, receive, errored, historyAdd, historySave } from './actions';
import {
  ActionType,
  SearchInput,
  SearchHistoryAdd,
  SearchFetchRequest,
} from './model';

function* validate({ payload: { query, filter } }: SearchInput) {
  if (query.length) {
    yield put(request(query, filter));
  }
}

function* execute({ payload: { filter, query } }: SearchFetchRequest) {
  try {
    const stations = yield call(searchStations, filter, query, 15);
    yield put(receive(stations));

    if (Object.keys(stations).length) {
      yield put(historyAdd(query, filter, stations));
    }
  } catch (err) {
    yield put(errored(err));
  }
}

function* saveHistory({
  payload: { query, filter, stations },
}: SearchHistoryAdd) {
  yield put(historySave(query, filter, stations));
}

function* watchInput() {
  yield debounce(500, ActionType.INPUT, validate);
}

function* watchRequest() {
  yield takeLatest(ActionType.FETCH_REQUEST, execute);
}

function* watchHistory() {
  yield debounce(10000, ActionType.HISTORY_ADD, saveHistory);
}

export const sagas = [fork(watchInput), fork(watchRequest), fork(watchHistory)];
