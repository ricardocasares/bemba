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

  body {
    color: var(--foreground);
    background: var(--background);
    font-family: var(--font-family);
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
