import { createContext, Dispatch, SetStateAction } from "react";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";

export type FavoritesContext = [string[], Dispatch<SetStateAction<string[]>>];
export const FavoritesContext = createContext<FavoritesContext>(null);

export const FavoritesProvider = ({ children }) => {
  const [favs, setFavs] = useLocalStorage<string[]>("favorites", []);

  return (
    <FavoritesContext.Provider value={[favs, setFavs]}>
      {children}
    </FavoritesContext.Provider>
  );
};
