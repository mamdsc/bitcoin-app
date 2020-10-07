import { IError } from '../../../meta-data/interfaces/IError';
import { IExtract } from '../../../meta-data/interfaces/IExtract';

export type IExtractState = {
  readonly listExtract: IExtract[];
  readonly isLoadingExtract: boolean;
  readonly errorExtract: IError;
};

export const ExtractActionTypes = {
  FETCH_EXTRACT_REQUEST: '@@extract/FETCH_EXTRACT_REQUEST',
  FETCH_EXTRACT_SUCCESS: '@@extract/FETCH_EXTRACT_SUCCESS',
  FETCH_EXTRACT_ERROR: '@@extract/FETCH_EXTRACT_ERROR',
};
