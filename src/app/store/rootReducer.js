import { combineReducers } from 'redux';
import hangoutReducer from '../../features/hangouts/hangoutReducer';
import modalReducer from '../common/modals/modalReducer';
import testReducer from '../../features/sandbox/testReducer';

const rootReducer = combineReducers({
  hangoutReducer,
  modalReducer,
  testReducer,
});

export default rootReducer;
