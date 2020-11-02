import { css } from "@emotion/core";
import { reset } from "./reset";
import { theme } from "./theme";

export const styles = css`
  ${reset}
  ${theme}

  html {
    height: 100vh;
    min-height: 100%;
  }

  *,
  *::before,
  *::after {
    font-family: var(--font-family);
    will-change: color, background;
    transition: color 0.1s, background 0.3s, border-color 0.3s;
  }

  body {
    font-size: 16px;
    color: var(--foreground);
    background: var(--background);
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: var(--foreground);
  }

  ::selection {
    color: var(--foreground);
    background: var(--selection);
  }
`;
