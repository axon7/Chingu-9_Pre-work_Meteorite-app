import React from "react";
import TableRow from "./TableRow";

function Table(props) {
  return (
    <div>
      <TableRow />

      {props.data.map(item => {
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
}
export default Table;
