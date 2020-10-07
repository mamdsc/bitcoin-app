import { VolumeActionTypes } from './types';
import { IReducerAction } from '../rootReducer';
import { IVolume } from '../../../meta-data/interfaces/IVolume';
import { IError } from '../../../meta-data/interfaces/IError';

const fetchVolumeRequest = () => ({
  type: VolumeActionTypes.FETCH_VOLUME_REQUEST,
});

const fetchVolumeSuccess = (volume: IVolume): IReducerAction<IVolume> => ({
  type: VolumeActionTypes.FETCH_VOLUME_SUCCESS,
  payload: volume,
});

const fetchVolumeError = (message: IError): IReducerAction<IError> => ({
  type: VolumeActionTypes.FETCH_VOLUME_ERROR,
  payload: message,
});

export { fetchVolumeRequest, fetchVolumeSuccess, fetchVolumeError };
