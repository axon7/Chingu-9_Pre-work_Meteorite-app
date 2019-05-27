import React from "react";
import TableRow from "./TableRow";

const Table = ({ data, pattern, funcFilter }) => {
  return (
    <div>
      <TableRow />

      {data.filter(funcFilter(pattern)).map(item => {
        return (
          <TableRow
            fall={item.fall}
            id={item.id}
            key={item.id}
            mass={item.mass}
            name={item.name}
            nameType={item.nametype}
            recclass={item.recclass}
            year={item.year}
          />
        );
      })}
    </div>
  );
};
export default Table;
