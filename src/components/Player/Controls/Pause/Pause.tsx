import React, { FC } from "react";
import { pause } from "@/store/player";
import { Button, PauseIcon } from "../styles";

export type Pause = {
  disabled: boolean;
  pause: typeof pause;
};

export const Pause: FC<Pause> = ({ pause, disabled }) => (
  <Button disabled={!disabled} onClick={pause}>
    <PauseIcon height={25} />
  </Button>
);
