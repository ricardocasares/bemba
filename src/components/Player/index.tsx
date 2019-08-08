import { connect } from "react-redux";
import { State } from "@/store/state";
import { Player as Component } from "./Player";

export const Player = connect(({ audio: { ready } }: State) => ({
  ready
}))(Component);
