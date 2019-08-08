import React, { FC } from "react";
import { Button, PauseIcon } from "../styles";

export type Pause = {
  disabled: boolean;
  pause: () => void;
};

export const Pause: FC<Pause> = ({ pause, disabled }) => (
  <Button disabled={!disabled} onClick={pause}>
    <PauseIcon height={25} />
  </Button>
);
