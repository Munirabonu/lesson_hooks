import React, { useRef, useState} from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>useImperativeHandle</h1>
      <div>
        <span>R</span>
        <button>+</button>
        <button>-</button>
      </div>
      <div>
        <span>G</span>
        <button>+</button>
        <button>-</button>
      </div>
      <div>
        <span>B</span>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  )
}
export default App;
