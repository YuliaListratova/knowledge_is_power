import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
// import Pagination from '../Pagination';
import { fetchQuestions } from '../store/pages/TodosPage/async-actions';

const QuestionsPage = () => {
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const navigate = useNavigate();

  // const currentPageNumber = new URLSearchParams(search).get('page');
  useEffect(() => {
    dispatch(fetchQuestions({ qType: 1, count: 5 }));
    if (!search) {
      navigate('/questions_page');
    }
  }, [dispatch, navigate, search]);

  const { isLoading, data } = useAppSelector((store) => store.questions);

  if (isLoading) {
    console.log(isLoading);
    return (
      <>
        <div>Загрузка...</div>
        {/* <Pagination pagesCount={10} itemsAmount={data.length} limit={5} /> */}
      </>
    );
  }

  // if (error) {
  //   return <div>{error}</div>;
  // }
  console.log('data', data);

  return (
    <div>
      {data.map((quest) => {
        return (
          <div key={quest.id}>
            {quest.question} - {quest.answers}
          </div>
        );
      })}
      {/* <Pagination pagesCount={10} itemsAmount={data.length} limit={5} /> */}
    </div>
  );
};

export default QuestionsPage;
