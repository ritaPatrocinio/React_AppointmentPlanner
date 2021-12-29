import React from "react";

export const Tile = (props) => {
  const values = Object.values(props.contact);

  return (
    <div className="tile-container">
      { values.map((value, ind) => <p key={ind}>{value}</p> )}


    </div>
  );
};
