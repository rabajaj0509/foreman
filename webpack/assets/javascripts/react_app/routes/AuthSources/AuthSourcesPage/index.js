import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './AuthSourcesActions';
import reducer from './AuthSourcesReducer';
import AuthSources from './AuthSources';
import { selectHost } from './AuthSourcesSelectors';

const mapStateToProps = (state, ownProps) => ({
  host: selectHost(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export const reducers = { authsources: reducer };

export default connect(mapStateToProps, mapDispatchToProps)(AuthSources);
