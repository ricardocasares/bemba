import Link from "next/link";
import { Box } from "@/components/Box";
import { Stack } from "@/components/Stack";
import { Toggle, ToggleItem } from "@/components/Toggle";
import { Heading } from "@/components/Typography";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { localesMap } from "@/lib/utils";

export const Index = () => {
  const { t, locale, locales } = useTranslation();

  return (
    <Box p={["var(--sz3)"]}>
      <Heading as="h3">{t.settings.title}</Heading>
      <Heading as="h4" muted>
        {t.settings.language}
      </Heading>
      <Stack
        as="ul"
        stackBorder="1px solid var(--accents-2)"
        itemPadding={"var(--sz3) 0"}
      >
        {locales.map((lang) => (
          <li key={lang}>
            <Link href="/settings" locale={lang}>
              <a>
                <ToggleItem>
                  {localesMap[lang]} <Toggle active={locale == lang} />
                </ToggleItem>
              </a>
            </Link>
          </li>
        ))}
      </Stack>
    </Box>
  );
};

export default Index;
