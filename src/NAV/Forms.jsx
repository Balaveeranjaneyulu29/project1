import React from 'react'
import forms from './forms.css'
import { Link } from 'react-router-dom'

const Forms = () => {
  return (
    <div className='box'>
        <form className='container'>
        

        <h1 className='fh1'>Login</h1>
        <section>
        <label>Enter you user name</label><label><input type='email' placeholder='enter your email' required/></label>
        <label>Enter your password</label><lable><input type='password' placeholder='enter your password' required/></lable>
        </section>    
    <section>
        <input type='submit' value="Login"/>
        </section>
        <p>Don't have an account <Link to='/signup'>register</Link></p>
       </form>   
    </div>
  )
}

export default Forms
