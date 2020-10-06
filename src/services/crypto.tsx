import { AxiosResponse } from 'axios';
import api from './api';

const Crypto = {
  async getPrices(): Promise<AxiosResponse<{ buy: number; sell: number }>> {
    return (await api.get('/btc/price')).data;
  },
};

export default Crypto;
