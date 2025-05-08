import React, { useState } from 'react'
import Ternary from './Ternary';

const Ternary1 = () => {
    const [con,Setcon]=useState(false);
  return (
    <div>
      {con ? "this is true statement":<Ternary/>}
    </div>
  )
}

export default Ternary1
