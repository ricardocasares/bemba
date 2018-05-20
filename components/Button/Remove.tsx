import React, { SFC } from "react";
import styled from "styled-components";

import Button, { ButtonProps } from "./";
import Checkmark from "../Icons/Checkmark";
import { rotateNinetyZero } from "../../lib/animations";

let AnimatedButton = Button.extend`
  will-change: opacity, transform;
  animation: ${rotateNinetyZero} 0.1s linear;
`;

export const Remove: SFC<ButtonProps> = ({ ...props }) => (
  <AnimatedButton {...props}>
    <Checkmark color={"lime"} />
  </AnimatedButton>
);

export default Remove;
