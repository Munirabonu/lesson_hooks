import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useCallback } from 'react/cjs/react.development';
import './App.css';
import ItemList from './ItemList';

function App() {
  const [number, setNumber] = useState(5)
  const [color, setColor] = useState(false)

  const styles = {
    color: color ?'crimson' : 'white', 
  }
  const generateItem =useCallback ((newNumber) => {
    return new Array(number).fill('').map((_, index)=> `Element${index+newNumber}`)
  },[number])

  return (
    <div className="App">
      <p style={styles}>number {number}</p>
      <button onClick={() => setNumber((prev) => prev+1)}>Add</button>
      <button onClick={() => setColor((prev) => !prev)}>Change Color</button>
      <ItemList getItems={generateItem}/>
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
// useCallback biz istagan elementni   olib beradi useMemodan farqi unga qiymat berish mumkin 