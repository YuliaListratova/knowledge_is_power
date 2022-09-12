import React from 'react';
import { Route, Routes } from 'react-router-dom';
import End from './layouts/End';
import QuestionPage from './layouts/QuestionPage/index.';
import Win from './layouts/Win';
import Start from './layouts/Start';
import MixLetters from './layouts/Tricks/MixLetters';
import Level from './layouts/Level';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/knowledge_is_power" element={<Start />} />
      <Route path="/questions_page" element={<QuestionPage />} />
      <Route path="/level" element={<Level />} />
      <Route path="/mix_letters" element={<MixLetters />} />
      <Route path="/end" element={<End />} />
      <Route path="/win" element={<Win />} />
    </Routes>
  );
};

export default App;
