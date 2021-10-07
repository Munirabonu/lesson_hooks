import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user,setUser] =useState('Web')
  const [movie, setMovie] = useState({
    x:0,
    y:0,
  })
  useEffect (() => {
    console.log('render');
    window.addEventListener('mousemove', (event) => {
      setMovie ({
        x:event.clientX,
        y:event.clientY,
      })
    })
  },[])

  return (
    <div className="App">
      <p>Users: {user}</p>
      <div className="btn-group">
      <button onClick={() =>setUser('Web')} className="success">WEB</button>
      <button onClick={() =>setUser('Adroid')} className="danger">Adroid</button>
      <button onClick={() =>setUser('IOS')} className="secondary">IOS</button>
      </div>
      <p>{JSON.stringify(movie, null, 2)}</p>
    </div>
  )
}
export default App;


// aynan bir qiymatni ushlab olish uchun ishlatiladi useEffect 
