import React, { Fragment } from "react";
import Pad from "../components/Pad";
import Content from "../components/Content";
import Search from "../components/Search";
import Player from "../components/Player";
import Navigation from "../components/Navigation";
import StationList from "../components/StationList";
import Title from "../components/Text/Title";

const Results = ({ filter, name }) => (
  <Fragment>
    <Content>
      <Pad>
        <Title>{name} stations</Title>
        <StationList />
      </Pad>
    </Content>
    <Player />
    <Navigation />
  </Fragment>
);

Results.getInitialProps = function getInitialProps({ query }) {
  const { filter, name } = query;
  return { filter, name };
};

export default Results;
