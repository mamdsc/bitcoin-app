import { put, all, takeLatest, call } from 'redux-saga/effects';
import Account from '../../../services/account';
import { formatCurrency } from '../../../utils/formatCurrency';
import { fetchBalanceError, fetchBalanceSuccess } from './actions';
import { AccountActionTypes } from './types';

function* handleBalance() {
  try {
    const response = yield call(Account.getBalance);
    yield put(fetchBalanceSuccess(formatCurrency(response.balance)));
  } catch (err) {
    yield put(fetchBalanceError(err));
  }
}

export default all([
  takeLatest(AccountActionTypes.FETCH_BALANCE_REQUEST, handleBalance),
]);
