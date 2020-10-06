import { AxiosResponse } from 'axios';
import api from './api';

const Account = {
  async getBalance(): Promise<AxiosResponse<{ balance: number }>> {
    return (await api.get('/account/balance')).data;
  },
  async getDeposit(
    amount: number,
  ): Promise<AxiosResponse<{ balance: number }>> {
    return (
      await api.post('/account/deposit', {
        amount,
      })
    ).data;
  },
};

export default Account;
