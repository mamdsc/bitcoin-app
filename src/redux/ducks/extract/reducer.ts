import { ExtractActionTypes, IExtractState } from './types';
import { IReducerAction } from '../rootReducer';
import { IError } from '../../../meta-data/interfaces/IError';
import { IExtract } from '../../../meta-data/interfaces/IExtract';

const INITIAL_STATE: IExtractState = {
  listExtract: [],
  isLoadingExtract: false,
  errorExtract: {} as IError,
};

export default function extractReducer(
  state = INITIAL_STATE,
  action: IReducerAction<IExtract[] | IError>,
) {
  switch (action.type) {
    case ExtractActionTypes.FETCH_EXTRACT_REQUEST: {
      return {
        ...state,
        isLoadingExtract: true,
      };
    }
    case ExtractActionTypes.FETCH_EXTRACT_SUCCESS: {
      return {
        ...state,
        isLoadingExtract: false,
        listExtract: action.payload as IExtract[],
        errorExtract: {} as IError,
      };
    }
    case ExtractActionTypes.FETCH_EXTRACT_ERROR: {
      return {
        ...state,
        isLoadingExtract: false,
        errorExtract: action.payload as IError,
      };
    }
    default:
      return state;
  }
}
