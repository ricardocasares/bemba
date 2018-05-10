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
`;

export default ({ ...props }) => (
  <Pad bg={"#333"} {...props}>
    <Player>
      <Station />
      <Favorite />
      <Play filled />
    </Player>
  </Pad>
);
