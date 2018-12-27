'use strict';

import {createStore, applyMiddleware, compose} from 'redux';
import {autoRehydrate, persistStore} from 'redux-persist';
import {AsyncStorage} from 'react-native';
// import rootSaga from '../saga';
import createSagaMiddleware from 'redux-saga';
export let store;

export default (rootReducer, rootSaga, onCompletion) => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    autoRehydrate()
  );
  store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(rootSaga);
  persistStore(store, {storage: AsyncStorage, blacklist: []}, onCompletion);
  return store;
};
