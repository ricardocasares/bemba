import React, { FC, Fragment } from 'react';
import { Like } from './Like';
import { Play } from './Play';
import { Pause } from './Pause';
import { connect } from 'react-redux';
import { BembaState } from '@/models/state';

type ControlsBox = {
  playing: boolean;
};

const ControlsBox: FC<ControlsBox> = ({ playing }) => (
  <Fragment>
    <Like />
    {playing ? <Pause /> : <Play />}
  </Fragment>
);

export const Controls = connect(({ audio: { playing } }: BembaState) => ({
  playing,
}))(ControlsBox);
