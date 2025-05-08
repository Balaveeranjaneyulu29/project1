import React from 'react'
import signup from './signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {

  
  return (
    <div className='box'>
      <form className='container'>
        <h1 className='fh1'>Sign up</h1>
        <section className='sec'>
            <label >Enter email</label><lable >
            <input type='email' placeholder='enter your email' required/>
            </lable>
            <label >Enter user name</label>
            <label ><input type='text' required></input></label>
            <label >Enter password</label>
            <label ><input type='password' placeholder='enter your password' required/></label>
            <label >Conform password</label>
            <label ><input type='text' required></input></label>
        </section>
        <section>
            <button>signup</button>
        </section>
            <p>Already have an account <Link to='/login'><a href=''>Login</a></Link></p>
      </form>
    </div>
  )
}

export default Signup
