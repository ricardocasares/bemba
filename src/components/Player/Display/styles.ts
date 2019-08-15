import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { ellipsis } from "@/css";

export const baseHeader = css`
  ${ellipsis}
  margin: 0;
  font-weight: 400;
`;

export const Title = styled.h4`
  ${baseHeader}
  font-size: 14px;
  color: white;
`;

export const Subtitle = styled.h5`
  ${baseHeader}
  color: #939393;
`;
