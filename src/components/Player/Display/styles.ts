import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { ellipsis } from "@/css";

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  min-width: 0;
`;

export const baseHeader = css`
  ${ellipsis}
  margin: 0;
  font-weight: 400;
`;

export const Title = styled.h4`
  ${baseHeader}
`;

export const Subtitle = styled.h5`
  ${baseHeader}
  color: #939393;
`;
