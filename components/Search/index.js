import React from "react";
import styled from "styled-components";
import { withRouter } from "next/router";
import { connect } from "react-redux";
// store
import { searchDebounced } from "../../store/search/actions";

let Container = styled.div`
  padding: 15px;
  background: transparent;
`;

let Input = styled.input`
  border: none;
  color: #fff;
  padding: 15px;
  background: #333;
  border-radius: 4px;
  font-size: 18px;
  width: 100%;
`;

export let Search = ({ router, dispatch, query, searchDebounced }) => (
  <Container>
    <Input
      placeholder="Start typing..."
      defaultValue={query}
      onChange={e => router.push(`/search?query=${e.target.value}`)}
    />
  </Container>
);

export default connect(({ search }) => ({ ...search }), {
  searchDebounced
})(withRouter(Search));
