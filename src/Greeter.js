import React from 'react'
import './Greeter.css'

export const Greeter = (props) => {
  return (
    <div className="Greeter">
        {props.message}
    </div>
  )
}
