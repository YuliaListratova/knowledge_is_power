import React from 'react';
import { Route, Routes } from 'react-router-dom';
import End from './End';
import QuestionPage from './QuestionPage/index.';
import Start from './Start';
import QuestionsPage from './TodosPage';
import Freezing from './Tricks/Freezing';
import MixLetters from './Tricks/MixLetters';
import TimeLeak from './Tricks/TimeLeak';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/knowledge_is_power" element={<Start />} />
      {/* <Route path="/knowledge_is_power/:questionId" element={<QuestionPage />} /> */}
      <Route path="/freezing" element={<Freezing />} />
      <Route path="/mix_letters" element={<MixLetters />} />
      <Route path="/time-leak" element={<TimeLeak />} />
      <Route path="/end" element={<End />} />
      <Route path="/questions_page" element={<QuestionsPage />} />
    </Routes>
  );
};

export default App;
