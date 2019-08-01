import React, { FC } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Controls, LikeIcon, PlayIcon, Button } from "./styles";
import { State, Player } from "@/store/state";
import { play } from "@/store/player";

export function LikeButton() {
  return (
    <Button>
      <LikeIcon height={25} />
    </Button>
  );
}

export type PlayButton = {
  player?: Player;
  play?: typeof play;
};

export const PlayButton: FC<PlayButton> = ({ play, player }) => (
  <Button disabled={player && player.loading} onClick={play}>
    <PlayIcon height={25} />
  </Button>
);

const Play = connect(
  ({ player }: State) => player,
  dispatch => bindActionCreators({ play }, dispatch)
)(PlayButton);

export const Controller = () => (
  <Controls>
    <LikeButton />
    <Play />
  </Controls>
);
