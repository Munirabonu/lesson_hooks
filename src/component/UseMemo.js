import React, { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(5)
  const [color, setColor] = useState(false)

  const styles = useMemo(() => {
    return { color: color ? 'crimson' : 'white' }
  }, [color]);

  const increment = () => {
    console.log('increment');
    return setNumber((prev) => prev + 1)
  }
  return (
    <div className="App">
      <p>number {number}</p>
      <button onClick={increment}>Add</button>
      <button onClick={() => setNumber((prev) => prev - 1)}>Deleted</button>
      <button onClick={() => setColor((prev) => !prev)}>Edit</button>
      <p style={styles}>color</p>
    </div>
  )
}
export default App;


//useRef necha marta yuklanganligini bilish uchun 
//useEffect yaniy didWillUpdeated bir qiymatni bitta bosgandagi qiymatini ushlab oladi
//useRef focus berish uchun avvalgi qiymatni olish uchun ham ishlatiladi avvalgi qiymat 
// yangi useref ochib unga input value si useEffectda beriladi 
//focus input ning ref yordamida qilinadi
//useMemo faqatgina ozining tegishli funcsiyasi ishlashi uchun ishlatiladi
// tashqaridan kelgan faniy function app dan tepadagi holatda bolsa u function
//  chaqilrilganda barcha ozgaruvchi uchun qayta qayta ishldi
