import { connect } from "react-redux";
import { BembaState } from "@/models/state";
import { History as Component } from "./History";

export const History = connect(({ search: { history } }: BembaState) => ({
  history
}))(Component);
