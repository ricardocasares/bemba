import React from "react";
import styled from "styled-components";

import Button from "./";
import Checkmark from "../Icons/Checkmark";
import { rotateNinetyZero } from "../../lib/animations";

let AnimatedButton = Button.extend`
  will-change: opacity, transform;
  animation: ${rotateNinetyZero} 0.1s linear;
`;

export default ({ ...props }) => (
  <AnimatedButton {...props}>
    <Checkmark color={"lime"} />
  </AnimatedButton>
);
