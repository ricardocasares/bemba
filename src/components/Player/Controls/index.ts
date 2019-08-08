import { connect } from "react-redux";
import { State } from "@/store/state";
import { Controls as Component } from "./Controls";

export const Controls = connect(({ audio: { playing } }: State) => ({
  playing
}))(Component);
