import React, { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');

  const onIncrementClick = () => {
    setCount(count + 1);
   // console.log(count + 1);
  };

  const onSearchChange = (event) => {
    console.log(event.target.value);
    setInputText(event.target.value);
  };

  return (
    <div>
      <h1>JSX</h1>
      <button onClick={onIncrementClick}>Increment</button>
      <div>{count}</div>
      <div>
        <input onChange={onSearchChange} placeholder='search..' />
      </div>
    </div>
  );
}

export default App;
