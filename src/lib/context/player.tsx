import { useState, useEffect, createContext, useRef } from "react";
import { Station } from "@/lib/graphql/gqless";
import styled from "@emotion/styled";

const Audio = styled.audio`
  display: none;
`;

export type PlayerContext = {
  play: () => void;
  stop: () => void;
  load: (s: Station) => void;
  pause: () => void;
  station?: Station | null;
  error: boolean;
  paused: boolean;
  playing: boolean;
  loading: boolean;
};

export const PlayerContext = createContext<PlayerContext>({
  station: null,
  load: () => {},
  play: () => {},
  stop: () => {},
  pause: () => {},
  error: false,
  paused: false,
  playing: false,
  loading: false,
});

// @TODO: This is very messy
export const PlayerProvider = ({ children }) => {
  const audio = useRef<HTMLAudioElement>(null);

  const [error, setError] = useState(false);
  const [paused, setPaused] = useState(false);
  const [station, setStation] = useState<Station>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  const load = (s: Station) => {
    if (audio.current.src !== s.url) {
      audio.current.src = s.url;
      setStation(s);
    }
  };

  const play = () => audio.current.play();
  const pause = () => audio.current.pause();

  const stop = () => {
    audio.current.src =
      "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAVFYAAFRWAAABAAgAZGF0YQAAAAA=";
    setError(false);
    setPaused(false);
    setStation(null);
    setLoading(false);
    setPlaying(false);
  };

  const onPlaying = () => {
    setError(false);
    setPlaying(true);
    setPaused(false);
    setLoading(false);
  };

  const onCanPlay = () => {
    setLoading(false);
  };

  const onLoad = () => {
    setError(false);
    setPaused(false);
    setLoading(true);
    setPlaying(false);
  };

  const onPause = () => {
    setPaused(true);
    setPlaying(false);
  };

  const onError = (e) => {
    setError(true);
    setPaused(false);
    setPlaying(false);
    setLoading(false);
  };

  const onEnded = () => {
    setStation(null);
    setPaused(false);
  };

  useEffect(() => {
    audio.current.addEventListener("error", onError);
    audio.current.addEventListener("ended", onEnded);
    audio.current.addEventListener("pause", onPause);
    audio.current.addEventListener("loadstart", onLoad);
    audio.current.addEventListener("playing", onPlaying);
    audio.current.addEventListener("canplaythrough", onCanPlay);

    return () => {
      audio.current.removeEventListener("error", onError);
      audio.current.removeEventListener("pause", onPause);
      audio.current.removeEventListener("loadstart", onLoad);
      audio.current.removeEventListener("playing", onPlaying);
      audio.current.removeEventListener("canplaythrough", onCanPlay);
    };
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        load,
        play,
        stop,
        error,
        pause,
        paused,
        loading,
        playing,
        station,
      }}
    >
      {children}
      <Audio ref={audio} autoPlay={true} />
    </PlayerContext.Provider>
  );
};
