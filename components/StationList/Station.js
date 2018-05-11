import React, { Fragment } from "react";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 5px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #999;
  margin: 0;
  font-weight: 300;
`;

const Flex = styled.div`
  flex: 1 1 auto;
`;

export default ({ name, country, state, className }) => (
  <div className={className}>
    <Title>{name}</Title>
    <Subtitle>{[state, country].filter(x => x).join(", ")}</Subtitle>
  </div>
);
