import { useContext } from "react";
import { FavoritesContext } from "@/lib/context/favorites";

export function useFavorites() {
  const { favs, setFavs } = useContext(FavoritesContext);

  const add = (id: string) => setFavs([...favs, id]);
  const remove = (id: string) => setFavs(favs.filter((f) => id !== f));
  const isFaved = (id: string) => favs.includes(id);

  return { favs, add, remove, isFaved };
}
