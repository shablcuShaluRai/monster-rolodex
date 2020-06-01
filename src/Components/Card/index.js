import React from "react";
import "./styles.css";

const Card = ({ monster }) => (
  <div key={monster.id} className="card-container">
    <img
      alt={`image ${monster.id}`}
      src={`https://robohash.org/${monster.id}?set=set2`}
    />
    <h1>{monster.name}</h1>
    <p>{monster.email}</p>
  </div>
)

export default Card;
