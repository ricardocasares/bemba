import { useContext } from "react";
import { PlayerContext } from "@/lib/context/player";

export function usePlayer() {
  return useContext(PlayerContext);
}
