import { Stack } from "@/components/Stack";
import { Heading } from "@/components/Typography";
import { StationCardList } from "@/components/StationCardList";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { localesMap } from "@/lib/utils";

export const Index = () => {
  const { t, locale } = useTranslation();

  return (
    <Stack p={["var(--sz3)"]} stackSpacing={["var(--sz4)"]}>
      <Heading as="h3">{t.index.title}</Heading>
      <StationCardList language={localesMap[locale]} limit={20} />
    </Stack>
  );
};

export default Index;
