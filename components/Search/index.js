import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../store/search";
import styled from "styled-components";
import Pad from "../Pad";

const Input = styled.input`
  border: none;
  color: #fff;
  padding: 15px;
  background: #333;
  border-radius: 4px;
  font-size: 18px;

  width: 100%;
  height: 100%;
`;

const mapStateToProps = ({ search }) => ({ search });
const mapDispatchToProps = dispatch => ({
  doSearch: bindActionCreators(actions.search, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ({ dispatch, search, doSearch }) => (
    <Pad bg={"transparent"}>
      <Input
        placeholder="Start typing..."
        defaultValue={search.query}
        onChange={e => doSearch({ query: e.target.value })}
      />
    </Pad>
  )
);
