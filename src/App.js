import React, { useState, useEffect } from "react";
import CardList from "./Components/CardList"

function App() {
  const [monsters, setMonster] = useState([]);

  const getMosterData = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const result  =  await response.json()
     console.log('>>>>>>>>>>>>>>>>>>>response>>>>>>>>>>>>>>>>>>', result)
    setMonster(result)
  }

  useEffect(() => getMosterData(),[]);
   console.log('>>>>>>>>>>>>>>>>>monsters>>>>>>>>>>>>>>>>>>>>', monsters)  
  return (
    <div className="app">
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;
