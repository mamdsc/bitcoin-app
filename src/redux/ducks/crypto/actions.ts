import { CryptoActionTypes } from './types';
import { IReducerAction } from '../rootReducer';
import { IPrice } from '../../../meta-data/interfaces/IPrice';
import { IPosition } from '../../../meta-data/interfaces/IPosition';

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

const fetchPositionRequest = () => ({
  type: CryptoActionTypes.FETCH_POSITION_REQUEST,
});

const fetchPositionSuccess = (
  position: IPosition[],
): IReducerAction<IPosition[]> => ({
  type: CryptoActionTypes.FETCH_POSITION_SUCCESS,
  payload: position,
});

const fetchPositionError = (message: IPrice): IReducerAction<IPrice> => ({
  type: CryptoActionTypes.FETCH_POSITION_ERROR,
  payload: message,
});

export {
  fetchPricesRequest,
  fetchPricesSuccess,
  fetchPricesError,
  fetchPositionRequest,
  fetchPositionSuccess,
  fetchPositionError,
};
