import Link from "next/link";
import { Box } from "@/components/Box";
import { Heading } from "@/components/Typography";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { Stack } from "@/components/Stack";

export const Index = () => {
  const { t } = useTranslation();

  return (
    <Box p={["var(--sz4)"]}>
      <Heading as="h3">{t.settings.title}</Heading>

      <Heading as="h4">{t.settings.language}</Heading>

      <Stack as="ul" stackSpacing={["var(--sz3)"]}>
        <li>
          <Link href="/settings" locale="en">
            <a>English</a>
          </Link>
        </li>
        <li>
          <Link href="/settings" locale="es">
            <a>Español</a>
          </Link>
        </li>
        <li>
          <Link href="/settings" locale="fr">
            <a>Française</a>
          </Link>
        </li>
        <li>
          <Link href="/settings" locale="pl">
            <a>Polski</a>
          </Link>
        </li>
      </Stack>
    </Box>
  );
};

export default Index;
