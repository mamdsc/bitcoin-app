import axios from 'axios';

const api = axios.create({
  baseURL: 'https://desafio-api.devzz.ninja',
});

api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response && error.response.data) {
      if (error.response.data.name === 'TokenExpiredError') {
        localStorage.removeItem('@BitcoinApp:token');
        document.location.reload(true);
      }
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  },
);

export default api;
