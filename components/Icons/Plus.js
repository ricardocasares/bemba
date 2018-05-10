import React from "react";

export default ({
  width = 32,
  height = 32,
  strokeWidth = "6.25%",
  strokeLinejoin = "round",
  strokeLinecap = "round",
  color = "currentcolor"
}) => (
  <svg
    id="i-plus"
    viewBox="0 0 32 32"
    width={width}
    height={height}
    fill="none"
    stroke={color}
    strokeLinecap={strokeLinecap}
    strokeLinejoin={strokeLinejoin}
    strokeWidth={strokeWidth}
  >
    <path d="M16 2 L16 30 M2 16 L30 16" />
  </svg>
);
