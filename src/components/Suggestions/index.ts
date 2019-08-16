import { connect } from "react-redux";
import { BembaState } from "@/models/state";
import { load } from "@/store/station";
import { SuggestionsBox as Component } from "./Suggestions";
import { bindActionCreators } from "redux";

export const Suggestions = connect(
  ({ suggestions }: BembaState) => ({
    suggestions
  }),
  dispatch => bindActionCreators({ load }, dispatch)
)(Component);
