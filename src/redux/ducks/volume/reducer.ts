import { VolumeActionTypes, IVolumeState } from './types';
import { IReducerAction } from '../rootReducer';
import { IError } from '../../../meta-data/interfaces/IError';
import { IVolume } from '../../../meta-data/interfaces/IVolume';

const INITIAL_STATE: IVolumeState = {
  volume: {} as IVolume,
  isLoadingVolume: false,
  errorVolume: {} as IError,
};

export default function extractReducer(
  state = INITIAL_STATE,
  action: IReducerAction<IVolume | IError>,
) {
  switch (action.type) {
    case VolumeActionTypes.FETCH_VOLUME_REQUEST: {
      return {
        ...state,
        isLoadingVolume: true,
      };
    }
    case VolumeActionTypes.FETCH_VOLUME_SUCCESS: {
      return {
        ...state,
        isLoadingVolume: false,
        volume: action.payload as IVolume,
        errorVolume: {} as IError,
      };
    }
    case VolumeActionTypes.FETCH_VOLUME_ERROR: {
      return {
        ...state,
        isLoadingVolume: false,
        errorVolume: action.payload as IError,
      };
    }
    default:
      return state;
  }
}
