import React from "react";
import styled from "styled-components";
import debounce from "debounce-fn";
import { withRouter } from "next/router";
import { connect } from "react-redux";
// store
import { hide, show } from "../../store/player/actions";

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

export function Search({ router, dispatch, query, show, hide }) {
  let change = debounce(router.push, { wait: 500 });

  return (
    <Input
      placeholder="Start typing..."
      defaultValue={query}
      onFocus={hide}
      onBlur={show}
      onChange={e => change(`/search?query=${e.target.value}`)}
    />
  );
}

let mapProps = ({ search }) => ({ ...search });
export default connect(mapProps, { hide, show })(withRouter(Search));
