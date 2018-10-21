import React from "react";
import styled from "styled-components";

import Player from "../Player";
import Navigation from "../Navigation";
import Notification from "../Notification";

export let Layout = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
`;

export default ({ children }) => (
  <Layout>
    {children}
    <Notification />
    <Player />
    <Navigation />
  </Layout>
);
