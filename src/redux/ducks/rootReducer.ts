import { combineReducers, Action } from 'redux';
import { IAppState } from '..';
import accountReducer from './account/reducer';

export type IReducerAction<T> = Action & { payload: T };

const reducers = combineReducers<IAppState>({
  account: accountReducer,
});

export default reducers;
