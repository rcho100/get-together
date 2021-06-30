import { combineReducers } from 'redux';
import hangoutReducer from '../../features/hangouts/hangoutReducer';
import modalReducer from '../common/modals/modalReducer';

const rootReducer = combineReducers({
  hangoutReducer,
  modalReducer,
});

export default rootReducer;
