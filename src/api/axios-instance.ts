import axios from 'axios';

export const baseUrl = 'https://lip2.xyz/api';

export const $api = axios.create({
  timeout: 10000,
  baseURL: baseUrl,
});

// https://lip2.xyz/api/millionaire.php?qType=1&count=5

// qType - Тип вопроса.
// count - Количество вопросов (в пределах от 1 до 5).
