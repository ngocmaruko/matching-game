// src/components/Card.jsx
import React from 'react';

const Card = ({ word, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(word)}>
      {word}
    </div>
  );
};

export default Card;
