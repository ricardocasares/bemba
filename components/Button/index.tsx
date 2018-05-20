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

export const Button: SFC<ButtonProps> = ({ ...props }) => <button {...props} />;

const size = ({ size = 24 }) => size;
const color = ({ color = "white" }) => color;
const stroke = ({ stroke = 2 }) => stroke;
const filled = ({ filled }) => (filled ? "currentColor" : "transparent");

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
