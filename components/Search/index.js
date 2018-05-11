import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { search } from "../../store/search/actions";

import Pad from "../Pad";

export const Search = ({ dispatch, query, search }) => (
  <Pad bg={"transparent"}>
    <Input
      placeholder="Start typing..."
      defaultValue={query}
      onChange={e => search({ query: e.target.value })}
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
  search
})(Search);
