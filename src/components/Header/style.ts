import styled from "@emotion/styled";
import { hidden } from "@/css/utils";

export const Container = styled.header`
  display: grid;
  padding: var(--sz3) var(--sz4);
  grid-gap: var(--sz4);
  grid-template-columns: auto 1fr;
  align-items: center;
  border-bottom: 1px solid var(--accents-2);
`;

export const Navigation = styled.nav`
  display: grid;
  grid-gap: var(--sz3);
  grid-auto-flow: column;
  justify-content: right;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Hidden = styled.span`
  ${hidden}
`;
