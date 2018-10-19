import React from "react";
import styled from "styled-components";

let Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 5px;
`;

let Subtitle = styled.p`
  margin: 0;
  font-size: 15px;
  color: #999;
  font-weight: 300;
`;

let Station = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default ({ name, country, state}) => (
  <Station>
    <Title>{name}</Title>
    <Subtitle>{[state, country].filter(x => x).join(", ")}</Subtitle>
  </Station>
);
