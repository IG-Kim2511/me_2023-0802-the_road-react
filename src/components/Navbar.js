import React, { useState } from 'react'
import "./Navbar.css"

import navbarBg from '../assets/navbar-bg.jpg'

const Navbar = () => {


  const styleNavbar ={
    background: `url(${navbarBg})`
  }
  

  const [igloo, setIgloo] = useState(false)
  console.log(igloo)

  return (
    <div>
  {/*      [navbar] 
       CSS 26 : center 
       js 06  */}
      <div class="open-navbar-icon navbar-icon center" onClick={()=>{setIgloo(!igloo)}}>
        <div class="line" ></div>
        <div class="line" ></div>
        <div class="line" ></div>
      </div>

      {/*  [navbar wrap] 클릭해서 x모양으로 바뀔 때 */}
      <div class="navbar-wrapper">
        <nav class="navbar" style={styleNavbar}>
      {/*      CSS 26 : center  */}
          <div class="close-navbar-icon navbar-icon center">
            <div class="line line-1"></div>
            <div class="line line-2"></div>
          </div>
      {/*      js 04  */}
          <div class="nav-list">
            <a href="#" class="nav-link center">Home</a>
            <a href="#" class="nav-link center">Tours</a>
            <a href="#" class="nav-link center">About us</a>
            <a href="#" class="nav-link center">Offer</a>
            <a href="#" class="nav-link center">Contact</a>
          </div>
        </nav>
      </div>
    
    </div>
  )
}

export default Navbar