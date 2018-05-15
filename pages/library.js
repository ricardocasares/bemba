import React from "react";
import { connect } from "react-redux";
// store
import * as actions from "../store/library/actions";
import { load } from "../store/player/actions";
// components
import Title from "../components/Text/Title";
import Content from "../components/Content";
import StationList from "../components/StationList";

export let Library = ({ add, ...props }) => (
  <Content>
    <Title>My Library</Title>
    <StationList add={e => e} {...props} />
  </Content>
);

let mapProps = ({ library }) => ({
  stations: library.stations,
  libraryIds: library.stations.map(({ id }) => id)
});
export default connect(mapProps, { ...actions, load })(Library);
