import { Actions, playing, paused, ready, errored, loading } from "./actions";

let _audio: HTMLAudioElement;

export const api = {
  play() {
    _audio.play();
  },

  pause() {
    _audio.pause();
  },

  load(src: string) {
    _audio.src = src;
  }
};

export function audioChannel(
  emit: (action: Actions) => void,
  audio = new Audio()
) {
  audio.addEventListener("canplay", () => emit(ready()));
  audio.addEventListener("paused", () => emit(paused()));
  audio.addEventListener("playing", () => emit(playing()));
  audio.addEventListener("loadstart", () => emit(loading()));
  audio.addEventListener("error", ({ error }) => emit(errored(error)));

  _audio = audio;

  return () => {};
}
