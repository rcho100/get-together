import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import hangoutReducer from '../../features/hangouts/hangoutReducer';

export default function configureStore() {
  return createStore(hangoutReducer, composeWithDevTools(applyMiddleware(thunk)));
}
