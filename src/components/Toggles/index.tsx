import { FC, ReactElement } from "react";
import Heart from "@geist-ui/react-icons/heart";
import HeartFill from "@geist-ui/react-icons/heartFill";
import ToggleLeft from "@geist-ui/react-icons/toggleLeft";
import ToggleRight from "@geist-ui/react-icons/toggleRight";

export { ToggleItem } from "./style";

export interface Toggable {
  on: ReactElement;
  off: ReactElement;
}

export interface Activable {
  active: boolean;
}

export type Toggle = Toggable & Activable;

export const Toggle: FC<Toggle> = ({ on, off, active }) => (
  <>
    {active && on}
    {!active && off}
  </>
);

export const HeartToggle: FC<Activable> = (props) => (
  <Toggle
    on={<HeartFill color="var(--sx-colors-highlight-magenta)" />}
    off={<Heart color="var(--sx-colors-accents-5)" />}
    {...props}
  />
);

export const RightLeftToggle: FC<Activable> = (props) => (
  <Toggle
    on={<ToggleRight color="var(--sx-colors-success)" />}
    off={<ToggleLeft color="var(--sx-colors-accents-5)" />}
    {...props}
  />
);
