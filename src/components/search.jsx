import React from 'react';

const Search = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por marca o modelo"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
