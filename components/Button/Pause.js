import React from "react";
import styled from "styled-components";

import Button from "./";
import Pause from "../Icons/Pause";

export default ({ ...props }) => (
  <Button {...props}>
    <Pause />
  </Button>
);
