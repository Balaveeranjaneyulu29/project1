import React from 'react'
import { useState } from 'react'
import threebars from './threebars.png'
import england from './england.png'
import net from './net.png'
import navimage from './navimage.jpeg'
import nav from  './nav.css'
import { Link } from 'react-router-dom'

const Navi = () => {

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
      setSidebarVisible(true);
  };

  const hideSidebar = () => {
      setSidebarVisible(false);
  };

  return (
    <div>
    <nav>
    <ul className={`sidebar ${sidebarVisible ? 'show' : 'hide'}`}>
        <li  onClick={hideSidebar}><a href="#"><img src={england} class="change"></img></a></li>
        <li><a href="#">hi</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Info</a></li>
        <li><a href="#">About</a></li>
        <Link to='/login'><li>Login</li></Link>
    </ul>
    <ul>
        <li><a href=""> <img src={net}></img></a></li>
        <li class="mobile"> <a href="#">Products</a></li>
        <li class="mobile"> <a href="#">Info</a></li>
        <li class="mobile"> <a href="#">About</a></li>
        <Link to='/login'><li class="mobile">Login</li></Link>
        <li class="mobile"> <a href="#">hi</a></li>
        <li class="menubutton" onClick={showSidebar}><a href="#"><img src={threebars} class="change"></img></a></li>
    </ul>
</nav>
</div>
  )
}

export default Navi
