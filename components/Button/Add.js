import React from "react";
import styled from "styled-components";

import Button from "./";
import Plus from "../Icons/Plus";
import { rotateZeroNinety } from "../../lib/animations";

let AnimatedButton = Button.extend`
  animation: ${rotateZeroNinety} 0.3s linear;
`;

export default ({ ...props }) => (
  <AnimatedButton {...props}>
    <Plus />
  </AnimatedButton>
);
