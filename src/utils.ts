// import { IUsersData } from "./store/pages/QuestionsPage/interfaces";

export const shuffle = (array: Array<0 | 1 | 2 | 3>): Array<0 | 1 | 2 | 3> => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

// const getShuffleLettersInAnswers = (currentData: IUsersData): IUsersData => {
//     const { answers } = currentData;
//     const
// }
