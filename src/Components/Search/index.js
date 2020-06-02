import React from "react";
import "./styles.css";

function SearchForm({ search, setSearchValue }) {
  return (
    <input
      className="search"
      type="search"
      value={search}
      onChange={e => setSearchValue(e.target.value)}
      placeholder="search monster"
    />
  );
}

export default SearchForm;
