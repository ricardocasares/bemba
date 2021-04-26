import { useMemo, createContext, Dispatch, SetStateAction } from "react";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";

export interface FavoritesContext {
  favs: string[];
  setFavs: Dispatch<SetStateAction<string[]>>;
}

export const FavoritesContext = createContext<FavoritesContext>(null);

export const FavoritesProvider = ({ children }) => {
  const [favs, setFavs] = useLocalStorage<string[]>("favorites", []);

  const value = useMemo(() => ({ favs, setFavs }), [favs, setFavs]);

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
