import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BembaState } from '@/models/state';
import { load } from '@/features/shared/player/store';
import { History as Component } from './History';

export const History = connect(
  ({ search: { history } }: BembaState) => ({
    history,
  }),
  dispatch => bindActionCreators({ load }, dispatch)
)(Component);
