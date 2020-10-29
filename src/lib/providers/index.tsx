import { FC } from "react";
import { PlayerProvider } from "@/lib/context/player";
import { TranslateProvider } from "@/lib/context/translate";

export const Providers: FC = ({ children }) => (
  <TranslateProvider>
    <PlayerProvider>{children}</PlayerProvider>
  </TranslateProvider>
);
