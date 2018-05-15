import React from "react";
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

let Stations = ({ filter, name, stations, load }) => (
  <Content>
    <Title>{decodeURIComponent(name)} stations</Title>
    <StationList stations={stations} load={load} />
  </Content>
);

Stations.getInitialProps = async function getInitialProps({ store, query }) {
  await store.dispatch(stations(query));

  return query;
};

let mapProps = ({ stations }) => ({ stations: stations.stations });
export default connect(mapProps, { load })(Stations);
