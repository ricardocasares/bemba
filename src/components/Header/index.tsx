import Link from "next/link";
import { Radio, Search } from "@geist-ui/react-icons";
import { Container, Navigation } from "./style";

export const Header = () => (
  <Container>
    <Link href="/">
      <a>
        <Radio />
      </a>
    </Link>

    <Navigation>
      <Link href="/">
        <a>
          <Search />
        </a>
      </Link>
    </Navigation>
  </Container>
);
