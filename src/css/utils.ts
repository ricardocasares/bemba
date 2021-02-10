import { css } from "@emotion/react";

export const truncate = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const hidden = css`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
