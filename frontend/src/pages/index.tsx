import { Stack } from "@/components/Stack";
import { Heading } from "@/components/Typography";
import { StationCardList } from "@/components/StationCardList";
import { useTranslation } from "@/lib/hooks/useTranslation";

export const Index = () => {
  const { t, locale } = useTranslation();

  return (
    <Stack>
      <Heading as="h1" size="1">{t.index.title}</Heading>
      <StationCardList where={{ locales: { locale: { _eq: locale } } }} />
    </Stack>
  );
};

export default Index;
