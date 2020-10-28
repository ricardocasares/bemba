import styled from "@emotion/styled";
import { Box } from "@/components/Box";

export type AutoGrid = Box & {
  min?: string;
  max?: string;
};

export const AutoGrid = styled(Box)<AutoGrid>`
  display: grid;
  grid-template-columns: ${({ min = "200px", max = "1fr" }) =>
    `repeat(auto-fit, minmax(${min}, ${max}))`};
`;
