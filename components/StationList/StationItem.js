import React from "react";
import styled from "styled-components";
import Play from "../Button/Play";
import Pause from "../Button/Pause";
import Favorite from "../Button/Favorite";

import Station from "./Station";

let StationItem = styled.div`
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default ({ station }) => (
  <StationItem>
    <Station {...station} />
  </StationItem>
);
