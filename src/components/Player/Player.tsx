import React, { FC } from "react";
import { Box } from "@/components/Box";
import { Display } from "./Display";
import { Controls } from "./Controls";

export type Player = {
  ready: boolean;
};

export const Player: FC<Player> = () => (
  <Box flex="auto" bg="#000">
    <Box flex="1" column zminw padding="15px">
      <Display />
    </Box>
    <Box flex="0" align="center">
      <Controls />
    </Box>
  </Box>
);
