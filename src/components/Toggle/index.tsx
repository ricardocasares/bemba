import { FC } from "react";
import { ToggleLeft, ToggleRight } from "@geist-ui/react-icons";

export { ToggleItem } from "./style";

export type Toggle = { active: boolean };

export const Toggle: FC<Toggle> = ({ active }) => {
  if (active) {
    return <ToggleRight color="var(--cyan)" />;
  }

  return <ToggleLeft color="var(--accents-5)" />;
};
