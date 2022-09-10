export enum PrevioslyQuestionActionTypes {
  PREVIOSLY_QUESTION_FAIL = 'PREVIOSLY_QUESTION_FAIL',
  PREVIOSLY_QUESTION_TRUE = 'PREVIOSLY_QUESTION_TRUE',
}

export interface IPrevioslyQuestionActionFail {
  type: PrevioslyQuestionActionTypes.PREVIOSLY_QUESTION_FAIL;
}

export interface IPrevioslyQuestionActionTrue {
  type: PrevioslyQuestionActionTypes.PREVIOSLY_QUESTION_TRUE;
}

export type IPrevioslyQuestionAction = IPrevioslyQuestionActionFail | IPrevioslyQuestionActionTrue;
