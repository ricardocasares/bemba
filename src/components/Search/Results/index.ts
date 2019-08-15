import { connect } from "react-redux";
import { BembaState } from "@/models/state";
import { Results as Component } from "./Results";

export const Results = connect(
  ({ search: { query, dirty, empty, loading, results } }: BembaState) => ({
    query,
    dirty,
    empty,
    loading,
    results
  })
)(Component);
