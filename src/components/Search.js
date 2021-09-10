import React from "react";

function Search({ searchTerm, onSearchChange = f => f }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchTerm} onChange={(e) => onSearchChange(e.target.value)} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
