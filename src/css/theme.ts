import { css } from '@emotion/react'

export const base = css`
  :root {
    /* sizes */
    --sz1: 4px;
    --sz2: 8px;
    --sz3: 12px;
    --sz4: 16px;
    --sz5: 24px;
    --sz6: 32px;
    --sz7: 40px;

    /* fonts */
    --font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", sans-serif;

    /* colors */
    --success-lighter: #d3e5ff;
    --success-light: #3291ff;
    --success: #0070f3;
    --success-dark: #0761d1;
    --error-lighter: #f7d4d6;
    --error-light: #ff1a1a;
    --error: #e00;
    --error-dark: #c50000;
    --warning-lighter: #ffefcf;
    --warning-light: #f7b955;
    --warning: #f5a623;
    --warning-dark: #ab570a;
    --violet-lighter: #e3d7fc;
    --violet-light: #8a63d2;
    --violet: #7928ca;
    --violet-dark: #4c2889;
    --cyan-lighter: #aaffec;
    --cyan-light: #79ffe1;
    --cyan: #50e3c2;
    --cyan-dark: #29bc9b;
    --highlight-purple: #f81ce5;
    --highlight-magenta: #eb367f;
    --highlight-pink: #ff0080;
    --highlight-yellow: #fff500;
    --foreground: #000;
    --background: #fff;
    --selection: var(--cyan-light);
    --accents-1: #fafafa;
    --accents-2: #eaeaea;
    --accents-3: #999;
    --accents-4: #888;
    --accents-5: #666;
    --accents-6: #444;
    --accents-7: #333;
    --accents-8: #111;
  }
`

export const dark = css`
  [data-theme="dark"] {
    /* colors */
    --foreground: #fff;
    --background: #000;
    --selection: var(--highlight-purple);
    --accents-8: #fafafa;
    --accents-7: #eaeaea;
    --accents-6: #999;
    --accents-5: #888;
    --accents-4: #666;
    --accents-3: #444;
    --accents-2: #333;
    --accents-1: #111;
  }
`

export const theme = css`
  ${base}
  ${dark}
`
