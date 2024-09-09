import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LanguageSelectionPage from './components/LanguageSelectionPage';
import DifficultySelectionPage from './components/DifficultySelectionPage';
import QuestionPage from './components/QuestionPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/select-language" element={<LanguageSelectionPage />} />
        <Route path="/select-difficulty" element={<DifficultySelectionPage />} />
        <Route path="/questions" element={<QuestionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
