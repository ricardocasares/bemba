import React from "react";
import styled from "styled-components";

import Player from "../Player";
import Navigation from "../Navigation";

export let Layout = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
`;

export default ({ children }) => (
  <Layout>
    {children}
    <Player />
    <Navigation />
  </Layout>
);
