import { MouseEvent } from "react";
import styled from "styled-components";
import withProps from "styled-with-props";

export interface ButtonProps {
  size?: number;
  color?: string;
  stroke?: number;
  filled?: boolean;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => any;
}

const size = ({ size = 24 }) => size;
const color = ({ color = "white" }) => color;
const stroke = ({ stroke = 2 }) => stroke;
const filled = ({ filled = false }) =>
  filled ? "currentColor" : "transparent";
export const Button = styled(withProps<ButtonProps>("button"))`
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

export default Button;
