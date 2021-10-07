import React, { useState } from "react";

function Cliker() {
    const [count, setCount] = useState(0)
    return (
        <div className="App">
            <h1>Counter:{count}</h1>
            <button onClick={() => setCount(count + 1)} className="success">Increment</button>
            <button className="danger" onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );

}
export default Cliker;