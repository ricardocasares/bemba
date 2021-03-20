import { styled } from "@/css";

export const Heading = styled("h1", {
  fontWeight: 500,
  lineHeight: "1em",
  margin: "0",

  variants: {
    size: {
      1: {
        fontSize: "$4"
      },
      2: {
        fontSize: "$3"
      },
      3: {
        fontSize: "$2"
      }
    },
    muted: {
      true: {
        color: "$accents-4"
      }
    }
  },
}
);

export const Text = styled("p", {
  marginTop: "0",
  lineHeight: "1.5em",

  variants: {
    muted: {
      true: {
        color: "$accents-4"
      }
    }
  }
});
