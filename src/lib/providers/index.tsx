import React, { FC } from "react";
import { ThemeProvider } from "next-themes";
import { PlayerProvider } from "@/lib/context/player";
import { TranslateProvider } from "@/lib/context/translate";
import { FavoritesProvider } from "@/lib/context/favorites";
import { AudioElementProvider } from "@/lib/context/audio";

export const Providers: FC = ({ children }) => (
  <ThemeProvider defaultTheme="system">
    <TranslateProvider>
      <FavoritesProvider>
        <AudioElementProvider>
          <PlayerProvider>{children}</PlayerProvider>
        </AudioElementProvider>
      </FavoritesProvider>
    </TranslateProvider>
  </ThemeProvider>
);
