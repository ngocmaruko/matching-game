// src/WordInput.jsx
import React, { useState } from 'react';

function WordInput({ onSave }) {
  const [englishWords, setEnglishWords] = useState('');
  const [japaneseWords, setJapaneseWords] = useState('');

  const handleSave = () => {
    const englishList = englishWords.split('\n').map(word => word.trim()).filter(word => word);
    const japaneseList = japaneseWords.split('\n').map(word => word.trim()).filter(word => word);

    if (englishList.length === japaneseList.length) {
      const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
      const words = englishList.map((word, index) => ({ english: word, japanese: japaneseList[index] }));
      localStorage.setItem(date, JSON.stringify(words));
      onSave(date);
      setEnglishWords('');
      setJapaneseWords('');
    } else {
      alert('Please make sure the number of English and Japanese words match.');
    }
  };

  return (
    <div>
      <h2>Enter Words</h2>
      <textarea
        value={englishWords}
        onChange={(e) => setEnglishWords(e.target.value)}
        placeholder="Enter English words, one per line"
      />
      <textarea
        value={japaneseWords}
        onChange={(e) => setJapaneseWords(e.target.value)}
        placeholder="Enter Japanese words, one per line"
      />
      <button onClick={handleSave}>Save Words</button>
    </div>
  );
}

export default WordInput;
