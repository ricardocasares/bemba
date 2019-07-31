import React, { FC } from "react";
import { Container, Header, Scroller, Items } from "./styles";

export type Swiper = {
  title?: string;
};

export const Swiper: FC<Swiper> = ({ title, children }) => (
  <Container>
    {title && <Header>{title}</Header>}
    <Scroller>
      <Items>{children}</Items>
    </Scroller>
  </Container>
);
