import { put, all, takeLatest, call } from 'redux-saga/effects';
import { VolumeActionTypes } from './types';
import { fetchVolumeError, fetchVolumeSuccess } from './actions';
import VolumeService from '../../../services/volume';
import { IVolume } from '../../../meta-data/interfaces/IVolume';
import { formatCurrency } from '../../../utils/formatCurrency';

function* handleVolume() {
  try {
    const response = yield call(VolumeService.getVolume);

    const formatResponse: IVolume = {
      buy: formatCurrency(response.buy),
      sell: formatCurrency(response.sell),
    };

    yield put(fetchVolumeSuccess(formatResponse));
  } catch (err) {
    yield put(fetchVolumeError(err));
  }
}

export default all([
  takeLatest(VolumeActionTypes.FETCH_VOLUME_REQUEST, handleVolume),
]);
