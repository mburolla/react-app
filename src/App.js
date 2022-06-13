import React from 'react'
import { Greeter } from './Greeter'
import './App.css'
import { Counter } from './Counter'

export const App = () => {
  return (
    <div className="App">
        
    <Counter />
    
    <Greeter message="Hello World"/>
    <Greeter message="Cat"/>
    <Greeter message="Dog"/>
    <Greeter message="Bird"/>

    </div>
  )
}
