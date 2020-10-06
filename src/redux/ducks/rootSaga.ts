import { all } from 'redux-saga/effects';
import accountSaga from './account/sagas';
import cryptoSaga from './crypto/sagas';

export default function* rootSaga() {
  yield all([accountSaga, cryptoSaga]);
}
