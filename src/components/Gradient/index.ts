import styled from "@emotion/styled";
import gradient from "random-gradient";

export type Gradient = {
  hash: string;
  direction?: "radial" | "vertical" | "horizontal";
};

export const Gradient = styled.div<Gradient>`
  min-width: 100%;
  min-height: 120px;
  background: ${({ hash, direction = "vertical" }) =>
    gradient(hash, direction)};
`;
