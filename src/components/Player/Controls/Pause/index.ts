import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BembaState } from '@/models/state';
import { pause } from '@/features/shared/player/store';
import { Pause as Component } from './Pause';

export const Pause = connect(
  ({ audio: { ready: disabled } }: BembaState) => ({ disabled }),
  dispatch => bindActionCreators({ pause }, dispatch)
)(Component);
