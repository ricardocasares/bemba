import { connect } from 'react-redux';
import { BembaState } from '@/models/state';
import { Display as Component } from './Display';

export const Display = connect(({ player: { station } }: BembaState) => ({
  ...station,
}))(Component);
