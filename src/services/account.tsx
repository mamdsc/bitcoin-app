import { AxiosResponse } from 'axios';
import api from './api';

const Account = {
  async getBalance(): Promise<AxiosResponse<{ balance: number }>> {
    return (await api.get('/account/balance')).data;
  },
};

export default Account;
