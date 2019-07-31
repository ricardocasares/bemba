import styled from "@emotion/styled";
import { Heart, Play } from "react-bytesize-icons";

export const Container = styled.div`
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
  display: flex;
  flex: 1;
  padding: 15px;
  flex-direction: column;
  min-width: 0;
`;

export const Title = styled.h4`
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  border-bottom: 2px solid #555;
  margin-bottom: 3px;
`;

export const Subtitle = styled.h5`
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  color: #939393;
`;
