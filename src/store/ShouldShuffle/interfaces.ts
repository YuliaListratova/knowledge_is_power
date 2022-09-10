export enum ShouldShuffleActionTypes {
  SET_IS_SHOULD_SHUFFLE_TRUE = 'SET_IS_SHOULD_SHUFFLE_TRUE',
  SET_IS_SHOULD_SHUFFLE_FALSE = 'SET_IS_SHOULD_SHUFFLE_FALSE',
}

export interface IShouldShuffleTrueAction {
  type: ShouldShuffleActionTypes.SET_IS_SHOULD_SHUFFLE_TRUE;
}

export interface IShouldShuffleFalseAction {
  type: ShouldShuffleActionTypes.SET_IS_SHOULD_SHUFFLE_FALSE;
}

export type IShouldShuffleAction = IShouldShuffleTrueAction | IShouldShuffleFalseAction;
