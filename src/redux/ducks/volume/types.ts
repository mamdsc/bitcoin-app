import { IError } from '../../../meta-data/interfaces/IError';
import { IVolume } from '../../../meta-data/interfaces/IVolume';

export type IVolumeState = {
  readonly volume: IVolume;
  readonly isLoadingVolume: boolean;
  readonly errorVolume: IError;
};

export const VolumeActionTypes = {
  FETCH_VOLUME_REQUEST: '@@volume/FETCH_VOLUME_REQUEST',
  FETCH_VOLUME_SUCCESS: '@@volume/FETCH_VOLUME_SUCCESS',
  FETCH_VOLUME_ERROR: '@@volume/FETCH_VOLUME_ERROR',
};
