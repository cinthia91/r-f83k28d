import React, { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  const buttonHandler= () =>{
    let sum= count+1;
    setCount(sum);
    };
    return (
    <div>
      <span className="value">{count}</span>
      <button id="inc" onClick={buttonHandler}>Incrementa</button>
    </div>
  );
}

export default App;
