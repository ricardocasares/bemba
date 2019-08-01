import { delay, put, take } from "redux-saga/effects";
import { Type, play } from "./player";

export function* sagas() {
  yield take(Type.PLAY);
  while (true) {
    yield put(play());
    console.log("tick");
    yield delay(1000);
  }
}
