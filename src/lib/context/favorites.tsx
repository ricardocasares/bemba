import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type FavoritesContext = [string[], (favs: string[]) => void];

export const FavoritesContext = createContext<FavoritesContext>(null);

export const FavoritesProvider = ({ children }) => {
  const [favs, setFavs] = useLocalStorage<string[]>("favorites", []);

  return (
    <FavoritesContext.Provider value={[favs, setFavs]}>
      {children}
    </FavoritesContext.Provider>
  );
};
