import React, { Fragment } from "react";
import styled from "styled-components";

import StationItem from "./StationItem";

export default ({ stations = [] }) => (
  <Fragment>
    {stations.map(station => (
      <StationItem station={station} key={station.id} />
    ))}
  </Fragment>
);
