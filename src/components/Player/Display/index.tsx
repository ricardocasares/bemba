import { connect } from "react-redux";
import { BembaState } from "@/models/state";
import { Display as Component } from "./Display";

export const Display = connect(
  ({ station: { name = "", state = "", country = "" } }: BembaState) => ({
    name,
    state,
    country
  })
)(Component);
