import React, { FC } from 'react';
import { Box } from '@/components/Box';
import { Display } from './Display';
import { Controls } from './Controls';

export type Player = {
  ready: boolean;
};

const variants = {
  show: { y: 0, opacity: 1, display: 'flex' },
  hide: { y: 100, opacity: 0, display: 'none' },
};

export const Player: FC<Player> = ({ ready }) => (
  <Box
    flex="auto"
    bg="#222"
    initial={false}
    animate={ready ? 'show' : 'hide'}
    variants={variants}
  >
    <Box flex="1" column zminw padding="15px">
      <Display />
    </Box>
    <Box flex="0" align="center">
      <Controls />
    </Box>
  </Box>
);
