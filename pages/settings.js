import React, { Fragment } from "react";

import Title from "../components/Text/Title";
import Content from "../components/Content";
import Player from "../components/Player";
import Navigation from "../components/Navigation";
import StationList from "../components/StationList";

export default () => (
  <Fragment>
    <Content>
      <Title>Settings</Title>
      <h4>Upgrade my account</h4>
      <h4>Clear my search history</h4>
    </Content>
    <Player />
    <Navigation />
  </Fragment>
);
