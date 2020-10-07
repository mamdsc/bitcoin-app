import { CryptoActionTypes, ICryptoState } from './types';
import { IReducerAction } from '../rootReducer';
import { IError } from '../../../meta-data/interfaces/IError';
import { IPrice } from '../../../meta-data/interfaces/IPrice';
import { IPosition } from '../../../meta-data/interfaces/IPosition';
import { IPurchase } from '../../../meta-data/interfaces/IPurchase';

const INITIAL_STATE: ICryptoState = {
  prices: {} as IPrice,
  isLoadingPrices: false,
  errorPrices: {} as IError,
  position: [],
  isLoadingPosition: false,
  errorPosition: {} as IError,
  sell: false,
  isLoadingSell: false,
  errorSell: {} as IError,
  purchase: {} as IPurchase,
  isLoadingPurchase: false,
  errorPurchase: {} as IError,
};

export default function accountReducer(
  state = INITIAL_STATE,
  action: IReducerAction<IPrice | IError | IPosition[] | boolean | IPurchase>,
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
    case CryptoActionTypes.FETCH_POSITION_REQUEST: {
      return {
        ...state,
        isLoadingPosition: true,
      };
    }
    case CryptoActionTypes.FETCH_POSITION_SUCCESS: {
      return {
        ...state,
        isLoadingPosition: false,
        position: action.payload as IPosition[],
        errorPosition: {} as IError,
      };
    }
    case CryptoActionTypes.FETCH_POSITION_ERROR: {
      return {
        ...state,
        isLoadingPosition: false,
        errorPosition: action.payload as IError,
      };
    }
    case CryptoActionTypes.POST_SELL_REQUEST: {
      return {
        ...state,
        isLoadingSell: true,
      };
    }
    case CryptoActionTypes.POST_SELL_SUCCESS: {
      return {
        ...state,
        isLoadingSell: false,
        sell: action.payload as boolean,
        errorSell: {} as IError,
      };
    }
    case CryptoActionTypes.POST_SELL_ERROR: {
      return {
        ...state,
        isLoadingSell: false,
        errorSell: action.payload as IError,
      };
    }
    case CryptoActionTypes.POST_PURCHASE_REQUEST: {
      return {
        ...state,
        isLoadingPurchase: true,
      };
    }
    case CryptoActionTypes.POST_PURCHASE_SUCCESS: {
      return {
        ...state,
        isLoadingPurchase: false,
        purchase: action.payload as IPurchase,
        errorPurchase: {} as IError,
      };
    }
    case CryptoActionTypes.POST_PURCHASE_ERROR: {
      return {
        ...state,
        isLoadingPurchase: false,
        errorPurchase: action.payload as IError,
      };
    }
    default:
      return state;
  }
}
