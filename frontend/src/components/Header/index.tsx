import Link from "next/link";
import { signIn, signOut, useSession } from 'next-auth/client';
import { Logo } from "@/components/Logo";
import GitHub from "@geist-ui/react-icons/github";
import Twitter from "@geist-ui/react-icons/twitter";
import LinkedIn from "@geist-ui/react-icons/linkedin";
import LogOut from "@geist-ui/react-icons/logOut";
import Search from "@geist-ui/react-icons/search";
import Sliders from "@geist-ui/react-icons/sliders";
import HeartFill from "@geist-ui/react-icons/heartFill";
import { Container, Navigation, Hidden } from "./style";

export const Header = () => {
  const [session] = useSession();

  return (
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
        {session && <Link href="">
          <a>
            <LogOut aria-hidden="true" onClick={() => signOut()} />
            <Hidden>Logout</Hidden>
          </a>
        </Link>}
        {!session && <Link href="">
          <a>
            <LinkedIn aria-hidden="true" onClick={() => signIn('linkedin')} />
            <Hidden>Login with LinkedIn</Hidden>
          </a>
        </Link>}
        {!session && <Link href="">
          <a>
            <Twitter aria-hidden="true" onClick={() => signIn('twitter')} />
            <Hidden>Login with GitHub</Hidden>
          </a>
        </Link>}
        {!session && <Link href="">
          <a>
            <GitHub aria-hidden="true" onClick={() => signIn('github')} />
            <Hidden>Login with GitHub</Hidden>
          </a>
        </Link>}
      </Navigation>
    </Container>
  );
};
