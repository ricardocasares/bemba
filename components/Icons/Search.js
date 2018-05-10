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
    id="i-search"
    viewBox="0 0 32 32"
    width={width}
    height={height}
    fill="none"
    stroke={color}
    strokeLinecap={strokeLinecap}
    strokeLinejoin={strokeLinejoin}
    strokeWidth={strokeWidth}
  >
    <circle cx={14} cy={14} r={12} />
    <path d="M23 23 L30 30" />
  </svg>
);
