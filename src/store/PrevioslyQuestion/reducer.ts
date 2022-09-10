import { IPrevioslyQuestionAction, PrevioslyQuestionActionTypes } from './interfaces';

const initialState = false;

export const PrevioslyQuestionFailReducer = (
  state: boolean = initialState,
  action: IPrevioslyQuestionAction
): boolean => {
  switch (action.type) {
    case PrevioslyQuestionActionTypes.PREVIOSLY_QUESTION_FAIL:
      return true;
    case PrevioslyQuestionActionTypes.PREVIOSLY_QUESTION_TRUE:
      return false;
    default:
      return state;
  }
};
