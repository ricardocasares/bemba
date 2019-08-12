import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { load } from "@/store/station";
import { request } from "@/store/stations";
import { Like as Component } from "./Like";

export const Like = connect(
  null,
  dispatch => bindActionCreators({ load, request }, dispatch)
)(Component);
