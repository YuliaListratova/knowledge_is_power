import Answer from './Answer';
import style from '../Game.module.scss';
import { IUsersData } from '../../../store/pages/QuestionsPage/interfaces';
import { shuffle } from '../../../utils';

interface IAnswersProps {
  currentData: IUsersData;
  selectAnswer: (isTrueAnswer: boolean) => void;
}

export const Answers = ({ currentData, selectAnswer }: IAnswersProps) => {
  const [answer1, answer2, answer3, answer4] = shuffle([0, 1, 2, 3]);
  const handleSelectAnswer = (isTrueAnswer: boolean) => selectAnswer(isTrueAnswer);
  return (
    <div className={style.all_answer}>
      <button className={style.button_answer} type="button">
        <Answer quest={currentData} answer={answer1} onClick={handleSelectAnswer} />
      </button>
      <button className={style.button_answer} type="button">
        <Answer quest={currentData} answer={answer2} onClick={handleSelectAnswer} />
      </button>

      <button className={style.button_answer} type="button">
        <Answer quest={currentData} answer={answer3} onClick={handleSelectAnswer} />
      </button>
      <button className={style.button_answer} type="button">
        <Answer quest={currentData} answer={answer4} onClick={handleSelectAnswer} />
      </button>
    </div>
  );
};
