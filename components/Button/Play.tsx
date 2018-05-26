import React, { SFC } from "react";

import Button, { ButtonProps } from "./";
import PlayIcon from "../Icons/Play";

export const Play: SFC<ButtonProps> = ({ ...props }) => (
  <Button {...props}>
    <PlayIcon />
  </Button>
);

export default Play;
