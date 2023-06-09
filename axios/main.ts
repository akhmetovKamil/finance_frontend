import { base } from '@/axios/base';
import { AxiosResponse } from 'axios';

export const mainApi = {
  getBalance(): Promise<number> {
    return base.get('/balance/get')
    .then(data => data.data)
  },
  //other fetchs
};
