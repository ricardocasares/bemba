import React, { Fragment } from "react";
import styled from "styled-components";

import Play from "../Button/Play";
import Station from "../Station";

let Item = styled.div`
  display: flex;
  align-items: center;
`;

let FlexStation = styled(Station)`
  flex: 1 1 auto;
`;

export default ({ stations, load }) => (
  <Fragment>
    {stations.map(station => (
      <Item key={station.id}>
        <FlexStation {...station} />
        <Play onClick={e => load({ station })} />
      </Item>
    ))}
  </Fragment>
);
