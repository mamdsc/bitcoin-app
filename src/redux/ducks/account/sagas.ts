import { put, all, takeLatest, call } from 'redux-saga/effects';
import AccountService from '../../../services/account';
import { formatCurrency } from '../../../utils/formatCurrency';
import { IReducerAction } from '../rootReducer';
import {
  fetchBalanceError,
  fetchBalanceSuccess,
  postDepositSuccess,
} from './actions';
import { AccountActionTypes } from './types';

function* handleBalance() {
  try {
    const response = yield call(AccountService.getBalance);
    yield put(fetchBalanceSuccess(formatCurrency(response.balance)));
  } catch (err) {
    yield put(fetchBalanceError(err));
  }
}

function* handleDeposit(action: IReducerAction<number>) {
  try {
    const response = yield call(AccountService.postDeposit, action.payload);
    yield put(postDepositSuccess(formatCurrency(response.balance)));
  } catch (err) {
    yield put(fetchBalanceError(err));
  }
}

export default all([
  takeLatest(AccountActionTypes.FETCH_BALANCE_REQUEST, handleBalance),
  takeLatest(AccountActionTypes.POST_DEPOSIT_REQUEST, handleDeposit),
]);
