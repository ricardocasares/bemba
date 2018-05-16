import React from "react";
import { connect } from "react-redux";
// store
import { load } from "../store/player/actions";
import { stations } from "../store/stations/actions";
import { add, remove } from "../store/library/actions";
// components
import Seo from "../components/Seo";
import Content from "../components/Content";
import Search from "../components/Search";
import Player from "../components/Player";
import Navigation from "../components/Navigation";
import StationList from "../components/StationList";
import Title from "../components/Text/Title";

let Stations = ({ filter, name, ...props }) => (
  <Content>
    <Seo criteria={{ name: filter, value: name }} />
    <Title>{decodeURIComponent(name)} stations</Title>
    <StationList {...props} />
  </Content>
);

Stations.getInitialProps = async function getInitialProps({ store, query }) {
  await store.dispatch(stations(query));

  return query;
};

let mapProps = ({ stations, library }) => ({
  stations: stations.stations,
  library: library.stations
});
export default connect(mapProps, { load, add, remove })(Stations);
