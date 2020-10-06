import { AxiosResponse } from 'axios';
import { IPositionResponse } from '../meta-data/interfaces/IPosition';
import api from './api';

const Crypto = {
  async getPrices(): Promise<AxiosResponse<{ buy: number; sell: number }>> {
    return (await api.get('/btc/price')).data;
  },
  async getPosition(): Promise<AxiosResponse<IPositionResponse[]>> {
    return (await api.get('/btc')).data;
  },
};

export default Crypto;
