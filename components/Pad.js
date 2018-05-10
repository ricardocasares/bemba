import React from "react";
import styled from "styled-components";

const padding = ({ p = "15px" }) => p;
const background = ({ bg = "transparent" }) => bg;
const hidden = ({ hidden = false }) => (hidden ? "none" : "block");

export default styled.div`
  padding: ${padding};
  background-color: ${background};
  display: ${hidden};
  align-items: center;
`;
