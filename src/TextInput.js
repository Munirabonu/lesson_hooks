import  React, { forwardRef, useImperativeHandle, useRef } from "react";

const TextInput = forwardRef((props, ref) => {
    const { hasError, placeholder, update, value } = props;
    console.log(update);
    const inputRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            focus() {
                inputRef.current.focus();
            },
        };
    })
    return (
        <input
        ref={inputRef}
        value={value}
        onChange={(e)=> update(e.target.value)}
        placeholder = {hasError ? "Error" :placeholder}
        style ={{
            borderColor:hasError ? "red" : "blue",
            outline:"none"
        }}
        />
    )

})

export default TextInput;


//App.js

// import React, { useRef, useState} from 'react';
// import './App.css';
// import TextInput from './TextInput';

// function App() {
//   const [card, setCard] = useState("")
//   const [phone, setPhone] = useState("")
//   const [error, setError] = useState("")

//   const cardEl = useRef()
//   const phoneEl = useRef()

//   const validate = () => {
//     if (card.lenght < 16) {
//       setError('card')
//       cardEl.current.focus()
//       return;
//     }
//     if (phone.lenght < 10) {
//       setError('phone')
//       cardEl.current.focus()
//       return;
//     }

//     setError('')
//   }
//   return (
//     <div className='App'>
//       <h1>useImperativeHandle Hook</h1>
//       <TextInput
//         hasError={error === 'card'}
//         placeholder={'card'}
//         update={setCard}
//         value={card}
//         ref={cardEl}
//       />
//       <TextInput
//         hasError={error === 'phone'}
//         placeholder={'phone'}
//         update={setPhone}
//         value={phone}
//         ref={phoneEl}
//       />
//     </div>
//   )
// }
// export default App;
