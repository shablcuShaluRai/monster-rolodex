import React from "react"
import Card from "../Card"
import "./styles.css"

const CardList = props => (
  <div className="card-list-container">
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
)

export default CardList
