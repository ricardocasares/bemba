import React from "react";
import styled from "styled-components";
import { slideIn } from "../../lib/animations";

export default styled.section`
  padding: 15px;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  will-change: opacity, transform;
  animation: ${slideIn} 0.1s ease-in;

  ::-webkit-scrollbar {
    display: none;
  }
`;
