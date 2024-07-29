// src/WordList.jsx
import React, { useState } from 'react';

function WordList({ date, onStartGame }) {
  const [words, setWords] = useState(() => {
    const storedWords = localStorage.getItem(date);
    return storedWords ? JSON.parse(storedWords) : [];
  });

  return (
    <div>
      <h2>Words for {date}</h2>
      <button onClick={() => onStartGame(words)}>Start Game</button>
    </div>
  );
}

export default WordList;
