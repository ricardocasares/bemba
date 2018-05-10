import React, { Fragment } from "react";
import styled from "styled-components";
import Pad from "../components/Pad";
import Content from "../components/Content";
import Search from "../components/Search";
import Player from "../components/Player";
import Navigation from "../components/Navigation";
import StationList from "../components/StationList";
import Zoom from "../components/Icons/Search";

const Placeholder = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-flow: column;
  height: 100%;

  svg {
    flex: 1 1 auto;
    color: #333;
    stroke-width: 2px;
    width: 128px;
    height: 128px;
  }
`;

export default () => (
  <Fragment>
    <Search />
    <Content>
      <Placeholder>
        <Zoom />
      </Placeholder>
    </Content>
    <Player hidden={true} />
    <Navigation hidden={false} />
  </Fragment>
);
