import { css } from "@emotion/core";

export const reset = css`
  html {
    line-height: 1.5;
    font-size: calc(1rem + 0.1vw);
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
      sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-weight: 400;
    background: #000;
    color: #fff;
  }

  html,
  body,
  #__next {
    height: 100%;
  }
`;
