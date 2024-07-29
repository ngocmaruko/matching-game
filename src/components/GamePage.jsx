import React, { useState, useEffect } from 'react';
import './GamePage.css'

function GamePage({ words }) {
  const [englishWords, setEnglishWords] = useState([]);
  const [japaneseWords, setJapaneseWords] = useState([]);
  const [selectedEnglish, setSelectedEnglish] = useState(null);
  const [selectedJapanese, setSelectedJapanese] = useState(null);

  useEffect(() => {
    if (words.length > 0) {
      const english = words.map(pair => pair.english);
      const japanese = words.map(pair => pair.japanese);
      setEnglishWords(shuffle(english));
      setJapaneseWords(shuffle(japanese));
    }
  }, [words]);

  useEffect(() => {
    if (selectedEnglish && selectedJapanese) {
      const match = words.find(pair =>
        (pair.english === selectedEnglish && pair.japanese === selectedJapanese) ||
        (pair.japanese === selectedEnglish && pair.english === selectedJapanese)
      );

      if (match) {
        setEnglishWords(prev => prev.filter(word => word !== selectedEnglish));
        setJapaneseWords(prev => prev.filter(word => word !== selectedJapanese));
      }

      setSelectedEnglish(null);
      setSelectedJapanese(null);
    }
  }, [selectedEnglish, selectedJapanese, words]);

  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  const handleSelectEnglish = (word) => {
    setSelectedEnglish(word);
  };

  const handleSelectJapanese = (word) => {
    setSelectedJapanese(word);
  };

  return (
    <div>
      <h1>Matching Game</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h2>English Words</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {englishWords.map((word, index) => (
              <li
                key={index}
                onClick={() => handleSelectEnglish(word)}
                style={{
                  cursor: 'pointer',
                  padding: '10px',
                  border: '1px solid #ddd',
                  margin: '5px',
                  backgroundColor: selectedEnglish === word ? '#e0e0e0' : 'white'
                }}
              >
                {word}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Japanese Words</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {japaneseWords.map((word, index) => (
              <li
                key={index}
                onClick={() => handleSelectJapanese(word)}
                style={{
                  cursor: 'pointer',
                  padding: '10px',
                  border: '1px solid #ddd',
                  margin: '5px',
                  backgroundColor: selectedJapanese === word ? '#e0e0e0' : 'white'
                }}
              >
                {word}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
