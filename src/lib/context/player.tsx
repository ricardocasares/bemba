import { useState, useEffect, createContext, useRef } from "react";
import { Station } from "@/lib/graphql/gqless";

export type PlayerContext = {
  play: (station: Station) => void;
  stop: () => void;
  pause: () => void;
  station?: Station | null;
  paused: boolean;
  playing: boolean;
  stopped: boolean;
};

export const PlayerContext = createContext<PlayerContext>({
  station: null,
  play: () => {},
  pause: () => {},
  stop: () => {},
  paused: false,
  playing: false,
  stopped: false,
});

// @TODO: This is very messy
export const PlayerProvider = ({ children }) => {
  const audio = useRef<HTMLAudioElement>(null);
  const [station, setStation] = useState<Station>(null);
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [stopped, setStopped] = useState(false);

  const play = (s: Station) => {
    if (audio.current.src !== s.url) {
      audio.current.src = s.url;
      audio.current.play().then(() => setStation(s));
    }

    if (paused) {
      audio.current.play().then(() => setPaused(false));
    }
  };

  const pause = () => {
    audio.current.pause();
    setPaused(true);
    setPlaying(false);
    setStopped(false);
  };

  const stop = () => {
    audio.current.src = "";
    setStation(null);
    setPaused(false);
    setStopped(true);
    setPlaying(false);
  };

  useEffect(() => {
    audio.current.addEventListener("playing", () => {
      setPlaying(true);
      setStopped(false);
      setPaused(false);
    });

    return () => {
      audio.current.removeEventListener("playing", () => setPlaying(true));
    };
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        play,
        stop,
        pause,
        paused,
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
