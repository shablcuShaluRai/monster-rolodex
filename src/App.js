import React, { useState, useEffect } from "react";
import CardList from "./Components/CardList"
import SearchForm from "./Components/Search"

function App() {
  const [monsters, setMonster] = useState([]);
  const [search, setSearchValue] = useState("")

  const getMosterData = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const result  =  await response.json()
    setMonster(result)
  }

  useEffect(() => getMosterData(),[]);

  const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="app">
      <h1>Monster Rolodex</h1>
      <SearchForm setSearchValue={setSearchValue} search={search} />
      <CardList monsters={filteredMonster} />
    </div>
  );
}

export default App;
