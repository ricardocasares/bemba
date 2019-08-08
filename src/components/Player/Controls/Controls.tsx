import React, { FC } from "react";
import { Wrapper } from "./styles";
import { Like } from "./Like";
import { Play } from "./Play";
import { Pause } from "./Pause";

export type Controls = {
  playing: boolean;
};

export const Controls: FC<Controls> = ({ playing }) => (
  <Wrapper>
    <Like />
    {playing ? <Pause /> : <Play />}
  </Wrapper>
);
