import { styled } from "@/css";
import { Box } from "@/components/Box";

export const Stack = styled(Box, {
  variants: {
    separated: {
      true: {
        "> * + *": {
          borderTop: "1px solid $accents-2",
        },
      },
    },

    spacing: {
      sm: {
        padding: "$3",

        "> * + *": {
          marginTop: "$2",
          padding: 0,
          paddingTop: "$2",
        },
      },

      md: {
        padding: "$4",

        "> * + *": {
          marginTop: "$3",
          padding: 0,
          paddingTop: "$3",
        },
      },

      xl: {
        padding: "$5",

        "> * + *": {
          marginTop: "$4",
          padding: 0,
          paddingTop: "$4",
        },
      },
    },
  },

  defaultVariants: {
    spacing: "sm",
  },
});
