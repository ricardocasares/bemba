import { put, call, fork, debounce, takeLatest } from "redux-saga/effects";
import { search } from "@/api";
import { request, receive, errored, addToHistory } from "./actions";
import {
  ActionType,
  SearchInput,
  SearchFetchRequest,
  SearchFetchReceive
} from "./model";

function* validate({ payload: { query, filter } }: SearchInput) {
  if (query.length) {
    yield put(request(query, filter));
  }
}

function* execute({ payload: { filter, query } }: SearchFetchRequest) {
  try {
    console.log(filter, query);
    yield put(receive(yield call(search, filter, query)));
  } catch (err) {
    yield put(errored(err));
  }
}

function* add({ payload }: SearchFetchReceive) {
  if (Object.keys(payload).length) {
    yield put(addToHistory(payload));
  }
}

function* watchInput() {
  yield debounce(500, ActionType.INPUT, validate);
}

function* watchRequest() {
  yield takeLatest(ActionType.FETCH_REQUEST, execute);
}

function* watchReceive() {
  yield debounce(5000, ActionType.FETCH_RECEIVE, add);
}

export const sagas = [fork(watchInput), fork(watchRequest), fork(watchReceive)];
