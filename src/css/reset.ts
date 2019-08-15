import { css } from "@emotion/core";
import normalize from "emotion-normalize";
import { sans } from "./";

export const reset = css`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    ${sans}
  }

  body {
    margin: 0;
    font-weight: 400;
    background: #1e1e1e;
    color: #fff;
  }

  html,
  body,
  #__next {
    height: 100%;
  }
`;
