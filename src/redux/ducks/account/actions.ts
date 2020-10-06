import { AccountActionTypes } from './types';
import { IReducerAction } from '../rootReducer';

const fetchBalanceRequest = () => ({
  type: AccountActionTypes.FETCH_BALANCE_REQUEST,
});

const fetchBalanceSuccess = (balance: string): IReducerAction<string> => ({
  type: AccountActionTypes.FETCH_BALANCE_SUCCESS,
  payload: balance,
});

const fetchBalanceError = (message: string): IReducerAction<string> => ({
  type: AccountActionTypes.FETCH_BALANCE_ERROR,
  payload: message,
});

export { fetchBalanceRequest, fetchBalanceSuccess, fetchBalanceError };
