import React from "react";
import styled from "styled-components";

let size = ({ size = 24 }) => size;
let color = ({ color = "white" }) => color;
let filled = ({ filled }) => (filled ? "currentColor" : "");
let stroke = ({ stroke = 2 }) => stroke;

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
