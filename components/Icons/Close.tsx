import React, { SFC } from "react";
import SVGIconProps from "./SVGIconProps";

const Close: SFC<SVGIconProps> = ({
  width = 32,
  height = 32,
  strokeWidth = "6.25%",
  strokeLinejoin = "round",
  strokeLinecap = "round",
  color = "currentcolor"
}) => (
  <svg
    id="i-close"
    viewBox="0 0 32 32"
    width={width}
    height={height}
    fill="none"
    stroke={color}
    strokeLinecap={strokeLinecap}
    strokeLinejoin={strokeLinejoin}
    strokeWidth={strokeWidth}
  >
    <path d="M2 30 L30 2 M30 30 L2 2" />
  </svg>
);

export default Close;
