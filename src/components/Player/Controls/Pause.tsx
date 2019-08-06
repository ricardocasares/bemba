import React, { FC } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, PauseIcon } from "./styles";
import { State, Player } from "@/store/state";
import { pause } from "@/store/player";

export type Pause = {
  player: Player;
  pause: typeof pause;
};

export const Pause: FC<Pause> = ({ pause, player }) => (
  <Button disabled={!player.ready} onClick={pause}>
    <PauseIcon height={25} />
  </Button>
);

export const ConnectedPause = connect(
  ({ player }: State) => ({ player }),
  dispatch => bindActionCreators({ pause }, dispatch)
)(Pause);
