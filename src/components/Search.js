import React, { useState } from "react";

function Search({ onSearch }) {

  const[freeStuff, setFreeStuff] = useState("");  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(freeStuff);
  }
  
  const handleChange = (e) => {
    setFreeStuff(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={freeStuff}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
