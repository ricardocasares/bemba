import { Actions } from './model';
import { load, playing, paused, errored, loading, ready } from './actions';

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
  },
};

export function audioChannel(
  emit: (action: Actions) => void,
  audio = new Audio()
) {
  audio.addEventListener('pause', () => emit(paused()));
  audio.addEventListener('canplay', () => emit(ready()));
  audio.addEventListener('playing', () => emit(playing()));
  audio.addEventListener('loadstart', () => emit(loading()));
  audio.addEventListener('ended', () => emit(load(_audio.src)));
  audio.addEventListener('error', () => emit(errored()));

  _audio = audio;

  return () => {};
}
