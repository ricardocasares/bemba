import React, { Fragment } from "react";
import { connect } from "react-redux";
// store
import { load } from "../store/player/actions";
import { stations } from "../store/stations/actions";
// components
import Content from "../components/Content";
import Search from "../components/Search";
import Player from "../components/Player";
import Navigation from "../components/Navigation";
import StationList from "../components/StationList";
import Title from "../components/Text/Title";

let mapProps = ({ stations }) => ({ ...stations });
let ConnectedList = connect(mapProps, { load })(StationList);

let Stations = ({ filter, name }) => (
  <Content>
    <Title>{name} stations</Title>
    <ConnectedList />
  </Content>
);

Stations.getInitialProps = async function getInitialProps({ store, query }) {
  await store.dispatch(stations(query));

  return query;
};

export default Stations;
