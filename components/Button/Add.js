import React from "react";
import styled, { keyframes } from "styled-components";

import Button from "./";
import Plus from "../Icons/Plus";

let enter = keyframes`
  0% {
    opacity: 0;
    transform: rotate(0deg);
  }

  100% {
    opacity: 1;
    transform: rotate(-90deg);
  }
`;

let AnimatedButton = Button.extend`
  animation: ${enter} 0.3s linear;
`;

export default ({ ...props }) => (
  <AnimatedButton {...props}>
    <Plus />
  </AnimatedButton>
);
