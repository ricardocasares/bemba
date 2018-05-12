import React from "react";
import { pure } from "recompose";
import styled from "styled-components";

import Link from "../Link";
import Home from "../Icons/Home";
import Clock from "../Icons/Clock";
import Search from "../Icons/Search";
import Options from "../Icons/Options";
import FolderOpen from "../Icons/FolderOpen";

let Nav = styled.nav`
  display: flex;
  background: #000;
  padding: 10px 15px;
  flex: 1 0 auto;
  justify-content: space-around;
`;

export default () => (
  <Nav>
    <Link href="/">
      <Home width={24} />
    </Link>
    <Link href="/recent">
      <Clock width={24} />
    </Link>
    <Link href="/search">
      <Search width={24} />
    </Link>
    <Link href="/settings">
      <Options width={24} />
    </Link>
    <Link href="/library">
      <FolderOpen width={24} />
    </Link>
  </Nav>
);
