import { IError } from '../../../meta-data/interfaces/IError';

export type IAccountState = {
  readonly balance: string;
  readonly isLoading: boolean;
  readonly error: IError;
};

export const AccountActionTypes = {
  FETCH_BALANCE_REQUEST: '@@balance/FETCH_BALANCE_REQUEST',
  FETCH_BALANCE_SUCCESS: '@@balance/FETCH_BALANCE_SUCCESS',
  FETCH_BALANCE_ERROR: '@@balance/FETCH_BALANCE_ERROR',
};
