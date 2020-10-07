import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { IAccountState } from './ducks/account/types';
import { ICryptoState } from './ducks/crypto/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import { IHistoryState } from './ducks/history/types';

export type IAppState = {
  account: IAccountState;
  crypto: ICryptoState;
  history: IHistoryState;
};

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['account', 'crypto', 'history'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  persistedReducer,
  {},
  applyMiddleware(sagaMiddleware),
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
