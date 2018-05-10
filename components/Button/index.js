import React from "react";
import styled from "styled-components";

const size = ({ size = 24 }) => size;
const color = ({ color = "white" }) => color;
const filled = ({ filled }) => (filled ? "currentColor" : "");
const stroke = ({ stroke = 2 }) => stroke;

export default styled.button`
  color: ${color};
  border: none;
  background: transparent;

  svg {
    fill: ${filled};
    width: ${size}px;
    height: ${size}px;
    stroke-width: ${stroke}px;
  }
`;
