import React, { SFC } from "react";
import SVGIconProps from "./SVGIconProps";

const Pause: SFC<SVGIconProps> = ({
  width = 32,
  height = 32,
  strokeWidth = "6.25%",
  strokeLinejoin = "round",
  strokeLinecap = "round",
  color = "currentcolor"
}) => (
  <svg
    id="i-pause"
    viewBox="0 0 32 32"
    width={width}
    height={height}
    fill="none"
    stroke={color}
    strokeLinecap={strokeLinecap}
    strokeLinejoin={strokeLinejoin}
    strokeWidth={strokeWidth}
  >
    <path d="M23 2 L23 30 M9 2 L9 30" />
  </svg>
);

export default Pause;
