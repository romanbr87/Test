import React, { useState, useEffect } from 'react';
import './App.css';


export default function App() {
  const [list, setList] = useState ([]);

  useEffect(() => {
    fetch('https://jsonplaceholder .typicode.com/users')
    .then((result) => { return result.json() })
    .then((data) => { setList(data) })  
  
  })
  
  return (
    <div className="App">
      { list.map ((e) => {
        return <h2>{e.id} {e.name}</h2>
      })}
    </div>
  )

}

