import { all } from 'redux-saga/effects';
import accountSaga from './account/sagas';
import cryptoSaga from './crypto/sagas';
import historySaga from './history/sagas';

export default function* rootSaga() {
  yield all([accountSaga, cryptoSaga, historySaga]);
}
