import { put, all, takeLatest, call, select } from 'redux-saga/effects';
import { format } from 'date-fns';
import {
  IPosition,
  IPositionResponse,
} from '../../../meta-data/interfaces/IPosition';
import CryptoService from '../../../services/crypto';
import { formatCurrency } from '../../../utils/formatCurrency';
import {
  fetchPositionError,
  fetchPositionSuccess,
  fetchPricesError,
  fetchPricesSuccess,
  postPurchaseError,
  postPurchaseSuccess,
  postSellError,
  postSellSuccess,
} from './actions';
import { CryptoActionTypes } from './types';
import { DAY_MONTH_YEAR_HOUR } from '../../../utils/constants';
import { IReducerAction } from '../rootReducer';
import { fetchBalanceRequest } from '../account/actions';
import { IPrice } from '../../../meta-data/interfaces/IPrice';
import { IAppState } from '../..';

function* handlePrice() {
  try {
    const response: IPrice = yield call(CryptoService.getPrices);
    yield put(
      fetchPricesSuccess({
        buy: response.buy,
        sell: response.sell,
        buyFormated: formatCurrency(response.buy),
        sellFormated: formatCurrency(response.sell),
      }),
    );
  } catch (err) {
    yield put(fetchPricesError(err));
  }
}

function* handlePosition() {
  try {
    const response: IPositionResponse[] = yield call(CryptoService.getPosition);
    const formatResponse: IPosition[] = response.map(resp => ({
      id: resp.id,
      key: resp.id,
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

function* handleSell(action: IReducerAction<number>) {
  try {
    const cryptoSell: number = yield select(
      (state: IAppState) => state.crypto.prices.sell,
    );
    const amount = action.payload / cryptoSell;
    const response = yield call(CryptoService.postSell, amount);
    yield put(postSellSuccess(response));
    yield put(fetchBalanceRequest());
  } catch (err) {
    yield put(postSellError(err));
  }
}

function* handlePurchase(action: IReducerAction<number>) {
  try {
    const response = yield call(CryptoService.postPurchase, action.payload);
    yield put(postPurchaseSuccess(response));
    yield put(fetchBalanceRequest());
  } catch (err) {
    yield put(postPurchaseError(err));
  }
}

export default all([
  takeLatest(CryptoActionTypes.FETCH_PRICE_REQUEST, handlePrice),
  takeLatest(CryptoActionTypes.FETCH_POSITION_REQUEST, handlePosition),
  takeLatest(CryptoActionTypes.POST_SELL_REQUEST, handleSell),
  takeLatest(CryptoActionTypes.POST_PURCHASE_REQUEST, handlePurchase),
]);
