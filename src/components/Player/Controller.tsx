import React from "react";
import { Controls, LikeIcon, PlayIcon, Button } from "./styles";

export function LikeButton() {
  return (
    <Button>
      <LikeIcon height={25} />
    </Button>
  );
}

export function PlayButton() {
  return (
    <Button>
      <PlayIcon height={25} />
    </Button>
  );
}

export const Controller = () => (
  <Controls>
    <LikeButton />
    <PlayButton />
  </Controls>
);
