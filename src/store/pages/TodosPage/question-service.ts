// import { $api } from '../../../api/api-instance';

// export const TodosService = {
//   getTodos: (params: { _page: number; _limit: number }) => $api.get('/todos', { params }),
// };

// import { $api } from '../../../api/axios-instance';

// export const QuestionService = {
//   getQuestions: (params: { _typeQ: string; _count: string }) => $api.get('?', { params }),
// };

import { $api } from '../../../api/axios-instance';

export const QuestionService = {
  getQuestions: (params: { qType: number; count: number }) =>
    $api.get('/millionaire.php', { params }),
};

// 'https://lip2.xyz/api/millionaire.php?qType=1&count=5'
