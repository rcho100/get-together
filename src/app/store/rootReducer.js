import { combineReducers } from 'redux';
import hangoutReducer from '../../features/hangouts/hangoutReducer';
import modalReducer from '../common/modals/modalReducer';
import testReducer from '../../features/sandbox/testReducer';
import authReducer from '../../features/auth/authReducer';

const rootReducer = combineReducers({
  hangoutReducer,
  modalReducer,
  testReducer,
  authReducer,
});

export default rootReducer;
