import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import createStore from './createStore';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
