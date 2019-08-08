import React, { FC } from "react";
import { play } from "@/store/player";
import { Button, PlayIcon } from "../styles";

export type Play = {
  disabled: boolean;
  play: typeof play;
};

export const Play: FC<Play> = ({ play, disabled }) => (
  <Button disabled={!disabled} onClick={play}>
    <PlayIcon height={25} />
  </Button>
);
