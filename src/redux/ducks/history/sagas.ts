import { put, all, takeLatest, call } from 'redux-saga/effects';
import { format, isAfter } from 'date-fns';
import History from '../../../services/history';
import { HistoryActionTypes } from './types';
import { IHistoryPriceResponse } from '../../../meta-data/interfaces/IHistoryPrice';
import { fetchHistoryPriceError, fetchHistoryPriceSuccess } from './actions';
import { DAY_MONTH_YEAR_HOUR } from '../../../utils/constants';

function* handleHistoryPrice() {
  try {
    const response: IHistoryPriceResponse[] = yield call(
      History.getHistoryPrices,
    );

    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setDate(twentyFourHoursAgo.getDate() - 1);

    const filterResponse = response.filter(resp =>
      isAfter(new Date(resp.createdAt), twentyFourHoursAgo),
    );

    const formatResponse: IHistoryPriceResponse[] = filterResponse.map(
      resp => ({
        buy: resp.buy,
        sell: resp.sell,
        createdAt: format(new Date(resp.createdAt), DAY_MONTH_YEAR_HOUR),
      }),
    );
    yield put(fetchHistoryPriceSuccess(formatResponse));
  } catch (err) {
    yield put(fetchHistoryPriceError(err));
  }
}

export default all([
  takeLatest(HistoryActionTypes.FETCH_HISTORY_REQUEST, handleHistoryPrice),
]);
