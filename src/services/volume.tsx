import { AxiosResponse } from 'axios';
import api from './api';

const VolumeService = {
  async getVolume(): Promise<AxiosResponse<{ buy: number; sell: number }>> {
    return (await api.get('/volume')).data;
  },
};

export default VolumeService;
