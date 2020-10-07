import { put, all, takeLatest, call } from 'redux-saga/effects';
import { format, isAfter, isBefore, isEqual, isSameDay } from 'date-fns';
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
import { IReducerAction } from '../rootReducer';

function* handleExtract(
  action: IReducerAction<{ startDate: string; endDate: string }>,
) {
  try {
    const response: IExtractResponse[] = yield call(ExtractService.getExtract);

    const payloadStart = new Date(action.payload.startDate);
    const payloadEnd = new Date(action.payload.endDate);

    let filterResponse: IExtractResponse[] = [];

    if (isEqual(payloadStart, payloadEnd)) {
      filterResponse = response.filter(resp =>
        isSameDay(new Date(resp.createdAt), payloadStart),
      );
    } else {
      filterResponse = response.filter(
        resp =>
          isAfter(new Date(resp.createdAt), payloadStart) &&
          isBefore(new Date(resp.createdAt), payloadEnd),
      );
    }

    const formatResponse: IExtract[] = filterResponse.map(resp => ({
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
