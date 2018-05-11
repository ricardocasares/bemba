import React from "react";
import styled from "styled-components";

import Play from "../Button/Play";
import Favorite from "../Button/Favorite";
import Station from "../StationList/Station";

let Player = styled.div`
  display: flex;
  flex: 1 0 auto;
  justify-items: left;
  align-items: center;
  padding: 15px;
  background: #333;
`;

let FlexStation = styled(Station)`
  flex: 1 1 auto;
`;

export default ({ ...props }) => (
  <Player>
    <FlexStation />
    <Favorite />
    <Play filled />
  </Player>
);
