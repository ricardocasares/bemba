import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BembaState } from '@/models/state';
import { Pause as Component } from '@/components/Buttons';
import { pause } from './store';

export const Pause = connect(
  ({ audio: { ready: disabled } }: BembaState) => ({ disabled }),
  dispatch => bindActionCreators({ pause }, dispatch)
)(Component);
