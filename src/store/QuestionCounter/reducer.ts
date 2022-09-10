import { IQuestionCounterAction, QuestionCounterActionTypes } from './interfaces';

const initialState = 0;

export const QuestionCounterReducer = (
  state: number = initialState,
  action: IQuestionCounterAction
): number => {
  switch (action.type) {
    case QuestionCounterActionTypes.SET_NEXT_QUESTION:
      return state + 1;
    case QuestionCounterActionTypes.START_NEW_GAME:
      return 0;
    default:
      return state;
  }
};
