import React from "react";
import "./styles.css";
const Grid = ({ coin }) => {
  return (
    <div className="grid-container">
      <div className="info-flex">
        <img src ={coin.image} className="coin-logo" alt={coin.id}/>
        <div className="name-col">
          <p>{coin.symbol}</p>
          <p>{coin.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Grid;
