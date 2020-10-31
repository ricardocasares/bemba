import { useRef, createContext, MutableRefObject } from "react";

export type AudioElementContext = MutableRefObject<HTMLAudioElement>;
export const AudioElementContext = createContext<AudioElementContext>(null);

export const AudioElementProvider = ({ children }) => {
  const audio = useRef<HTMLAudioElement>(null);

  return (
    <AudioElementContext.Provider value={audio}>
      {children}
      <audio ref={audio} autoPlay={true} style={{ display: "none" }} />
    </AudioElementContext.Provider>
  );
};
