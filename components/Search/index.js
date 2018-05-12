import React from "react";
import styled from "styled-components";
import debounce from "debounce-fn";
import { withRouter } from "next/router";
import { connect } from "react-redux";

let Input = styled.input`
  border: none;
  color: #fff;
  padding: 15px;
  background: #333;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  margin-bottom: 15px;
`;

export function Search({ router, dispatch, query }) {
  let change = debounce(router.push, { wait: 500 });

  return (
    <Input
      placeholder="Start typing..."
      defaultValue={query}
      onChange={e => change(`/search?query=${e.target.value}`)}
    />
  );
}

let mapProps = ({ search }) => ({ ...search });
export default connect(mapProps)(withRouter(Search));
