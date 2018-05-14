import React from "react";
import styled from "styled-components";

export default styled.div`
  margin: 10px -15px;
  margin-bottom: 40px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    display: none;
  }
`;
