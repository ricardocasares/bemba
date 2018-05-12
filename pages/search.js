import React, { Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// store
import { search, searchDebounced } from "../store/search/actions";
// components
import Content from "../components/Content";
import SearchInput from "../components/Search";
import Player from "../components/Player";
import Navigation from "../components/Navigation";
import StationList from "../components/StationList";
import Zoom from "../components/Icons/Search";

let mapProps = ({ search }) => ({ stations: search.results });
let ConnectedList = connect(mapProps)(StationList);

export let Search = () => (
  <Content>
    <SearchInput />
    <ConnectedList />
  </Content>
);

Search.getInitialProps = async function({ store, query }) {
  await store.dispatch(search(query));

  return { query };
};

export default Search;
