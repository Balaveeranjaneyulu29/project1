import React from 'react'
import { Link } from 'react-router-dom'
const Navigator = () => {
  return (
    <div className='nav'>
      <h1>NAVBAR</h1>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/product"><li>Product</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
        </ul>
      <button type='submit'>SUBMIT</button>
    </div>
  )
}

export default Navigator
