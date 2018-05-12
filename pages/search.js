import React, { Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// store
import { load } from "../store/player/actions";
import { search } from "../store/search/actions";
// components
import Content from "../components/Content";
import SearchInput from "../components/Search";
import StationList from "../components/StationList";

let mapProps = ({ search }) => ({ stations: search.results });
let ConnectedList = connect(mapProps, { load })(StationList);

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
