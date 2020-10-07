import { AxiosResponse } from 'axios';
import { IPositionResponse } from '../meta-data/interfaces/IPosition';
import { IPurchase } from '../meta-data/interfaces/IPurchase';
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
  async postPurchase(amount: number): Promise<AxiosResponse<IPurchase>> {
    return (
      await api.post('/btc/purchase', {
        amount,
      })
    ).data;
  },
};

export default Crypto;
