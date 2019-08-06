import React, { FC } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, PlayIcon } from "./styles";
import { State, Player } from "@/store/state";
import { play } from "@/store/player";

export type Play = {
  player: Player;
  play: typeof play;
};

export const Play: FC<Play> = ({ play, player }) => (
  <Button disabled={!player.ready} onClick={play}>
    <PlayIcon height={25} />
  </Button>
);

export const ConnectedPlay = connect(
  ({ player }: State) => ({ player }),
  dispatch => bindActionCreators({ play }, dispatch)
)(Play);
