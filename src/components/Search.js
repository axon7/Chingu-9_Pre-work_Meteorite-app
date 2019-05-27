import React from "react";

const Search = props => {
  return (
    <div>
      <form>
        <input onChange={props.onSearchChange} />
      </form>
    </div>
  );
};

export default Search;
