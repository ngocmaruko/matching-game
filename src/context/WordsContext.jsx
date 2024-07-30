import React, { createContext, useState, useContext, useEffect } from 'react';

const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));

  useEffect(() => {
    const storedWords = JSON.parse(localStorage.getItem('allWords')) || [];
    setWords(storedWords);
  }, []);

  useEffect(() => {
    localStorage.setItem('allWords', JSON.stringify(words));
  }, [words]);

  const addWords = (newWords) => {
    setWords(prevWords => [...prevWords, ...newWords]);
  };

  return (
    <WordsContext.Provider value={{ words, currentDate, addWords, setCurrentDate }}>
      {children}
    </WordsContext.Provider>
  );
};

export const useWords = () => useContext(WordsContext);
