import React from "react";
import { Wrapper } from "./styles";
import { Display } from "./Display";
import { Controller } from "./Controller";

export function Player() {
  return (
    <Wrapper>
      <Display />
      <Controller />
    </Wrapper>
  );
}
