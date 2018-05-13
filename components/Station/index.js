import React from "react";
import styled from "styled-components";

let Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 5px;
`;

let Subtitle = styled.p`
  font-size: 15px;
  color: #999;
  margin-top: 0;
  font-weight: 300;
`;

export default ({ name, country, state, className = "" }) => (
  <div className={className}>
    <Title>{name}</Title>
    <Subtitle>{[state, country].filter(x => x).join(", ")}</Subtitle>
  </div>
);
