import { CryptoActionTypes } from './types';
import { IReducerAction } from '../rootReducer';
import { IPrice } from '../../../meta-data/interfaces/IPrice';
import { IPosition } from '../../../meta-data/interfaces/IPosition';
import { IPurchase } from '../../../meta-data/interfaces/IPurchase';

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

const postSellRequest = (amount: number): IReducerAction<number> => ({
  type: CryptoActionTypes.POST_SELL_REQUEST,
  payload: amount,
});

const postSellSuccess = (sell: boolean): IReducerAction<boolean> => ({
  type: CryptoActionTypes.POST_SELL_SUCCESS,
  payload: sell,
});

const postSellError = (message: string): IReducerAction<string> => ({
  type: CryptoActionTypes.POST_SELL_ERROR,
  payload: message,
});

const postPurchaseRequest = (amount: number): IReducerAction<number> => ({
  type: CryptoActionTypes.POST_PURCHASE_REQUEST,
  payload: amount,
});

const postPurchaseSuccess = (
  purchase: IPurchase,
): IReducerAction<IPurchase> => ({
  type: CryptoActionTypes.POST_PURCHASE_SUCCESS,
  payload: purchase,
});

const postPurchaseError = (message: string): IReducerAction<string> => ({
  type: CryptoActionTypes.POST_PURCHASE_ERROR,
  payload: message,
});

export {
  fetchPricesRequest,
  fetchPricesSuccess,
  fetchPricesError,
  fetchPositionRequest,
  fetchPositionSuccess,
  fetchPositionError,
  postSellRequest,
  postSellSuccess,
  postSellError,
  postPurchaseRequest,
  postPurchaseSuccess,
  postPurchaseError,
};
