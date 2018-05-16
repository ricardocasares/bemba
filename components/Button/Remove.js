import React from "react";
import styled from "styled-components";

import Button from "./";
import Checkmark from "../Icons/Checkmark";
import { rotateNinetyZero } from "../../lib/animations";

let AnimatedButton = Button.extend`
  animation: ${rotateNinetyZero} 0.3s linear;
`;

export default ({ ...props }) => (
  <AnimatedButton {...props}>
    <Checkmark color={"lime"} />
  </AnimatedButton>
);
