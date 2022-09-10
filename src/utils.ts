import { IAnswers, IUsersData } from './store/pages/QuestionsPage/interfaces';

type Shuffle<T> = (array: Array<T>) => Array<T>;

export const shuffle: Shuffle<0 | 1 | 2 | 3 | string> = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export const getShuffleLettersInAnswers = (currentData: IUsersData): IUsersData => {
  const { answers } = currentData;
  const shuffleAnswers = answers.map((answer) => {
    const arrayAnswer = answer.split('');
    const shuffleArrayAnswer = shuffle(arrayAnswer);
    return shuffleArrayAnswer.join('');
  });
  return {
    ...currentData,
    answers: shuffleAnswers as IAnswers,
  };
};
