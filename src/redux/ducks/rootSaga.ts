import { all } from 'redux-saga/effects';
import accountSaga from './account/sagas';
import cryptoSaga from './crypto/sagas';
import historySaga from './history/sagas';
import extractSaga from './extract/sagas';
import volumeSaga from './volume/sagas';

export default function* rootSaga() {
  yield all([accountSaga, cryptoSaga, historySaga, extractSaga, volumeSaga]);
}
