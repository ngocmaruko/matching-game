// src/components/Game.jsx
import React, { useState } from 'react';
import Card from './Card';

const words = [
  { english: 'Apple', japanese: 'リンゴ' },
  { english: 'Cat', japanese: '猫' },
  // Add more words here
];

const Game = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (word) => {
    setSelectedCards([...selectedCards, word]);
    // Add your matching logic here
  };

  return (
    <div className="game">
      <div className="cards">
        {words.map((word, index) => (
          <Card key={index} word={word.english} onClick={handleCardClick} />
        ))}
      </div>
      <div className="cards">
        {words.map((word, index) => (
          <Card key={index} word={word.japanese} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};

export default Game;
