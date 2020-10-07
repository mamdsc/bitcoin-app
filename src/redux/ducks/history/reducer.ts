import { HistoryActionTypes, IHistoryState } from './types';
import { IReducerAction } from '../rootReducer';
import { IError } from '../../../meta-data/interfaces/IError';
import { IHistoryPrice } from '../../../meta-data/interfaces/IHistoryPrice';

const INITIAL_STATE: IHistoryState = {
  historyPrice: {} as IHistoryPrice[],
  isLoadingHistoryPrices: false,
  errorHistoryPrices: {} as IError,
};

export default function accountReducer(
  state = INITIAL_STATE,
  action: IReducerAction<IHistoryPrice[] | IError>,
) {
  switch (action.type) {
    case HistoryActionTypes.FETCH_HISTORY_REQUEST: {
      return {
        ...state,
        isLoadingHistoryPrices: true,
      };
    }
    case HistoryActionTypes.FETCH_HISTORY_SUCCESS: {
      return {
        ...state,
        isLoadingHistoryPrices: false,
        historyPrice: action.payload as IHistoryPrice[],
        errorHistoryPrices: {} as IError,
      };
    }
    case HistoryActionTypes.FETCH_HISTORY_ERROR: {
      return {
        ...state,
        isLoadingHistoryPrices: false,
        errorHistoryPrices: action.payload as IError,
      };
    }
    default:
      return state;
  }
}
