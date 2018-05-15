import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// store
import { load } from "../store/player/actions";
import { search } from "../store/search/actions";
// components
import Content from "../components/Content";
import SearchInput from "../components/Search";
import StationList from "../components/StationList";

export let Search = ({ load, stations }) => (
  <Content>
    <SearchInput />
    <StationList stations={stations} load={load} />
  </Content>
);

Search.getInitialProps = async function({ store, query }) {
  await store.dispatch(search(query));

  return { query };
};

let mapProps = ({ search }) => ({ stations: search.results });
export default connect(mapProps, { load })(Search);
