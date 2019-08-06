import React, { FC } from "react";
import { connect } from "react-redux";
import { State, Station } from "@/store/state";
import { Wrapper, Title, Subtitle } from "./styles";

export type Display = {
  station?: Station;
};

export const Display: FC<Display> = ({
  station = { name: "", state: "", country: "" }
}) => (
  <Wrapper>
    <Title>{station.name}</Title>
    <Subtitle>
      {station.state}, {station.country}
    </Subtitle>
  </Wrapper>
);

const map = ({ player: { station } }: State) => ({ station });
export const ConnectedDisplay = connect(map)(Display);
