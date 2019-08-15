import { FC, SelectHTMLAttributes } from "react";
import { SelectWrapper, SelectInput, SelectIcon } from "./styles";

export type Select = {};

export const Select: FC<SelectHTMLAttributes<Select>> = ({
  children,
  hidden,
  ...props
}) => (
  <SelectWrapper>
    <SelectInput {...props}>{children}</SelectInput>
    <SelectIcon width={10} strokeWidth="5px" />
  </SelectWrapper>
);
