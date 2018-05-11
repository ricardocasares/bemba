import React from "react";
import styled from "styled-components";
import Pad from "../Pad";
import Play from "../Button/Play";
import Favorite from "../Button/Favorite";
import Station from "../StationList/Station";

const Player = styled.div`
  display: flex;
  justify-items: left;
  align-items: center;
  padding: 15px;
  background: #333;
`;

const FlexStation = styled(Station)`
  flex: 1 1 auto;
`;

export default ({ ...props }) => (
  <Player>
    <FlexStation />
    <Favorite />
    <Play filled />
  </Player>
);
