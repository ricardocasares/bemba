import React from "react";
import { Container } from "./styles";
import { Display } from "./Display";
import { Controller } from "./Controller";

export function Player() {
  return (
    <Container>
      <Display />
      <Controller />
    </Container>
  );
}
