import styled from "@emotion/styled";

const sizesMap = {
  h1: "var(--sz8)",
  h2: "var(--sz7)",
  h3: "var(--sz6)",
  h4: "var(--sz5)",
  h5: "var(--sz4)",
  h6: "var(--sz3)",
};

export interface Text {
  as?: string;
  muted?: boolean;
}

export const Heading = styled.h1<Text>`
  font-weight: 500;
  line-height: 1.3em;
  margin-bottom: var(--sz4);
  font-size: ${({ as = "h1" }) => sizesMap[as]};
  color: ${({ muted }) => (muted ? "var(--accents-6)" : "var(--foreground)")};
`;

export const Text = styled.p<Text>`
  margin-top: 0;
  line-height: 1.5em;
  color: ${({ muted }) => (muted ? "var(--accents-6)" : "var(--foreground)")};
`;
