import { system } from "styled-system";

export type StackSpacingProps = {
  stackSpacing?: number | number[] | string | string[];
};

export const stackSpacing = system({
  stackSpacing: {
    property: "marginTop",
  },
});

export type ItemPaddingProps = {
  itemPadding?: number | number[] | string | string[];
};

export const itemPadding = system({
  itemPadding: {
    property: "padding",
  },
});

export type StackBorderProps = {
  stackBorder?: number | number[] | string | string[];
};

export const stackBorder = system({
  stackBorder: {
    property: "borderTop",
  },
});
