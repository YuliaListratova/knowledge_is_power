import { $api } from '../../api/axios-instance';

export const QuestionService = {
  getQuestion: () => $api.get('?qType=1&count=5'),
};
