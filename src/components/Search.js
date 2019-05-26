import React from "react";

function Search(props) {
  return (
    <div>
      <form>
        <input onChange={props.searchChanger} />
      </form>
    </div>
  );
}

export default Search;
