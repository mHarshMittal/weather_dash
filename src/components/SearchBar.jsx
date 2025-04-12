// client/src/components/SearchBar.jsx
import React from 'react';

function SearchBar({ city, setCity, onSearch }) {
  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        style={{ padding: '0.5rem', width: '300px', marginRight: '10px' }}
      />
      <button onClick={onSearch} style={{ padding: '0.5rem 1rem' }}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;

