import { put, all, takeLatest, call } from 'redux-saga/effects';
import { format } from 'date-fns';
import {
  IPosition,
  IPositionResponse,
} from '../../../meta-data/interfaces/IPosition';
import Crypto from '../../../services/crypto';
import { formatCurrency } from '../../../utils/formatCurrency';
import {
  fetchPositionError,
  fetchPositionSuccess,
  fetchPricesError,
  fetchPricesSuccess,
} from './actions';
import { CryptoActionTypes } from './types';
import { DAY_MONTH_YEAR_HOUR } from '../../../utils/constants';

function* handlePrice() {
  try {
    const response = yield call(Crypto.getPrices);
    yield put(
      fetchPricesSuccess({
        buy: formatCurrency(response.buy),
        sell: formatCurrency(response.sell),
      }),
    );
  } catch (err) {
    yield put(fetchPricesError(err));
  }
}

function* handlePosition() {
  try {
    const response: IPositionResponse[] = yield call(Crypto.getPosition);
    const formatResponse: IPosition[] = response.map(resp => ({
      id: resp.id,
      purchasedBtcAmount: formatCurrency(resp.purchasedBtcAmount),
      variation: formatCurrency(resp.variation),
      currentBtcAmount: formatCurrency(resp.currentBtcAmount),
      purchaseAmount: formatCurrency(resp.purchaseAmount),
      purchasedDate: format(new Date(resp.purchasedDate), DAY_MONTH_YEAR_HOUR),
    }));
    yield put(fetchPositionSuccess(formatResponse));
  } catch (err) {
    yield put(fetchPositionError(err));
  }
}

export default all([
  takeLatest(CryptoActionTypes.FETCH_PRICE_REQUEST, handlePrice),
  takeLatest(CryptoActionTypes.FETCH_POSITION_REQUEST, handlePosition),
]);
