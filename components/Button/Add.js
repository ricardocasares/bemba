import React from "react";
import styled from "styled-components";

import Button from "./";
import Plus from "../Icons/Plus";

export default ({ ...props }) => (
  <Button {...props}>
    <Plus />
  </Button>
);
