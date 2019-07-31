import React, { FC } from "react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
`;

export const Container = styled.div`
  width: 100%;
  overflow: scroll;
  min-height: 100%;
  padding-top: 75px;
`;

export const Content: FC = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);
