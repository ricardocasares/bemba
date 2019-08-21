import { put, call, fork, takeEvery, takeLatest } from "redux-saga/effects";
import { suggestions } from "@/api/graphql";
import { receive, errored, request } from "./actions";
import { ActionType, SuggestionsFetchRequest } from "./model";

function* prepare() {
  yield put(request("tags", "state", "country"));
}

function* execute({ payload }: SuggestionsFetchRequest) {
  try {
    const stations = yield call(suggestions, ...payload);

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
