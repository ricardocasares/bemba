import React, { FC } from "react";
import { Wrapper, Title, Subtitle } from "./styles";

export type Display = {
  name: string;
  state: string;
  country: string;
};

export const Display: FC<Display> = ({ name, state, country }) => (
  <Wrapper>
    <Title>{name}</Title>
    <Subtitle>
      {state}, {country}
    </Subtitle>
  </Wrapper>
);
