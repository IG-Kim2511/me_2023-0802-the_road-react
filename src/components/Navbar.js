import React, { useState } from 'react'
import "./Navbar.css"

import navbarBg from '../assets/navbar-bg.jpg'
import { keyframes, styled } from 'styled-components'
import { CSSTransition } from 'react-transition-group'

const Navbar = () => {

  const styleNavbar ={
    background: `url(${navbarBg})`
  }
  
  const [toggle, setToggle] = useState(false)

return (
    <div>
  {/*      [navbar] 
       CSS 26 : center 
       js 06  */}
      <div className="open-navbar-icon navbar-icon center" onClick={()=>{setToggle(!toggle)}}>
        <div className="line" ></div>
        <div className="line" ></div>
        <div className="line" ></div>

      </div>

          {/* 🦄r24 react에서의 animation적용👉css */}
          <div>

            {
              toggle?          
              <div className="navbar-wrapper slide-bottom">
                <nav className="navbar" style={styleNavbar}>
              {/*      CSS 26 : center  */}
                  <div className="close-navbar-icon navbar-icon center" onClick={()=>{setToggle(!toggle)}}>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                  </div>
              {/*      js 04  */}
                  <div className="nav-list">
                    <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>Home</a>
                    <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>Tours</a>
                    <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>About us</a>
                    <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>Offer</a>
                    <a href="#" className="nav-link center" onClick={()=>{setToggle(!toggle)}}>Contact</a>
                  </div> 
                </nav>
              </div>
              :null
            }
        
        </div>
    </div>
  )
}

export default Navbar