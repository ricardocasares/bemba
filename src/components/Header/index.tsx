import Link from "next/link";
import { Logo } from "@/components/Logo";
import { HeartFill, Search, Sliders } from "@geist-ui/react-icons";
import { Container, Navigation } from "./style";

export const Header = () => (
  <Container>
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>

    <Navigation>
      <Link href="/search">
        <a>
          <Search />
        </a>
      </Link>
      <Link href="/favorites">
        <a>
          <HeartFill color="var(--highlight-magenta)" />
        </a>
      </Link>
      <Link href="/settings">
        <a>
          <Sliders />
        </a>
      </Link>
    </Navigation>
  </Container>
);
