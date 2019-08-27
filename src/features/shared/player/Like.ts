import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Like as Component } from '@/components/Buttons';
import { load } from './store';

export const Like = connect(
  null,
  dispatch => bindActionCreators({ load }, dispatch)
)(Component);
