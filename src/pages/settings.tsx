import Link from "next/link";
import { Box } from "@/components/Box";
import { Stack } from "@/components/Stack";
import { RightLeftToggle, ToggleItem } from "@/components/Toggles";
import { Heading, Text } from "@/components/Typography";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { localesMap } from "@/lib/utils";

const SHA = process.env.NEXT_PUBLIC_SHA || "dev";

export const Settings = () => {
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
                  {localesMap[lang]} <RightLeftToggle active={locale == lang} />
                </ToggleItem>
              </a>
            </Link>
          </li>
        ))}
      </Stack>
      <Box style={{ textAlign: "center" }} mt="var(--sz7)">
        <Text as="small" muted>
          <a href={`https://github.com/ricardocasares/bemba/commit/${SHA}`}>
            bemba@{SHA.slice(0, 6)}
          </a>
        </Text>
      </Box>
    </Box>
  );
};

export default Settings;
