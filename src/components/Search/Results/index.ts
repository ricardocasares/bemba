import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BembaState } from '@/models/state';
import { load } from '@/store/player';
import { Results as Component } from './Results';

export const Results = connect(
  ({ search: { query, dirty, empty, loading, results } }: BembaState) => ({
    query,
    dirty,
    empty,
    loading,
    results,
  }),
  dispatch => bindActionCreators({ load }, dispatch)
)(Component);
