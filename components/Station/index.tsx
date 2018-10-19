import React, { SFC } from 'react';
import styled from 'styled-components';

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

interface StationProps {
  name: string;
  country: string;
  state: string;
  className?: string;
}

const Station: SFC<StationProps> = ({
  name,
  country,
  state,
  className = '',
}) => (
  <div>
    <Title>{name}</Title>
    <Subtitle>{[state, country].filter(x => x).join(', ')}</Subtitle>
  </div>
);

export default styled(Station)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    display: none;
  }
`;
