// src/ReviewWords.jsx
import React, { useState } from 'react';
import { getWords } from './storage';

const ReviewWords = ({ date }) => {
  const { english, japanese } = getWords(date);
  const [selected, setSelected] = useState({ english: null, japanese: null });

  const handleSelect = (word, language) => {
    if (language === 'english') {
      setSelected(prev => ({ ...prev, english: word }));
    } else {
      setSelected(prev => ({ ...prev, japanese: word }));
    }
  };

  const handleMatch = () => {
    if (selected.english && selected.japanese) {
      // Check for a match
      if (english.includes(selected.english) && japanese.includes(selected.japanese)) {
        alert('Match found!');
      } else {
        alert('No match!');
      }
      setSelected({ english: null, japanese: null });
    }
  };

  return (
    <div>
      <h2>Review Words ({date})</h2>
      <div className="columns">
        <WordColumn words={english} language="english" onSelect={handleSelect} selected={selected.english} />
        <WordColumn words={japanese} language="japanese" onSelect={handleSelect} selected={selected.japanese} />
      </div>
      <button onClick={handleMatch}>Check Match</button>
    </div>
  );
};

const WordColumn = ({ words, language, onSelect, selected }) => (
  <div className="column">
    <h2>{language === 'english' ? 'English Words' : 'Japanese Words'}</h2>
    {words.map(word => (
      <div
        key={word}
        className={`word ${selected === word ? 'selected' : ''}`}
        onClick={() => onSelect(word, language)}
      >
        {word}
      </div>
    ))}
  </div>
);

export default ReviewWords;
