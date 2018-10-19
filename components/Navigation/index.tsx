import React from "react";
import styled from "styled-components";

import Link from "../Link";
import Home from "../Icons/Home";
import Search from "../Icons/Search";
import FolderOpen from "../Icons/FolderOpen";

let Nav = styled.nav`
  display: flex;
  background: #000;
  padding: 10px 15px;
  flex: 0 1 1;
  justify-content: space-around;
`;

export default () => (
  <Nav>
    <Link prefetch href="/">
      <Home width={24} />
    </Link>
    {/* <Link href="/recent">
      <Clock width={24} />
    </Link> */}
    <Link prefetch href="/search">
      <Search width={24} />
    </Link>
    {/* <Link href="/settings">
      <Options width={24} />
    </Link> */}
    <Link prefetch href="/library">
      <FolderOpen width={24} />
    </Link>
  </Nav>
);
