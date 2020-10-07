import { IError } from '../../../meta-data/interfaces/IError';
import { IPosition } from '../../../meta-data/interfaces/IPosition';
import { IPrice } from '../../../meta-data/interfaces/IPrice';
import { IPurchase } from '../../../meta-data/interfaces/IPurchase';

export type ICryptoState = {
  readonly prices: IPrice;
  readonly isLoadingPrices: boolean;
  readonly errorPrices: IError;
  readonly position: IPosition[];
  readonly isLoadingPosition: boolean;
  readonly errorPosition: IError;
  readonly sell: boolean;
  readonly isLoadingSell: boolean;
  readonly errorSell: IError;
  readonly purchase: IPurchase;
  readonly isLoadingPurchase: boolean;
  readonly errorPurchase: IError;
};

export const CryptoActionTypes = {
  FETCH_PRICE_REQUEST: '@@crypto/FETCH_PRICE_REQUEST',
  FETCH_PRICE_SUCCESS: '@@crypto/FETCH_PRICE_SUCCESS',
  FETCH_PRICE_ERROR: '@@crypto/FETCH_PRICE_ERROR',
  FETCH_POSITION_REQUEST: '@@crypto/FETCH_POSITION_REQUEST',
  FETCH_POSITION_SUCCESS: '@@crypto/FETCH_POSITION_SUCCESS',
  FETCH_POSITION_ERROR: '@@crypto/FETCH_POSITION_ERROR',
  POST_SELL_REQUEST: '@@crypto/POST_SELL_REQUEST',
  POST_SELL_SUCCESS: '@@crypto/POST_SELL_SUCCESS',
  POST_SELL_ERROR: '@@crypto/POST_SELL_ERROR',
  POST_PURCHASE_REQUEST: '@@crypto/POST_PURCHASE_REQUEST',
  POST_PURCHASE_SUCCESS: '@@crypto/POST_PURCHASE_SUCCESS',
  POST_PURCHASE_ERROR: '@@crypto/POST_PURCHASE_ERROR',
};
