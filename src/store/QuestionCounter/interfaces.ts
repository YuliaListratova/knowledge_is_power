export enum QuestionCounterActionTypes {
  SET_NEXT_QUESTION = 'SET_NEXT_QUESTION',
  START_NEW_GAME = 'START_NEW_GAME',
}

export interface IQuestionCounterNextAction {
  type: QuestionCounterActionTypes.SET_NEXT_QUESTION;
}

export interface IQuestionCounterNewGameAction {
  type: QuestionCounterActionTypes.START_NEW_GAME;
}

export type IQuestionCounterAction = IQuestionCounterNextAction | IQuestionCounterNewGameAction;
