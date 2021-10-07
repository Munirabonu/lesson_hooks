import React , {useState} from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] =useState ({
    text:'obyekt',
    data:Date.now(),
    numbers:12
  })
  function increment() {
    setNumber(number+1);
  }
 
  function decrement() {
    setNumber(number-1);
  }
  function uploadObyekt() {
    setText((prev) => {
      return {
        ...prev,
        text:'New Obyekt'
      }
    })
  }

  return (
    <div className="App">
      <div className="btn-group container">
        <p>Nomer: {number} </p>
        <button onClick={increment} className="success">qoshish </button>
        <button onClick={decrement} className="danger">ochirish</button>
        <button className="secondary" onClick={uploadObyekt}>izminit</button>
      </div>
      <pre>{JSON.stringify(text,null,2)}</pre>
    </div>
  )
}
export default App;
