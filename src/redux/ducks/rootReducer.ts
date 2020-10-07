import { combineReducers, Action } from 'redux';
import { IAppState } from '..';
import accountReducer from './account/reducer';
import cryptoReducer from './crypto/reducer';
import historyReducer from './history/reducer';
import extractReducer from './extract/reducer';

export type IReducerAction<T> = Action & { payload: T };

const reducers = combineReducers<IAppState>({
  account: accountReducer,
  crypto: cryptoReducer,
  history: historyReducer,
  extract: extractReducer,
});

export default reducers;
