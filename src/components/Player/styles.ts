import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { ellipsis } from "@/css";
import { Heart, Play } from "react-bytesize-icons";

export const Wrapper = styled.div`
  display: flex;
  background: #1e1e1e;
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

export const Controls = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
`;

export const Station = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  min-width: 0;
`;

export const baseHeader = css`
  ${ellipsis}
  margin: 0;
  font-weight: 400;
`;

export const Title = styled.h4`
  ${baseHeader}
`;

export const Subtitle = styled.h5`
  ${baseHeader}
  color: #939393;
`;
