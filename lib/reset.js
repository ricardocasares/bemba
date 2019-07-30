import { injectGlobal } from "styled-components";

injectGlobal`
  body, *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    margin: 0;
    color: #FFF;
    background: #000;
  }

  *, *::after, *::before {
    font-family: "Maison",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Helvetica",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol";
  }
`;
