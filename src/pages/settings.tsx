import Link from "next/link";
import { NextSeo } from "next-seo";
import { useTheme } from "next-themes";
import { Box } from "@/components/Box";
import { Stack } from "@/components/Stack";
import { GhostButton } from "@/components/Button";
import { RightLeftToggle, ToggleItem } from "@/components/Toggles";
import { Heading, Text } from "@/components/Typography";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { localesMap } from "@/lib/utils";

const SHA = process.env.NEXT_PUBLIC_SHA || "dev";

export const Settings = () => {
  const { theme, setTheme } = useTheme();
  const { t, locale, locales } = useTranslation();

  return (
    <Box p={["var(--sz3)"]}>
      <NextSeo description="Customize your experience" />

      <Heading as="h3">{t.settings.title}</Heading>
      <Heading as="h4" muted>
        {t.settings.color}
      </Heading>
      <Stack
        as="ul"
        mb="var(--sz5)"
        itemPadding={"var(--sz3) 0"}
        stackBorder="1px solid var(--accents-2)"
      >
        {["dark", "light", "system"].map((mode) => (
          <li key={mode}>
            <GhostButton onClick={() => setTheme(mode)}>
              <ToggleItem>
                {mode} <RightLeftToggle active={theme === mode} />
              </ToggleItem>
            </GhostButton>
          </li>
        ))}
      </Stack>

      <Heading as="h4" muted>
        {t.settings.language}
      </Heading>
      <Stack
        as="ul"
        mb="var(--sz5)"
        itemPadding={"var(--sz3) 0"}
        stackBorder="1px solid var(--accents-2)"
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
          bemba v
          <a href={`https://github.com/ricardocasares/bemba/commit/${SHA}`}>
            {SHA.slice(0, 6)}
          </a>
        </Text>
      </Box>
    </Box>
  );
};

export default Settings;
