import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import InputPage from './components/InputPage';
import GamePage from './components/GamePage';
import HomePage from './components/HomePage';
import './App.css'

function App() {
  const [wordsByDate, setWordsByDate] = useState(() => {
    const savedWords = localStorage.getItem('wordsByDate');
    return savedWords ? JSON.parse(savedWords) : {};
  });
  const [currentWords, setCurrentWords] = useState([]);

  useEffect(() => {
    localStorage.setItem('wordsByDate', JSON.stringify(wordsByDate));
  }, [wordsByDate]);

  const handleAddWords = (date, newWords) => {
    const allWords = wordsByDate[date] ? [...wordsByDate[date], ...newWords] : newWords;
    setWordsByDate(prev => ({
      ...prev,
      [date]: allWords
    }));
    setCurrentWords(allWords); // Update currentWords with all words
  };

  const handleSelectDate = (date) => {
    setCurrentWords(wordsByDate[date] || []);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage wordsByDate={wordsByDate} onSelectDate={handleSelectDate} />} />
          <Route path="/input" element={<InputPage onAddWords={handleAddWords} />} />
          <Route path="/game" element={<GamePage words={currentWords} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
