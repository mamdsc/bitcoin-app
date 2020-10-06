import { IError } from '../../../meta-data/interfaces/IError';

export type IAccountState = {
  readonly balance: string;
  readonly isLoadingBalance: boolean;
  readonly errorBalance: IError;
  readonly deposit: boolean;
  readonly isLoadingDeposit: boolean;
  readonly errorDeposit: IError;
};

export const AccountActionTypes = {
  FETCH_BALANCE_REQUEST: '@@account/FETCH_BALANCE_REQUEST',
  FETCH_BALANCE_SUCCESS: '@@account/FETCH_BALANCE_SUCCESS',
  FETCH_BALANCE_ERROR: '@@account/FETCH_BALANCE_ERROR',
  POST_DEPOSIT_REQUEST: '@@account/POST_DEPOSIT_REQUEST',
  POST_DEPOSIT_SUCCESS: '@@account/POST_DEPOSIT_SUCCESS',
  POST_DEPOSIT_ERROR: '@@account/POST_DEPOSIT_ERROR',
};
