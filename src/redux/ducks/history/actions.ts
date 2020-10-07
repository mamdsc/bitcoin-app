import { HistoryActionTypes } from './types';
import { IReducerAction } from '../rootReducer';
import { IHistoryPrice } from '../../../meta-data/interfaces/IHistoryPrice';
import { IError } from '../../../meta-data/interfaces/IError';

const fetchHistoryPriceRequest = () => ({
  type: HistoryActionTypes.FETCH_HISTORY_REQUEST,
});

const fetchHistoryPriceSuccess = (
  price: IHistoryPrice[],
): IReducerAction<IHistoryPrice[]> => ({
  type: HistoryActionTypes.FETCH_HISTORY_SUCCESS,
  payload: price,
});

const fetchHistoryPriceError = (message: IError): IReducerAction<IError> => ({
  type: HistoryActionTypes.FETCH_HISTORY_ERROR,
  payload: message,
});

export {
  fetchHistoryPriceRequest,
  fetchHistoryPriceSuccess,
  fetchHistoryPriceError,
};
