import { AxiosResponse } from 'axios';
import { IPositionResponse } from '../meta-data/interfaces/IPosition';
import api from './api';

const Crypto = {
  async getPosition(): Promise<AxiosResponse<IPositionResponse[]>> {
    return (await api.get('/btc')).data;
  },
  async getPrices(): Promise<AxiosResponse<{ buy: number; sell: number }>> {
    return (await api.get('/btc/price')).data;
  },
  async postSell(amount: number): Promise<AxiosResponse<boolean>> {
    return (
      await api.post('/btc/sell', {
        amount,
      })
    ).data;
  },
};

export default Crypto;
