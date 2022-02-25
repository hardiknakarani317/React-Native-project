import {combineReducers} from 'redux';

import persistReducers from './persistReducers';

import {core} from './core/core.reducers';

const rootReducer = combineReducers({
  core,
});

const persistedReducer = persistReducers(rootReducer);

export default persistedReducer;
