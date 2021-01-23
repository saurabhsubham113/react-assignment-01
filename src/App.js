import React, { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(prevCounter => (
      prevCounter + 1
    ))
  }

  const decrementCounter = () => {
    setCounter(prevCounter => (
      prevCounter - 1
    ))
  }
  return (
    <div className="App">
      <h1>Counter demo</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={incrementCounter} >increment counter</button>
      <button onClick={decrementCounter} >decrement counter</button>

    </div>
  );
}

export default App;


