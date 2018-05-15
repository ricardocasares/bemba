import React from "react";
import styled from "styled-components";

import Button from "./";
import Close from "../Icons/Close";

export default ({ ...props }) => (
  <Button {...props}>
    <Close />
  </Button>
);
