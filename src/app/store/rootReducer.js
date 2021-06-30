import { combineReducers } from 'redux';
import hangoutReducer from '../../features/hangouts/hangoutReducer';
import modalReducer from '../common/modals/modalReducer';

const rootReducer = combineReducers({
  hangout: hangoutReducer,
  modals: modalReducer,
});

export default rootReducer;
