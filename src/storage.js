// src/storage.js
export const saveWords = (date, words) => {
  const stored = JSON.parse(localStorage.getItem('wordStorage')) || {};
  stored[date] = words;
  localStorage.setItem('wordStorage', JSON.stringify(stored));
};

export const getWords = (date) => {
  const stored = JSON.parse(localStorage.getItem('wordStorage')) || {};
  return stored[date] || { english: [], japanese: [] };
};
