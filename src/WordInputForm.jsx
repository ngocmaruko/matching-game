// src/WordInputForm.jsx
import React, { useState } from 'react';

function WordInputForm({ onSave }) {
  const [englishWords, setEnglishWords] = useState('');
  const [japaneseWords, setJapaneseWords] = useState('');

  const handleSave = () => {
    const englishList = englishWords.split(',').map(word => word.trim()).filter(word => word);
    const japaneseList = japaneseWords.split(',').map(word => word.trim()).filter(word => word);
    
    if (englishList.length === japaneseList.length) {
      const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
      const folderName = `folder_${date}`;
      const pairs = englishList.map((engWord, index) => ({ english: engWord, japanese: japaneseList[index] }));
      localStorage.setItem(folderName, JSON.stringify(pairs));
      onSave(folderName);
    } else {
      alert('Please make sure the number of English and Japanese words match.');
    }
  };

  return (
    <div>
      <h2>Enter Words to Learn</h2>
      <div>
        <textarea
          rows="4"
          placeholder="Enter English words separated by commas"
          value={englishWords}
          onChange={(e) => setEnglishWords(e.target.value)}
        />
      </div>
      <div>
        <textarea
          rows="4"
          placeholder="Enter Japanese words separated by commas"
          value={japaneseWords}
          onChange={(e) => setJapaneseWords(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save Words</button>
    </div>
  );
}

export default WordInputForm;
