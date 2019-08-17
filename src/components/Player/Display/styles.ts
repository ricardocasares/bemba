import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { ellipsis } from "@/css";

export const baseHeader = css`
  ${ellipsis}
  margin: 0;
  font-weight: 300;
`;

export const Title = styled.h4`
  ${baseHeader}
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 3px;
  color: white;
`;

export const Subtitle = styled.h5`
  ${baseHeader}
  font-size: 14px;
  color: #939393;
`;
