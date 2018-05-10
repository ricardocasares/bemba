import React from "react";
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

export default () => (
  <Flex>
    <Title>Radio Bemba FM 93.5</Title>
    <Subtitle>Buenos Aires, Argentina</Subtitle>
  </Flex>
);
