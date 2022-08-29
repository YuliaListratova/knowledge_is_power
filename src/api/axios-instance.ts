import axios from 'axios';

const baseUrl = 'https://lip2.xyz/api/millionaire.php';

export const $api = axios.create({
  timeout: 10000,
  baseURL: baseUrl,
  headers: {
    Authorization: '',
  },
});
