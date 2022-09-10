import { IShouldShuffleAction, ShouldShuffleActionTypes } from './interfaces';

const initialState = false;

export const ShouldShuffleReducer = (
  state: boolean = initialState,
  action: IShouldShuffleAction
): boolean => {
  switch (action.type) {
    case ShouldShuffleActionTypes.SET_IS_SHOULD_SHUFFLE_TRUE:
      return true;
    case ShouldShuffleActionTypes.SET_IS_SHOULD_SHUFFLE_FALSE:
      return false;
    default:
      return state;
  }
};
