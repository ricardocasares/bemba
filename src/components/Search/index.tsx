import { connect } from "react-redux";
import { BembaState } from "@/models/state";
import { search } from "@/store/search";
import { Search as Component } from "./Search";
import { bindActionCreators } from "redux";

export const Search = connect(
  ({ search: { query, filter } }: BembaState) => ({
    query,
    filter
  }),
  dispatch => bindActionCreators({ search }, dispatch)
)(Component);
