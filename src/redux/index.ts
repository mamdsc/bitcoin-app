import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { IAccountState } from './ducks/account/types';
import { ICryptoState } from './ducks/crypto/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export type IAppState = {
  account: IAccountState;
  crypto: ICryptoState;
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export { store };
