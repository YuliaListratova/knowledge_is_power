import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { QuestionsReducer } from './pages/QuestionsPage/reducer';
import { PrevioslyQuestionFailReducer } from './PrevioslyQuestion/reducer';
import { QuestionCounterReducer } from './QuestionCounter/reducer';
import { ShouldShuffleReducer } from './ShouldShuffle/reducer';

const reducers = {
  questions: QuestionsReducer,
  isPrevioslyQuestionFail: PrevioslyQuestionFailReducer,
  questionCounter: QuestionCounterReducer,
  shouldShuffle: ShouldShuffleReducer,
};

export const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
