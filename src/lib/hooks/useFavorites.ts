import { useLocalStorage } from "@/lib/hooks/useLocalStorage";

export function useFavorites() {
  const [favs, setFavs] = useLocalStorage<string[]>("favorites", []);

  const add = (id: string) => setFavs([...favs, id]);
  const remove = (id: string) => setFavs(favs.filter((f) => id !== f));
  const isFaved = (id: string) => favs.includes(id);

  return { favs, add, remove, isFaved };
}
