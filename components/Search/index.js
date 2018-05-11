import React from "react";
import styled from "styled-components";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import { searchDebounced } from "../../store/search/actions";

import Pad from "../Pad";

export const Search = ({ router, dispatch, query, searchDebounced }) => (
  <Pad bg={"transparent"}>
    <Input
      placeholder="Start typing..."
      defaultValue={query}
      onChange={e => router.push(`/search?query=${e.target.value}`)}
    />
  </Pad>
);

const Input = styled.input`
  border: none;
  color: #fff;
  padding: 15px;
  background: #333;
  border-radius: 4px;
  font-size: 18px;
  width: 100%;
`;

export default connect(({ search }) => ({ ...search }), {
  searchDebounced
})(withRouter(Search));
