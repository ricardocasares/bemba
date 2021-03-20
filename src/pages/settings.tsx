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
  const { setTheme, theme, resolvedTheme } = useTheme();
  const { t, locale, locales } = useTranslation();

  return (
    <Box>
      <NextSeo description="Customize your experience" />
      <Stack>
        <Heading as="h1" size="1">{t.settings.title}</Heading>

        <Heading as="h2" size="2" muted>
          {t.settings.color}
        </Heading>

        <Stack as="ul" separated css={{ marginBottom: "$4" }}>
          {["dark", "light", "system"].map((mode) => (
            <li key={mode}>
              <GhostButton onClick={() => setTheme(mode)}>
                <ToggleItem>
                  {mode} <RightLeftToggle active={theme === mode || resolvedTheme === mode} />
                </ToggleItem>
              </GhostButton>
            </li>
          ))}
        </Stack>

        <Heading as="h2" size="2" muted>
          {t.settings.language}
        </Heading>

        <Stack as="ul" separated css={{ marginBottom: "$4" }}>
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

        <Box css={{ textAlign: 'center' }}>
          <Text as="small" muted>
            bemba v
          <a href={`https://github.com/ricardocasares/bemba/commit/${SHA}`}>
              {SHA.slice(0, 6)}
            </a>
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default Settings;
