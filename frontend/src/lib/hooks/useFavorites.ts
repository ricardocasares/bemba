import { useContext } from "react";
import { event } from "@/lib/utils";
import { FavoritesContext } from "@/lib/context/favorites";

export function useFavorites() {
  const { favs, setFavs } = useContext(FavoritesContext);

  const add = (id: string) => {
    setFavs([...favs, id]);
    event({
      action: "fav",
      label: "Radio faved",
      category: "favorites",
      value: id,
    });
  };

  const remove = (id: string) => {
    setFavs(favs.filter((f) => id !== f));
    event({
      action: "unfav",
      label: "Radio unfaved",
      category: "favorites",
      value: id,
    });
  };

  const isFaved = (id: string) => favs.includes(id);

  return { favs, add, remove, isFaved };
}
