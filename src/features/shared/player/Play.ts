import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BembaState } from '@/models/state';
import { Play as Component } from '@/components/Buttons';
import { play } from './store';

export const Play = connect(
  ({ audio: { ready: disabled } }: BembaState) => ({ disabled }),
  dispatch => bindActionCreators({ play }, dispatch)
)(Component);
