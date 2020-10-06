import { CryptoActionTypes, ICryptoState } from './types';
import { IReducerAction } from '../rootReducer';
import { IError } from '../../../meta-data/interfaces/IError';
import { IPrice } from '../../../meta-data/interfaces/IPrice';

const INITIAL_STATE: ICryptoState = {
  prices: {} as IPrice,
  isLoadingPrices: false,
  errorPrices: {} as IError,
};

export default function accountReducer(
  state = INITIAL_STATE,
  action: IReducerAction<IPrice | IError>,
) {
  switch (action.type) {
    case CryptoActionTypes.FETCH_PRICE_REQUEST: {
      return {
        ...state,
        isLoadingPrices: true,
      };
    }
    case CryptoActionTypes.FETCH_PRICE_SUCCESS: {
      return {
        ...state,
        isLoadingPrices: false,
        prices: action.payload as IPrice,
        errorPrices: {} as IError,
      };
    }
    case CryptoActionTypes.FETCH_PRICE_ERROR: {
      return {
        ...state,
        isLoadingPrices: false,
        errorPrices: action.payload as IError,
      };
    }
    default:
      return state;
  }
}
