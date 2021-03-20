import { global } from "@/css";

export const globalStyles = global({
  "html, body, p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, legend, textarea, pre, iframe, hr, h1, h2, h3, h4, h5, h6": {
    margin: "0",
    padding: "0",
  },

  "h1, h2, h3, h4, h5, h6": {
    fontSize: "100%",
    fontWeight: "normal",
  },

  ul: { listStyle: "none" },

  "button, input, select, textarea": { margin: "0" },

  html: {
    boxSizing: "border-box",
    height: "100vh",
    minHeight: "100%",
  },

  "*, *::before, *::after": {
    boxSizing: "inherit",
    fontFamily: "$sans",
  },

  "img, video": { height: "auto", maxWidth: "100%" },
  iframe: { border: "0" },
  table: { borderCollapse: "collapse", borderSpacing: "0" },

  body: {
    fontSize: "16px",
    color: "$foreground",
    background: "$background",
    margin: 0,
    padding: 0,
  },

  a: {
    textDecoration: "none",
    color: "$foreground",
  },

  "::selection": {
    color: "$foreground",
    background: "$selection",
  },
});
