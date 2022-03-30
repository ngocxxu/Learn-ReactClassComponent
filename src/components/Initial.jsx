import React, { useState } from 'react'

export const Initial = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() =>{setShow(!show)}}>Click me</button>
      {show ? <h1>HELLO!</h1> : ''}
    </div>
  )
}
