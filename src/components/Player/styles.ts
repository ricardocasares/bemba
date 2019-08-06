import styled from "@emotion/styled";

export type Wrapper = {
  visible: boolean;
};

export const Wrapper = styled.div<Wrapper>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  background: #1e1e1e;
`;
