import React from 'react'
import { useState } from 'react'
import './Counter.css'

export const Counter = () => {
   let [counter, setCounter] = useState(0); 

    const onHandleClick = () => {
        setCounter(++counter)
    }

  return (
    <div className="Counter">
        Counter: {counter}
        <button onClick={() => onHandleClick()}>Increment</button>
    </div>
  )
}
