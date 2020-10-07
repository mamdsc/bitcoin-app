import { IError } from '../../../meta-data/interfaces/IError';
import { IHistoryPrice } from '../../../meta-data/interfaces/IHistoryPrice';

export type IHistoryState = {
  readonly historyPrice: IHistoryPrice[];
  readonly isLoadingHistoryPrices: boolean;
  readonly errorHistoryPrices: IError;
};

export const HistoryActionTypes = {
  FETCH_HISTORY_REQUEST: '@@history/FETCH_HISTORY_REQUEST',
  FETCH_HISTORY_SUCCESS: '@@history/FETCH_HISTORY_SUCCESS',
  FETCH_HISTORY_ERROR: '@@history/FETCH_HISTORY_ERROR',
};
