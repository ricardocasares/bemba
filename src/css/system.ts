import { system } from "styled-system";

export type StackSpacingProps = { stackSpacing?: number | number[] };
export const stackSpacing = system({
  stackSpacing: {
    property: "marginTop",
  },
});
