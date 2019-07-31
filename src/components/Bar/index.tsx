import React from "react";
import styled from "@emotion/styled";
import { Home, Heart, Bell, Options } from "react-bytesize-icons";

const Container = styled.nav`
  display: flex;
  padding: 15px;
  background: #2d2d2d;
  justify-content: space-between;
`;

const ICON_SIZE = 25;
const ICON_COLOR = "#9e9e9e";
const ICON_ACTIVE_COLOR = "#bb86fc";

export function Bar() {
  return (
    <Container>
      <Home height={ICON_SIZE} color={ICON_ACTIVE_COLOR} />
      <Heart height={ICON_SIZE} color={ICON_COLOR} />
      <Bell height={ICON_SIZE} color={ICON_COLOR} />
      <Options height={ICON_SIZE} color={ICON_COLOR} />
    </Container>
  );
}
