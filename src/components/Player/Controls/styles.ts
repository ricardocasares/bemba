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
  fill: #383838;
  color: #383838;
`;

export const PlayIcon = styled(Play)`
  fill: #383838;
  color: #383838;
`;

export const PauseIcon = styled(Pause)`
  fill: #383838;
  color: #383838;
`;
