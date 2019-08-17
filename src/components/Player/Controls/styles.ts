import styled from "@emotion/styled";
import { Heart, Play, Pause } from "react-bytesize-icons";

export const Wrapper = styled.div`
  display: flex;
  padding: 15px;
`;

export const Button = styled.button`
  border: none;
  background: transparent;
`;

export const LikeIcon = styled(Heart)`
  fill: #5f3dc4;
  color: #5f3dc4;
`;

export const PlayIcon = styled(Play)`
  fill: #5f3dc4;
  color: #5f3dc4;
`;

export const PauseIcon = styled(Pause)`
  fill: #5f3dc4;
  color: #5f3dc4;
`;
