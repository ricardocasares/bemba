import shouldForwardProp from "@emotion/is-prop-valid";
import { motion } from "framer-motion";
import { styled } from "@/css/styled";
import { when } from "@/css/helpers";

export type Box = {
  bg?: string;
  flex?: string;
  column?: boolean;
  scroll?: boolean;
  padding?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  align?: string;
  zminw?: boolean;
  fullh?: boolean;
};

export const Box = styled(motion.div, { shouldForwardProp })<Box>`
  ${when<Box>("flex", x => `flex: ${x};`)}
  ${when<Box>("flex", _ => `display: flex;`)}
  ${when<Box>("fullh", _ => `height: 100%;`)}
  ${when<Box>("bg", x => `background: ${x};`)}
  ${when<Box>("padding", x => `padding: ${x};`)}
  ${when<Box>("top", x => `padding-top: ${x};`)}
  ${when<Box>("bottom", x => `padding-bottom: ${x};`)}
  ${when<Box>("right", x => `padding-right: ${x};`)}
  ${when<Box>("left", x => `padding-left: ${x};`)}
  ${when<Box>("align", x => `align-items: ${x};`)}
  ${when<Box>("column", _ => `flex-direction: column;`)}
  ${when<Box>("scroll", _ => `overflow: scroll;`)}
  ${when<Box>("scroll", _ => `-webkit-overflow-scrolling: touch;`)}
  ${when<Box>("zminw", _ => `min-width: 0;`)}
`;
