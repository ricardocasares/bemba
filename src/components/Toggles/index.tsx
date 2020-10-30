import { FC, ReactElement } from "react";
import {
  Heart,
  HeartFill,
  ToggleLeft,
  ToggleRight,
} from "@geist-ui/react-icons";

export { ToggleItem } from "./style";

export type Toggable = {
  on: ReactElement;
  off: ReactElement;
};

export type Activable = {
  active: boolean;
};

export type Toggle = Toggable & Activable;

export const Toggle: FC<Toggle> = ({ on, off, active }) => (
  <>
    {active && on}
    {!active && off}
  </>
);

export const HeartToggle: FC<Activable> = (props) => (
  <Toggle
    on={<HeartFill color="var(--highlight-magenta)" />}
    off={<Heart color="var(--accents-5)" />}
    {...props}
  />
);

export const RightLeftToggle: FC<Activable> = (props) => (
  <Toggle
    on={<ToggleRight color="var(--cyan)" />}
    off={<ToggleLeft color="var(--accents-5)" />}
    {...props}
  />
);
