import { combineReducers, Action } from 'redux';
import { IAppState } from '..';
import accountReducer from './account/reducer';
import cryptoReducer from './crypto/reducer';

export type IReducerAction<T> = Action & { payload: T };

const reducers = combineReducers<IAppState>({
  account: accountReducer,
  crypto: cryptoReducer,
});

export default reducers;
