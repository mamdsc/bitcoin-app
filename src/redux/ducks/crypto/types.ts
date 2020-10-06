import { IError } from '../../../meta-data/interfaces/IError';
import { IPosition } from '../../../meta-data/interfaces/IPosition';
import { IPrice } from '../../../meta-data/interfaces/IPrice';

export type ICryptoState = {
  readonly prices: IPrice;
  readonly isLoadingPrices: boolean;
  readonly errorPrices: IError;
  readonly position: IPosition[];
  readonly isLoadingPosition: boolean;
  readonly errorPosition: IError;
};

export const CryptoActionTypes = {
  FETCH_PRICE_REQUEST: '@@price/FETCH_PRICE_REQUEST',
  FETCH_PRICE_SUCCESS: '@@price/FETCH_PRICE_SUCCESS',
  FETCH_PRICE_ERROR: '@@price/FETCH_PRICE_ERROR',
  FETCH_POSITION_REQUEST: '@@position/FETCH_POSITION_REQUEST',
  FETCH_POSITION_SUCCESS: '@@position/FETCH_POSITION_SUCCESS',
  FETCH_POSITION_ERROR: '@@position/FETCH_POSITION_ERROR',
};
