import Link from "next/link";
import { Logo } from "@/components/Logo";
import { HeartFill, Search, Sliders } from "@geist-ui/react-icons";
import { Container, Navigation, Hidden } from "./style";

export const Header = () => (
  <Container>
    <Link href="/">
      <a>
        <Logo />
        <Hidden>Home</Hidden>
      </a>
    </Link>

    <Navigation>
      <Link href="/search">
        <a>
          <Search aria-hidden="true" />
          <Hidden>Search</Hidden>
        </a>
      </Link>
      <Link href="/favorites">
        <a>
          <HeartFill color="var(--highlight-magenta)" aria-hidden="true" />
          <Hidden>Favorites</Hidden>
        </a>
      </Link>
      <Link href="/settings">
        <a>
          <Sliders aria-hidden="true" />
          <Hidden>Settings</Hidden>
        </a>
      </Link>
    </Navigation>
  </Container>
);
