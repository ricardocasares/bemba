import React, { SFC, MouseEvent, ReactElement } from "react";
import styled from "styled-components";

export interface ButtonProps {
  size: number;
  color: string;
  stroke: number;
  filled: boolean;
  className?: string;
  children: ReactElement<any>;
  onClick: (event: MouseEvent<HTMLButtonElement>) => any;
}

let size = ({ size = 24 }) => size;
let color = ({ color = "white" }) => color;
let filled = ({ filled }) => (filled ? "currentColor" : "none");
let stroke = ({ stroke = 2 }) => stroke;

export const Button: SFC<ButtonProps> = ({ ...props }) => <button {...props} />;

export const StyledButton = styled(Button)`
  color: ${color};
  border: none;
  background: transparent;

  svg {
    fill: ${filled};
    width: ${size}px;
    height: ${size}px;
    stroke-width: ${stroke}px;
    vertical-align: middle;
  }
`;

export default StyledButton;
