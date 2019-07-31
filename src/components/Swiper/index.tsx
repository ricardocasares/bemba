import React, { FC } from "react";
import { Wrapper, Header, Scroller, Items } from "./styles";

export type Swiper = {
  title?: string;
};

export const Swiper: FC<Swiper> = ({ title, children }) => (
  <Wrapper>
    {title && <Header>{title}</Header>}
    <Scroller>
      <Items>{children}</Items>
    </Scroller>
  </Wrapper>
);
