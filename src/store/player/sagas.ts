import { eventChannel } from "redux-saga";
import { put, take, fork, call, select, takeLatest } from "redux-saga/effects";
import { ActionType as AppActionType } from "@/store/app";
import { ActionType } from "./actions";
import { api, audioChannel } from "./audio";

export function* load() {
  const station = yield select(({ player: { station } }) => station);
  yield call(api.load, station.url);
}

export function* play() {
  yield call(api.play);
}

export function* pause() {
  yield call(api.pause);
}

export function* watchInit() {
  yield take(AppActionType.CLIENT_READY);
  const channel = yield call(eventChannel, audioChannel);

  while (true) {
    yield put(yield take(channel));
  }
}

export function* watchPlay() {
  yield takeLatest(ActionType.PLAY, play);
}

export function* watchLoad() {
  yield takeLatest(ActionType.LOAD, load);
}

export function* watchPause() {
  yield takeLatest(ActionType.PAUSE, pause);
}

export function* watchReady() {
  yield takeLatest(ActionType.READY, play);
}

export const playerSagas = [
  fork(watchInit),
  fork(watchLoad),
  fork(watchReady),
  fork(watchPlay),
  fork(watchPause)
];
