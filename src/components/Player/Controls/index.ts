import { connect } from 'react-redux';
import { BembaState } from '@/models/state';
import { Controls as Component } from './Controls';

export const Controls = connect(({ audio: { playing } }: BembaState) => ({
  playing,
}))(Component);
