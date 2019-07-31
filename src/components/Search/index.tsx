import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  padding: 15px;
  position: absolute;
  z-index: 10;
  width: 100%;
  background: -webkit-linear-gradient(270deg, #000 1%, rgba(0, 0, 0, 0));
`;

const Input = styled.input`
  border: none;
  width: 100%;
  border-radius: 3px;
  background: #1e1e1e;
  padding: 10px;
  font-size: 16px;
  color: #939393;
  font-weight: 400;
`;

export function Search() {
  return (
    <Container>
      <Input placeholder="Search" type="search" />
    </Container>
  );
}
