import { useState, useEffect, createContext, useRef } from "react";
import { Station } from "@/lib/graphql/gqless";

export type PlayerContext = {
  play: (station: Station) => void;
  stop: () => void;
  pause: () => void;
  station?: Station | null;
  error: boolean;
  paused: boolean;
  playing: boolean;
  stopped: boolean;
  loading: boolean;
};

export const PlayerContext = createContext<PlayerContext>({
  station: null,
  play: () => {},
  pause: () => {},
  stop: () => {},
  error: false,
  paused: false,
  playing: false,
  stopped: false,
  loading: false,
});

// @TODO: This is very messy
export const PlayerProvider = ({ children }) => {
  const audio = useRef<HTMLAudioElement>(null);
  const [station, setStation] = useState<Station>(null);
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const play = (s: Station) => {
    if (audio.current.src !== s.url || error) {
      audio.current.src = s.url;
      setStation(s);
      setError(false);
      setLoading(true);
      setPlaying(false);
      audio.current.play();
    }

    if (paused) {
      audio.current.play().then(() => setPaused(false));
    }
  };

  const pause = () => audio.current.pause();

  const stop = () => {
    audio.current.src = "";
    setError(false);
    setStation(null);
    setPaused(false);
    setStopped(true);
    setPlaying(false);
  };

  const onPlaying = () => {
    setError(false);
    setPlaying(true);
    setPaused(false);
    setLoading(false);
    setStopped(false);
  };

  const onCanPlay = () => {
    setError(false);
    setPaused(false);
    setPlaying(true);
    setLoading(false);
    setStopped(false);
  };

  const onLoad = () => {
    setError(false);
    setLoading(true);
    setPlaying(false);
    setStopped(false);
    setPaused(false);
  };

  const onPause = () => {
    setPlaying(false);
    setStopped(false);
    setPaused(true);
  };

  const onError = () => {
    setError(true);
    setPaused(false);
    setPlaying(false);
    setStopped(false);
    setLoading(false);
  };

  useEffect(() => {
    audio.current.addEventListener("load", onLoad);
    audio.current.addEventListener("error", onError);
    audio.current.addEventListener("playing", onPlaying);
    audio.current.addEventListener("canplay", onCanPlay);
    audio.current.addEventListener("pause", onPause);

    return () => {
      audio.current.removeEventListener("load", onLoad);
      audio.current.removeEventListener("error", onError);
      audio.current.removeEventListener("pause", onPause);
      audio.current.removeEventListener("playing", onPlaying);
      audio.current.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        play,
        stop,
        error,
        pause,
        paused,
        loading,
        playing,
        stopped,
        station,
      }}
    >
      {children}
      <audio ref={audio} style={{ display: "none" }} />
    </PlayerContext.Provider>
  );
};
