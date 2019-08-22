import React, { FC, Fragment } from 'react';
import { Title, Subtitle } from './styles';

export type Display = {
  name: string;
  state: string;
  country: string;
};

export const Display: FC<Display> = ({ name, state, country }) => (
  <Fragment>
    <Title>{name}</Title>
    <Subtitle>
      {[state, country].filter(Boolean).join(', ') || 'International'}
    </Subtitle>
  </Fragment>
);
