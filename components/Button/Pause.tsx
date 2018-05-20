import React, { SFC } from "react";

import Button, { ButtonProps } from "./";
import PauseIcon from "../Icons/Pause";

export const Pause: SFC<ButtonProps> = ({ ...props }) => (
  <Button {...props}>
    <PauseIcon />
  </Button>
);

export default Pause;
