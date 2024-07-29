import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InputPage({ onAddWords }) {
  const [englishWord, setEnglishWord] = useState('');
  const [japaneseWord, setJapaneseWord] = useState('');
  const [wordPairs, setWordPairs] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const navigate = useNavigate();

  const handleAddPair = () => {
    if (englishWord && japaneseWord) {
      setWordPairs([...wordPairs, { english: englishWord, japanese: japaneseWord }]);
      setEnglishWord('');
      setJapaneseWord('');
    }
  };

  const handleSaveAndPlay = () => {
    onAddWords(date, wordPairs); // Save all word pairs to App state
    navigate('/game'); // Navigate to the game page
  };

  return (
    <div>
      <h1>Input Words</h1>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <input
        type="text"
        value={englishWord}
        onChange={(e) => setEnglishWord(e.target.value)}
        placeholder="Enter English word"
      />
      <input
        type="text"
        value={japaneseWord}
        onChange={(e) => setJapaneseWord(e.target.value)}
        placeholder="Enter Japanese word"
      />
      <button onClick={handleAddPair}>Add Words</button>
      <button onClick={handleSaveAndPlay}>Save and Play</button>
      <ul>
        {wordPairs.map((pair, index) => (
          <li key={index}>{pair.english} - {pair.japanese}</li>
        ))}
      </ul>
    </div>
  );
}

export default InputPage;
