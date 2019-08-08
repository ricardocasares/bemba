import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { State } from "@/store/state";
import { pause } from "@/store/player";
import { Pause as Component } from "./Pause";

export const Pause = connect(
  ({ audio: { ready: disabled } }: State) => ({ disabled }),
  dispatch => bindActionCreators({ pause }, dispatch)
)(Component);
