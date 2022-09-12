import { $api } from '../../../api/axios-instance';

export const QuestionService = {
  getQuestions: (params: { qType: number; count: number }) =>
    $api.get('/millionaire.php', { params }),
};
