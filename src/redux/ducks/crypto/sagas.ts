import { put, all, takeLatest, call } from 'redux-saga/effects';
import Crypto from '../../../services/crypto';
import { formatCurrency } from '../../../utils/formatCurrency';
import { fetchPricesError, fetchPricesSuccess } from './actions';
import { CryptoActionTypes } from './types';

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

export default all([
  takeLatest(CryptoActionTypes.FETCH_PRICE_REQUEST, handlePrice),
]);
