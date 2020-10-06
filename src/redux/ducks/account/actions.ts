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

const postDepositRequest = (amount: number): IReducerAction<number> => ({
  type: AccountActionTypes.POST_DEPOSIT_REQUEST,
  payload: amount,
});

const postDepositSuccess = (deposit: boolean): IReducerAction<boolean> => ({
  type: AccountActionTypes.POST_DEPOSIT_SUCCESS,
  payload: deposit,
});

const postDepositError = (message: string): IReducerAction<string> => ({
  type: AccountActionTypes.POST_DEPOSIT_ERROR,
  payload: message,
});

export {
  fetchBalanceRequest,
  fetchBalanceSuccess,
  fetchBalanceError,
  postDepositRequest,
  postDepositSuccess,
  postDepositError,
};
