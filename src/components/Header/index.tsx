import Link from "next/link";
import { Logo } from "@/components/Logo";
import Search from "@geist-ui/react-icons/search";
import Sliders from "@geist-ui/react-icons/sliders";
import HeartFill from "@geist-ui/react-icons/heartFill";
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
          <HeartFill color="var(--colors-highlight-magenta)" aria-hidden="true" />
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
