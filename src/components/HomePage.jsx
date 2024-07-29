import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage({ wordsByDate, onSelectDate }) {
  const navigate = useNavigate();

  const handleDateClick = (date) => {
    onSelectDate(date);
    navigate('/game');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/input')}>Add New Words</button>
      <h2>Select a Date to Review or Play</h2>
      <ul>
        {Object.keys(wordsByDate).map((date, index) => (
          <li key={index}>
            <button onClick={() => handleDateClick(date)}>
              {date}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
