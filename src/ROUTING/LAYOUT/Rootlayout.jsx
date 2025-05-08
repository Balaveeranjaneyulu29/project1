
import React from 'react'
 import Navigator from '../Navigator'
  import { Outlet } from 'react-router-dom'
   const Rootlayout = () => { 
    return (
       <div> 
        <Navigator/> 
        <Outlet/>
         </div>
          ) 
        } 
        export default Rootlayout
