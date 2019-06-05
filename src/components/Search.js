import React from "react";

const Search = props => {
  return (
    <div>
      <form onSubmit={props.onSearchClick}>
        <input onChange={props.onSearchChange} placeholder='Search' />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default Search;
