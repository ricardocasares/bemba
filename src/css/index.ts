import { css } from '@emotion/core';

export const sans = css`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`;

export const ellipsis = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const gradient = (
  start: string,
  end: string,
  to: string = 'to right'
) => css`
  background: ${start};
  background: -webkit-linear-gradient(${to}, ${start}, ${end});
  background: linear-gradient(${to}, ${start}, ${end});
`;
