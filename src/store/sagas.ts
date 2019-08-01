import { delay, put, take } from "redux-saga/effects";
import { Types, play } from "./player";

export function* sagas() {
  yield take(Types.PLAY);
  while (true) {
    yield put(play());
    yield delay(1000);
  }
}
