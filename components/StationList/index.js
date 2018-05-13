import React, { Fragment } from "react";
import styled from "styled-components";

import Link from "../Link";
import Station from "../Station";

let StationButton = styled.button`
  text-decoration: none;
  margin: 10px 0;
  color: currentColor;
  text-align: left;
  display: block;
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
`;

export default ({ stations, load }) => (
  <Fragment>
    {stations.map(station => (
      <StationButton href="" key={station.id} onClick={e => load({ station })}>
        <Station {...station} />
      </StationButton>
    ))}
  </Fragment>
);
