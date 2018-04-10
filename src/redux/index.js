import { combineReducers } from 'redux';
import configureStore from './createStore';
import rootSaga from '../saga';

export default (onCompletion) => {
  /* ------------- Assemble The Reducers ------------- */
  const appReducer = combineReducers({
    login: require('./LoginRedux').reducer,
  });

  const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = {};
    }
    return appReducer(state, action);
  };

  return configureStore(rootReducer, rootSaga, onCompletion);
};
