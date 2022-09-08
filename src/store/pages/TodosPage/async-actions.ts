import { Dispatch } from 'redux';
import { IFetchQuestionsActions, QuestionsActionTypes } from './interfaces';
import { QuestionService } from './question-service';

export const fetchQuestions = ({ qType, count }: { qType: number; count: number }) => {
  return async (dispatch: Dispatch<IFetchQuestionsActions>) => {
    try {
      dispatch({ type: QuestionsActionTypes.FETCH_QUESTIONS });
      const response = await QuestionService.getQuestions({ qType, count });
      dispatch({ type: QuestionsActionTypes.FETCH_QUESTIONS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: QuestionsActionTypes.FETCH_QUESTIONS_FAILURE, payload: 'Ошибка' });
    }
  };
};
