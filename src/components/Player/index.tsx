import React from "react";
import styled from "@emotion/styled";
import { Play, Heart } from "react-bytesize-icons";

const Container = styled.div`
  display: flex;
  background: #222;
`;

const PlayerInfo = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  min-width: 0;

  h4,
  h5 {
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h4 {
    font-weight: 400;
  }

  h5 {
    font-weight: 300;
    color: #999;
  }
`;

const PlayerControls = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;

const PlayButton = styled.button`
  color: white;
  border: none;
  background: transparent;
`;

export function Player() {
  return (
    <Container>
      <PlayerInfo>
        <h4>Radio Bemba FM 103.1 FM Las 40 La Re Concha de Tu Hermana</h4>
        <h5>Buenos Aires, Argentina</h5>
      </PlayerInfo>
      <PlayerControls>
        <PlayButton type="button">
          <Heart color="red" />
        </PlayButton>
        <PlayButton type="button">
          <Play color="#777" />
        </PlayButton>
      </PlayerControls>
    </Container>
  );
}
