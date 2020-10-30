import styled from "@emotion/styled";
import { BorderProps } from "styled-system";
import { Box } from "@/components/Box";
import {
  stackSpacing,
  StackSpacingProps,
  stackBorder,
  StackBorderProps,
  itemPadding,
  ItemPaddingProps,
} from "@/css/system";

export type Stack = StackSpacingProps &
  StackBorderProps &
  ItemPaddingProps &
  BorderProps &
  Box;

export const Stack = styled(Box)<Stack>`
  > * {
    ${itemPadding}
  }
  > *:not(style) ~ *:not(style) {
    ${stackBorder}
    ${stackSpacing}
  }
`;
