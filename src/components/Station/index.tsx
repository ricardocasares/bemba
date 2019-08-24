import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Box } from '@/components/Box';
import { Display as DisplayComponent } from '@/components/Player/Display/Display';
import { BembaState, Station as StationState } from '@/models/state';
import { Play as PlayIcon } from 'react-bytesize-icons';
import { styled } from '@/css/styled';
import { load } from '@/store/player';
import { bindActionCreators } from 'redux';

const Play = styled.button`
  border: none;
  background: transparent;
  color: #ccc;
  width: 45px;
  height: 45px;
`;

export const Display = connect(({ station }: BembaState) => ({
  name: station.name,
  state: station.state,
  country: station.country,
}))(DisplayComponent);

export type StationComponent = {
  station: StationState;
  load: (station: StationState) => void;
};
export const StationComponent: FC<StationComponent> = ({ station, load }) => (
  <Box>
    <Box padding="15px" bg="#222">
      <Display />
    </Box>
    <Box padding="15px">
      <Play onClick={() => load(station)}>
        <PlayIcon />
      </Play>
    </Box>
  </Box>
);

export const Station = connect(
  ({ station }: BembaState) => ({ station }),
  dispatch => bindActionCreators({ load }, dispatch)
)(StationComponent);
