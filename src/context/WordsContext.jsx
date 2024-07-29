import React, { createContext, useState, useContext } from 'react';

const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));

  const addWords = (newWords) => {
    setWords(newWords);
  };

  const addWordsByDate = (date, newWords) => {
    setWords(prevWords => ({
      ...prevWords,
      [date]: newWords
    }));
  };

  return (
    <WordsContext.Provider value={{ words, currentDate, addWords, addWordsByDate, setCurrentDate }}>
      {children}
    </WordsContext.Provider>
  );
};

export const useWords = () => useContext(WordsContext);
