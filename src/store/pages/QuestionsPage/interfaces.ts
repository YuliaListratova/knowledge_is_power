// export interface ITodosState {
//   todosData: ITodo[];
//   loading: boolean;
//   error: string | null;
// }
export interface IData {
  amount: -1;
  ok: boolean;
  data: Array<IUsersData>;
}

export interface IUsers {
  isLoading: boolean;
  data: IData | null;
  // amount: -1;
  error: boolean | null;
}

export enum QuestionsActionTypes {
  FETCH_QUESTIONS = 'FETCH_QUESTIONS',
  FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS',
  FETCH_QUESTIONS_FAILURE = 'FETCH_QUESTIONS_FAILURE',
}

// export interface ITodo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }
export type IAnswers = [string, string, string, string];

export interface IUsersData {
  question: string;
  answers: IAnswers;
  id: 0;
}

export interface IFetchQuestionsAction {
  type: QuestionsActionTypes.FETCH_QUESTIONS;
}

export interface IFetchQuestionsSuccessAction {
  type: QuestionsActionTypes.FETCH_QUESTIONS_SUCCESS;
  payload: IData;
}

export interface IFetchQuestionsFailureAction {
  type: QuestionsActionTypes.FETCH_QUESTIONS_FAILURE;
  payload: string;
}

export type IFetchQuestionsActions =
  | IFetchQuestionsAction
  | IFetchQuestionsSuccessAction
  | IFetchQuestionsFailureAction;