import { useState, useContext, useEffect } from "react";
import { AudioElementContext } from "@/lib/context/audio";

export function useFrequency() {
  const audio = useContext(AudioElementContext);
  const [state, setState] = useState(100);

  useEffect(() => {
    // @ts-expect-error
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    const analyser = ctx.createAnalyser();
    const source = ctx.createMediaElementSource(audio.current);
    analyser.fftSize = 64;
    analyser.smoothingTimeConstant = 0.1;

    const frequencyData = new Uint8Array(analyser.frequencyBinCount);

    const update = () => {
      analyser.getByteFrequencyData(frequencyData);
      setState(frequencyData[3]);
      return requestAnimationFrame(update);
    };

    const frame = update();

    const onCanPlay = () => {
      source.connect(ctx.destination);
      source.connect(analyser);
      ctx.resume();
    };

    audio.current.addEventListener("canplay", onCanPlay);

    return () => {
      cancelAnimationFrame(frame);
      audio.current.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  return state;
}
