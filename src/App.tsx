import React from 'react';
import { Route, Routes } from 'react-router-dom';
import End from './End';
import QuestionPage from './Game/index.';
import Start from './Start';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="knowledge_is_power" element={<Start />} />
      <Route path="knowledge_is_power/:questionId" element={<QuestionPage />} />
      <Route path="end" element={<End />} />
    </Routes>
  );
};

export default App;
