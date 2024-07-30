import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputPage from './components/InputPage';
import GamePage from './components/GamePage';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  const [wordsByDate, setWordsByDate] = useState(() => {
    const savedWords = localStorage.getItem('wordsByDate');
    return savedWords ? JSON.parse(savedWords) : {};
  });
  const [currentWords, setCurrentWords] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    localStorage.setItem('wordsByDate', JSON.stringify(wordsByDate));
  }, [wordsByDate]);

  useEffect(() => {
    if (selectedDate) {
      setCurrentWords(wordsByDate[selectedDate] || []);
    } else {
      setCurrentWords(Object.values(wordsByDate).flat());
    }
  }, [selectedDate, wordsByDate]);

  const handleAddWords = (date, newWords) => {
    setWordsByDate(prev => ({
      ...prev,
      [date]: (prev[date] || []).concat(newWords)
    }));
    setSelectedDate(null); // Reset to show all words when navigating from input page
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
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
