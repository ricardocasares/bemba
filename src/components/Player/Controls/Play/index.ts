import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { State } from "@/store/state";
import { play } from "@/store/player";
import { Play as Component } from "./Play";

export const Play = connect(
  ({ audio: { ready: disabled } }: State) => ({ disabled }),
  dispatch => bindActionCreators({ play }, dispatch)
)(Component);
