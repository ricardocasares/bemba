import React, { FC } from "react";
import { connect } from "react-redux";
import { State, Player } from "@/store/state";
import { Wrapper } from "./styles";
import { ConnectedLike } from "./Like";
import { ConnectedPlay } from "./Play";
import { ConnectedPause } from "./Pause";

type Controls = {
  player: Player;
};

export const Controls: FC<Controls> = ({ player }) => (
  <Wrapper>
    <ConnectedLike />
    {player.playing ? <ConnectedPause /> : <ConnectedPlay />}
  </Wrapper>
);

const stateProps = ({ player }: State) => ({ player });
export const ConnectedControls = connect(stateProps)(Controls);
