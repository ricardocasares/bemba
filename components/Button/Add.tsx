import React, { SFC } from "react";

import Button, { ButtonProps } from "./";
import Plus from "../Icons/Plus";
import { rotateZeroNinety } from "../../lib/animations";

let AnimatedButton = Button.extend`
  will-change: opacity, transform;
  animation: ${rotateZeroNinety} 0.1s linear;
`;

export const Add: SFC<ButtonProps> = ({ ...props }) => (
  <AnimatedButton {...props}>
    <Plus />
  </AnimatedButton>
);

export default Add;
