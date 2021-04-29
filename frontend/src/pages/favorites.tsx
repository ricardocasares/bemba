import { NextSeo } from "next-seo";
import { Heading } from "@/components/Typography";
import { StationCardFavs } from "@/components/StationCardList";
import { useFavorites } from "@/lib/hooks/useFavorites";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { Stack } from "@/components/Stack";

export const Search = () => {
  const { t } = useTranslation();
  const { favs } = useFavorites();

  return (
    <Stack>
      <NextSeo description="Your favorite radios around the world" />
      <Heading as="h1" size="1">{t.favorites.title}</Heading>
      <StationCardFavs uuids={favs} />
    </Stack>
  );
};

export default Search;
