import { AccountActionTypes, IAccountState } from './types';
import { IReducerAction } from '../rootReducer';
import { IError } from '../../../meta-data/interfaces/IError';

const INITIAL_STATE: IAccountState = {
  balance: '',
  isLoadingBalance: false,
  errorBalance: {} as IError,
  isLoadingDeposit: false,
  errorDeposit: {} as IError,
};

export default function accountReducer(
  state = INITIAL_STATE,
  action: IReducerAction<string | IError>,
) {
  switch (action.type) {
    case AccountActionTypes.FETCH_BALANCE_REQUEST: {
      return {
        ...state,
        isLoadingBalance: true,
      };
    }
    case AccountActionTypes.FETCH_BALANCE_SUCCESS: {
      return {
        ...state,
        isLoadingBalance: false,
        balance: action.payload as string,
        errorBalance: {} as IError,
      };
    }
    case AccountActionTypes.FETCH_BALANCE_ERROR: {
      return {
        ...state,
        isLoadingBalance: false,
        errorBalance: action.payload as IError,
      };
    }
    case AccountActionTypes.POST_DEPOSIT_REQUEST: {
      return {
        ...state,
        isLoadingDeposit: true,
        isLoadingBalance: true,
      };
    }
    case AccountActionTypes.POST_DEPOSIT_SUCCESS: {
      return {
        ...state,
        isLoadingDeposit: false,
        isLoadingBalance: false,
        balance: action.payload as string,
        errorDeposit: {} as IError,
      };
    }
    case AccountActionTypes.POST_DEPOSIT_ERROR: {
      return {
        ...state,
        isLoadingDeposit: false,
        errorDeposit: action.payload as IError,
      };
    }
    default:
      return state;
  }
}
