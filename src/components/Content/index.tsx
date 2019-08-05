import React, { FC } from "react";
import styled from "@emotion/styled";

export const Wrapper = styled.main`
  flex: 1;
  min-height: 0;
  display: flex;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-top: 75px;
`;

export const Content: FC = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);
