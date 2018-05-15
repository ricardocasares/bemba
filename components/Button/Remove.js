import React from "react";
import styled from "styled-components";

import Button from "./";
import Checkmark from "../Icons/Checkmark";

export default ({ ...props }) => (
  <Button {...props}>
    <Checkmark color={"lime"} />
  </Button>
);
