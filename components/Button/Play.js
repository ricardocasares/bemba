import React from "react";
import styled from "styled-components";
import Button from "./";
import Play from "../Icons/Play";

export default ({ ...props }) => (
  <Button {...props}>
    <Play />
  </Button>
);
