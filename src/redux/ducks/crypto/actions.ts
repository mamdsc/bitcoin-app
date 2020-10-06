import { CryptoActionTypes } from './types';
import { IReducerAction } from '../rootReducer';
import { IPrice } from '../../../meta-data/interfaces/IPrice';

const fetchPricesRequest = () => ({
  type: CryptoActionTypes.FETCH_PRICE_REQUEST,
});

const fetchPricesSuccess = (price: IPrice): IReducerAction<IPrice> => ({
  type: CryptoActionTypes.FETCH_PRICE_SUCCESS,
  payload: price,
});

const fetchPricesError = (message: IPrice): IReducerAction<IPrice> => ({
  type: CryptoActionTypes.FETCH_PRICE_ERROR,
  payload: message,
});

export { fetchPricesRequest, fetchPricesSuccess, fetchPricesError };
