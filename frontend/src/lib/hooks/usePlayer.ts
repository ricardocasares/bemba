import { useEffect, useContext } from "react";
import { event } from "@/lib/utils";
import { PlayerContext } from "@/lib/context/player";
import { AudioElementContext } from "@/lib/context/audio";

const EMPTY_AUDIO =
  "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAVFYAAFRWAAABAAgAZGF0YQAAAAA=";

export function usePlayer() {
  const audio = useContext(AudioElementContext);
  const { state, setState } = useContext(PlayerContext);

  const play = async () => await audio.current.play();
  const pause = () => audio.current.pause();

  const load = (station: any) => {
    if (audio.current.src !== station.stream) {
      audio.current.src = `/stream?target=${station.stream}`;

      event({
        action: "load",
        label: "Radio load",
        category: "player",
        value: station.id,
      });

      setState((state) => ({
        ...state,
        error: false,
        paused: false,
        playing: false,
        loading: true,
        station,
      }));
    }
  };

  const stop = () => {
    audio.current.src = EMPTY_AUDIO;

    setState({
      error: false,
      paused: false,
      loading: false,
      playing: false,
      station: null,
    });
  };

  const onPlaying = () =>
    setState((state) => {
      event({
        action: "play",
        label: "Radio playing",
        category: "player",
        value: state?.station?.id,
      });

      return {
        ...state,
        error: false,
        paused: false,
        loading: false,
        playing: true,
      };
    });

  const onPause = () =>
    setState((state) => ({
      ...state,
      error: false,
      paused: true,
      loading: false,
      playing: false,
    }));

  const onCanPlayThrough = () =>
    setState((state) => ({
      ...state,
      error: false,
      paused: false,
      loading: false,
      playing: true,
    }));

  const onLoadStart = () =>
    setState((state) => ({
      ...state,
      error: false,
      paused: false,
      loading: true,
      playing: false,
    }));

  const onError = () =>
    setState((state) => {
      event({
        action: "error",
        label: "Player error",
        category: "player",
        value: state?.station?.id,
      });

      return {
        ...state,
        error: true,
        paused: false,
        loading: false,
        playing: false,
      };
    });

  useEffect(() => {
    audio.current.addEventListener("error", onError);
    audio.current.addEventListener("pause", onPause);
    audio.current.addEventListener("playing", onPlaying);
    audio.current.addEventListener("loadstart", onLoadStart);
    audio.current.addEventListener("canplaythrough", onCanPlayThrough);

    return () => {
      audio.current.removeEventListener("error", onError);
      audio.current.removeEventListener("pause", onPause);
      audio.current.removeEventListener("playing", onPlaying);
      audio.current.removeEventListener("loadstart", onLoadStart);
      audio.current.removeEventListener("canplaythrough", onCanPlayThrough);
    };
  }, []);

  return {
    load,
    play,
    stop,
    pause,
    ...state,
  };
}
