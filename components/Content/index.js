import React from "react";
import styled from "styled-components";
import { slideIn } from "../../lib/animations";

export default styled.section`
  padding: 15px;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  animation: ${slideIn} 0.2s linear;

  ::-webkit-scrollbar {
    display: none;
  }
`;
