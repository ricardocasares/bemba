import { styled } from "@/css/styled";

export type Box = {
  flex?: string;
  column?: boolean;
  padding?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  align?: string;
  zeromin?: boolean;
};

const when = <T, K extends keyof T = keyof T>(
  key: K,
  fn: (value?: T[K]) => string
) => (props: T) => {
  if (props[key]) {
    return fn(props[key]);
  }

  return null;
};

export const Box = styled.div<Box>`
  ${when<Box>("flex", x => `flex: ${x};`)}
  ${when<Box>("flex", _ => `display: flex;`)}
  ${when<Box>("align", x => `align-items: ${x};`)}
  ${when<Box>("column", _ => `flex-direction: column;`)}
  ${when<Box>("padding", x => `padding: ${x};`)}
  ${when<Box>("top", x => `padding-top: ${x};`)}
  ${when<Box>("bottom", x => `padding-bottom: ${x};`)}
  ${when<Box>("left", x => `padding-left: ${x};`)}
  ${when<Box>("right", x => `padding-right: ${x};`)}
  ${when<Box>("zeromin", _ => `min-width: 0;`)}
`;
