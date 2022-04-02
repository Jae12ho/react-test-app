import React, { useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(true);

    const countUpDown = (sign) => {
        setCount(sign ? count + 1 : count - 1);
    };

    return (
    <div>
        <h1 data-testId="count">{count}</h1>
        <button data-testId="plusMinus" onClick={() => countUpDown(true)} disabled={!isOn}>+</button>
        <button data-testId="plusMinus" onClick={() => countUpDown(false)} disabled={!isOn}>-</button>
        <button onClick={() => setIsOn(!isOn)} style={{display: 'block', margin: 'auto', backgroundColor: 'blue'}}>on / off</button>
    </div>
  )
}
