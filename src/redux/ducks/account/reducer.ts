import { AccountActionTypes, IAccountState } from './types';
import { IReducerAction } from '../rootReducer';
import { IError } from '../../../meta-data/interfaces/IError';

const INITIAL_STATE: IAccountState = {
  balance: '',
  isLoading: false,
  error: {} as IError,
};

export default function accountReducer(
  state = INITIAL_STATE,
  action: IReducerAction<string | IError>,
) {
  switch (action.type) {
    case AccountActionTypes.FETCH_BALANCE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AccountActionTypes.FETCH_BALANCE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        balance: action.payload as string,
        error: {} as IError,
      };
    }
    case AccountActionTypes.FETCH_BALANCE_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload as IError,
      };
    }
    default:
      return state;
  }
}
