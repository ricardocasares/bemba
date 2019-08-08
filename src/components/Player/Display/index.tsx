import { connect } from "react-redux";
import { State } from "@/store/state";
import { Display as Component } from "./Display";

export const Display = connect(
  ({ station: { name = "", state = "", country = "" } }: State) => ({
    name,
    state,
    country
  })
)(Component);
