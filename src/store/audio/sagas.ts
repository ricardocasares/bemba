import { eventChannel } from "redux-saga";
import { put, take, fork, call, takeLatest } from "redux-saga/effects";
import { ActionType, AudioLoad } from "./model";
import { api, audioChannel } from "./channel";

function* load(action: AudioLoad) {
  yield call(api.load, action.payload);
}

function* play() {
  yield call(api.play);
}

function* pause() {
  yield call(api.pause);
}

function* watchInit() {
  yield take(ActionType.INIT);
  const channel = yield call(eventChannel, audioChannel);

  while (true) {
    yield put(yield take(channel));
  }
}

function* watchLoad() {
  yield takeLatest(ActionType.LOAD, load);
}

function* watchPlay() {
  yield takeLatest(ActionType.PLAY, play);
}

function* watchPause() {
  yield takeLatest(ActionType.PAUSE, pause);
}

function* watchReady() {
  yield takeLatest(ActionType.READY, play);
}

export const sagas = [
  fork(watchInit),
  fork(watchLoad),
  fork(watchReady),
  fork(watchPlay),
  fork(watchPause)
];
