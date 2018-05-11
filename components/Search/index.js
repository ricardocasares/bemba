import React from "react";
import styled from "styled-components";
import debounce from "debounce-fn";
import { withRouter } from "next/router";
import { connect } from "react-redux";

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
  font-weight: 500;
  width: 100%;
`;

export function Search({ router, dispatch, query }) {
  let change = debounce(router.push, { wait: 500 });

  return (
    <Container>
      <Input
        placeholder="Start typing..."
        defaultValue={query}
        onChange={e => change(`/search?query=${e.target.value}`)}
      />
    </Container>
  );
}

let mapProps = ({ search }) => ({ ...search });
export default connect(mapProps)(withRouter(Search));
