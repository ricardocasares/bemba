import React from "react";
import styled, { keyframes } from "styled-components";

import Button from "./";
import Checkmark from "../Icons/Checkmark";

let enter = keyframes`
  0% {
    transform: rotate(90deg);
  }

  100% {
    transform: rotate(0);
  }
`;

let AnimatedButton = Button.extend`
  animation: ${enter} 0.1s linear;
`;

export default ({ ...props }) => (
  <AnimatedButton {...props}>
    <Checkmark color={"lime"} />
  </AnimatedButton>
);
