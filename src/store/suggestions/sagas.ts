import {
  put,
  call,
  fork,
  select,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import { BembaState, User, SearchFilterParam } from "@/models/state";
import { search } from "@/api";
import { receive, errored, request } from "./actions";
import { ActionType, SuggestionsFetchRequest } from "./model";

function* prepare() {
  const user: User = yield select(({ app: { user } }: BembaState) => user);
  if (user.state) {
    yield put(request(user.state, SearchFilterParam.STATE));
  }

  if (user.country) {
    yield put(request(user.country, SearchFilterParam.COUNTRY));
  }

  if (user.language) {
    yield put(request(user.language, SearchFilterParam.LANGUAGE));
  }
}

function* execute({ payload: { filter, query } }: SuggestionsFetchRequest) {
  try {
    const stations = yield call(search, filter, query);
    yield put(receive(query, stations));
  } catch (err) {
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
