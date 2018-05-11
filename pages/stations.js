import React, { Fragment } from "react";
import { connect } from "react-redux";
import { stations } from "../store/stations/actions";
import Pad from "../components/Pad";
import Content from "../components/Content";
import Search from "../components/Search";
import Player from "../components/Player";
import Navigation from "../components/Navigation";
import StationList from "../components/StationList";
import Title from "../components/Text/Title";
import { consolidateStreamedStyles } from "styled-components";

const ConnectedList = connect(({ stations }) => ({ ...stations }), {})(
  StationList
);

const Stations = ({ filter, name }) => (
  <Fragment>
    <Content>
      <Title>{name} stations</Title>
      <ConnectedList />
    </Content>
    <Player />
    <Navigation />
  </Fragment>
);

Stations.getInitialProps = async function getInitialProps({ store, query }) {
  await store.dispatch(stations(query));

  return query;
};

export default Stations;
