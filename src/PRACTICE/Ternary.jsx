import React, { useState } from 'react'

const Ternary = () => {
    const [con,Setcon]=useState(true);
  return (
    <div>
     <h1>{con? "this is true stateement" : "this is false statement"}</h1>
    </div>
  )
}

export default Ternary
