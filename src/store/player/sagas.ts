import { eventChannel } from "redux-saga";
import { call, put, take, takeLatest, fork } from "redux-saga/effects";
import { api, audioChannel } from "./audio";
import { Types /* Load */ } from "./actions";
import { Type as AppTypes } from "../app/actions";

export function* load(/* action: Load */) {
  yield call(
    api.load,
    "https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg"
  );
}

export function* play() {
  yield call(api.play);
}

export function* watchInit() {
  yield take(AppTypes.CLIENT_READY);
  const channel = yield call(eventChannel, audioChannel);
  while (true) {
    yield put(yield take(channel));
  }
}

export function* watchPlay() {
  yield takeLatest(Types.PLAY, load);
}

export function* watchReady() {
  yield takeLatest(Types.READY, play);
}

export const playerSagas = [fork(watchInit), fork(watchPlay), fork(watchReady)];
