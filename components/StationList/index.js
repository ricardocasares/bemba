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
  background: transparent;
  border: none;
  padding: 0;
  flex: 1;
  min-width: 0;
`;

let Item = styled.div`
  display: flex;
`;

export default ({ stations = [], library = [], load, add, remove }) => (
  <Fragment>
    {Object.keys(stations).map(id => (
      <Item key={id}>
        <StationButton onClick={e => load(stations[id])}>
          <Station {...stations[id]} />
        </StationButton>
        {library[id] ? (
          <Remove onClick={() => remove(id)} />
        ) : (
          <Add onClick={() => add(stations[id])} />
        )}
      </Item>
    ))}
  </Fragment>
);
