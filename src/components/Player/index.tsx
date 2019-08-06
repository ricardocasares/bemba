import React, { FC } from "react";
import { connect } from "react-redux";
import { Player as PlayerState, State } from "@/store/state";
import { Wrapper } from "./styles";
import { ConnectedDisplay } from "./Display";
import { ConnectedControls } from "./Controls";

export type Player = {
  player: PlayerState;
};

export const Player: FC<Player> = ({ player }) => (
  <Wrapper visible={player.ready}>
    <ConnectedDisplay />
    <ConnectedControls />
  </Wrapper>
);

const map = ({ player }: State) => ({ player });
export const ConnectedPlayer = connect(map)(Player);
