import { put, call, fork, takeLatest } from "redux-saga/effects";
import { search } from "@/api";
import { ActionType, StationsFetchRequest } from "./model";
import { receive, errored } from "./actions";

function* request({ payload: { filter, value } }: StationsFetchRequest) {
  try {
    yield put(receive(yield call(search, filter, value)));
  } catch (err) {
    yield put(errored(err));
  }
}

function* watchRequest() {
  yield takeLatest(ActionType.FETCH_REQUEST, request);
}

export const sagas = [fork(watchRequest)];
