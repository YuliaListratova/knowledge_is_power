import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { QuestionsReducer } from './pages/QuestionsPage/reducer';

const reducers = {
  questions: QuestionsReducer,
};

export const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
