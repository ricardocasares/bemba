import React, { SFC } from "react";
import styled from "styled-components";

import Player from "../Player";
import Navigation from "../Navigation";
import Notification from "../Notification";

export const StyleLayout = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
`;
export const Layout: SFC<{}> = ({ children }) => (
<StyleLayout>
    {children}
    <Notification />
    <Player />
    <Navigation />
  </StyleLayout>
);
export default Layout;