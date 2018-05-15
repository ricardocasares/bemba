import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// store
import { load } from "../store/player/actions";
import { add, remove } from "../store/library/actions";
import { search } from "../store/search/actions";
// components
import Content from "../components/Content";
import SearchInput from "../components/Search";
import StationList from "../components/StationList";

export let Search = ({ ...props }) => (
  <Content>
    <SearchInput />
    <StationList {...props} />
  </Content>
);

Search.getInitialProps = async function({ store, query }) {
  await store.dispatch(search(query));

  return { query };
};

let mapProps = ({ search, library }) => ({
  stations: search.results,
  library: library.stations
});
export default connect(mapProps, { load, add, remove })(Search);
