import { IError } from '../../../meta-data/interfaces/IError';
import { IPrice } from '../../../meta-data/interfaces/IPrice';

export type ICryptoState = {
  readonly prices: IPrice;
  readonly isLoadingPrices: boolean;
  readonly errorPrices: IError;
};

export const CryptoActionTypes = {
  FETCH_PRICE_REQUEST: '@@price/FETCH_PRICE_REQUEST',
  FETCH_PRICE_SUCCESS: '@@price/FETCH_PRICE_SUCCESS',
  FETCH_PRICE_ERROR: '@@price/FETCH_PRICE_ERROR',
};
