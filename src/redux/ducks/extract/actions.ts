import { ExtractActionTypes } from './types';
import { IReducerAction } from '../rootReducer';
import { IExtract } from '../../../meta-data/interfaces/IExtract';
import { IError } from '../../../meta-data/interfaces/IError';

const fetchExtractRequest = (
  startDate: string,
  endDate: string,
): IReducerAction<{ startDate: string; endDate: string }> => ({
  type: ExtractActionTypes.FETCH_EXTRACT_REQUEST,
  payload: { startDate, endDate },
});

const fetchExtractSuccess = (
  extract: IExtract[],
): IReducerAction<IExtract[]> => ({
  type: ExtractActionTypes.FETCH_EXTRACT_SUCCESS,
  payload: extract,
});

const fetchExtractError = (message: IError): IReducerAction<IError> => ({
  type: ExtractActionTypes.FETCH_EXTRACT_ERROR,
  payload: message,
});

export { fetchExtractRequest, fetchExtractSuccess, fetchExtractError };
