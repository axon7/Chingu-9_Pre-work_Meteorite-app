import React from "react";
import "./TableRow.css";
function TableRow(props) {
  const { name, id, nameType, recclass, mass, fall, year } = props;

  return (
    <div className='table-row_flex'>
      <div className='table-row_item'>{name}</div>
      <div className='table-row_item'>{id}</div>
      <div className='table-row_item'>{nameType}</div>
      <div className='table-row_item'>{recclass}</div>
      <div className='table-row_item'>{mass}</div>
      <div className='table-row_item'>{fall}</div>
      <div className='table-row_item'>{year}</div>
    </div>
  );
}

TableRow.defaultProps = {
  name: "Name",
  id: "ID",
  nameType: "Name Type",
  recclass: "Rec Class",
  mass: "Mass (g)",
  fall: "Fall",
  year: "Year",
  geolocation: "Geolocation"
};

export default TableRow;
