import { connect } from 'react-redux';
import { BembaState } from '@/models/state';
import { Player as Component } from './Player';

export const Player = connect(({ audio: { ready } }: BembaState) => ({
  ready,
}))(Component);
