import React, { FC } from "react";
import { Wrapper } from "./styles";
import { Display } from "./Display";
import { Controls } from "./Controls";

export type Player = {
  ready: boolean;
};

export const Player: FC<Player> = ({ ready }) => (
  <Wrapper visible={ready}>
    <Display />
    <Controls />
  </Wrapper>
);
