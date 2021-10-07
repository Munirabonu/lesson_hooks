import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  // const [renderCount, setRenderCount] =useState(1)
  const [value, setValue] = useState("default")
  const [number, setNumber] = useState("default")
  const renderCount = useRef(1);
  const inputRef = useRef('null')
  const pastValue = useRef('')

  useEffect(() => {
    renderCount.current++;
  })
  useEffect(() => {
    pastValue.current = number;
  })
  const focus = () =>inputRef.current.focus()



  return (
    <div className="App">
      <p>Render:{renderCount.current}</p>
      <p>past value:{pastValue.current}</p>
      <input type='text' ref={inputRef} placeholder={value} value={value} onChange={e => setValue(e.target.value)} />
      <input type='number'  placeholder={value} value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={focus}>On Click</button>
    </div>
  )
}
export default App;


//useRef necha marta yuklanganligini bilish uchun 
//useEffect yaniy didWillUpdeated bir qiymatni bitta bosgandagi qiymatini ushlab oladi
//useRef focus berish uchun avvalgi qiymatni olish uchun ham ishlatiladi avvalgi qiymat 
// yangi useref ochib unga input value si useEffectda beriladi 
//focus input ning ref yordamida qilinadi