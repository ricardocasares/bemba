import React from "react";
import styled from "styled-components";
import Play from "../Button/Play";
import Pause from "../Button/Pause";
import Favorite from "../Button/Favorite";

import Station from "./Station";

const StationItem = styled.div`
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default () => (
  <StationItem>
    <Station />
  </StationItem>
);
