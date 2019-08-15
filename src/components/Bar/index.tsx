import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Home, Search, Heart } from "react-bytesize-icons";

const Container = styled.nav`
  display: flex;
  padding: 15px;
  background: #2d2d2d;
  justify-content: space-between;
`;

const ICON_SIZE = 25;
const ICON_COLOR = "#9e9e9e";
const ICON_ACTIVE_COLOR = "#bb86fc";

export function Bar() {
  return (
    <Container>
      <Link href="/">
        <a>
          <Home height={ICON_SIZE} color={ICON_ACTIVE_COLOR} />
        </a>
      </Link>
      <Link href="/search">
        <a>
          <Search height={ICON_SIZE} color={ICON_ACTIVE_COLOR} />
        </a>
      </Link>
      <Link href="/likes">
        <a>
          <Heart height={ICON_SIZE} color={ICON_COLOR} />
        </a>
      </Link>
    </Container>
  );
}
