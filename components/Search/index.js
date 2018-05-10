import React from "react";
import styled from "styled-components";
import Pad from "../Pad";

const Input = styled.input`
  border: none;
  color: #fff;
  padding: 15px;
  background: #333;
  border-radius: 4px;
  font-size: 18px;

  width: 100%;
  height: 100%;
`;

export default () => (
  <Pad bg={"transparent"}>
    <Input placeholder="Start typing..." />
  </Pad>
);
