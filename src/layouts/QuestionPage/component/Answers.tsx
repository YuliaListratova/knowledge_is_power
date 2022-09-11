import Answer from './Answer';
import style from '../Game.module.scss';
import { IUsersData } from '../../../store/pages/QuestionsPage/interfaces';
import { shuffle } from '../../../utils';

interface IAnswersProps {
  currentData: IUsersData;
  selectAnswer: (isTrueAnswer: boolean) => void;
}

export const Answers = ({ currentData, selectAnswer }: IAnswersProps) => {
  const answers = shuffle([0, 1, 2, 3]) as Array<0 | 1 | 2 | 3>;
  const handleSelectAnswer = (isTrueAnswer: boolean) => selectAnswer(isTrueAnswer);
  return (
    <div className={style.all_answer}>
      {answers.map((answer) => (
        <Answer key={answer} quest={currentData} answer={answer} onClick={handleSelectAnswer} />
      ))}
    </div>
  );
};
