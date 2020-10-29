import { system } from "styled-system";

export type StackSpacingProps = {
  stackSpacing?: number | number[] | string | string[];
};

export const stackSpacing = system({
  stackSpacing: {
    property: "marginTop",
  },
});
