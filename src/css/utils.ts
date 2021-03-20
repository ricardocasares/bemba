import { css } from "@/css";

export const truncate = css({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

export const hidden = css({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
});
