import { Stack } from "@/components/Stack";
import { Heading } from "@/components/Typography";
import { StationCardList } from "@/components/StationCardList";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { localesMap } from "@/lib/utils";
import { useStations } from "@/graphql/hooks";

export const Index = () => {
  const { t, locale } = useTranslation();
  const language = localesMap[locale];
  const { data, error } = useStations({ station: { name: true } });

  return (
    <Stack>
      <Heading as="h1" size="1">{t.index.title}</Heading>
      <pre>{JSON.stringify(data)}</pre>
      {/* <StationCardList where={{ country: { id: { _eq: "NL" } } }} /> */}
    </Stack>
  );
};

export default Index;
