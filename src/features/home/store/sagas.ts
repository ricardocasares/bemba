import { put, call, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchSuggestions } from '@/api/graphql';
import { receive, errored, request } from './actions';
import {
  ActionType,
  SuggestionsFetchRequest,
  SuggestionsPrepare,
} from './model';

function* prepare({ payload }: SuggestionsPrepare) {
  yield put(
    request(['podcasts', 'news', 'city', 'country', 'language'], payload)
  );
}

function* execute({ payload: { ip, suggestions } }: SuggestionsFetchRequest) {
  try {
    const stations = yield call(fetchSuggestions, suggestions, ip);

    yield put(receive(stations));
  } catch (err) {
    console.error(err);
    yield put(errored(err));
  }
}

function* watchPrepare() {
  yield takeLatest(ActionType.PREPARE, prepare);
}

function* watchRequest() {
  yield takeEvery(ActionType.FETCH_REQUEST, execute);
}

export const sagas = [fork(watchPrepare), fork(watchRequest)];
