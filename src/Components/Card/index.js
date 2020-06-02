import React from "react";
import "./styles.css";

const Card = ({ monster }) => (
  <div key={monster.id} className="card-container">
    <img
      alt={`alt ${monster.id}`}
      src={`https://robohash.org/${monster.id}?set=set2`}
    />
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
)

export default Card;
