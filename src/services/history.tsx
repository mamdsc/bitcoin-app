import { AxiosResponse } from 'axios';
import { IHistoryPriceResponse } from '../meta-data/interfaces/IHistoryPrice';
import api from './api';

const History = {
  async getHistoryPrices(): Promise<AxiosResponse<IHistoryPriceResponse[]>> {
    return (await api.get('/history')).data;
  },
};

export default History;
