import React, { FC } from "react";
import { styled } from "@/css/styled";
import { mapToTheme as theme } from "styled-map";
import { Space } from "@/css/theme/space";

export const Wrapper = styled.main`
  flex: 1;
  min-height: 0;
  display: flex;
`;

export type Container = {
  pt?: keyof Space;
  pb?: keyof Space;
  pl?: keyof Space;
  pr?: keyof Space;
};

export const Container = styled.div<Container>`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-top: ${theme("space", "pt")}px;
  padding-left: ${theme("space", "pl")}px;
  padding-right: ${theme("space", "pr")}px;
  padding-bottom: ${theme("space", "pb")}px;
`;

export const Content: FC<Container> = ({ children, ...props }) => (
  <Wrapper>
    <Container {...props}>{children}</Container>
  </Wrapper>
);
