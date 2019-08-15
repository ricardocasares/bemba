import React, { FC } from "react";
import { Wrapper } from "./styles";
import { Box } from "@/components/Box";
import { Display } from "./Display";
import { Controls } from "./Controls";

export type Player = {
  ready: boolean;
};

export const Player: FC<Player> = ({ ready }) => (
  <Wrapper visible={!ready}>
    <Box flex="1" column zeromin padding="15px">
      <Display />
    </Box>
    <Controls />
  </Wrapper>
);
