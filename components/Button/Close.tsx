import React, { SFC } from "react";

import Button, { ButtonProps } from "./";
import CloseIcon from "../Icons/Close";

export const Close: SFC<ButtonProps> = ({ ...props }) => (
  <Button {...props}>
    <CloseIcon />
  </Button>
);

export default Close;
