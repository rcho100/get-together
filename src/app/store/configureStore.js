import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import hangoutReducer from '../../features/hangouts/hangoutReducer';

export default function configureStore() {
  return createStore(hangoutReducer, devToolsEnhancer());
}
