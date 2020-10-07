import { AxiosResponse } from 'axios';
import { IExtractResponse } from '../meta-data/interfaces/IExtract';
import api from './api';

const ExtractService = {
  async getExtract(): Promise<AxiosResponse<IExtractResponse[]>> {
    return (await api.get('/extract')).data;
  },
};

export default ExtractService;
