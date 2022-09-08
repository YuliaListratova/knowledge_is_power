import { IFetchQuestionsActions, IUsers, QuestionsActionTypes } from './interfaces';

const initialState: IUsers = {
  data: [],
  isLoading: false,
  // amount: -1,
  error: null,
};

export const QuestionsReducer = (
  state: IUsers = initialState,
  action: IFetchQuestionsActions
): IUsers => {
  switch (action.type) {
    case QuestionsActionTypes.FETCH_QUESTIONS:
      return { isLoading: true, error: null, data: [] };
    case QuestionsActionTypes.FETCH_QUESTIONS_SUCCESS:
      return { isLoading: false, error: null, data: action.payload };
    case QuestionsActionTypes.FETCH_QUESTIONS_FAILURE:
      return { isLoading: false, error: true, data: [] };
    default:
      return state;
  }
};
