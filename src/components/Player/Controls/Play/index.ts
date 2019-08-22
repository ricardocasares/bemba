import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BembaState } from '@/models/state';
import { play } from '@/store/player';
import { Play as Component } from './Play';

export const Play = connect(
  ({ audio: { ready: disabled } }: BembaState) => ({ disabled }),
  dispatch => bindActionCreators({ play }, dispatch)
)(Component);
