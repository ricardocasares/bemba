import React, { FC, Fragment } from "react";
import { Like } from "./Like";
import { Play } from "./Play";
import { Pause } from "./Pause";

export type Controls = {
  playing: boolean;
};

export const Controls: FC<Controls> = ({ playing }) => (
  <Fragment>
    <Like />
    {playing ? <Pause /> : <Play />}
  </Fragment>
);
