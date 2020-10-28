import {
  grid,
  GridProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  compose,
} from "styled-system";
import styled from "@emotion/styled";

export type Box = GridProps &
  MarginProps &
  PaddingProps &
  BackgroundProps &
  BorderProps;

export const Box = styled.div<Box>(
  compose(grid, margin, padding, background, border)
);
