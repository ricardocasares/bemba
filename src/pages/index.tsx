import { Stack } from "@/components/Stack";
import { Heading } from "@/components/Typography";
import { StationCardList } from "@/components/StationCardList";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { localesMap } from "@/lib/utils";

export const Index = () => {
  const { t, locale } = useTranslation();
  const language = localesMap[locale];

  return (
    <Stack>
      <Heading as="h1" size="1">{t.index.title}</Heading>
      <StationCardList language={language} limit={20} />
    </Stack>
  );
};

export default Index;
