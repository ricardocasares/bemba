import React, { Fragment } from "react";
import styled from "styled-components";

import Link from "../Link";
import Add from "../Button/Add";
import Remove from "../Button/Remove";
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
  flex: 1 1 auto;
`;

let Item = styled.div`
  display: flex;
`;

export default ({ stations = [], libraryIds = [], load, add, remove }) => (
  <Fragment>
    {stations.map(station => (
      <Item key={station.id}>
        <StationButton onClick={e => load({ station })}>
          <Station {...station} />
        </StationButton>
        {libraryIds.includes(station.id) ? (
          <Remove onClick={() => remove(station.id)} />
        ) : (
          <Add onClick={() => add(station)} />
        )}
      </Item>
    ))}
  </Fragment>
);
