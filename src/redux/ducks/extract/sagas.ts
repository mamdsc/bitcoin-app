import { put, all, takeLatest, call } from 'redux-saga/effects';
import { format } from 'date-fns';
import { ExtractActionTypes } from './types';
import { fetchExtractError, fetchExtractSuccess } from './actions';
import { DAY_MONTH_YEAR_HOUR } from '../../../utils/constants';
import ExtractService from '../../../services/extract';
import {
  IExtract,
  IExtractResponse,
} from '../../../meta-data/interfaces/IExtract';
import { formatCurrency } from '../../../utils/formatCurrency';
import { ETypeExtract } from '../../../meta-data/enums/ETypeExtract';

function* handleExtract() {
  try {
    const response: IExtractResponse[] = yield call(ExtractService.getExtract);

    const formatResponse: IExtract[] = response.map(resp => ({
      type: ETypeExtract[resp.type],
      value: formatCurrency(resp.value),
      id: resp.id,
      createdAt: format(new Date(resp.createdAt), DAY_MONTH_YEAR_HOUR),
    }));
    yield put(fetchExtractSuccess(formatResponse));
  } catch (err) {
    yield put(fetchExtractError(err));
  }
}

export default all([
  takeLatest(ExtractActionTypes.FETCH_EXTRACT_REQUEST, handleExtract),
]);
