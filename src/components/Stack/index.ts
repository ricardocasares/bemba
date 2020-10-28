import styled from "@emotion/styled";
import { Box } from "@/components/Box";
import { stackSpacing, StackSpacingProps } from "@/css/system";

export type Stack = StackSpacingProps & Box;

export const Stack = styled(Box)<Stack>`
  > *:not(style) ~ *:not(style) {
    ${stackSpacing}
  }
`;
